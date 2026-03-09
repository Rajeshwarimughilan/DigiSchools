import { useEffect, useLayoutEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { contactInfo, navItems, partnerLogos, socialLinks } from '../content/siteData'

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
          <div className="header-right">
            <div className="header-socials" aria-label="Social links">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill"
                  aria-label={item.label}
                >
                  {item.short}
                </a>
              ))}
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
        </div>
      </header>

      <div className="site-shell">
        <main id="main-content">
          <div key={location.pathname} className="page-enter">
            <Outlet />
          </div>
        </main>

        <section className="partner-strip" aria-label="Partner institutions">
          <div className="partner-strip-head">
            <h3>Schools Who Trust Us</h3>
          </div>
          <div className="partner-marquee">
            <div className="partner-track">
              {[...partnerLogos, ...partnerLogos].map((partner, idx) => (
                <div className="partner-logo-only" key={`${partner.name}-${idx}`} title={partner.name}>
                  <span className="partner-mark" aria-hidden="true">{partner.short}</span>
                  <span className="sr-only">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

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
            <div className="footer-socials" aria-label="Footer social links">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-text-link"
                >
                  {item.label}
                </a>
              ))}
            </div>
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
