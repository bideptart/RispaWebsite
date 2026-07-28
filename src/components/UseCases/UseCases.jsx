import Container from '../Container'
import Badge from '../Badge'
import {
  GitBranch, Mic, Inbox, Database, BarChart2, Shield,
} from 'lucide-react'

const useCaseCards = [
  {
    Icon: GitBranch,
    tags: ['AI-Powered', 'Intent-Based', 'Skills-Based'],
    title: 'Smart Routing',
    description: 'Automatically routes calls based on customer intent to the right team without unnecessary transfers.',
    link: 'Explore Smart Routing',
    accent: '#21897e',
  },
  {
    Icon: Mic,
    tags: ['Transcription', 'PII Protection', 'Search'],
    title: 'Call Recording',
    description: 'Record, transcribe, and search conversations with secure PII protection built in at every step.',
    link: 'Explore Call Recording',
    accent: '#0284c7',
  },
  {
    Icon: Inbox,
    tags: ['Voice', 'SMS', 'WhatsApp'],
    title: 'Omnichannel Inbox',
    description: 'Manage voice, SMS, WhatsApp, chat, and email conversations in one shared workspace.',
    link: 'Explore Omnichannel Inbox',
    accent: '#d97706',
  },
  {
    Icon: Database,
    tags: ['HubSpot', 'Salesforce', 'Zoho'],
    title: 'CRM Integrations',
    description: 'Connect with HubSpot, Salesforce, Zoho, Zendesk, Freshdesk, and more — no custom dev.',
    link: 'Explore Integrations',
    accent: '#7c3aed',
  },
  {
    Icon: BarChart2,
    tags: ['Real-Time', 'CSAT', 'SLA'],
    title: 'Live Analytics',
    description: 'Monitor CSAT, SLA, call activity, and agent performance with real-time reporting.',
    link: 'Explore Live Analytics',
    accent: '#db2777',
  },
]

function UseCaseCard({ card, wide }) {
  const { Icon, tags, title, description, link, accent } = card
  return (
    <article className={`uc-card-ds ${wide ? 'uc-card-ds--wide' : ''}`}>
      {/* Ambient glow */}
      <div className="uc-card-ds__glow" style={{ '--ds-accent': accent }} />

      <div className="uc-card-ds__icon" style={{ '--ds-accent': accent }}>
        <Icon size={20} strokeWidth={1.8} />
      </div>

      <div className="uc-card-ds__tags">
        {tags.map(t => (
          <span key={t} className="uc-card-ds__tag" style={{ '--ds-accent': accent }}>{t}</span>
        ))}
      </div>

      <h3 className="uc-card-ds__title">{title}</h3>
      <p className="uc-card-ds__desc">{description}</p>
      <a className="uc-card-ds__link" style={{ color: accent }}>{link} →</a>
    </article>
  )
}

function UseCases() {
  return (
    <section className="section" id="use-cases">
      <Container>
        <div className="section-title-row" style={{ marginBottom: '2.5rem' }}>
          <div className="section-title-row__left">
            <Badge>REAL-WORLD USE CASES</Badge>
            <h2 className="section-title-row__heading">
              Built for how your<br />business actually works.
            </h2>
          </div>
          <div className="section-title-row__right">
            <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1.25rem' }}>
              <p className="section-title-row__desc">
                Whatever industry you're in, Rispa adapts to the calls you receive every day — with purpose-built features that handle the heavy lifting.
              </p>
            </div>
          </div>
        </div>

        {/* Top row: 2 wide cards */}
        <div className="uc-grid-top">
          {useCaseCards.slice(0, 2).map(card => (
            <UseCaseCard key={card.title} card={card} wide />
          ))}
        </div>

        {/* Bottom row: 3 cards */}
        <div className="uc-grid-bottom">
          {useCaseCards.slice(2).map(card => (
            <UseCaseCard key={card.title} card={card} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default UseCases
