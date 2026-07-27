import Container from '../components/Container'
import Badge from '../components/Badge'
import Button from '../components/Button'
import FeaturesHeroVisual from '../components/Features/FeaturesHeroVisual'
import Features from '../components/Features/Features'
import IntegrationsCarousel from '../components/Features/IntegrationsCarousel'
import CTA from '../components/CTA/CTA'

function FeaturesPage({ onNavigate }) {
  return (
    <div className="page-view features-page">
      <section className="features-hero-section">
        <Container className="features-hero-container">
          <div className="features-hero__copy">
            <Badge>• FEATURES</Badge>
            <h1 className="features-hero__title">
              <span className="highlighted-text">Everything</span> your voice agent needs.
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

      <section className="section">
        <Container>
          <div className="section-title section-title--center">
            <Badge>🔗 INTEGRATIONS</Badge>
            <h2>
              Plugs into what you<br />
              <span className="highlighted-text">already use.</span>
            </h2>
            <p>
              Calendars, messaging, and automation — connected out of the box, no engineering required.
            </p>
          </div>
        </Container>
        
        <IntegrationsCarousel />
      </section>

      <Features />

      <CTA variant="features" onNavigate={onNavigate} />
    </div>
  )
}

export default FeaturesPage
