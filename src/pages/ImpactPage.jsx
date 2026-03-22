import { Link } from 'react-router-dom'
import AnimatedStat from '../components/AnimatedStat'
import MovingCardsRow from '../components/MovingCardsRow'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { useAdminContent } from '../context/AdminContentContext'
import {
  media,
  mouStats,
  studentOutcomes,
} from '../content/siteData'

function ImpactPage() {
  const { content } = useAdminContent()

  return (
    <>
      <PageMeta
        title="Impact & Achievements"
        description="8 years of DigiSchool impact — \u20b94+ Crore in research funding, 85+ MoUs, 2000+ students trained, SCSTE award recognition, and ATMAN-80 collaboration with IIT Bombay and Nandha Engineering College."
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="impact-hero">
        <div className="impact-hero-content">
          <p className="eyebrow">Impact & Achievements</p>
          <h1>8 Years of Innovation, Research, and Education at Scale</h1>
          <p>
            From government-recognized R&D awards to national agri-tech programs, from hundreds of
            trained students to institutional partnerships across India — DigiSchool's impact is
            documented, measurable, and growing.
          </p>
        </div>
        <div className="impact-hero-visual">
          <img src={media.hero} alt="Innovation outcomes and achievement milestones" className="impact-hero-img" />
          <span className="impact-hero-badge impact-hero-badge-a">4+ Cr Funding</span>
          <span className="impact-hero-badge impact-hero-badge-b">85+ MoUs</span>
          <span className="impact-hero-badge impact-hero-badge-c">2000+ Students</span>
        </div>
      </section>

      {/* ── Outcome Stats Ribbon ─────────────────────────────────────────── */}
      <section className="outcome-stats-ribbon">
        {content.impactStats.map((stat, i) => (
          <article key={stat.label} className="outcome-stat">
            <AnimatedStat value={stat.value} className="outcome-value" index={i} />
            <p className="outcome-label">{stat.label}</p>
            <p className="outcome-sub">{stat.sub}</p>
          </article>
        ))}
      </section>

      {/* ── Funding Journey ──────────────────────────────────────────────── */}
      <section className="section-block">
        <SectionHeading
          eyebrow="Funding Journey"
          title="From Seed Award to 4+ Crores — A Research Funding Story"
          intro="DigiSchool's funding history reflects a consistent track record of innovation recognition, from the first SCSTE award through multi-year government and industrial research programs."
        />

        <div className="funding-timeline">
          {content.impactFundingJourney.map((milestone, i) => (
            <article
              key={milestone.label}
              className="funding-milestone"
              style={{ '--delay': `${i * 0.18}s` }}
            >
              <div className="funding-milestone-index">{String(i + 1).padStart(2, '0')}</div>
              <div className="funding-milestone-body">
                <div className="funding-milestone-meta">
                  <span className="funding-year">{milestone.year}</span>
                  <span className="funding-amount">{milestone.amount}</span>
                </div>
                <h3>{milestone.label}</h3>
                <p>{milestone.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Awards ───────────────────────────────────────────────────────── */}
      <section className="section-block compact-top">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards and Strategic Program Selections"
          intro="Formal recognition from government bodies and premier national institutions validates DigiSchool's technology quality and innovation impact."
        />

        <div className="awards-grid">
          {content.impactRecognitions.map((award) => (
            <article key={award.award} className="award-card">
              <div className="award-image-wrap">
                <img src={award.image} alt={award.award} />
                <div className="award-image-overlay" />
                <div className="award-overlay-text">
                  <p className="award-body-label">{award.body}</p>
                  <h3>{award.award}</h3>
                </div>
              </div>
              <div className="award-significance">
                <p>{award.significance}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Milestones Scroll Row ──────────────────────────────────────────── */}
      <section className="section-block compact-top">
        <MovingCardsRow
          title="Milestones, Awards & Outcomes at a Glance"
          items={content.impactMilestones}
        />
      </section>

      {/* ── MoU Partnerships ─────────────────────────────────────────────── */}
      <section className="section-block compact-top">
        <SectionHeading
          eyebrow="Partnerships"
          title="85+ MoUs Spanning Industry, Colleges, and Schools"
          intro="Every MoU is a working relationship — enabling R&D contracts, student internships, curriculum delivery, and co-funded projects."
        />

        <div className="mou-showcase">
          {mouStats.map((stat) => (
            <article key={stat.label} className="mou-showcase-card">
              <p className="mou-showcase-count">{stat.count}</p>
              <h3>{stat.label}</h3>
              <p>{stat.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Student Outcomes ─────────────────────────────────────────────── */}
      <section className="section-block compact-top">
        <SectionHeading
          eyebrow="Student Outcomes"
          title="From Learners to Innovators to Entrepreneurs"
          intro="DigiSchool programs produce measurable outcomes — not just course completions, but real projects, patents, competition wins, and startup foundations."
        />

        <div className="student-outcomes-layout">
          <img src={media.students} alt="Students presenting technology projects at a competition" className="student-outcomes-img" />
          <ul className="student-outcomes-list">
            {studentOutcomes.map((outcome) => (
              <li key={outcome}>
                <span className="outcome-tick" aria-hidden="true">✓</span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="impact-cta">
        <div className="impact-cta-inner">
          <p className="eyebrow eyebrow-light">Collaborate With Us</p>
          <h2>Ready to Create Measurable Impact Together?</h2>
          <p>
            Partner with DigiSchool for R&D projects, institutional programs, lab setups, or
            joint research initiatives.
          </p>
          <div className="impact-cta-actions">
            <Link className="btn btn-primary" to="/support">Start a Collaboration</Link>
            <Link className="btn btn-ghost-light" to="/domains">Explore R&D Domains</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImpactPage
