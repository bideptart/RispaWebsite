import Button from '../Button'
import { formatPrice } from '../../utils/helpers'

function PricingCard({ plan, billing }) {
  return (
    <article className={`pricing-card ${plan.featured ? 'is-featured' : ''}`}>
      <div className="pricing-card__top">
        <div className="pricing-card__heading">
          <h3>{plan.name}</h3>
          {plan.featured ? <span className="pricing-card__tag">Most popular</span> : null}
        </div>
        <p className="pricing-card__description">{plan.description}</p>
      </div>

      <div className="pricing-card__price">
        <strong>{formatPrice(plan.price)}</strong>
        <span>
          {plan.price === 0 ? 'custom quote' : `/ user / ${billing === 'monthly' ? 'mo' : 'mo, billed yearly'}`}
        </span>
      </div>

      <div className="pricing-card__meta">
        <span>{plan.featured ? 'Best for scaling teams' : 'Great for getting started'}</span>
        <span>{plan.highlights[0]}</span>
      </div>

      <ul className="pricing-card__list">
        {plan.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <Button
        as="a"
        href="#cta"
        variant={plan.featured ? 'primary' : 'secondary'}
        style={{
          width: '100%',
          padding: '0.85rem 1.5rem',
          borderRadius: '999px',
          fontWeight: '700',
          fontSize: '0.95rem',
          transition: 'all 0.3s ease'
        }}
      >
        {plan.cta}
      </Button>
    </article>
  )
}

export default PricingCard
