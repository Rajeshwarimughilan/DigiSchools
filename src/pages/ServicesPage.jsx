import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { media, serviceCatalog } from '../content/siteData'

function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Services"
        description="DigiSchool services include Customized GBrow for ESP32 and IoT learning, ERP software for schools and colleges, and DigiChat community communication platform."
      />

      <section className="services-hero">
        <div>
          <p className="eyebrow">Services</p>
          <h1>Customized Platforms for Schools, Colleges, and Institutions</h1>
          <p>
            Our service stack combines hardware, software, and communication infrastructure to support
            end-to-end institutional technology operations.
          </p>
        </div>
        <div className="services-hero-rail" aria-hidden="true">
          <article style={{ '--hero-card-bg': `url(${media.robotics})` }}>
            <h3>Customized GBrow</h3>
            <p>ESP32 and IoT learning hardware</p>
          </article>
          <article style={{ '--hero-card-bg': `url(${media.coding})` }}>
            <h3>ERP Systems</h3>
            <p>Finance, billing, and account workflows</p>
          </article>
          <article style={{ '--hero-card-bg': `url(${media.partnership})` }}>
            <h3>DigiChat</h3>
            <p>Institution-only secure communication</p>
          </article>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Service Catalog"
          title="GBrow, ERP, and DigiChat"
          intro="Each service below is mapped to a specific institutional need and can be deployed as a standalone solution or as part of a bundled rollout."
        />

        <div className="program-columns">
          {serviceCatalog.map((service) => (
            <article key={service.title} className="program-column">
              <h2>{service.title}</h2>
              <ol>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesPage
