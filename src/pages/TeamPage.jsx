import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { media, teamPillars } from '../content/siteData'

function TeamPage() {
  return (
    <>
      <PageMeta
        title="Team Behind DigiSchool"
        description="Meet the team pillars behind DigiSchool across R&D engineering, product/software, academic delivery, and implementation support."
      />

      <section className="team-hero">
        <div className="team-hero-copy">
          <p className="eyebrow">Team</p>
          <h1>The Team Behind DigiSchool</h1>
          <p>
            DigiSchool operates through coordinated specialist teams that deliver research, software,
            academic programs, and long-term implementation support.
          </p>
          <p className="team-hero-subline">
            A single operating rhythm drives every project: collaborate early, execute with precision,
            and sustain outcomes through continuous support.
          </p>
        </div>
        <div className="team-hero-cluster" aria-hidden="true">
          <article className="team-hero-circle circle-main" style={{ '--team-circle-bg': `url(${media.partnership})` }}>
            <span>Collaboration</span>
          </article>
          <article className="team-hero-circle circle-overlap" style={{ '--team-circle-bg': `url(${media.students})` }}>
            <span>Execution</span>
          </article>
        </div>
      </section>

      <section className="section-block">
        <SectionHeading
          eyebrow="Functional Team"
          title="One Integrated Team, Four Delivery Engines"
          intro="DigiSchool avoids siloed hand-offs. Each functional unit owns measurable outcomes while operating in one shared execution model."
        />

        <div className="team-operating-model">
          {teamPillars.map((item) => (
            <article key={item.group} className="team-operating-row">
              <h3>{item.group}</h3>
              <p>{item.scope}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default TeamPage
