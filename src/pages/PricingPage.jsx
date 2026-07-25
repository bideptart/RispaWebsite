import Container from '../components/Container'
import Badge from '../components/Badge'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'

function PricingPage({ onNavigate }) {
  return (
    <div className="page-view pricing-page">
      <section className="pricing-hero-section">
        <Container className="pricing-hero-container">
          <div className="pricing-hero__header">
            <Badge>• FAIR PRICING · PAY ONLY FOR WHAT YOU TALK</Badge>
            <h1 className="pricing-hero__title">
              Pick your <span className="text-teal">plan</span>.
            </h1>
            <p className="pricing-hero__subtitle">
              Voice from $0.10 per minute. Top up with $20, $50, or $100 of credit, unlock up to 3 concurrent AI agents, and scale from a single line to a full call center — no contracts, no surprises.
            </p>

            <div className="pricing-hero__compliance-pills">
              <span>🛡️ Enterprise compliant</span>
              <span>🔒 Secure payments</span>
              <span>✅ PII protected</span>
            </div>
          </div>

          <div className="pricing-hero__stats-grid">
            <div className="pricing-stat-card">
              <div className="stat-card-label">
                <span className="icon">⚡</span> VOICE RATE
              </div>
              <h3 className="stat-card-main">From $0.10 / min</h3>
              <p className="stat-card-sub">Best rate on the Scale plan.</p>
            </div>

            <div className="pricing-stat-card">
              <div className="stat-card-label">
                <span className="icon">🎧</span> MINIMUM TOP-UP
              </div>
              <h3 className="stat-card-main">$20</h3>
              <p className="stat-card-sub">Valid for 60 days.</p>
            </div>

            <div className="pricing-stat-card">
              <div className="stat-card-label">
                <span className="icon">🎙️</span> INCLUDED ON EVERY PLAN
              </div>
              <h3 className="stat-card-main">Call recording</h3>
              <p className="stat-card-sub">With real-time transcripts, recording, analytics, and unlimited test calls in the playground.</p>
            </div>
          </div>
        </Container>
      </section>

      <Pricing />

      <FAQ />

      <CTA onNavigate={onNavigate} />
    </div>
  )
}

export default PricingPage
