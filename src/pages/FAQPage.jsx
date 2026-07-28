import Container from '../components/Container'
import Badge from '../components/Badge'
import Button from '../components/Button'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'

function FAQPage({ onNavigate }) {
  return (
    <div className="page-view faq-page">
      <section className="faq-hero-section">
        <Container className="faq-hero-container">
          <div className="faq-hero__content">
            <Badge>• GOT QUESTIONS?</Badge>
            <h1 className="faq-hero__title">
              Frequently asked <span className="text-teal">questions.</span>
            </h1>
            <p className="faq-hero__subtitle">
              Find answers to common questions about Rispa.ai, our AI voice agents, pricing, security, and how to get started.
            </p>

            <div className="faq-hero__actions">
              <Button as="a" href="#cta" className="button--primary" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('cta') }}>
                Get started &rarr;
              </Button>
              <Button as="a" href="#faq" variant="secondary" onClick={(e) => { e.preventDefault(); setTimeout(() => { const elem = document.getElementById('faq'); if (elem) elem.scrollIntoView({ behavior: 'smooth' }); }, 50); }}>
                View FAQs &rarr;
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FAQ />

      <CTA onNavigate={onNavigate} variant="features" />
    </div>
  )
}

export default FAQPage
