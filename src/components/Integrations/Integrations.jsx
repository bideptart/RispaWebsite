import { useState, useEffect } from 'react'
import Container from '../Container'
import Badge from '../Badge'

const FEED_ITEMS = [
  { color: '#21897e', label: 'Call ended · 3m 47s',       tag: 'AI Summary',  tagColor: '#21897e', tagBg: '#e6f5f3', source: 'Rispa' },
  { color: '#3b82f6', label: 'Contact created → Lead',    tag: 'CRM Sync',    tagColor: '#3b82f6', tagBg: '#eff6ff', source: 'Salesforce' },
  { color: '#8b5cf6', label: 'Follow-up SMS dispatched',  tag: 'Automation',  tagColor: '#8b5cf6', tagBg: '#f5f3ff', source: 'Rispa' },
  { color: '#f59e0b', label: 'Appointment booked · 10AM', tag: 'Calendar',    tagColor: '#f59e0b', tagBg: '#fffbeb', source: 'Google Cal' },
]

function AnimatedFeedRow({ item, index }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300 + index * 350)
    return () => clearTimeout(t)
  }, [index])

  return (
    <div
      className="crm-feed-row"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-12px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      <span className="crm-feed-dot" style={{ background: item.color }} />
      <span className="crm-feed-label">{item.label}</span>
      <span className="crm-feed-tag" style={{ color: item.tagColor, background: item.tagBg }}>
        {item.tag}
      </span>
      <span className="crm-feed-source">{item.source}</span>
    </div>
  )
}

function Integrations() {
  return (
    <section className="section integrations-section" id="integrations">
      <Container>
        <div className="integrations-layout">

          {/* Left — copy */}
          <div className="integrations-layout__copy">
            <Badge>PLAYS WELL WITH OTHERS</Badge>
            <h2 className="section-title-row__heading" style={{ marginTop: '0.75rem' }}>
              One platform.<br />
              <span className="text-teal">Every conversation</span><br />
              your business runs.
            </h2>
            <p className="section-title-row__desc" style={{ marginTop: '0.75rem' }}>
              Connect Rispa to your CRM, calendar, and automation tools in minutes — calls logged, deals updated, follow-ups triggered automatically.
            </p>
            <ul className="integrations-bullets">
              <li>✓ Auto-log every call to HubSpot or Salesforce</li>
              <li>✓ Trigger workflows in Zapier after each call</li>
              <li>✓ Sync appointments to Google Calendar instantly</li>
              <li>✓ Push SMS follow-ups via Twilio or WhatsApp</li>
            </ul>
          </div>

          {/* Right — CRM sync mockup */}
          <div className="integrations-layout__mockup">
            <div className="crm-mockup">

              {/* Connection header */}
              <div className="crm-connection">
                <div className="crm-app crm-app--left">
                  <div className="crm-app__icon crm-app__icon--teal">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="crm-app__name">Rispa</div>
                    <div className="crm-app__status crm-app__status--green">● ACTIVE</div>
                  </div>
                </div>

                <div className="crm-connection__arrow">
                  <svg width="48" height="16" viewBox="0 0 48 16">
                    <line x1="0" y1="8" x2="36" y2="8" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4 3"/>
                    <polyline points="32,4 40,8 32,12" fill="none" stroke="#d1d5db" strokeWidth="1.5"/>
                  </svg>
                </div>

                <div className="crm-app crm-app--right">
                  <div className="crm-app__icon crm-app__icon--orange">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                  </div>
                  <div>
                    <div className="crm-app__name">Salesforce</div>
                    <div className="crm-app__status crm-app__status--orange">● SYNCING</div>
                  </div>
                </div>
              </div>

              {/* Live feed */}
              <div className="crm-feed">
                <div className="crm-feed__header">
                  <span className="crm-feed__live-dot" />
                  <span className="crm-feed__title">Live Sync Feed</span>
                  <span className="crm-feed__badge">Real-time</span>
                </div>
                {FEED_ITEMS.map((item, i) => (
                  <AnimatedFeedRow key={i} item={item} index={i} />
                ))}
              </div>

              {/* Stats row */}
              <div className="crm-stats">
                <div className="crm-stat">
                  <strong>100%</strong>
                  <span>Calls logged</span>
                </div>
                <div className="crm-stat">
                  <strong>&lt;1s</strong>
                  <span>Sync latency</span>
                </div>
                <div className="crm-stat">
                  <strong>$0</strong>
                  <span>Setup fee</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Integrations
