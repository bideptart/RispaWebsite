import Container from '../components/Container'
import Badge from '../components/Badge'
import Pricing, { PricingCompare } from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'
import { motion } from 'framer-motion'

function handleBillingCardMouseMove(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  card.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

const billingSteps = [
  {
    num: '/01',
    title: 'Prepaid wallet billing',
    desc: "Load credit upfront and your balance draws down per second as calls come in. Top up anytime from $20.",
  },
  {
    num: '/02',
    title: 'Per-second billing',
    desc: "Never rounded up to the minute — billed to the second at your plan's effective rate, as low as $0.10/min on Scale.",
  },
  {
    num: '/03',
    title: 'No setup fees',
    desc: 'Your number and agent go live in under 10 minutes — no separate setup fee, no hidden costs.',
  },
]

function PricingPage({ onNavigate }) {
  return (
    <div className="page-view pricing-page">
      {/* =============== HERO =============== */}
      <section className="pricing-hero-clean">
        <Container>
          <div className="pricing-hero-clean__content">
            <div className="pricing-badge-pill">
              <span className="dot-badge" />
              PAY AS YOU GO · TRANSPARENT · NO HIDDEN FEES
            </div>

            <h1 className="pricing-hero-clean__title">
              Simple pricing that <span className="plan-highlight">scales</span> with every call.
            </h1>

            <p className="pricing-hero-clean__description">
              Per-second billing — never rounded up to the minute. Load wallet credit once, it's yours for 60 days.
              Every plan includes real-time transcription, call recording with PII redaction, and the full Rispa.ai
              conversation engine out of the box.
            </p>

            {/* Compliance / Trust row */}
            <div className="pricing-compliance-row">
              {[
                'SOC 2 Type II ready',
                'Stripe & Razorpay ready',
                'GDPR compliant',
                '256-bit AES at rest',
                'No credit card to start',
              ].map((t) => (
                <div key={t} className="compliance-item">
                  <span className="compliance-icon">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =============== HOW BILLING WORKS =============== */}
      <section className="section section--tight">
        <Container>
          <div className="pricing-billing-panel">
            <div className="pricing-billing-grid">
              {billingSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="billing-card"
                  onMouseMove={handleBillingCardMouseMove}
                >
                  <span className="billing-card__spotlight" aria-hidden="true" />
                  <span className="billing-card__num">{step.num}</span>
                  <h3 className="billing-card__title">{step.title}</h3>
                  <p className="billing-card__desc">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Pricing />

      <PricingCompare />

      <FAQ />

      <CTA onNavigate={onNavigate} variant="features" />
    </div>
  )
}

export default PricingPage
