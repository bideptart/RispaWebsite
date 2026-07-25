import { useMemo, useState } from 'react'
import { pricingPlans } from '../../data/pricing'
import Container from '../Container'
import SectionTitle from '../SectionTitle'
import PricingCard from './PricingCard'
import PricingToggle from './PricingToggle'

const compareRows = [
  { label: 'Best for', values: ['Solo launch', 'Growing teams', 'High-volume teams'] },
  { label: 'Included minutes', values: ['250 min', '800 min', '3,000 min'] },
  { label: 'Agent capacity', values: ['Up to 3', 'Up to 10', 'Unlimited'] },
  { label: 'Support', values: ['Email support', 'Priority support', 'Dedicated manager'] },
]

function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const plans = useMemo(() => pricingPlans[billing], [billing])

  return (
    <section className="section section--tight" id="pricing">
      <SectionTitle
        eyebrow="Pricing"
        title="Simple pricing that scales with your team."
        description="Choose a plan that fits your current footprint and expand as your usage grows."
        align="center"
      />
      <Container className="pricing-shell">
        <div className="pricing-shell__panel">
          <div className="pricing-shell__header">
            <span className="pricing-shell__eyebrow">Flexible billing</span>
            <p className="pricing-shell__copy">
              Keep the same soft contrast and refined finish as the rest of the site while presenting the pricing in a more structured, container-led layout.
            </p>
          </div>

          <PricingToggle billing={billing} onChange={setBilling} />

          <div className="pricing-grid">
            {plans.map((plan) => (
              <PricingCard key={`${billing}-${plan.name}`} plan={plan} billing={billing} />
            ))}
          </div>

          <div className="pricing-compare">
            <div className="pricing-compare__header">Compare the options</div>
            <div className="pricing-compare__body">
              {compareRows.map((row) => (
                <div key={row.label} className="pricing-compare__row">
                  <span>{row.label}</span>
                  <div className="pricing-compare__values">
                    {row.values.map((value) => (
                      <span key={value}>{value}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Pricing
