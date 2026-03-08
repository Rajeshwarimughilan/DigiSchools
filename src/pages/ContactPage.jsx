import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { contactInfo, media } from '../content/siteData'

function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact Us"
        description="Contact DigiSchool Corporation to discuss program collaborations, lab setups, R&D partnerships, or institutional technology initiatives. Based in Tamil Nadu, India."
      />

      <section className="internal-hero">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Let Us Build Your Innovation Program or Technology Lab</h1>
          <p>
            Partner with DigiSchool for research projects, institutional programs, startup mentoring,
            and full lab setup solutions.
          </p>
        </div>
        <img src={media.lab} alt="Technology experts discussing collaboration" />
      </section>

      <section className="section-block contact-layout">
        <SectionHeading
          eyebrow="Reach Us"
          title="DigiSchool Corporation"
          intro="For collaborations, implementation support, or institutional partnerships, reach us directly using the details below."
        />

        <div className="contact-tiles">
          <article>
            <h3>Phone</h3>
            <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>{contactInfo.phone}</a>
          </article>
          <article>
            <h3>Email</h3>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </article>
          <article>
            <h3>Location</h3>
            <p>{contactInfo.location}</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default ContactPage
