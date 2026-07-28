import Container from '../components/Container'
import Badge from '../components/Badge'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'

function PricingPage({ onNavigate }) {
  return (
    <div className="page-view pricing-page">

      {/* Minimal hero */}
      <section className="pricing-hero-section">
        <Container className="pricing-hero-container">
          <div className="pricing-hero__header">
            <Badge>• FAIR PRICING · PAY ONLY FOR WHAT YOU TALK</Badge>
            <h1 className="pricing-hero__title">
              Pick your <span className="text-teal">plan</span>.
            </h1>
            <p className="pricing-hero__subtitle">
              Voice from $0.10 per minute. No contracts, no setup fees — top up with credit and go live today.
            </p>
            <div className="pricing-hero__pills">
              <span>🛡️ SOC 2 compliant</span>
              <span>🔒 Stripe secured</span>
              <span>✅ GDPR compliant</span>
            </div>
          </div>
        </Container>
      </section>

      <Pricing />

      <FAQ />

      <CTA onNavigate={onNavigate} variant="features" />
    </div>
  )
}

export default PricingPage
