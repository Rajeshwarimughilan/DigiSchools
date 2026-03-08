import { useEffect, useLayoutEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { contactInfo, navItems } from '../content/siteData'

function SiteLayout() {
  const location = useLocation()

  // Scroll-reveal: add reveal-target to section-blocks, then observe them
  useLayoutEffect(() => {
    const shell = document.querySelector('.site-shell')
    shell?.classList.add('js-ready')

    const targets = document.querySelectorAll(
      '.section-block, .home-cta, .impact-cta, .moving-cards-block',
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.07, rootMargin: '0px 0px -24px 0px' },
    )
    targets.forEach((el) => {
      el.setAttribute('data-reveal', '')
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [location.pathname])

  // Subtle hero parallax on scroll (hero-scene floats respond)
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        const scene = document.querySelector('.hero-scene')
        if (scene) {
          scene.style.transform = `translateY(${Math.min(y * 0.04, 24)}px)`
        }
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* ── Full-width sticky header ─────────────────────────────── */}
      <header className="site-header">
        <div className="site-header-inner">
          <div className="brand-block">
            <p className="brand-kicker">Innovation, Research & Future Technology Education Platform</p>
            <NavLink to="/" className="brand-link">
              DigiSchool Corporation
            </NavLink>
          </div>
          <nav className="site-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <div className="site-shell">
        <main id="main-content">
          <div key={location.pathname} className="page-enter">
            <Outlet />
          </div>
        </main>

        <footer className="site-footer">
          <div>
            <p className="footer-title">DigiSchool Corporation</p>
            <p className="footer-copy">
              Building a global ecosystem where education, research, and industry collaborate to shape
              future-ready technology solutions.
            </p>
          </div>

          <div className="footer-contact">
            <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>{contactInfo.phone}</a>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <p>{contactInfo.location}</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <NavLink to="/about" className="footer-link">About</NavLink>
            <NavLink to="/impact" className="footer-link">Impact</NavLink>
            <NavLink to="/support" className="footer-link">Support</NavLink>
            <NavLink to="/policies" className="footer-link">Policies</NavLink>
            <NavLink to="/contact" className="footer-link">Contact</NavLink>
          </nav>
        </footer>
      </div>
    </>
  )
}

export default SiteLayout
