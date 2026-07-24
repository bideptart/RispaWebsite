import { useMemo, useState } from 'react'
import { pricingPlans } from '../../data/pricing'
import Container from '../Container'
import SectionTitle from '../SectionTitle'
import PricingCard from './PricingCard'
import PricingToggle from './PricingToggle'

function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const plans = useMemo(() => pricingPlans[billing], [billing])

  return (
    <section className="section" id="pricing">
      <SectionTitle
        eyebrow="Pricing"
        title="Simple pricing that scales with your team."
        description="The pricing block keeps the same soft contrast, refined borders, and clean hierarchy used across the rest of the page."
        align="center"
      />
      <Container className="pricing-shell">
        <PricingToggle billing={billing} onChange={setBilling} />
        <div className="pricing-grid">
          {plans.map((plan) => (
            <PricingCard key={`${billing}-${plan.name}`} plan={plan} billing={billing} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Pricing
