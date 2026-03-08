import PageMeta from '../components/PageMeta'
import { policyBlocks } from '../content/siteData'

const EFFECTIVE_DATE = 'Effective: January 1, 2024'

const toSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')

function PoliciesPage() {
  const policyIds = policyBlocks.map((p) => toSlug(p.title))

  return (
    <>
      <PageMeta
        title="Privacy, Terms & Policies"
        description="Read DigiSchool Corporation's Privacy Policy, Terms & Conditions, and Refund Policy — written in clear, readable language with complete section detail."
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="internal-hero" aria-labelledby="policies-hero-heading">
        <div>
          <p className="eyebrow">Legal &amp; Policies</p>
          <h1 id="policies-hero-heading">Privacy, Terms &amp; Refund Policies</h1>
          <p>
            Our policies are written to be readable — organised into clear sections with honest
            language about how we handle your information and what you can expect from us.
          </p>
        </div>
        <div className="hero-policy-art" aria-hidden="true" />
      </section>

      {/* ── Sticky policy jump nav ────────────────────────────────── */}
      <nav className="policy-nav" aria-label="Jump to policy section">
        <span className="policy-nav-eyebrow">Jump to:</span>
        {policyBlocks.map((policy, i) => (
          <a key={policy.title} href={`#${policyIds[i]}`} className="policy-nav-link">
            {policy.title}
          </a>
        ))}
      </nav>

      {/* ── Policy Sections ───────────────────────────────────────── */}
      {policyBlocks.map((policy, pIdx) => (
        <section
          key={policy.title}
          id={policyIds[pIdx]}
          className="section-block compact-top policy-section"
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
    </>
  )
}

export default PoliciesPage

