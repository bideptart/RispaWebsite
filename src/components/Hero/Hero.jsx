import Container from '../Container'
import Badge from '../Badge'
import HeroButtons from './HeroButtons'
import HeroAnimation from './HeroAnimation'

function Hero({ onNavigate }) {
  return (
    <section className="hero-section" id="top">
      <Container className="hero">
        <div className="hero__copy">
          <Badge>AI VOICE AGENTS · HUMAN-SOUNDING</Badge>
          <h1 className="hero__title">
            AI voice agents that actually<br />
            <span className="text-teal">sound human</span>.
          </h1>
          <p className="hero__subtitle">
            Build, launch, and scale voice agents on a self-hosted control panel. Native audio, real interruptions, and your own phone numbers — production-ready in an afternoon.
          </p>
          <HeroButtons onNavigate={onNavigate} />
          <div className="hero__guarantee">
            &lt;300ms latency · Your data, your stack · Unlimited concurrent calls
          </div>
        </div>

        <HeroAnimation />
      </Container>
    </section>
  )
}

export default Hero
