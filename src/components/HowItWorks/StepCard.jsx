import { useRef, useState } from 'react'

const ICONS = {
  '01': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  '02': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
  '03': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.69 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.1 4.17 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  '04': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
}

function StepCard({ step, title, description, points, flippable = false }) {
  const cardRef = useRef(null)
  const [tilt, setTilt]     = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [flipped, setFlipped] = useState(false)

  const isActive = step === '03'

  const handleMouseMove = (e) => {
    if (flippable) return          // no tilt when in flip mode
    const rect = cardRef.current.getBoundingClientRect()
    const x =  ((e.clientX - rect.left)  / rect.width  - 0.5) * 14
    const y = -((e.clientY - rect.top)   / rect.height - 0.5) * 14
    setTilt({ x, y })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  const handleClick = () => {
    if (flippable) setFlipped(f => !f)
  }

  /* ── Non-flippable: deep-sea card with 3-D tilt ── */
  if (!flippable) {
    return (
      <div
        ref={cardRef}
        className={`step-card-v2 ${isActive ? 'step-card-v2--active' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: hovered
            ? `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateY(-6px)`
            : 'perspective(800px) rotateX(0) rotateY(0) translateY(0)',
          transition: hovered ? 'transform 0.1s ease' : 'transform 0.4s ease',
        }}
      >
        <div className="step-card-v2__num">{step}</div>
        <div className="step-card-v2__icon">{ICONS[step]}</div>
        <h3 className="step-card-v2__title">{title}</h3>
        <p className="step-card-v2__desc">{description}</p>
        {points && (
          <ul className="step-card-v2__points">
            {points.map((point, i) => (
              <li key={i}>
                <span className="step-card-v2__check">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2 6 5 9 10 3"/>
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        )}
        <div className="step-card-v2__glow" />
      </div>
    )
  }

  /* ── Flippable: click to flip between deep-sea (front) and white (back) ── */
  return (
    <div
      className={`step-flip ${isActive ? 'step-flip--active' : ''} ${flipped ? 'step-flip--flipped' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`${title} — click to ${flipped ? 'collapse' : 'expand'}`}
    >
      <div className="step-flip__inner">

        {/* Front: deep-sea dark card */}
        <div className="step-flip__front">
          <div className="step-card-v2__num">{step}</div>
          <div className="step-card-v2__icon">{ICONS[step]}</div>
          <h3 className="step-card-v2__title">{title}</h3>
          <p className="step-card-v2__desc">{description}</p>
          <div className="step-flip__hint">Click to expand ↗</div>
          <div className="step-card-v2__glow" />
        </div>

        {/* Back: white card with full detail */}
        <div className="step-flip__back">
          <div className="step-flip__back-num">{step}</div>
          <div className="step-flip__back-icon">{ICONS[step]}</div>
          <h3 className="step-flip__back-title">{title}</h3>
          <p className="step-flip__back-desc">{description}</p>
          {points && (
            <ul className="step-flip__back-points">
              {points.map((point, i) => (
                <li key={i}>
                  <span className="step-card-v2__check">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="2 6 5 9 10 3"/>
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          )}
          <div className="step-flip__hint-back">Click to close ↙</div>
        </div>

      </div>
    </div>
  )
}

export default StepCard
