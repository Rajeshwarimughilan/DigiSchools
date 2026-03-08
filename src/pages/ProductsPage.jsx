import { Link } from 'react-router-dom'
import MovingCardsRow from '../components/MovingCardsRow'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import {
  labFeatures,
  labSolutions,
  media,
  productPlatforms,
  programCatalog,
  storybooks,
} from '../content/siteData'

function ProductsPage() {
  return (
    <>
      <PageMeta
        title="Technology Products & Platforms"
        description="DigiSchool's four core platforms — IoT Solutions, DigiChat, GBroGo, and G-BroBoard — plus curriculum kits, storybooks, and full lab infrastructure."
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="internal-hero">
        <div>
          <p className="eyebrow">Products & Platforms</p>
          <h1>Technology Products Built for Learning and Real-World Deployment</h1>
          <p>
            Four flagship platforms, a complete curriculum product line, and full-service lab
            infrastructure — each designed to bridge education, research, and industry.
          </p>
        </div>
        <img src={media.innovation} alt="Technology products and platform development" />
      </section>

      {/* ── Digital Platforms ────────────────────────────────────────────── */}
      <section className="section-block">
        <SectionHeading
          eyebrow="Digital Platforms"
          title="Four Core Technology Platforms"
          intro="Each platform was built in-house by DigiSchool to solve a specific gap in the innovation, communication, and education ecosystem."
        />

        <div className="platform-list">
          {productPlatforms.map((platform, i) => (
            <article key={platform.title} className={`platform-card ${i % 2 === 1 ? 'platform-card-reverse' : ''}`}>
              <div className="platform-media">
                <img src={platform.image} alt={platform.imageAlt} />
              </div>
              <div className="platform-content">
                <p className="platform-tagline">{platform.tagline}</p>
                <h2>{platform.title}</h2>
                <p className="platform-desc">{platform.description}</p>
                <div className="platform-tags">
                  {platform.tags.map((tag) => (
                    <span key={tag} className="platform-tag">{tag}</span>
                  ))}
                </div>
                <ul className="platform-highlights">
                  {platform.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* ── Products scroll row ─────────────────────────────────────────────── */}
      <section className="section-block compact-top">
        <MovingCardsRow
          title="Quick Tour of All Four Platforms"
          items={productPlatforms}
        />
      </section>
      {/* ── Curriculum Materials ─────────────────────────────────────────── */}
      <section className="section-block compact-top">
        <SectionHeading
          eyebrow="Curriculum Materials"
          title="Grade-Banded Learning Kits for Three Program Streams"
          intro="DigiSchool produces structured, level-based curriculum kits — physical and digital — mapped to grade bands from Grade 1 to Grade 12."
        />

        <div className="curriculum-product-grid">
          {programCatalog.map((stream) => (
            <article key={stream.slug} className="curriculum-product-card">
              <div className="curriculum-product-header">
                <h2>{stream.stream}</h2>
                <span className="curriculum-level-count">{stream.levels.length} levels</span>
              </div>
              <p>{stream.description}</p>
              <div className="curriculum-grade-pills">
                {stream.levels.map((lvl) => (
                  <span key={lvl.level} className="curriculum-grade-pill">
                    <strong>{lvl.level}</strong> · {lvl.grades}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="curriculum-cta-note">
          Curriculum kits are available as part of institutional programs.{' '}
          <Link to="/programs">Explore Programs →</Link>
        </p>
      </section>

      {/* ── Reading Library ──────────────────────────────────────────────── */}
      <section className="section-block compact-top">
        <SectionHeading
          eyebrow="Reading Library"
          title="I Speak English — Supplementary Storybook Titles"
          intro="Illustrated storybooks produced for the I Speak English program stream, used as vocabulary, comprehension, and engagement tools from Grade 1 onward."
        />

        <div className="reading-library-grid">
          {storybooks.map((book) => (
            <article key={book.title} className="reading-book-card">
              <div className="book-spine" aria-hidden="true" />
              <div className="book-content">
                <h3>{book.title}</h3>
                <p>{book.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Lab Infrastructure ───────────────────────────────────────────── */}
      <section className="section-block compact-top">
        <SectionHeading
          eyebrow="Lab Infrastructure"
          title="Complete Technology Lab Setup for Schools and Colleges"
          intro="DigiSchool delivers end-to-end lab solutions: from needs assessment and design through installation, training, and ongoing support."
        />

        <div className="lab-full-layout">
          <img src={media.lab} alt="STEM and AI lab setup environment" className="lab-full-img" />
          <div className="lab-full-content">
            <ul className="lab-solutions-list">
              {labSolutions.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <div className="lab-features-grid">
              {labFeatures.map((f) => (
                <article key={f.feature} className="lab-feature-card">
                  <h4>{f.feature}</h4>
                  <p>{f.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsPage
