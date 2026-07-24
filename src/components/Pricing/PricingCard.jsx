import Button from '../Button'
import { formatPrice } from '../../utils/helpers'

function PricingCard({ plan, billing }) {
  return (
    <article className={`pricing-card ${plan.featured ? 'is-featured' : ''}`}>
      {plan.featured ? <span className="pricing-card__tag">Most popular</span> : null}
      <h3>{plan.name}</h3>
      <div className="pricing-card__price">
        <strong>{formatPrice(plan.price)}</strong>
        <span>{plan.price === 0 ? 'custom quote' : `per user / ${billing === 'monthly' ? 'month' : 'month, billed yearly'}`}</span>
      </div>
      <p>{plan.description}</p>
      <ul>
        {plan.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Button as="a" href="#cta" variant={plan.featured ? 'primary' : 'secondary'}>
        {plan.cta}
      </Button>
    </article>
  )
}

export default PricingCard
