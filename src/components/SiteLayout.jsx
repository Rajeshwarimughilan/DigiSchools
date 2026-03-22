import { useEffect, useLayoutEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { contactInfo, navItems, socialLinks, utilityNavItems } from '../content/siteData'
import { useAdminContent } from '../context/AdminContentContext'

const socialIconMap = {
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.25" cy="6.75" r="1" fill="currentColor" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="6" width="18" height="12" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 9.3 15 12l-5 2.7Z" fill="currentColor" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8.2" cy="9" r="1.2" fill="currentColor" />
      <path d="M7.2 11h2v6h-2zM11.2 11h1.9v.9c.4-.6 1.2-1.1 2.3-1.1 2.1 0 2.8 1.4 2.8 3.5V17h-2V14.7c0-1-.2-2-1.5-2-1.3 0-1.5 1-1.5 2V17h-2z" fill="currentColor" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13.9 18v-5h1.8l.3-2H14v-1.2c0-.6.2-1 1-1h1.1V7h-1.7c-1.8 0-2.6 1.1-2.6 2.7V11h-1.7v2h1.7v5z" fill="currentColor" />
    </svg>
  ),
}

function SiteLayout() {
  const location = useLocation()
  const { content, isAdmin, logout } = useAdminContent()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

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
          <div className="utility-bar" aria-label="Utility navigation and social links">
            <nav className="utility-nav" aria-label="Utility links">
              {utilityNavItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'utility-link active' : 'utility-link')}
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/admin"
                className={({ isActive }) => (isActive ? 'utility-link active' : 'utility-link')}
              >
                {isAdmin ? 'Admin CMS' : 'Admin Login'}
              </NavLink>
              {isAdmin && (
                <button type="button" className="utility-link utility-link-button" onClick={logout}>
                  Logout
                </button>
              )}
            </nav>

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
                  {socialIconMap[item.label] ?? <span>{item.short}</span>}
                </a>
              ))}
            </div>
          </div>

          <div className="main-header-row">
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
              {[...content.trustedSchools, ...content.trustedSchools].map((partner, idx) => (
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
              Industrial automation, customized software development, and cloud computation delivered
              as an end-to-end institutional and R&D solution stack.
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
            <NavLink to="/school" className="footer-link">School</NavLink>
            <NavLink to="/college-innovation" className="footer-link">College</NavLink>
            <NavLink to="/rd-solutions" className="footer-link">R&D</NavLink>
            <NavLink to="/services" className="footer-link">Services</NavLink>
            <NavLink to="/team" className="footer-link">Team</NavLink>
            <NavLink to="/support" className="footer-link">Support</NavLink>
          </nav>

          <nav className="footer-nav" aria-label="Footer utility navigation">
            <NavLink to="/impact" className="footer-link">Impact</NavLink>
            <NavLink to="/support" className="footer-link">Support</NavLink>
            <NavLink to="/policies" className="footer-link">Policies</NavLink>
          </nav>
        </footer>
      </div>
    </>
  )
}

export default SiteLayout
