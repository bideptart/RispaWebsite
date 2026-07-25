function PricingToggle({ billing, onChange }) {
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
      </button>
    </div>
  )
}

export default PricingToggle
