import { industries } from '../../data/industries'
import Container from '../Container'
import SectionTitle from '../SectionTitle'
import IndustryCard from './IndustryCard'
import Badge from '../Badge'

function Industries() {
  return (
    <section className="section section--muted" id="industries">
      <Container className="container">
        <div style={{ display: 'grid', justifyItems: 'center', textAlign: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <Badge>HOW IT WORKS</Badge>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
            fontFamily: 'var(--heading-font)',
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: '700px',
            margin: 0
          }}>
            Every call your business makes.
          </h2>
          <p style={{
            color: 'var(--text-soft)',
            fontSize: '1.05rem',
            maxWidth: '700px',
            margin: 0
          }}>
            Inbound front desk, follow-ups and reminders — one platform, TRAI-compliant, live in hours.
          </p>
        </div>
        <div className="industries-grid">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} industry={industry} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Industries 


