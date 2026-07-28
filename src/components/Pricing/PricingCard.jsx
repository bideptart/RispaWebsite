import { useEffect, useRef, useState } from 'react'
import Button from '../Button'

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

function PricingCard({ plan, billing }) {
  const [displayPrice, setDisplayPrice] = useState(plan.price)
  const prevPriceRef = useRef(plan.price)

  useEffect(() => {
    const from = prevPriceRef.current
    const to = plan.price
    if (from === to) return
    prevPriceRef.current = to

    const duration = 600
    const start = performance.now()
    let raf

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const value = from + (to - from) * easeOutCubic(t)
      setDisplayPrice(Math.round(value))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(raf)
  }, [plan.price])

  const isFeatured = plan.featured
  const isYearly = billing === 'yearly'

  return (
    <article className={`pricing-card ${isFeatured ? 'is-featured' : ''}`}>
      {isFeatured && <span className="pricing-card__badge">{plan.tag}</span>}

      <div className="pricing-card__top">
        <h3>{plan.name}</h3>
        {!isFeatured && <span className="pricing-card__tag">{plan.tag}</span>}
        <p className="pricing-card__description">{plan.description}</p>
      </div>

      <div className="pricing-card__price">
        <span className="pricing-card__currency">$</span>
        <strong>
          <span
            style={{
              display: 'inline-block',
              fontVariantNumeric: 'tabular-nums',
              fontFeatureSettings: '"tnum"',
            }}
          >
            {displayPrice}
          </span>
        </strong>
        <span className="pricing-card__price-suffix">
          / seat / {billing === 'monthly' ? 'month' : 'mo · billed yearly'}
        </span>
        {isYearly && plan.saveTag && (
          <span className="pricing-card__save">{plan.saveTag}</span>
        )}
      </div>

      {/* Plan quick stats (minutes / rate / concurrency) as one compact meta line */}
      <div className="pricing-card__meta-line">
        <span>{plan.includedMinutes?.toLocaleString()} min</span>
        <span className="pricing-card__meta-dot">·</span>
        <span>{plan.voiceRate}</span>
        <span className="pricing-card__meta-dot">·</span>
        <span>{plan.concurrency} agent{plan.concurrency === 1 ? '' : 's'}</span>
      </div>

      <ul className="pricing-card__list">
        {plan.highlights.map((item) => (
          <li key={item}>
            <span className="pricing-card__check">
              <CheckIcon />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <Button
        as="a"
        href="#cta"
        variant={isFeatured ? 'primary' : 'secondary'}
        className="pricing-card__cta"
      >
        {plan.cta}
      </Button>
    </article>
  )
}

export default PricingCard
