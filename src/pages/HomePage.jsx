import { Link } from 'react-router-dom'
import AnimatedStat from '../components/AnimatedStat'
import FeatureBand from '../components/FeatureBand'
import HeroScene from '../components/HeroScene'
import MovingCardsRow from '../components/MovingCardsRow'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import {
  achievementCards,
  domains,
  homeAchievementsPreview,
  homeCorpSummary,
  impactHighlights,
  latestNews,
  media,
  missionPoints,
  productPlatforms,
  quickStats,
  rdTeam,
} from '../content/siteData'

function HomePage() {
  return (
    <>
      <PageMeta
        title="Innovation, Research & Technology Education"
        description="DigiSchool Corporation — advancing AI, IoT, robotics, and STEM education through research, products, and hands-on institutional programs across India."
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Technology Innovation Ecosystem</p>
          <h1>Where Schools, Colleges, Research Labs, and Industry Build the Future Together.</h1>
          <p>
            DigiSchool Corporation is an innovation-driven technology organization advancing AI,
            IoT, robotics, embedded systems, and STEM education through research, product
            development, and hands-on learning.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Start a Collaboration
            </Link>
            <Link className="btn btn-ghost" to="/programs">
              Explore Programs
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <HeroScene />
        </div>
      </section>

      {/* ── Quick Stats ──────────────────────────────────────────── */}
      <section className="stats-ribbon">
        {quickStats.map((item, i) => (
          <article key={item.label}>
            <AnimatedStat value={item.value} className="stat-value" index={i} />
            <p className="stat-label">{item.label}</p>
          </article>
        ))}
      </section>

      {/* ── Corporate Summary ────────────────────────────────────── */}
      <section className="section-block">
        <div className="corp-summary">
          <div className="corp-summary-text">
            <p className="eyebrow">Who We Are</p>
            <h2>{homeCorpSummary.headline}</h2>
            <p>{homeCorpSummary.body}</p>
            <Link className="btn btn-primary" to="/about">
              About DigiSchool
            </Link>
          </div>
          <div className="corp-summary-services">
            <p className="corp-services-label">Technology Areas</p>
            <div className="service-tags">
              {homeCorpSummary.serviceAreas.map((area) => (
                <span key={area} className="service-tag">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────── */}
      <section className="section-block is-plain compact-top">
        <SectionHeading
          eyebrow="Mission"
          title="Advancing Research-Driven Learning and Real-World Product Innovation"
          intro="DigiSchool operates as a bridge between education, research, and industry with a strong focus on future-ready outcomes."
        />
        <div className="mission-flow" role="list" aria-label="Mission pillars">
          {missionPoints.map((point, index) => (
            <div
              key={point}
              className="mission-item"
              role="listitem"
              style={{ '--delay': `${index * 0.14 + 0.3}s` }}
            >
              <span className="mission-num">{String(index + 1).padStart(2, '0')}</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Core Domains ─────────────────────────────────────────── */}
      <section className="section-block is-plain compact-top">
        <SectionHeading
          eyebrow="Core Domains"
          title="Three Engines Working as One Integrated System"
          intro="The corporation works through a connected domain model that aligns R&D, college innovation, and school technology programs."
        />
        <div className="domain-track">
          {domains.map((domain) => (
            <Link key={domain.title} to={domain.route} className="domain-track-item">
              <h3>{domain.title}</h3>
              <p>{domain.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Flagship Initiatives ─────────────────────────────────── */}
      <section className="section-block">
        <SectionHeading
          eyebrow="Flagship Initiatives"
          title="Landmark Projects Defining DigiSchool's Innovation Identity"
          intro="From government-recognized R&D awards to nationally supported agri-tech programs, these initiatives represent DigiSchool at its most ambitious."
        />
        <FeatureBand
          title="ATMAN 2.0 — Smart Agriculture at IIT Bombay"
          text="A landmark IoT-driven precision farming initiative backed by ₹80 Lakhs in support. DigiSchool's ATMAN 2.0 deploys real-time sensor networks, drone monitoring, and automated irrigation systems to redefine agricultural intelligence at scale."
          image={media.lab}
        />
        <FeatureBand
          reverse
          title="SCSTE Award-Winning R&D and Research Funding"
          text="Recognized by SCSTE for best-in-class project innovation, DigiSchool received seed funding that ignited its R&D division. Over 8 years, this recognition grew into 4+ Crores in cumulative funding across government, industrial, and institutional research programs."
          image={media.innovation}
        />
      </section>

      {/* ── Platform Highlights scroll row ───────────────────────── */}
      <section className="section-block is-plain compact-top">
        <SectionHeading
          eyebrow="Our Platforms"
          title="Four Technology Platforms, One Ecosystem"
          intro="From IoT solutions to learning hardware — DigiSchool's platforms span the full journey from idea to deployment."
        />
        <MovingCardsRow
          title="Explore Our Core Platforms"
          items={productPlatforms}
        />
      </section>

      {/* ── R&D Leadership Spotlight ─────────────────────────────── */}
      <section className="section-block is-plain compact-top">
        <SectionHeading
          eyebrow="R&D Leadership"
          title="The Team Behind DigiSchool's Research Direction"
          intro="Our research division is guided by experienced academic and industry leadership across AI, IoT, and embedded innovation."
        />
        <div className="rd-leadership-spotlight">
          <div className="rd-leadership-copy">
            <p>
              DigiSchool's R&D leadership drives project selection, publication quality,
              prototype rigor, and institutional collaboration outcomes across all technology
              domains.
            </p>
            <Link className="btn btn-ghost" to="/domains#rd-leadership">
              View Full R&D Leadership
            </Link>
          </div>
          <div className="rd-leadership-grid">
            {rdTeam.map((member) => (
              <article key={member.name} className="rd-leadership-person">
                <div className="rd-leadership-photo-wrap">
                  <img src={member.image} alt={member.imageAlt ?? member.name} loading="lazy" />
                </div>
                <h3>{member.name}</h3>
                <p className="rd-leadership-role">{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest News ──────────────────────────────────────────── */}
      <section className="section-block is-plain compact-top">
        <SectionHeading
          eyebrow="Latest"
          title="Latest News"
          intro="Recent updates from DigiSchool programs, research, and partner collaborations."
        />
        <div className="latest-news-grid" role="list" aria-label="Latest DigiSchool news">
          {latestNews.map((item) => (
            <article key={item.title} className="news-item" role="listitem">
              <img src={item.image} alt={item.imageAlt ?? item.title} loading="lazy" />
              <p className="news-date">{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <Link to={item.href} className="news-link">Read more</Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── Achievements Preview ─────────────────────────────────── */}
      <section className="section-block is-plain compact-top">
        <SectionHeading
          eyebrow="Achievements"
          title="Measurable Impact Across Research, Education, and Industry"
          intro="Eight years of sustained innovation have produced real, documented outcomes across funding, partnerships, and program delivery."
        />
        <div className="achievements-preview">
          {homeAchievementsPreview.map((item, i) => (
            <article key={item.label} className="achievement-card">
              <AnimatedStat value={item.stat} className="achievement-stat" index={i} />
              <p className="achievement-label">{item.label}</p>
            </article>
          ))}
        </div>
        <ul className="home-impact-list">
          {impactHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="home-impact-cta">
          <Link className="btn btn-ghost" to="/impact">View Full Impact Report</Link>
        </div>
        <MovingCardsRow
          title="Key Milestones & Achievements"
          items={achievementCards}
        />
      </section>

      {/* ── Collaboration CTA ─────────────────────────────────────── */}
      <section className="home-cta">
        <div className="home-cta-inner">
          <p className="eyebrow eyebrow-light">Partner With Us</p>
          <h2>Ready to Build an Innovation Program or Technology Lab?</h2>
          <p>
            DigiSchool collaborates with schools, engineering colleges, industries, and government
            bodies to design, implement, and sustain world-class technology education ecosystems.
          </p>
          <div className="home-cta-actions">
            <Link className="btn btn-primary" to="/contact">Start a Collaboration</Link>
            <Link className="btn btn-ghost-light" to="/programs">Browse Programs</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
