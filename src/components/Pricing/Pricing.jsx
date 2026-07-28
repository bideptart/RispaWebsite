import { useMemo, useState } from 'react'
import { pricingPlans, pricingCompareRows } from '../../data/pricing'
import Container from '../Container'
import PricingCard from './PricingCard'
import PricingToggle from './PricingToggle'

const compareColumns = ['Starter', 'Growth', 'Scale']
const compareFeatured = 'Growth'

function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const plans = useMemo(() => pricingPlans[billing], [billing])

  return (
    <section className="section section--tight" id="pricing">
      <Container className="pricing-shell">
        <div className="pricing-shell__panel">
          <PricingToggle billing={billing} onChange={setBilling} />

          <div className="pricing-shell__note">
            <span className="pricing-shell__note-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </span>
            <span className="pricing-shell__eyebrow">Flexible billing</span>
            <p className="pricing-shell__copy">
              Keep the same soft contrast and refined finish as the rest of the site while presenting the pricing in a more structured, container-led layout.
            </p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} billing={billing} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function PricingCompare() {
  return (
    <section className="section section--tight" id="pricing-compare">
      <Container>
        <div className="pricing-compare-table">
          <div className="pricing-compare-table__row pricing-compare-table__row--head">
            <div className="pricing-compare-table__cell pricing-compare-table__cell--label">Feature</div>
            {compareColumns.map((col) => (
              <div
                key={col}
                className={`pricing-compare-table__cell${col === compareFeatured ? ' pricing-compare-table__cell--featured' : ''}`}
              >
                <span className="pricing-compare-table__col-name">{col}</span>
                {col === compareFeatured && (
                  <span className="pricing-compare-table__badge">Most popular</span>
                )}
              </div>
            ))}
          </div>
          {pricingCompareRows.map((row) => (
            <div key={row.label} className="pricing-compare-table__row">
              <div className="pricing-compare-table__cell pricing-compare-table__cell--label">{row.label}</div>
              {row.values.map((value, i) => (
                <div
                  key={compareColumns[i]}
                  className={`pricing-compare-table__cell${compareColumns[i] === compareFeatured ? ' pricing-compare-table__cell--featured' : ''}`}
                >
                  {value === '✓' ? (
                    <span className="pricing-compare-table__check">✓</span>
                  ) : value === '—' ? (
                    <span className="pricing-compare-table__dash">—</span>
                  ) : (
                    value
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Pricing
export { PricingCompare }
