import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Container from '../Container'
import SectionTitle from '../SectionTitle'

const Icon = {
  Bolt: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Chat: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  Globe: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Mic: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  ),
  Phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Transfer: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  ),
  Wrench: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L2 19l3 3 7.3-7.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2z" />
    </svg>
  ),
  Calendar: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Webhook: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M7 17a4 4 0 1 1 2.83-6.83" /><path d="M13 4.5a4 4 0 1 1 3.9 5.9" /><path d="M12 20a4 4 0 1 0 3.9-5.9" />
      <circle cx="9" cy="17" r="1" /><circle cx="17" cy="10" r="1" /><circle cx="16" cy="20" r="1" />
    </svg>
  ),
  Transcript: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  ),
  Shield: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  Layers: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  ),
}

const CATEGORIES = ['All', 'Voice', 'Telephony', 'Integrations', 'Operations']

const capabilities = [
  {
    category: 'Voice',
    Icon: Icon.Bolt,
    title: 'Sub-300ms latency',
    desc: 'Native audio-to-audio modeling streams every response back in under 300ms — no robotic dead air, no STT/TTS relay.',
  },
  {
    category: 'Voice',
    Icon: Icon.Chat,
    title: 'Natural turn-taking',
    desc: 'Real-time interruption detection lets agents pause, listen, and adjust mid-conversation without breaking the flow.',
  },
  {
    category: 'Telephony',
    Icon: Icon.Phone,
    title: 'Carrier-grade telephony',
    desc: 'Inbound and outbound PSTN calling over SIP, with custom carrier setup and your own phone numbers.',
  },
  {
    category: 'Voice',
    Icon: Icon.Globe,
    title: 'Multilingual voices',
    desc: '10+ languages out of the box, with auto-detection and mid-call switching as your caller does.',
  },
  {
    category: 'Integrations',
    Icon: Icon.Wrench,
    title: 'Tools & function calling',
    desc: 'Look up CRMs, book calendars, and query inventory — your agent uses the same APIs your team does.',
  },
  {
    category: 'Telephony',
    Icon: Icon.Transfer,
    title: 'Live transfer & handoff',
    desc: 'Warm-transfer to a human, swap between specialist agents, and pass full context — no repeating the customer.',
  },
  {
    category: 'Voice',
    Icon: Icon.Mic,
    title: 'Background noise removal',
    desc: 'AI-powered noise and echo cancellation so callers from a busy street, café, or car still come through cleanly.',
  },
  {
    category: 'Operations',
    Icon: Icon.Transcript,
    title: 'Live transcripts & analytics',
    desc: 'Every call streamed to text with real-time transcripts and summaries — searchable from day one.',
  },
  {
    category: 'Operations',
    Icon: Icon.Shield,
    title: 'Recording, redaction & compliance',
    desc: 'Unlimited call recording with PII redaction, SOC 2-aligned infrastructure, and audit logs out of the box.',
  },
  {
    category: 'Integrations',
    Icon: Icon.Calendar,
    title: 'Scheduling & calendars',
    desc: 'Native Google, Outlook, and Calendly integrations. Book, reschedule, and confirm — all over voice.',
  },
  {
    category: 'Integrations',
    Icon: Icon.Webhook,
    title: 'Webhooks & APIs',
    desc: 'Trigger workflows on call start, transcript chunks, or completion. Pipe data into your stack in real time.',
  },
  {
    category: 'Operations',
    Icon: Icon.Layers,
    title: 'Massive concurrency',
    desc: 'Scale from one call to thousands in parallel with auto-scaling infrastructure. Burst capacity is built in.',
  },
]

function Capabilities() {
  const [activeCategory, setActiveCategory] = useState('All')
  const intervalRef = useRef(null)

  const startAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveCategory((prev) => {
        const nextIndex = (CATEGORIES.indexOf(prev) + 1) % CATEGORIES.length
        return CATEGORIES[nextIndex]
      })
    }, 3000)
  }

  useEffect(() => {
    startAutoRotate()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const handleSelect = (cat) => {
    setActiveCategory(cat)
    startAutoRotate()
  }

  return (
    <section className="section capabilities-section">
      <SectionTitle
        eyebrow="Capabilities"
        title={
          <>
            Every piece of the stack, <span className="highlighted-text">built in.</span>
          </>
        }
        description="Voice, telephony, integrations, and operations — the twelve building blocks behind every production-ready agent."
        align="center"
      />

      <Container>
        <div className="capabilities-filters" role="tablist" aria-label="Capability category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={activeCategory === cat ? 'is-active' : ''}
              onClick={() => handleSelect(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="capabilities-grid">
          {capabilities.map((item, i) => {
            const isBlurred = activeCategory !== 'All' && item.category !== activeCategory
            return (
              <motion.div
                key={item.title}
                className={`capability-item${isBlurred ? ' is-blurred' : ''}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ y: 0 }}
                animate={{ opacity: isBlurred ? 0.18 : 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="capability-item__icon">
                  <item.Icon />
                </span>
                <h3 className="capability-item__title">{item.title}</h3>
                <p className="capability-item__desc">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Capabilities
