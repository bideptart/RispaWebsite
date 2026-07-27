import Container from '../components/Container'
import Badge from '../components/Badge'
import Button from '../components/Button'
import IndustriesHeroVisual from '../components/Industries/IndustriesHeroVisual'
import Industries from '../components/Industries/Industries'
import UseCases from '../components/UseCases/UseCases'
import CTA from '../components/CTA/CTA'

function IndustriesPage({ onNavigate }) {
  return (
    <div className="page-view industries-page">
      <section className="industries-hero-section">
        <Container className="industries-hero-container">
          <div className="industries-hero__copy">
            <Badge>• PRE-TUNED FOR THE CALLS YOU ACTUALLY TAKE</Badge>
            <h1 className="industries-hero__title">
              Built for every<br />
              kind of phone call.
            </h1>
            <p className="industries-hero__subtitle">
              One AI voice agent that answers calls, qualifies leads, and books appointments across every industry below — fluent in 10+ languages, on the same simple plans for everyone, live in under 5 minutes.
            </p>

            <div className="industries-hero__actions">
              <Button as="a" href="#cta" className="button--primary" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('cta') }}>
                Build your first agent &rarr;
              </Button>
              <Button as="a" href="#pricing" variant="secondary" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('pricing') }}>
                View pricing &rarr;
              </Button>
            </div>
          </div>

          <div className="industries-hero__visual">
            <IndustriesHeroVisual />
          </div>
        </Container>
      </section>

      <UseCases />

      <Industries />

      <CTA onNavigate={onNavigate} />
    </div>
  )
}

export default IndustriesPage