import MovingCardsRow from '../components/MovingCardsRow'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { media, programCatalog, rdSolutionsModel } from '../content/siteData'

function RDSolutionsPage() {
  return (
    <>
      <PageMeta
        title="R&D Solutions"
        description="DigiSchool R&D solutions based on industry standards, team support, customization, and IoT/Embedded systems delivery."
      />

      <section className="rd-hero">
        <div className="rd-hero-copy">
          <p className="eyebrow">R&D Solutions</p>
          <h1>
            Industry-Standard <span>R&D Solutions</span>
          </h1>
          <p>
            Build faster, safer, and smarter with DigiSchool's applied R&D stack for IoT, embedded
            systems, and customized innovation workflows.
          </p>
          <div className="rd-hero-chips" aria-label="R&D capabilities">
            <span>Industry Ready</span>
            <span>Custom Engineering</span>
            <span>Scalable Deployment</span>
          </div>
        </div>

        <div className="rd-hero-visual" aria-hidden="true">
          <img src={media.innovation} alt="" loading="lazy" className="rd-hero-main" />
          <span className="rd-hero-pill rd-hero-pill-top">AI Powered</span>
          <span className="rd-hero-pill rd-hero-pill-side">Real-time Insights</span>

          <div className="rd-hero-mini">
            <img src={media.coding} alt="" loading="lazy" />
            <span>R&D Console</span>
          </div>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Approach"
          title="Core R&D Delivery Model"
          intro="Every engagement follows an end-to-end approach from requirement discovery through implementation and sustained support."
        />

        <div className="timeline-layout">
          {rdSolutionsModel.map((item, index) => (
            <article key={item.title} className="timeline-item">
              <p className="timeline-index">0{index + 1}</p>
              <div>
                <h2>{item.title}</h2>
                <p className="timeline-subtitle">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block compact-top">
        <MovingCardsRow
          title="Program Streams at a Glance"
          items={programCatalog}
        />
      </section>
    </>
  )
}

export default RDSolutionsPage
