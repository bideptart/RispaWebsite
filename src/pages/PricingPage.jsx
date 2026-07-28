import Container from '../components/Container'
import Badge from '../components/Badge'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'

function PricingPage({ onNavigate }) {
  return (
    <div className="page-view pricing-page">
      {/* Clean Hero Section */}
      <section className="pricing-hero-clean">
        <Container>
          <div className="pricing-hero-clean__content">
            <div className="pricing-badge-pill">
              • PAY AS YOU GO · TRANSPARENT PRICING · NO HIDDEN FEES
            </div>
            
            <h1 className="pricing-hero-clean__title">
              Pick your <span className="plan-highlight">plan.</span>
            </h1>
            
            <p className="pricing-hero-clean__description">
              All plans include inbound calling, call recording, real-time transcription, and per-second 
              billing with no minute-rounding. Prices are in $, billed once as wallet credit that stays valid for 
              60 days — no contracts, no setup fees, cancel anytime.
            </p>

            {/* 3 Info Cards Row */}
            <div className="pricing-info-cards">
              <div className="pricing-info-card">
                <div className="info-card-icon">🎤</div>
                <div className="info-card-label">VOICE RATE</div>
                <h3 className="info-card-value">From $0.10 / min</h3>
                <p className="info-card-desc">Best rate on the Scale plan.</p>
              </div>

              <div className="pricing-info-card">
                <div className="info-card-icon">💰</div>
                <div className="info-card-label">MINIMUM TOP-UP</div>
                <h3 className="info-card-value">$20</h3>
                <p className="info-card-desc">No additional fees at checkout.</p>
              </div>

              <div className="pricing-info-card">
                <div className="info-card-icon">📞</div>
                <div className="info-card-label">INCLUDED ON EVERY PLAN</div>
                <h3 className="info-card-value">Call recording</h3>
                <p className="info-card-desc">With PII redaction, synced to your dashboard, CRM, or webhook.</p>
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="pricing-compliance-row">
              <div className="compliance-item">
                <span className="compliance-icon">✓</span>
                <span>SOC 2 compliant</span>
              </div>
              <div className="compliance-item">
                <span className="compliance-icon">✓</span>
                <span>Stripe secured</span>
              </div>
              <div className="compliance-item">
                <span className="compliance-icon">✓</span>
                <span>GDPR compliant</span>
              </div>
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
