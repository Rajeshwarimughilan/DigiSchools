import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { aboutCapabilities, media } from '../content/siteData'

function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="DigiSchool Corporation — a technology-driven innovation company operating across AI, IoT, robotics, embedded systems, drones, and STEM education in India."
      />

      <section className="internal-hero">
        <div>
          <p className="eyebrow">About DigiSchool</p>
          <h1>A Technology Company Built on Research, Innovation, and Education Impact</h1>
          <p>
            DigiSchool Corporation is a fast-growing, technology-driven organization revolutionizing
            the education system in India through AI, IoT, robotics, embedded systems, and
            industry-aligned research programs.
          </p>
        </div>
        <img src={media.students} alt="DigiSchool students and researchers in a technology lab" />
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Who We Are"
          title="Bridging Education, Research, and Industry"
          intro="DigiSchool operates at the intersection of applied research, curriculum innovation, and real-world technology development. From school robotics labs to government-funded R&D projects, every initiative is designed to create lasting impact."
        />

        <div className="about-brand-statement">
          <blockquote>
            "DigiSchool is on a mission to make every student, teacher, institution, and industry
            partner a participant in building India's technology future — from classrooms to
            research labs to the global stage."
          </blockquote>
        </div>
      </section>

      <section className="section-block compact-top">
        <SectionHeading
          eyebrow="Capabilities"
          title="Core Technology Domains We Work In"
          intro="Our teams operate across a broad but interconnected set of technology areas, enabling us to deliver integrated solutions from hardware to software to intelligent systems."
        />

        <div className="capability-grid">
          {aboutCapabilities.map((cap) => (
            <article key={cap.area} className="capability-card">
              <h3>{cap.area}</h3>
              <p>{cap.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default AboutPage
