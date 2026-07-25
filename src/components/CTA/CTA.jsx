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

export default CTA
