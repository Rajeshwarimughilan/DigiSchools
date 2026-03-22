import { useState } from 'react'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { useAdminContent } from '../context/AdminContentContext'
import { mainObjectives, media } from '../content/siteData'

const objectivePanels = [
  {
    title: 'Industrial Automation',
    body: mainObjectives[0],
    image: media.innovation,
    details: [
      'Process-centric automation architecture planning',
      'Sensor and controller integration design',
      'Operational safety and reliability checkpoints',
      'Real-time monitoring and reporting workflows',
      'Deployment support with measurable outcomes',
    ],
  },
  {
    title: 'Customized Software',
    body: mainObjectives[1],
    image: media.coding,
    details: [
      'Requirement mapping based on institutional needs',
      'Role-based interfaces for staff and admin teams',
      'Workflow automation for recurring operations',
      'Scalable modules for future feature expansion',
      'Maintenance and enhancement lifecycle support',
    ],
  },
  {
    title: 'Cloud Computation',
    body: mainObjectives[2],
    image: media.hero,
    details: [
      'Cloud-ready architecture for reliable uptime',
      'Secure data pipelines and managed access layers',
      'Centralized dashboards for live visibility',
      'Performance tuning for distributed workloads',
      'Backup, recovery, and continuity planning',
    ],
  },
  {
    title: 'End-to-End Provider',
    body: mainObjectives[3],
    image: media.partnership,
    details: [
      'Discovery and planning with stakeholder alignment',
      'Design, prototyping, and implementation execution',
      'Deployment readiness and operational handover',
      'Training and enablement for user teams',
      'Long-term support and iterative improvement',
    ],
  },
]

const capabilityBackdrop = media.innovation

function AboutPage() {
  const [activeObjective, setActiveObjective] = useState(0)
  const { content } = useAdminContent()

  return (
    <>
      <PageMeta
        title="About Us"
        description="DigiSchool Corporation — a technology-driven innovation company operating across AI, IoT, robotics, embedded systems, drones, and STEM education in India."
      />

      <section className="internal-hero no-card">
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
        />

        <div className="about-news-columns" role="list" aria-label="DigiSchool overview">
          <p role="listitem">
            DigiSchool operates at the intersection of applied research, curriculum innovation, and
            real-world technology development. Our teams design practical solutions that connect
            classrooms, institutions, and industry with measurable implementation outcomes.
          </p>
          <p role="listitem">
            From school robotics labs to government-funded R&amp;D projects, each initiative is
            executed with long-term impact in mind. This approach allows DigiSchool to convert
            emerging ideas into scalable systems that serve education and society together.
          </p>
        </div>

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
          eyebrow="Main Objective"
          title="One End-to-End Objective Across All Delivery Units"
          intro="DigiSchool's execution model is built around four practical outcomes that guide every program, service, and R&D engagement."
        />

        <div className="about-objective-layout">
          <div className="about-objective-tabs" role="tablist" aria-label="DigiSchool objectives">
            {objectivePanels.map((item, index) => (
              <button
                type="button"
                key={item.title}
                className={`about-objective-tab ${activeObjective === index ? 'active' : ''}`}
                role="tab"
                aria-selected={activeObjective === index}
                onClick={() => setActiveObjective(index)}
              >
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </button>
            ))}
          </div>

          <div className="about-objective-visual" role="tabpanel" aria-live="polite">
            <img
              src={objectivePanels[activeObjective].image}
              alt={objectivePanels[activeObjective].title}
              loading="lazy"
            />
            <div className="about-objective-notes">
              {objectivePanels[activeObjective].details.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block compact-top">
        <SectionHeading
          eyebrow="Capabilities"
          title="Core Technology Domains We Work In"
          intro="Our teams operate across a broad but interconnected set of technology areas, enabling us to deliver integrated solutions from hardware to software to intelligent systems."
        />

        <div className="capability-grid">
          {content.aboutCapabilities.map((cap) => (
            <article
              key={cap.area}
              className="capability-card capability-card-image"
              style={{ '--cap-bg': `url(${capabilityBackdrop})` }}
            >
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
