import MovingCardsRow from '../components/MovingCardsRow'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { courseSubcategories, media, programCatalog, storybooks } from '../content/siteData'

const programStreams = [
  {
    title: 'College Innovation Programs',
    audience: 'Engineering colleges, innovation cells, startup clubs',
    modules: [
      'IoT and Robotics workshops',
      'Embedded systems and Arduino training',
      'Final-year project guidance',
      'Startup mentoring and product strategy',
      'Industry-oriented skilling pathways',
    ],
  },
  {
    title: 'School Technology Programs',
    audience: 'Schools, teachers, student innovation clubs',
    modules: [
      'STEM curriculum design and implementation',
      'AI and robotics classroom pathways',
      'IoT learning modules for young innovators',
      'Teacher upskilling and training',
      'Innovation and robotics lab enablement',
    ],
  },
]

function ProgramsPage() {
  return (
    <>
      <PageMeta
        title="Education Programs"
        description="DigiSchool programs for schools and colleges: AI & Robotics, ERP & App Development, and I Speak English — from Grade 1 through Grade 12 and beyond."
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="internal-hero soft-grid">
        <div>
          <p className="eyebrow">Programs</p>
          <h1>Structured Learning Tracks from Foundation to Innovation</h1>
          <p>
            DigiSchool programs blend curriculum, mentorship, and hands-on implementation across
            school and college ecosystems.
          </p>
        </div>
        <img src={media.students} alt="Students learning through advanced technology programs" />
      </section>

      {/* ── Delivery Model ───────────────────────────────────────── */}
      <section className="section-block">
        <SectionHeading
          eyebrow="Learning Model"
          title="From Classroom Concepts to Industry-Relevant Outcomes"
          intro="Each program stream is designed to move learners from guided experimentation to independent innovation and startup thinking."
        />
        <div className="program-columns">
          {programStreams.map((stream) => (
            <article key={stream.title} className="program-column">
              <h2>{stream.title}</h2>
              <p className="program-audience">{stream.audience}</p>
              <ol>
                {stream.modules.map((module) => (
                  <li key={module}>{module}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>
      {/* ── Program Streams scroll row ────────────────────────────────── */}
      <section className="section-block compact-top">
        <MovingCardsRow
          title="Program Streams at a Glance"
          items={programCatalog}
        />
      </section>
      {/* ── Grade-Level Curriculum Catalog (L1–L5) ───────────────── */}
      <section className="section-block compact-top">
        <SectionHeading
          eyebrow="Curriculum Catalog"
          title="Three Grade-Banded Streams — Level 1 through Level 5"
          intro="Each stream maps to grade bands from Grade 1–3 up to Grade 10–12, with age-appropriate progression across every school level."
        />

        {programCatalog.map((stream) => (
          <div key={stream.slug} className="catalog-stream">
            <div className="catalog-stream-header">
              <h2>{stream.stream}</h2>
              <p>{stream.description}</p>
            </div>
            <div className="catalog-levels">
              {stream.levels.map((lvl) => (
                <article key={lvl.level} className="catalog-level-card">
                  <div className="catalog-level-media">
                    <img src={stream.image} alt={`${stream.stream} ${lvl.level}`} loading="lazy" />
                  </div>
                  <div className="catalog-level-body">
                    <div className="catalog-level-badge">{lvl.level}</div>
                    <p className="catalog-grades">{lvl.grades}</p>
                    <p>{lvl.focus}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── Course Subcategories ──────────────────────────────────── */}
      <section className="section-block compact-top">
        <SectionHeading
          eyebrow="Courses"
          title="Hands-On STEM and Robotics Course Tracks"
          intro="Standalone course-based tracks that complement the grade-band curriculum, designed for focused project learning and competition readiness."
        />
        <div className="course-sub-grid">
          {courseSubcategories.map((course) => (
            <article key={course.slug} className="course-sub-card">
              <h3>{course.name}</h3>
              <p>{course.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Supplementary Reading / Storybooks ───────────────────── */}
      <section className="section-block compact-top">
        <SectionHeading
          eyebrow="I Speak English — Supplementary Reading"
          title="Curated Storybook Titles for Early English Learners"
          intro="These titles are used within the I Speak English program stream to build vocabulary, comprehension, and a love of reading from the earliest grades."
        />
        <div className="storybook-grid">
          {storybooks.map((book) => (
            <article key={book.title} className="storybook-card">
              <div className="storybook-icon" aria-hidden="true">📖</div>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ProgramsPage
