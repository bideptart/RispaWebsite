import { useEffect, useRef } from 'react'
import Container from '../Container'
import Badge from '../Badge'
import {
  GitBranch, Mic, Inbox, Database, BarChart2, Shield,
} from 'lucide-react'
import './use-cases-motion.css'

const useCaseCards = [
  {
    Icon: GitBranch,
    tags: ['AI-Powered', 'Intent-Based', 'Skills-Based'],
    title: 'Smart Routing',
    description: 'Automatically routes calls based on customer intent to the right team without unnecessary transfers.',
    link: 'Explore Smart Routing',
  },
  {
    Icon: Mic,
    tags: ['Transcription', 'PII Protection', 'Search'],
    title: 'Call Recording',
    description: 'Record, transcribe, and search conversations with secure PII protection built in at every step.',
    link: 'Explore Call Recording',
  },
  {
    Icon: Inbox,
    tags: ['Voice', 'SMS', 'WhatsApp'],
    title: 'Omnichannel Inbox',
    description: 'Manage voice, SMS, WhatsApp, chat, and email conversations in one shared workspace.',
    link: 'Explore Omnichannel Inbox',
  },
  {
    Icon: Database,
    tags: ['HubSpot', 'Salesforce', 'Zoho'],
    title: 'CRM Integrations',
    description: 'Connect with HubSpot, Salesforce, Zoho, Zendesk, Freshdesk, and more — no custom dev.',
    link: 'Explore Integrations',
  },
  {
    Icon: BarChart2,
    tags: ['Real-Time', 'CSAT', 'SLA'],
    title: 'Live Analytics',
    description: 'Monitor CSAT, SLA, call activity, and agent performance with real-time reporting.',
    link: 'Explore Live Analytics',
  },
]

const BARS = Array.from({ length: 30 }, (_, i) => 3 + Math.round(Math.abs(Math.sin(i * 1.7)) * 15))

function trackPointer(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', (e.clientX - r.left) + 'px')
  el.style.setProperty('--my', (e.clientY - r.top) + 'px')
}

function UseCaseCard({ card, wide, index }) {
  const { Icon, tags, title, description, link } = card
  return (
    <article
      className={`uc-card-ds ${wide ? 'uc-card-ds--wide' : ''}`}
      style={{ '--i': index }}
      onMouseMove={trackPointer}
    >
      <div className="uc-card-ds__glow" />
      <div className="uc-wave" aria-hidden="true">
        {BARS.map((h, b) => (
          <span key={b} style={{ '--h': h + 'px', '--b': b }} />
        ))}
      </div>
      <div className="uc-card-ds__icon">
        <Icon size={20} strokeWidth={1.8} />
      </div>
      <div className="uc-card-ds__tags">
        {tags.map(t => (
          <span key={t} className="uc-card-ds__tag">{t}</span>
        ))}
      </div>
      <h3 className="uc-card-ds__title">{title}</h3>
      <p className="uc-card-ds__desc">{description}</p>
      <a className="uc-card-ds__link">
        {link}
        <span className="uc-card-ds__arrow">&rarr;</span>
      </a>
    </article>
  )
}

function UseCases() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    const cards = root.querySelectorAll('.uc-card-ds')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    root.classList.add('uc-anim')
    const io = new IntersectionObserver(reveal, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' })
    cards.forEach((c) => io.observe(c))
    return () => io.disconnect()
  }, [])

  function reveal(entries, io) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-in')
      io.unobserve(entry.target)
    })
  }

  return (
    <section className="section" id="use-cases" ref={rootRef}>
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
          {useCaseCards.slice(0, 2).map((card, i) => (
            <UseCaseCard key={card.title} card={card} index={i} wide />
          ))}
        </div>

        {/* Bottom row: 3 cards */}
        <div className="uc-grid-bottom">
          {useCaseCards.slice(2).map((card, i) => (
            <UseCaseCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default UseCases