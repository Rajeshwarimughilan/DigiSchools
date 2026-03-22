import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { useAdminContent } from '../context/AdminContentContext'
import { legacyLinks, supportChannels } from '../content/siteData'

// Derive first letter of title for icon circle
const channelInitial = (title) => title.replace(/\s+Support$/i, '').charAt(0)

function SupportPage() {
  const { content } = useAdminContent()

  return (
    <>
      <PageMeta
        title="Support & Help"
        description="Get help with DigiSchool programs and products. Contact our team by email, phone, or WhatsApp, browse common questions, or access legacy utility pages from the previous platform."
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="support-hero" aria-labelledby="support-hero-heading">
        <div>
          <p className="eyebrow">Support</p>
          <h1 id="support-hero-heading">Help, Contact Channels &amp; Legacy Access</h1>
          <p>
            Reach our team directly for program support, collaboration enquiries, or technical
            assistance. Archived utility pages from the previous platform are also linked below.
          </p>
        </div>
        <div className="support-hero-board" aria-hidden="true">
          <article>
            <h3>Live Response</h3>
            <p>&lt; 1 Business Day</p>
          </article>
          <article>
            <h3>Channels</h3>
            <p>Email, Phone, WhatsApp</p>
          </article>
          <article>
            <h3>Coverage</h3>
            <p>Programs, Products, Deployments</p>
          </article>
        </div>
      </section>

      {/* ── Contact Channels ──────────────────────────────────────── */}
      <section className="section-block" aria-labelledby="channels-heading">
        <SectionHeading
          id="channels-heading"
          eyebrow="Get in Touch"
          title="Choose the Channel That Works Best for You"
          intro="Our team is available to help with institutional programs, product support, R&D collaborations, and account queries."
        />
        <div className="support-channels-grid" role="list">
          {supportChannels.map((channel) => {
            const isExternal = channel.href?.startsWith('http')
            return (
              <a
                key={channel.title}
                href={channel.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="support-channel-card"
                role="listitem"
                aria-label={`${channel.title}: ${channel.description}`}
              >
                <div className="support-channel-icon" aria-hidden="true">
                  {channelInitial(channel.title)}
                </div>
                <div className="support-channel-content">
                  <h3>{channel.title}</h3>
                  <p>{channel.description}</p>
                </div>
                <span className="support-channel-arrow" aria-hidden="true">&rsaquo;</span>
              </a>
            )
          })}
        </div>
      </section>

      {/* ── Common Questions ──────────────────────────────────────── */}
      <section className="section-block compact-top" aria-labelledby="faq-heading">
        <SectionHeading
          id="faq-heading"
          eyebrow="Common Questions"
          title="Quick Answers Before You Reach Out"
          intro="Most program and product questions fall into one of these categories. If yours is different, contact us directly."
        />
        <div className="support-faq" role="list">
          {content.supportFaq.map((item) => (
            <article key={item.q} className="support-faq-item" role="listitem">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Archived Utility Links ────────────────────────────────── */}
      <section className="section-block compact-top" aria-labelledby="legacy-heading">
        <SectionHeading
          id="legacy-heading"
          eyebrow="Legacy Platform"
          title="Archived Utility &amp; Community Pages"
          intro="These pages are part of the previous version of digischl.com. They may require legacy credentials and are preserved for continuity and order access."
        />
        <div className="legacy-callout" role="note" aria-label="Note about legacy pages">
          <p>
            The links below connect to the original DigiSchool platform (digischl.com). Features
            like the wishlist, cart, and account profile were part of that version. For new program
            enquiries or institutional partnerships, use the contact channels above.
          </p>
        </div>
        <ul className="utility-links-list" aria-label="Archived legacy platform links">
          {legacyLinks.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="utility-link-item"
                aria-label={`${link.title} (opens on legacy platform)`}
              >
                <div className="utility-link-label">
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                </div>
                <span className="utility-link-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default SupportPage

