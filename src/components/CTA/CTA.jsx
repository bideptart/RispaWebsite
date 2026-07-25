import Container from '../Container'
import Button from '../Button'

function CTA({ onNavigate, variant }) {
  const handleClick = (e, linkId) => {
    e.preventDefault()
    if (onNavigate) onNavigate(linkId)
  }

  if (variant === 'features') {
    return (
      <section className="section" id="cta">
        <Container className="cta cta--features">
          <div className="cta__badge">
            ★ READY WHEN YOU ARE
          </div>
          <h2>See it answer your first call today.</h2>
          <p>
            Design your agent, connect your knowledge, and forward your line —<br className="cta__br" /> live in minutes.
          </p>
          <div className="cta__actions">
            <Button as="a" href="#pricing" className="button--primary" onClick={(e) => handleClick(e, 'pricing')}>
              See plans & pricing &rarr;
            </Button>
            <Button as="a" href="#top" variant="secondary" onClick={(e) => handleClick(e, 'pricing')}>
              Book a demo
            </Button>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="section" id="cta">
      <Container className="cta cta--standard">
        <div>
          <span className="cta__eyebrow">Ready to launch</span>
          <h2>Hear it before you build it.</h2>
          <p>
            Talk to a live Rispa.ai agent right now, see our pricing, or schedule a 20-minute walkthrough.
          </p>
        </div>
        <div className="cta__actions">
          <Button as="a" href="#pricing" onClick={(e) => handleClick(e, 'pricing')}>
            View pricing
          </Button>
          <Button as="a" href="#top" variant="secondary">
            Schedule a meeting
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default CTA
