import { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import Badge from '../Badge'
import { Phone, Cloud, Users, Calendar, Zap } from 'lucide-react'
import { targets, events, syncStats } from '../../data/syncFeed'
import './sync-panel.css'

const ICONS = { cloud: Cloud, users: Users, calendar: Calendar, zap: Zap }
const ROWS = 5

function Integrations() {
  const [dest, setDest] = useState(0)
  const [feed, setFeed] = useState(() =>
    events.slice(0, ROWS).map((e, i) => ({ ...e, id: i, age: i * 7 + 2 })),
  )
  const idRef = useRef(ROWS)
  const srcRef = useRef(ROWS)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const swapDest = setInterval(() => {
      setDest((d) => (d + 1) % targets.length)
    }, 4200)

    const push = setInterval(() => {
      setFeed((f) => {
        const next = events[srcRef.current % events.length]
        srcRef.current += 1
        const row = { ...next, id: idRef.current, age: 0 }
        idRef.current += 1
        return [row, ...f].slice(0, ROWS)
      })
    }, 2600)

    const tick = setInterval(() => {
      setFeed((f) => f.map((r) => ({ ...r, age: r.age + 1 })))
    }, 1000)

    return () => {
      clearInterval(swapDest)
      clearInterval(push)
      clearInterval(tick)
    }
  }, [])

  const target = targets[dest]
  const TargetIcon = ICONS[target.icon]

  return (
    <section className="section integrations-section" id="integrations">
      <Container>
        <div className="integrations-layout">

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

          <div className="integrations-layout__mockup">
            <div className="sync">

              <header className="sync__wire">
                <div className="sync__node">
                  <span className="sync__icon sync__icon--brand">
                    <Phone size={17} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <span className="sync__meta">
                    <span className="sync__name">Rispa</span>
                    <span className="sync__state">Connected</span>
                  </span>
                </div>

                <div className="sync__line" aria-hidden="true">
                  <span className="sync__dot" />
                  <span className="sync__dot sync__dot--b" />
                </div>

                <div className="sync__node sync__node--dst" key={target.name}>
                  <span className="sync__icon" style={{ background: target.color }}>
                    <TargetIcon size={17} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <span className="sync__meta">
                    <span className="sync__name">{target.name}</span>
                    <span className="sync__state sync__state--sync">Syncing</span>
                  </span>
                </div>
              </header>

              <div className="sync__feed">
                <div className="sync__feed-head">
                  <span className="sync__pip" aria-hidden="true" />
                  Live sync feed
                  <span className="sync__realtime">Real-time</span>
                </div>

                <ul className="sync__rows">
                  {feed.map((r) => (
                    <li className="sync__row" key={r.id}>
                      <span className="sync__bullet" style={{ background: r.color }} aria-hidden="true" />
                      <span className="sync__label">{r.label}</span>
                      <span className="sync__tag" style={{ color: r.color }}>{r.tag}</span>
                      <span className="sync__age">{r.age === 0 ? 'now' : r.age + 's'}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sync__stats">
                {syncStats.map((s) => (
                  <div className="sync__stat" key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Integrations