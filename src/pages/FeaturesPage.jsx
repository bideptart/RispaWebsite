import Container from '../components/Container'
import Badge from '../components/Badge'
import Button from '../components/Button'
import FeaturesHeroVisual from '../components/Features/FeaturesHeroVisual'
import Features from '../components/Features/Features'
import CTA from '../components/CTA/CTA'

function FeaturesPage({ onNavigate }) {
  return (
    <div className="page-view features-page">
      <section className="features-hero-section">
        <Container className="features-hero-container">
          <div className="features-hero__copy">
            <Badge>• FEATURES</Badge>
            <h1 className="features-hero__title">
              Everything your voice agent needs.
            </h1>
            <p className="features-hero__subtitle">
              From setup to billing — every tool your Rispa.ai AI voice agent needs, built for fast enterprise growth and seamless customer engagement.
            </p>

            <div className="features-hero__actions">
              <Button as="a" href="#cta" className="button--primary" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('cta') }}>
                Build your first agent &rarr;
              </Button>
              <Button as="a" href="#pricing" variant="secondary" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('pricing') }}>
                View pricing &rarr;
              </Button>
            </div>

            <div className="features-hero__pills">
              <span>🌐 10+ Languages Supported</span>
              <span>🎧 24/7 Always On Uptime</span>
              <span>⚡ Sub-300ms Low Latency</span>
              <span>⏱️ Per-Second Billing</span>
              <span>🛡️ Enterprise Compliant</span>
            </div>
          </div>

          <div className="features-hero__visual">
            <FeaturesHeroVisual />
          </div>
        </Container>
      </section>

      <Features />

      <CTA onNavigate={onNavigate} />
    </div>
  )
}

export default FeaturesPage
