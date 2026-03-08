import { media } from '../content/siteData'

/* Images scattered across the scene — varying sizes, depth through shadow */
const FLOAT_IMAGES = [
  { src: media.robotics,    alt: 'Robotics',      w: 136, h: 102, x: '4%',  y: '6%',  dur: '9s',   delay: '0s'   },
  { src: media.lab,         alt: 'Innovation Lab', w: 106, h: 80,  x: '64%', y: '4%',  dur: '7.5s', delay: '1.3s' },
  { src: media.drone,       alt: 'Drones',         w: 154, h: 116, x: '62%', y: '52%', dur: '11s',  delay: '0.6s' },
  { src: media.agriculture, alt: 'AgriTech',       w: 96,  h: 72,  x: '-2%', y: '60%', dur: '8.5s', delay: '2.2s' },
  { src: media.students,    alt: 'Students',       w: 118, h: 88,  x: '30%', y: '70%', dur: '10s',  delay: '1.6s' },
]

/* Frosted-glass service label chips — no colour, just text */
const SERVICE_CHIPS = [
  { label: 'AI & Machine Learning', x: '14%', y: '30%', dur: '7s',   delay: '0.4s' },
  { label: 'IoT Systems',           x: '56%', y: '16%', dur: '9s',   delay: '1.9s' },
  { label: 'Robotics & Automation', x: '5%',  y: '48%', dur: '8s',   delay: '0.7s' },
  { label: 'Drone Design',          x: '60%', y: '36%', dur: '6.5s', delay: '2.5s' },
  { label: 'STEM Education',        x: '38%', y: '82%', dur: '10s',  delay: '1.1s' },
  { label: 'Embedded Systems',      x: '68%', y: '72%', dur: '7.5s', delay: '3.3s' },
  { label: 'Smart Agriculture',     x: '20%', y: '76%', dur: '9.5s', delay: '0.5s' },
  { label: 'Cloud & ML',            x: '42%', y: '8%',  dur: '8.5s', delay: '2.0s' },
]

/* Metric bubbles — only 3, clustered near the visual centre */
const STAT_BUBBLES = [
  { stat: '600+',  sub: 'Projects',  x: '24%', y: '16%', delay: '0.4s' },
  { stat: '4+ Cr', sub: 'Funding',   x: '44%', y: '44%', delay: '1.6s' },
  { stat: '2000+', sub: 'Students',  x: '20%', y: '54%', delay: '2.3s' },
]

export default function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      {/* Background gradient */}
      <div className="hero-scene-bg" />

      {/* Subtle grid */}
      <div className="hero-scene-grid" />

      {/* Very subtle orbit rings */}
      <div className="hero-ring hero-ring-a" />
      <div className="hero-ring hero-ring-b" />

      {/* ── Floating images (varying sizes) ─────────────────── */}
      {FLOAT_IMAGES.map((img) => (
        <img
          key={img.alt}
          src={img.src}
          alt={img.alt}
          className="hero-float-img"
          style={{
            left: img.x, top: img.y,
            width: img.w, height: img.h,
            '--f-dur': img.dur, '--f-delay': img.delay,
          }}
        />
      ))}

      {/* ── Frosted service chips ────────────────────────────── */}
      {SERVICE_CHIPS.map((chip) => (
        <div
          key={chip.label}
          className="hero-service-chip"
          style={{ left: chip.x, top: chip.y, '--f-dur': chip.dur, '--f-delay': chip.delay }}
        >
          {chip.label}
        </div>
      ))}

      {/* ── Floating stat bubbles ────────────────────────────── */}
      {STAT_BUBBLES.map((b) => (
        <div
          key={b.stat}
          className="hero-stat-bubble"
          style={{ left: b.x, top: b.y, '--f-delay': b.delay }}
        >
          <strong className="hero-bubble-num">{b.stat}</strong>
          <small className="hero-bubble-sub">{b.sub}</small>
        </div>
      ))}

      {/* Radial vignette — objects near edges dissolve into darkness */}
      <div className="hero-vignette" />
    </div>
  )
}
