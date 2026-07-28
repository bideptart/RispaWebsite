import Container from '../Container'
import Button from '../Button'

function CTA({ onNavigate, variant }) {
  const handleClick = (e, linkId) => {
    e.preventDefault()
    if (onNavigate) onNavigate(linkId)
  }

  if (variant === 'features') {
    return (
      <>
        {/* ================ Original cta--features banner (restored) ================ */}
        <section className="section" id="cta">
          <Container className="cta cta--features cta--features-banner">
            <div className="cta__badge">
              ★ READY WHEN YOU ARE
            </div>
            <h2>See it answer your first call today.</h2>
            <p>
              Design your agent, connect your knowledge, and forward your line —<br className="cta__br" /> live in minutes.
            </p>
            <div className="cta__actions">
              <Button as="a" href="#pricing" className="button--primary" onClick={(e) => handleClick(e, 'pricing')}>
                See plans &amp; pricing &rarr;
              </Button>
              <Button as="a" href="#top" variant="secondary" onClick={(e) => handleClick(e, 'pricing')}>
                Book a demo
              </Button>
            </div>
          </Container>
        </section>

        {/* ================ Keep exploring 3-card flip section (NEW, after banner) ================ */}
        <section className="section cta-explore-section">
          <Container className="cta cta-explore">
            <div className="cta-explore__header">
              <h2 className="cta-explore__title">Explore Rispa.ai</h2>
              <p className="cta-explore__subtitle">
                Plans, industry playbooks, and answers to every setup question — everything you need before you launch.
              </p>
            </div>

            <div className="cta-explore__grid">
              {/* Card 1 — Pricing */}
              <a
                href="#pricing"
                onClick={(e) => handleClick(e, 'pricing')}
                className="explore-card explore-card--pricing"
              >
                <div className="explore-card__inner">
                  <div className="explore-card__face explore-card__front">
                    <div className="explore-card__badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17l10-10" /><path d="M7 7h10v10" />
                      </svg>
                    </div>
                    <h3 className="explore-card__title">Pricing &amp; per-minute rates</h3>
                    <p className="explore-card__desc">
                      Compare Starter, Growth and Scale plans and see the full Rispa.ai per-minute rate card.
                    </p>
                  </div>
                  <div className="explore-card__face explore-card__back">
                    <div className="explore-card__badge explore-card__badge--dark">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17l10-10" /><path d="M7 7h10v10" />
                      </svg>
                    </div>
                    <h3 className="explore-card__title explore-card__title--light">Pricing &amp; plans</h3>
                    <p className="explore-card__desc explore-card__desc--light">
                      See live per-minute phone costs, agent seat pricing, and volume discounts.
                    </p>
                    <div className="explore-card__cta explore-card__cta--light">View pricing &rarr;</div>
                  </div>
                </div>
              </a>

              {/* Card 2 — Industries */}
              <a
                href="#industries"
                onClick={(e) => handleClick(e, 'industries')}
                className="explore-card explore-card--industries"
              >
                <div className="explore-card__inner">
                  <div className="explore-card__face explore-card__front">
                    <div className="explore-card__badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17l10-10" /><path d="M7 7h10v10" />
                      </svg>
                    </div>
                    <h3 className="explore-card__title">Industries — playbooks</h3>
                    <p className="explore-card__desc">
                      Real estate, legal services, e-commerce, restaurants, automotive, home services and more.
                    </p>
                  </div>
                  <div className="explore-card__face explore-card__back">
                    <div className="explore-card__badge explore-card__badge--dark">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17l10-10" /><path d="M7 7h10v10" />
                      </svg>
                    </div>
                    <h3 className="explore-card__title explore-card__title--light">6 industries. Pre-built.</h3>
                    <p className="explore-card__desc explore-card__desc--light">
                      Deploy ready-made AI receptionist flows tuned for your vertical.
                    </p>
                    <div className="explore-card__cta explore-card__cta--light">Browse industries &rarr;</div>
                  </div>
                </div>
              </a>

              {/* Card 3 — FAQ */}
              <a
                href="#faq"
                onClick={(e) => handleClick(e, 'faq')}
                className="explore-card explore-card--faq"
              >
                <div className="explore-card__inner">
                  <div className="explore-card__face explore-card__front">
                    <div className="explore-card__badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17l10-10" /><path d="M7 7h10v10" />
                      </svg>
                    </div>
                    <h3 className="explore-card__title">Frequently asked questions</h3>
                    <p className="explore-card__desc">
                      Pricing, credits, Indian phone numbers, compliance, and account access — answered.
                    </p>
                  </div>
                  <div className="explore-card__face explore-card__back">
                    <div className="explore-card__badge explore-card__badge--dark">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17l10-10" /><path d="M7 7h10v10" />
                      </svg>
                    </div>
                    <h3 className="explore-card__title explore-card__title--light">Get answers fast</h3>
                    <p className="explore-card__desc explore-card__desc--light">
                      Everything from carrier setup to billing reconciliation and self-hosting.
                    </p>
                    <div className="explore-card__cta explore-card__cta--light">Read the FAQ &rarr;</div>
                  </div>
                </div>
              </a>
            </div>
          </Container>
        </section>
      </>
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
