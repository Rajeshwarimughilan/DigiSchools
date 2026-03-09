import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { domains, media, mouStats, rdProjectTypes, rdTeam } from '../content/siteData'

function DomainsPage() {
  return (
    <>
      <PageMeta
        title="R&D Domains"
        description="DigiSchool's three core domains — Research & Development, College Innovation Programs, and School Technology Programs — working as one integrated ecosystem."
      />

      <section className="internal-hero">
        <div>
          <p className="eyebrow">Working Domains</p>
          <h1>Research, College Innovation, and School Technology Programs</h1>
        </div>
        <img src={media.robotics} alt="Robotics and embedded system learning environment" />
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Framework"
          title="A Domain Architecture Built for End-to-End Innovation"
          intro="Each domain contributes unique capabilities while sharing one mission: transform ideas into practical, future-ready technologies."
        />

        <div className="timeline-layout">
          {domains.map((domain, index) => (
            <article key={domain.slug} className="timeline-item">
              <p className="timeline-index">0{index + 1}</p>
              <div>
                <h2>{domain.title}</h2>
                <p className="timeline-subtitle">{domain.subtitle}</p>
                <ul>
                  {domain.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="rd-leadership" className="section-block compact-top">
        <SectionHeading
          eyebrow="R&D Leadership"
          title="Research Team Driving DigiSchool Innovation"
          intro="Our R&D function is led by qualified researchers with deep domain expertise spanning embedded systems, AI, drone technology, and applied engineering."
        />

        <div className="rd-team-grid">
          {rdTeam.map((member) => (
            <article key={member.name} className="rd-team-card">
              <h2>{member.name}</h2>
              <p className="rd-team-role">{member.role}</p>
              <p>{member.profile}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block compact-top">
        <SectionHeading
          eyebrow="Partnerships"
          title="85+ Active MoUs Across Industry, Colleges, and Schools"
          intro="DigiSchool has established a broad collaboration network that powers real-world research, internships, and curriculum delivery."
        />

        <div className="mou-stat-row">
          {mouStats.map((stat) => (
            <article key={stat.label} className="mou-stat-card">
              <p className="mou-count">{stat.count}</p>
              <h3>{stat.label}</h3>
              <p>{stat.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block compact-top">
        <SectionHeading
          eyebrow="Project Types"
          title="Research and Development Project Categories"
          intro="DigiSchool runs R&D projects across multiple funding and collaboration models — each aligned to real-world outcomes."
        />

        <ul className="rd-project-list">
          {rdProjectTypes.map((type) => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default DomainsPage
