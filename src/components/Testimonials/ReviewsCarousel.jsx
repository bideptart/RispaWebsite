import { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import Badge from '../Badge'

const reviews = [
  {
    quote: 'Integration with our Salesforce instance took under an hour. The live analytics dashboard alone saved our ops team 30 hours a week.',
    name: 'Priya Nair',
    initials: 'PN',
    role: 'Head of CX · RetailFirst',
    color: '#21897e',
    stat: { value: '30 hrs', label: 'SAVED / WEEK' },
  },
  {
    quote: 'Switched from our legacy PBX in a weekend. The onboarding team was incredible and call quality is night-and-day better.',
    name: 'James Okafor',
    initials: 'JO',
    role: 'COO · SwiftLogix',
    color: '#7c3aed',
    stat: { value: 'Zero', label: 'DOWNTIME' },
  },
  {
    quote: 'Real-time transcripts and sentiment scoring changed how we coach agents. CSAT went from 78% to 94% in two months.',
    name: 'Mia Thornton',
    initials: 'MT',
    role: 'Director of Support · CareCore',
    color: '#0284c7',
    stat: { value: '94%', label: 'CSAT SCORE' },
  },
  {
    quote: 'We handle 40,000 inbound calls a day. Rispa scales without a hiccup. The 99.999% uptime SLA is real.',
    name: 'Ravi Sharma',
    initials: 'RS',
    role: 'CX Lead · FinEdge',
    color: '#b45309',
    stat: { value: '99.999%', label: 'UPTIME SLA' },
  },
  {
    quote: 'We stopped missing after-hours calls the week we switched. Bookings doubled in the first month — no extra headcount.',
    name: 'Sana Khan',
    initials: 'SK',
    role: 'Founder · Restaurant Group',
    color: '#21897e',
    stat: { value: '2×', label: 'MORE BOOKINGS' },
  },
  {
    quote: 'Setup took less than a day. Our front-desk team finally has room to breathe instead of juggling calls non-stop.',
    name: 'Arjun Mehta',
    initials: 'AM',
    role: 'Operations Lead · SalonCo',
    color: '#7c3aed',
    stat: { value: '<1 day', label: 'TIME TO SETUP' },
  },
]

const CYCLE_MS = 4000

function ReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef(null)

  const startAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length)
    }, CYCLE_MS)
  }

  useEffect(() => {
    startAutoRotate()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const goTo = (index) => {
    setActiveIndex((index + reviews.length) % reviews.length)
    startAutoRotate()
  }

  const active = reviews[activeIndex]
  const upNext = [1, 2, 3].map((offset) => reviews[(activeIndex + offset) % reviews.length])

  return (
    <section className="section reviews-section">
      <Container>
        <div className="reviews-header">
          <Badge>• TRUSTED BY GROWING TEAMS</Badge>
          <h2>Teams That Switched to Rispa.ai</h2>
          <p>From startups to enterprises — what customers say after switching.</p>
        </div>

        <div className="reviews-layout">
          <div className="reviews-main">
            <span className="reviews-main__border reviews-main__border--top" aria-hidden="true">
              <span
                className="reviews-main__border-fill reviews-main__border-fill--static"
                style={{ background: active.color }}
              />
            </span>
            <span className="reviews-main__border reviews-main__border--bottom" aria-hidden="true">
              <span
                key={`bottom-${activeIndex}`}
                className="reviews-main__border-fill"
                style={{ animationDuration: `${CYCLE_MS}ms`, background: active.color }}
              />
            </span>

            <span className="reviews-main__quote-icon" aria-hidden="true">&ldquo;</span>
            <span className="reviews-main__stat">
              <strong>{active.stat.value}</strong>
              <em>{active.stat.label}</em>
            </span>

            <div className="reviews-main__stars" aria-hidden="true">★★★★★</div>

            <blockquote className="reviews-main__text">&ldquo;{active.quote}&rdquo;</blockquote>

            <div className="reviews-main__author">
              <span className="reviews-main__avatar" style={{ background: active.color }}>
                {active.initials}
                <span className="reviews-main__avatar-dot" />
              </span>
              <div>
                <div className="reviews-main__name">{active.name}</div>
                <div className="reviews-main__role">{active.role}</div>
              </div>
            </div>

            <div className="reviews-main__controls">
              <button type="button" aria-label="Previous review" onClick={() => goTo(activeIndex - 1)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button type="button" aria-label="Next review" onClick={() => goTo(activeIndex + 1)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="reviews-side">
            {upNext.map((item) => (
              <div className="reviews-side__item" key={item.name}>
                <span className="reviews-side__avatar" style={{ background: item.color }}>
                  {item.initials}
                </span>
                <div className="reviews-side__body">
                  <div className="reviews-side__name">{item.name}</div>
                  <div className="reviews-side__role">{item.role}</div>
                  <p className="reviews-side__quote">
                    &ldquo;{item.quote.length > 90 ? `${item.quote.slice(0, 90)}…` : item.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-dots">
          {reviews.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Go to review ${i + 1}`}
              className={i === activeIndex ? 'is-active' : ''}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ReviewsCarousel
