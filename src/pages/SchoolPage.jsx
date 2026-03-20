import PageMeta from '../components/PageMeta'
import MovingCardsRow from '../components/MovingCardsRow'
import SectionHeading from '../components/SectionHeading'
import { media, programCatalog, schoolFocus } from '../content/siteData'

const schoolHeroSlides = [media.classroom, media.students, media.books]

const schoolMentionables = [
  {
    title: 'AI Lab Showcases',
    description: 'Students present guided AI lab outcomes in institutional exhibitions and community demos.',
    image: media.classroom,
  },
  {
    title: 'STEM Build Challenges',
    description: 'Hands-on engineering build sprints that improve teamwork, logic, and presentation confidence.',
    image: media.robotics,
  },
  {
    title: 'Teacher Enablement Wins',
    description: 'Faculty implementation checkpoints ensuring classroom continuity and better learner engagement.',
    image: media.books,
  },
  {
    title: 'Language Confidence Growth',
    description: 'I Speak English classroom routines improving communication outcomes for young learners.',
    image: media.students,
  },
]

function SchoolPage() {
  return (
    <>
      <PageMeta
        title="School Programs (KG to 8th)"
        description="DigiSchool school segment is designed for KG to 8th grade with Academic Books, AI and STEM labs, and I Speak English teacher special edition."
      />

      <section className="school-hero">
        <div>
          <p className="eyebrow">School Segment</p>
          <h1>Focused Programs for KG to 8th Grade</h1>
          <p>{schoolFocus.intro}</p>
          <div className="school-hero-pills">
            <span>Academic Books</span>
            <span>AI Labs</span>
            <span>STEM Hands-on</span>
          </div>
        </div>
        <div className="school-hero-carousel" aria-hidden="true">
          <div className="school-hero-track">
            {[...schoolHeroSlides, ...schoolHeroSlides].map((image, i) => (
              <img key={`${image}-${i}`} src={image} alt="" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block compact-top">
        <SectionHeading
          eyebrow="Offerings"
          title="Academic and Lab Delivery for Schools"
          intro="Each stream below is represented as a dedicated school offering and can be deployed independently or as a full bundle."
        />
        <div className="offerings-newsletter">
          {schoolFocus.offerings.map((item, index) => (
            <article key={item.title} className="offering-column">
              <p className="offering-index">0{index + 1}</p>
              <div>
                <h2 className="offering-title">{item.title}</h2>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

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

      <section className="section-block is-plain compact-top">
        <SectionHeading
          eyebrow="Mentionables"
          title="Student Mentionables"
          intro="Highlights from school deployments, learner participation, and classroom impact outcomes."
        />
        <MovingCardsRow
          title="Milestones and Student Mentionables"
          items={schoolMentionables}
        />
      </section>
    </>
  )
}

export default SchoolPage
