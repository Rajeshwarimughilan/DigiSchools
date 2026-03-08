import { useEffect, useMemo, useRef, useState } from 'react'

const DURATION = 2000 // ms total
const STEPS = 60 // ticks
const INTERVAL = DURATION / STEPS // ~33ms per tick

/**
 * Extracts a leading number from a stat string.
 * '600+'     → { prefix: '', num: 600, suffix: '+' }
 * '₹90 L+'   → { prefix: '₹', num: 90, suffix: ' L+' }
 * 'ATMAN 2.0' → null  (starts with alpha — not a counter metric)
 */
function parseValue(str) {
  const match = str.match(/^([^0-9a-zA-Z\u0900-\u097F]*)(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return null
  const num = parseFloat(match[2])
  if (!Number.isFinite(num) || num === 0) return null
  return { prefix: match[1], num, suffix: match[3] }
}

export default function AnimatedStat({ value, className, style, index = 0, animate = true }) {
  const parsed = useMemo(() => (animate ? parseValue(value) : null), [value, animate])
  const ref = useRef(null)
  const hasAnimatedRef = useRef(false)
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observedEl = el.closest('article') || el

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(observedEl)

    return () => observer.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!parsed) return
    if (!isVisible || hasAnimatedRef.current) return

    let current = 0
    const increment = parsed.num / STEPS
    const showDecimals = parsed.num < 20
    let timerId = null

    const delayId = setTimeout(() => {
      hasAnimatedRef.current = true
      timerId = setInterval(() => {
        current += increment
        if (current >= parsed.num) {
          setCount(parsed.num)
          clearInterval(timerId)
          return
        }
        setCount(showDecimals ? Number(current.toFixed(2)) : Math.floor(current))
      }, INTERVAL)
    }, index * 150)

    return () => {
      clearTimeout(delayId)
      if (timerId) clearInterval(timerId)
    }
  }, [isVisible, index, parsed])

  // Non-numeric or animate=false — render as-is
  if (!parsed) return <span ref={ref} className={className} style={style}>{value}</span>

  const formatted =
    parsed.num < 20 && count !== parsed.num
      ? count.toFixed(2).replace(/\.00$/, '')
      : count >= 1000
        ? count.toLocaleString('en-IN')
        : count

  return (
    <span ref={ref} className={className} style={style}>
      {parsed.prefix}{formatted}{parsed.suffix}
    </span>
  )
}

