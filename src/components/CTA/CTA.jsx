import Container from '../Container'
import Button from '../Button'

function CTA({ onNavigate }) {
  const handleClick = (e, linkId) => {
    e.preventDefault()
    if (onNavigate) onNavigate(linkId)
  }

  return (
    <section className="section" id="cta">
      <Container className="cta">
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
