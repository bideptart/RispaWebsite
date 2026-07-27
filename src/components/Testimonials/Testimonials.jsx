import Container from '../Container'
import SectionTitle from '../SectionTitle'

const testimonials = [
  {
    quote: 'We stopped missing after-hours calls the week we switched on Rispa. Bookings went up almost immediately.',
    name: 'Priya Sharma',
    role: 'Clinic Manager',
  },
  {
    quote: 'Setup took less than a day. Our front desk team finally has room to breathe instead of juggling calls all day.',
    name: 'Arjun Mehta',
    role: 'Operations Lead, Salon Chain',
  },
  {
    quote: 'The voice actually sounds human. Customers don\'t even realize they\'re talking to an AI half the time.',
    name: 'Sana Khan',
    role: 'Founder, Restaurant Group',
  },
]

function Testimonials() {
  return (
    <section className="section testimonials-section" id="testimonials">
      <SectionTitle
        eyebrow="What people say"
        title="Loved by teams who hate missed calls."
        description="Real feedback from teams using Rispa to handle their calls."
      />
      <Container>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <p className="testimonial-quote">"{item.quote}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{item.name.charAt(0)}</div>
                <div>
                  <div className="testimonial-name">{item.name}</div>
                  <div className="testimonial-role">{item.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Testimonials