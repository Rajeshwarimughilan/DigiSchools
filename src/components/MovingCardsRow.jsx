import { useEffect, useRef } from 'react'

/**
 * Horizontally scrolling card row with:
 *  - RAF-driven auto-scroll
 *  - Mouse-wheel horizontal override (prevents page scroll while over viewport)
 *  - Touch drag support
 *  - Pause on hover
 *
 * `items` can be any of the siteData arrays — the component reads
 *  the first matching field for title / description / image.
 */
function MovingCardsRow({ title, items, speed = 1.1 }) {
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const offsetRef = useRef(0)
  const loopWidthRef = useRef(0)
  const pausedRef = useRef(false)
  const touchStartXRef = useRef(0)
  const rafRef = useRef(null)

  // Double the items so the track loops seamlessly (we scroll the first half)
  const duplicated = [...items, ...items]

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    if (!viewport || !track) return

    const measureLoopWidth = () => {
      const cards = Array.from(track.children)
      const count = items.length
      if (!count || cards.length < count) return 0

      const styles = getComputedStyle(track)
      const gapRaw = styles.columnGap || styles.gap || '0'
      const gap = Number.parseFloat(gapRaw) || 0

      let width = 0
      for (let i = 0; i < count; i += 1) {
        width += cards[i].getBoundingClientRect().width
      }

      // First set width only (internal gaps, no seam gap to the duplicated set)
      return width + gap * Math.max(0, count - 1)
    }

    const refreshLoopWidth = () => {
      loopWidthRef.current = measureLoopWidth()
      if (loopWidthRef.current > 0) {
        offsetRef.current = ((offsetRef.current % loopWidthRef.current) + loopWidthRef.current) % loopWidthRef.current
      }
    }

    refreshLoopWidth()

    let ro = null
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(refreshLoopWidth)
      ro.observe(track)
    }

    window.addEventListener('resize', refreshLoopWidth)

    const tick = () => {
      if (!pausedRef.current) {
        offsetRef.current += speed
        const loop = loopWidthRef.current
        if (loop > 0 && offsetRef.current >= loop) {
          offsetRef.current -= loop
        }
      }
      track.style.transform = `translateX(-${offsetRef.current}px)`
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    const onWheel = (e) => {
      const loop = loopWidthRef.current
      if (!loop) return

      const absX = Math.abs(e.deltaX)
      const absY = Math.abs(e.deltaY)
      const shiftHorizontal = e.shiftKey && absY > 0
      const trackpadHorizontal = absX >= 5 && absX > absY * 0.65

      // Never consume normal vertical wheel scrolling.
      if (!shiftHorizontal && !trackpadHorizontal) return

      e.preventDefault()
      const delta = shiftHorizontal ? e.deltaY : e.deltaX
      offsetRef.current = ((offsetRef.current + delta) % loop + loop) % loop
    }

    const onTouchStart = (e) => {
      touchStartXRef.current = e.touches[0].clientX
      pausedRef.current = true
    }

    const onTouchMove = (e) => {
      const delta = touchStartXRef.current - e.touches[0].clientX
      touchStartXRef.current = e.touches[0].clientX
      const loop = loopWidthRef.current
      if (!loop) return
      offsetRef.current = ((offsetRef.current + delta) % loop + loop) % loop
    }

    const onTouchEnd = () => {
      pausedRef.current = false
    }

    const onMouseEnter = () => { pausedRef.current = true }
    const onMouseLeave = () => { pausedRef.current = false }

    viewport.addEventListener('wheel', onWheel, { passive: false })
    viewport.addEventListener('touchstart', onTouchStart, { passive: true })
    viewport.addEventListener('touchmove', onTouchMove, { passive: true })
    viewport.addEventListener('touchend', onTouchEnd, { passive: true })
    viewport.addEventListener('mouseenter', onMouseEnter)
    viewport.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      if (ro) ro.disconnect()
      window.removeEventListener('resize', refreshLoopWidth)
      viewport.removeEventListener('wheel', onWheel)
      viewport.removeEventListener('touchstart', onTouchStart)
      viewport.removeEventListener('touchmove', onTouchMove)
      viewport.removeEventListener('touchend', onTouchEnd)
      viewport.removeEventListener('mouseenter', onMouseEnter)
      viewport.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [items.length, speed])

  return (
    <section className="moving-cards-block" aria-label={title}>
      <div className="moving-cards-head">
        <h3>{title}</h3>
      </div>
      <div className="moving-cards-viewport" ref={viewportRef}>
        <div className="moving-cards-track" ref={trackRef}>
          {duplicated.map((item, index) => {
            const cardTitle = item.title ?? item.stream ?? item.award ?? item.label ?? ''
            const cardDesc = item.tagline ?? item.description ?? item.significance ?? item.detail ?? item.sub ?? ''
            const cardStat = item.stat ?? item.value ?? item.amount ?? null
            const cardImg = item.image ?? null
            const cardAlt = item.imageAlt ?? cardTitle
            return (
              <article key={`${cardTitle}-${index}`} className="moving-card">
                {cardImg && (
                  <div className="moving-card-img-wrap">
                    <img src={cardImg} alt={cardAlt} loading="lazy" />
                  </div>
                )}
                <div className="moving-card-content">
                  {cardStat && <p className="moving-card-stat">{cardStat}</p>}
                  <h4>{cardTitle}</h4>
                  {cardDesc && <p>{cardDesc}</p>}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MovingCardsRow
