import Container from '../Container'
import Button from '../Button'

const StatIcon = {
  Bolt: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Sim: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M18 2H9L4 7v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
      <path d="M9 2v5H4" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="13" y2="17" />
    </svg>
  ),
  Server: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="3" width="20" height="7" rx="1.5" />
      <rect x="2" y="14" width="20" height="7" rx="1.5" />
      <line x1="6" y1="6.5" x2="6.01" y2="6.5" />
      <line x1="6" y1="17.5" x2="6.01" y2="17.5" />
    </svg>
  ),
  Play: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
    </svg>
  ),
}

function CTA({ onNavigate, variant, showExplore = false, bannerVariant }) {
  const handleClick = (e, linkId) => {
    e.preventDefault()
    if (onNavigate) onNavigate(linkId)
  }

  if (variant === 'features') {
    return (
      <>
        {/* ================ Keep exploring 3-card flip section (pricing page only) ================ */}
        {showExplore && (
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
        )}

        {/* ================ cta--features banner ================ */}
        {bannerVariant === 'receptionist' ? (
        <section className="section" id="cta">
          <Container className="cta cta--features cta--features-banner cta--features-banner--compact">
            <div className="cta__badge">
              ★ Ready when you are
            </div>
            <h2>Give your front desk an AI receptionist.</h2>
            <p>
              Pick a plan, forward your number, and start answering patient calls the same day.
            </p>
            <div className="cta__actions">
              <Button as="a" href="#pricing" className="button--primary" onClick={(e) => handleClick(e, 'pricing')}>
                View plans
              </Button>
              <Button as="a" href="#cta" variant="secondary" onClick={(e) => handleClick(e, 'cta')}>
                &darr; Talk to sales
              </Button>
            </div>
          </Container>
        </section>
        ) : bannerVariant === 'demo' ? (
        <section className="section" id="cta">
          <Container className="cta cta--features cta--features-banner cta--features-banner--compact">
            <div className="cta__badge">
              <StatIcon.Play width="12" height="12" />
              Live demo · No signup
            </div>
            <h2>Ready to hear it for yourself?</h2>
            <p>
              Spin up an agent in minutes and place a real test call — no credit card to try.
            </p>
            <div className="cta__actions">
              <Button as="a" href="#cta" className="button--primary" onClick={(e) => handleClick(e, 'cta')}>
                Get started
              </Button>
              <Button as="a" href="#pricing" variant="secondary" onClick={(e) => handleClick(e, 'pricing')}>
                View pricing
              </Button>
            </div>
            <div className="cta__stats">
              <span className="cta__stat">
                <StatIcon.Bolt />
                Sub-second latency
              </span>
              <span className="cta__stat">
                <StatIcon.Sim />
                Bring your own carrier
              </span>
              <span className="cta__stat">
                <StatIcon.Server />
                Self-hosted control panel
              </span>
            </div>
          </Container>
        </section>
        ) : (
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
        )}
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
