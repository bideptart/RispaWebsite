import { useEffect, useRef, useState } from 'react'

const PARTICLE_COLORS = ['#21897e', '#1a7268', '#2dbfae', '#89c5c3', '#f4b400']

function makeBurst() {
  return Array.from({ length: 14 }, (_, i) => {
    const angle = (360 / 14) * i + (Math.random() * 20 - 10)
    const distance = 26 + Math.random() * 22
    const size = 4 + Math.random() * 3
    return {
      id: i,
      color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
      style: {
        '--angle': `${angle}deg`,
        '--dist': `${distance}px`,
        width: `${size}px`,
        height: `${size}px`,
      },
    }
  })
}

function PricingToggle({ billing, onChange }) {
  const [burst, setBurst] = useState(null)
  const prevBilling = useRef(billing)

  useEffect(() => {
    if (prevBilling.current !== 'yearly' && billing === 'yearly') {
      setBurst({ key: Date.now(), particles: makeBurst() })
    }
    prevBilling.current = billing
  }, [billing])

  useEffect(() => {
    if (!burst) return
    const t = setTimeout(() => setBurst(null), 650)
    return () => clearTimeout(t)
  }, [burst])

  return (
    <div className="pricing-toggle" role="tablist" aria-label="Billing toggle">
      <button
        type="button"
        className={billing === 'monthly' ? 'is-active' : ''}
        onClick={() => onChange('monthly')}
      >
        Monthly
      </button>
      <button
        type="button"
        className={billing === 'yearly' ? 'is-active' : ''}
        onClick={() => onChange('yearly')}
      >
        Yearly
        <span className="pricing-toggle__save">Save 20%</span>
        {burst && (
          <span className="pricing-toggle__burst" key={burst.key} aria-hidden="true">
            {burst.particles.map((p) => (
              <span
                key={p.id}
                className="pricing-toggle__spark"
                style={{ ...p.style, background: p.color }}
              />
            ))}
          </span>
        )}
      </button>
    </div>
  )
}

export default PricingToggle
