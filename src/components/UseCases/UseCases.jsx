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
    description: 'Automatically routes calls based on customer intent to the right team — without unnecessary transfers or hold time.',
    link: 'Explore Smart Routing',
    accent: '#21897e',
    glow: 'rgba(33,137,126,0.08)',
  },
  {
    Icon: Mic,
    tags: ['Transcription', 'PII Protection', 'Search'],
    title: 'Call Recording',
    description: 'Record, transcribe, and search every conversation with built-in PII redaction — compliance-ready out of the box.',
    link: 'Explore Call Recording',
    accent: '#0284c7',
    glow: 'rgba(2,132,199,0.08)',
  },
  {
    Icon: Inbox,
    tags: ['Voice', 'SMS', 'WhatsApp'],
    title: 'Omnichannel Inbox',
    description: 'Manage voice, SMS, and WhatsApp conversations in one shared workspace — full context on every interaction.',
    link: 'Explore Omnichannel',
    accent: '#d97706',
    glow: 'rgba(217,119,6,0.08)',
  },
  {
    Icon: Database,
    tags: ['HubSpot', 'Salesforce', 'Zoho'],
    title: 'CRM Integrations',
    description: 'Connect Rispa to HubSpot, Salesforce, Zoho, Freshdesk and more — every call auto-logged, no manual entry needed.',
    link: 'Explore Integrations',
    accent: '#7c3aed',
    glow: 'rgba(124,58,237,0.08)',
  },
  {
    Icon: BarChart2,
    tags: ['Real-Time', 'CSAT', 'SLA'],
    title: 'Live Analytics',
    description: 'Monitor CSAT, SLA adherence, call volume, and agent performance with real-time dashboards and weekly reports.',
    link: 'Explore Live Analytics',
    accent: '#db2777',
    glow: 'rgba(219,39,119,0.08)',
  },
  {
    Icon: Shield,
    tags: ['SOC 2', 'GDPR', 'Encryption'],
    title: 'Enterprise Security',
    description: 'End-to-end encryption, role-based access, audit logs, and SOC 2 compliance — built for enterprise requirements.',
    link: 'Explore Security',
    accent: '#21897e',
    glow: 'rgba(33,137,126,0.08)',
  },
]

function UseCaseCard({ card }) {
  const { Icon, tags, title, description, link, accent, glow } = card
  return (
    <article
      className="uc-card"
      style={{ '--uc-accent': accent, '--uc-glow': glow }}
    >
      <div className="uc-card__icon">
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <div className="uc-card__tags">
        {tags.map(t => (
          <span key={t} className="uc-card__tag">{t}</span>
        ))}
      </div>
      <h3 className="uc-card__title">{title}</h3>
      <p className="uc-card__desc">{description}</p>
      <a className="uc-card__link">{link} →</a>
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

        <div className="uc-grid">
          {useCaseCards.map(card => (
            <UseCaseCard key={card.title} card={card} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default UseCases
