import PageMeta from '../components/PageMeta'
import { policyBlocks } from '../content/siteData'

const EFFECTIVE_DATE = 'Effective: January 1, 2024'
const LAST_UPDATED = 'Last Updated: March 2026'

const toSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')

function PoliciesPage() {
  const policyIds = policyBlocks.map((p) => toSlug(p.title))

  return (
    <>
      <PageMeta
        title="Privacy, Terms & Policies"
        description="Read DigiSchool Corporation's Privacy Policy, Terms & Conditions, and Refund Policy — written in clear, readable language with complete section detail."
      />

      <div className="policy-layout">
        <aside className="policy-nav" aria-label="Jump to policy section">
          <p className="policy-nav-eyebrow">Jump to policy</p>
          {policyBlocks.map((policy, i) => (
            <a key={policy.title} href={`#${policyIds[i]}`} className="policy-nav-link">
              {policy.title}
            </a>
          ))}
        </aside>

        <div className="policy-content">
          {policyBlocks.map((policy, pIdx) => (
            <section
              key={policy.title}
              id={policyIds[pIdx]}
              className="policy-section"
              aria-labelledby={`policy-heading-${policyIds[pIdx]}`}
            >
              <div className="policy-section-header">
                <p className="eyebrow">Policy</p>
                <h2 id={`policy-heading-${policyIds[pIdx]}`}>{policy.title}</h2>
                <p className="policy-intro-text">{policy.intro}</p>
                <p className="policy-effective">{EFFECTIVE_DATE}</p>
              </div>

              <div className="policy-body" role="list">
                {policy.sections.map((sec, sIdx) => (
                  <article
                    key={sec.heading}
                    className="policy-article"
                    role="listitem"
                  >
                    <div className="policy-article-num" aria-hidden="true">
                      {String(sIdx + 1).padStart(2, '0')}
                    </div>
                    <div className="policy-article-body">
                      <h3>{sec.heading}</h3>
                      <p>{sec.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}

export default PoliciesPage

