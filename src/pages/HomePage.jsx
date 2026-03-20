import { Link } from 'react-router-dom'
import AnimatedStat from '../components/AnimatedStat'
import FeatureBand from '../components/FeatureBand'
import HeroScene from '../components/HeroScene'
import MovingCardsRow from '../components/MovingCardsRow'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import {
  achievementCards,
  homeCorpSummary,
  latestNews,
  media,
  missionPoints,
  productPlatforms,
  quickStats,
} from '../content/siteData'

const focusCircles = [
  { label: 'School', to: '/school', image: media.classroom },
  { label: 'College', to: '/college-innovation', image: media.students },
  { label: 'Industry', to: '/rd-solutions', image: media.innovation },
]

const objectiveCards = [
  {
    title: 'Industrial Automation',
    detail: 'Automation-first systems engineered for practical operations and measurable efficiency gains.',
    image: media.innovation,
  },
  {
    title: 'Customized Software',
    detail: 'Institution-specific software built around workflow needs, compliance constraints, and scalability.',
    image: media.coding,
  },
  {
    title: 'Cloud Computation',
    detail: 'Reliable cloud-connected platforms for data pipelines, dashboards, and distributed services.',
    image: media.hero,
  },
  {
    title: 'End-to-End Delivery',
    detail: 'From concept to deployment to support, DigiSchool delivers the complete implementation lifecycle.',
    image: media.partnership,
  },
]

const audienceTracks = [
  {
    title: 'School (KG-8)',
    detail: 'Academic books, AI/STEM labs, and teacher-first I Speak English delivery for foundational learning.',
    to: '/school',
    image: media.classroom,
    icon: 'S',
  },
  {
    title: 'College Innovation',
    detail: 'Project pipeline, product development guidance, publication support, and one credit courses.',
    to: '/college-innovation',
    image: media.students,
    icon: 'C',
  },
  {
    title: 'R&D Solutions',
    detail: 'Industry-standard, customization-ready IoT and embedded systems execution with long-term support.',
    to: '/rd-solutions',
    image: media.robotics,
    icon: 'R',
  },
  {
    title: 'Services',
    detail: 'Customized GBrow, ERP operations stack, and DigiChat institutional communication systems.',
    to: '/services',
    image: media.coding,
    icon: 'D',
  },
]

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
            <Link className="btn btn-primary" to="/support">
              Start a Collaboration
            </Link>
            <Link className="btn btn-ghost" to="/impact">
              View Impact Record
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
            <p className="corp-services-label">Who We Build For</p>
            <div className="focus-circles" aria-label="Primary DigiSchool segments">
              {focusCircles.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`focus-circle focus-circle-${index + 1}`}
                  aria-label={`${item.label} solutions`}
                >
                  <img src={item.image} alt={`${item.label} segment`} loading="lazy" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Objective ─────────────────────────────────────── */}
      <section className="section-block compact-top">
        <SectionHeading
          eyebrow="Main Objective"
          title="Industrial Automation to Cloud Computation - End-to-End"
          intro="DigiSchool operates as a complete solution provider across industrial automation, customized software development, cloud computation, and long-term deployment support."
        />
        <div className="objective-card-grid">
          {objectiveCards.map((item) => (
            <article key={item.title} className="objective-card">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="objective-card-overlay">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Who We Serve ─────────────────────────────────────── */}
      <section className="section-block is-plain compact-top">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Delivery Tracks Across the DigiSchool Ecosystem"
          intro="Our operating model serves four distinct segments with dedicated solutions and deployment pathways."
        />
        <div className="audience-grid">
          {audienceTracks.map((item) => (
            <Link key={item.title} to={item.to} className="audience-card-split">
              <div className="audience-card-left">
                <span className="audience-icon" aria-hidden="true">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
              <div className="audience-card-right">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
            </Link>
          ))}
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

      {/* ── Flagship Initiatives ─────────────────────────────────── */}
      <section className="section-block">
        <SectionHeading
          eyebrow="Flagship Initiatives"
          title="Landmark Projects Defining DigiSchool's Innovation Identity"
          intro="From government-recognized R&D awards to nationally supported agri-tech programs, these initiatives represent DigiSchool at its most ambitious."
        />
        <FeatureBand
          title="ATMAN-80 - Smart Agriculture with IIT Bombay and Nandha Engineering College"
          text="A landmark IoT-driven precision farming initiative backed by ₹80 Lakhs in support. DigiSchool's ATMAN-80 deployment uses real-time sensor networks, drone monitoring, and automated irrigation systems to redefine agricultural intelligence at scale."
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
            <Link className="btn btn-primary" to="/support">Start a Collaboration</Link>
            <Link className="btn btn-ghost-light" to="/school">Browse School Programs</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
