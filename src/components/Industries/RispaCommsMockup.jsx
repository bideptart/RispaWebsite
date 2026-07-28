import { useState, useEffect } from 'react'

const CHAT_LINES = [
  { role: 'agent', text: 'Good morning! How can I help?' },
  { role: 'caller', text: 'Connect me to billing please.' },
  { role: 'agent', text: 'Transferring you now — one moment.' },
]

const TABS = ['Voice', 'SMS & MMS', 'Team Chat']

export default function RispaCommsMockup({ className = '' }) {
  const [visibleLines, setVisibleLines] = useState(0)

  // Animate chat lines in one by one
  useEffect(() => {
    if (visibleLines >= CHAT_LINES.length) return
    const t = setTimeout(() => setVisibleLines(v => v + 1), 900 + visibleLines * 600)
    return () => clearTimeout(t)
  }, [visibleLines])

  return (
    <div className={`rcp-shell ${className}`}>

      {/* Header bar */}
      <div className="rcp-header">
        <div className="rcp-header__brand">
          <div className="rcp-header__logo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
          </div>
          <div>
            <div className="rcp-header__name">Rispa</div>
            <div className="rcp-header__sub">UNIFIED COMMUNICATIONS</div>
          </div>
        </div>
        <div className="rcp-header__badge">
          <span className="rcp-header__badge-dot" />
          AI-Enhanced · All Channels
        </div>
      </div>

      {/* Tab bar */}
      <div className="rcp-tabs">
        {TABS.map((tab, i) => (
          <div key={tab} className={`rcp-tab ${i === 0 ? 'rcp-tab--active' : ''}`}>
            {i === 0 && (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.69 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.1 4.17 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            )}
            {tab}
          </div>
        ))}
      </div>

      {/* Voice channel row */}
      <div className="rcp-channel">
        <div className="rcp-channel__left">
          <div className="rcp-channel__icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#21897e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.69 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.1 4.17 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div>
            <div className="rcp-channel__name">Voice</div>
            <div className="rcp-channel__stat">1.2M min / day</div>
          </div>
        </div>
        <div className="rcp-tier">Tier-1</div>
      </div>

      {/* Chat transcript */}
      <div className="rcp-chat">
        {CHAT_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="rcp-chat__line">
            <div className="rcp-chat__role">
              {line.role === 'agent' ? 'AI Receptionist' : 'Caller'}
            </div>
            <div className={`rcp-chat__bubble rcp-chat__bubble--${line.role}`}>
              {line.text}
            </div>
          </div>
        ))}
        {visibleLines < CHAT_LINES.length && (
          <div className="rcp-chat__typing">
            <span /><span /><span />
          </div>
        )}
      </div>

      {/* Stats bar */}
      <div className="rcp-stats">
        <div className="rcp-stat">
          <strong>99.999%</strong>
          <span>Uptime SLA</span>
        </div>
        <div className="rcp-stat">
          <strong>150+</strong>
          <span>Countries</span>
        </div>
        <div className="rcp-stat">
          <strong>70+</strong>
          <span>Global PoPs</span>
        </div>
        <div className="rcp-stat">
          <strong>4</strong>
          <span>Channels · One Platform</span>
        </div>
      </div>
    </div>
  )
}
