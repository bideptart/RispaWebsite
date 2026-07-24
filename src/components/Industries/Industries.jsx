import { industries } from '../../data/industries'
import Container from '../Container'
import SectionTitle from '../SectionTitle'
import IndustryCard from './IndustryCard'

function Industries() {
  return (
    <section className="section section--muted" id="industries">
      <SectionTitle
        eyebrow="Industries"
        title="Built for teams that handle high-value conversations."
        description="Rispa adapts the same sophisticated landing-page presentation to vertical-specific selling points."
      />
      <Container className="industries-grid">
        {industries.map((industry) => (
          <IndustryCard key={industry.name} industry={industry} />
        ))}
      </Container>
    </section>
  )
}

export default Industries
