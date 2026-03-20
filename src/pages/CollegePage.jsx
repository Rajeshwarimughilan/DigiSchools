import { useMemo, useState } from 'react'
import PageMeta from '../components/PageMeta'
import MovingCardsRow from '../components/MovingCardsRow'
import SectionHeading from '../components/SectionHeading'
import { collegeInnovationModel, media } from '../content/siteData'

const collegeNotables = [
  {
    title: 'Prototype Demo Days',
    description: 'Campus demo days where student projects are reviewed for product and funding readiness.',
    image: media.students,
  },
  {
    title: 'Publication Track Support',
    description: 'Structured mentoring for journals and conference submissions with documentation quality checks.',
    image: media.coding,
  },
  {
    title: 'IP and Patent Clinics',
    description: 'Focused workshops to identify novelty and convert technical work into IP-ready submissions.',
    image: media.innovation,
  },
  {
    title: 'Industry-Aligned Builds',
    description: 'Project milestones mapped to real industry problem statements and implementation constraints.',
    image: media.robotics,
  },
]

const serviceVisuals = [media.students, media.innovation, media.coding, media.robotics, media.partnership, media.classroom]

function buildServiceNodes(items) {
  const total = items.length
  if (!total) return []

  const centerIndex = Math.floor(total / 2)
  const outerCount = Math.max(total - 1, 1)
  const nodeGap = 2 * Math.PI / outerCount
  const outerRings = outerCount > 4 ? [34, 43] : [38]
  let ringCursor = 0

  return items.map((label, index) => {
    if (index === centerIndex) {
      return {
        id: `${label}-${index}`,
        label,
        description: `${label} delivered with structured mentoring, documentation quality checks, and real-world implementation readiness.`,
        image: serviceVisuals[index % serviceVisuals.length],
        x: 50,
        y: 50,
        isCenter: true,
      }
    }

    const angle = ringCursor * nodeGap - Math.PI / 2
    const radius = outerRings[ringCursor % outerRings.length]
    ringCursor += 1

    return {
      id: `${label}-${index}`,
      label,
      description: `${label} delivered with structured mentoring, documentation quality checks, and real-world implementation readiness.`,
      image: serviceVisuals[index % serviceVisuals.length],
      x: 50 + Math.cos(angle) * radius,
      y: 50 + Math.sin(angle) * radius,
      isCenter: false,
    }
  })
}

function connectorPath(center, node, index) {
  if (!center) return ''
  const midX = (center.x + node.x) / 2
  const midY = (center.y + node.y) / 2
  const dx = node.x - center.x
  const dy = node.y - center.y
  const length = Math.hypot(dx, dy) || 1
  const nx = -dy / length
  const ny = dx / length
  const bend = 5.2 + (index % 3) * 2
  const cx = midX + nx * bend
  const cy = midY + ny * bend
  return `M ${center.x} ${center.y} Q ${cx} ${cy} ${node.x} ${node.y}`
}

function CollegePage() {
  const serviceNodes = useMemo(
    () => buildServiceNodes(collegeInnovationModel.services),
    [],
  )
  const centerNode = serviceNodes.find((node) => node.isCenter)
  const defaultActive = Math.floor(serviceNodes.length / 2)
  const [activeService, setActiveService] = useState(defaultActive)

  return (
    <>
      <PageMeta
        title="College Innovation"
        description="College innovation services including student project pipeline support, product development guidance, IP mentorship, conference support, funding proposal drafting, one credit courses, and workshops."
      />

      <section className="college-hero">
        <div>
          <p className="eyebrow">College Innovation</p>
          <h1>From Student Ideas to Future-Ready Solutions</h1>
          <p>
            DigiSchool supports colleges with structured innovation pathways that transform project ideas
            into validated prototypes, products, and funding-ready proposals.
          </p>
        </div>
        <div className="college-hero-stages" aria-hidden="true">
          <article>
            <h3>Idea</h3>
            <p>Discovery and framing</p>
            <span className="stage-meter"><i style={{ width: '24%' }} /></span>
          </article>
          <article>
            <h3>Prototype</h3>
            <p>Build and validation</p>
            <span className="stage-meter"><i style={{ width: '58%' }} /></span>
          </article>
          <article>
            <h3>Product</h3>
            <p>Scale and deployment</p>
            <span className="stage-meter"><i style={{ width: '88%' }} /></span>
          </article>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Pipeline"
          title="Student Project Potential Pipeline"
          intro="A practical and mentor-driven flow for projects that can become meaningful future solutions."
        />
        <div className="timeline-layout">
          {collegeInnovationModel.pipeline.map((stage, index) => (
            <article key={stage} className="timeline-item">
              <p className="timeline-index">0{index + 1}</p>
              <div>
                <h2>{stage}</h2>
                <p className="timeline-subtitle">Structured progression with technical and documentation checkpoints.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block is-plain compact-top">
        <SectionHeading
          eyebrow="Services"
          title="College Support Stack"
        />
        <div className="college-service-layout">
          <div className="college-service-map" role="list" aria-label="College service map">
            <svg className="college-service-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="collegeServiceGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(15,139,141,0.25)" />
                  <stop offset="55%" stopColor="rgba(15,139,141,0.7)" />
                  <stop offset="100%" stopColor="rgba(245,165,36,0.62)" />
                </linearGradient>
              </defs>
              {serviceNodes
                .filter((node) => !node.isCenter)
                .map((node, index) => (
                  <path
                    key={`${node.id}-line`}
                    d={connectorPath(centerNode, node, index)}
                    className={activeService === serviceNodes.findIndex((item) => item.id === node.id) ? 'is-active' : ''}
                  />
                ))}
              {serviceNodes
                .filter((node) => !node.isCenter)
                .map((node) => (
                  <circle key={`${node.id}-dot`} cx={node.x} cy={node.y} r="0.72" className="edge-dot" />
                ))}
            </svg>

            {serviceNodes.map((node, index) => (
              <button
                type="button"
                key={node.id}
                role="listitem"
                className={`college-service-node ${node.isCenter ? 'is-center' : ''} ${activeService === index ? 'is-active' : ''}`}
                style={{ '--x': `${node.x}%`, '--y': `${node.y}%`, '--node-bg': `url(${node.image})` }}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
              >
                <span>{node.label}</span>
              </button>
            ))}
          </div>

          <article className="college-service-detail" aria-live="polite">
            <p className="college-service-label">Service Focus</p>
            <h3>{serviceNodes[activeService]?.label}</h3>
            <p>{serviceNodes[activeService]?.description}</p>
          </article>
        </div>
      </section>

      <section className="section-block is-plain compact-top">
        <SectionHeading
          eyebrow="Notables"
          title="College Notables"
          intro="Notable innovation outcomes and engagement moments from the DigiSchool college ecosystem."
        />
        <MovingCardsRow
          title="Milestones and College Notables"
          items={collegeNotables}
        />
      </section>
    </>
  )
}

export default CollegePage
