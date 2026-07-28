import Container from '../Container'
import Badge from '../Badge'

const testimonials = [
  {
    tag: '30 HRS/WEEK SAVED',
    tagColor: '#21897e',
    quote: '"Integration with our Salesforce instance took under an hour. The live analytics dashboard alone saved our ops team 30 hours a week."',
    name: 'Priya Nair',
    initials: 'PN',
    role: 'Head of CX · RetailFirst',
    stars: 5,
  },
  {
    tag: 'ZERO DOWNTIME',
    tagColor: '#7c3aed',
    quote: '"Switched from our legacy PBX in a weekend. The onboarding team was incredible and call quality is night-and-day better."',
    name: 'James Okafor',
    initials: 'JO',
    role: 'COO · SwiftLogix',
    stars: 5,
  },
  {
    tag: 'CSAT 94%',
    tagColor: '#0284c7',
    quote: '"Real-time transcripts and sentiment scoring changed how we coach agents. CSAT went from 78% to 94% in two months."',
    name: 'Mia Thornton',
    initials: 'MT',
    role: 'Director of Support · CareCore',
    stars: 5,
  },
  {
    tag: '99.999% UPTIME',
    tagColor: '#b45309',
    quote: '"We handle 40,000 inbound calls a day. Rispa scales without a hiccup. The 99.999% uptime SLA is real."',
    name: 'Ravi Sharma',
    initials: 'RS',
    role: 'CX Lead · FinEdge',
    stars: 5,
  },
  {
    tag: '2× BOOKINGS',
    tagColor: '#21897e',
    quote: '"We stopped missing after-hours calls the week we switched. Bookings doubled in the first month — no extra headcount."',
    name: 'Sana Khan',
    initials: 'SK',
    role: 'Founder · Restaurant Group',
    stars: 5,
  },
  {
    tag: 'SETUP < 1 DAY',
    tagColor: '#7c3aed',
    quote: '"Setup took less than a day. Our front-desk team finally has room to breathe instead of juggling calls non-stop."',
    name: 'Arjun Mehta',
    initials: 'AM',
    role: 'Operations Lead · SalonCo',
    stars: 5,
  },
]

// Duplicate for seamless loop
const track = [...testimonials, ...testimonials]

function Stars({ count }) {
  return (
    <span className="t-stars" aria-label={`${count} stars`}>
      {'★'.repeat(count)}
    </span>
  )
}

function TestimonialCard({ item }) {
  return (
    <article className="t-card">
      <div className="t-card__tag" style={{ '--tag-color': item.tagColor }}>
        <span className="t-card__tag-dot" />
        {item.tag}
      </div>
      <p className="t-card__quote">{item.quote}</p>
      <div className="t-card__author">
        <div className="t-card__avatar">{item.initials}</div>
        <div>
          <div className="t-card__name">{item.name}</div>
          <div className="t-card__role">{item.role}</div>
        </div>
        <Stars count={item.stars} />
      </div>
    </article>
  )
}

function Testimonials() {
  return (
    <section className="section testimonials-section" id="testimonials">
      {/* Stats bar */}
      <Container>
        <div className="t-stats">
          <div className="t-stat">
            <span className="t-stat__icon">📞</span>
            <strong>2.4M+</strong>
            <span>Calls handled / month</span>
          </div>
          <div className="t-stat__divider" />
          <div className="t-stat">
            <span className="t-stat__icon">⏱️</span>
            <strong>62%</strong>
            <span>Average ops time saved</span>
          </div>
          <div className="t-stat__divider" />
          <div className="t-stat">
            <span className="t-stat__icon">📈</span>
            <strong>3.1×</strong>
            <span>Lift in qualified leads</span>
          </div>
        </div>
      </Container>

      {/* Marquee */}
      <div className="t-marquee-outer" aria-label="Customer testimonials">
        <div className="t-marquee-track">
          {track.map((item, i) => (
            <TestimonialCard key={`${item.initials}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
