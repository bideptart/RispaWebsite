import Container from '../Container'
import SectionTitle from '../SectionTitle'

const rows = [
  { feature: 'Setup time', rispa: 'Under an hour', traditional: 'Weeks to months' },
  { feature: 'Response latency', rispa: '<300ms, human-like', traditional: '1-3s, robotic' },
  { feature: 'Concurrent calls', rispa: 'Unlimited', traditional: 'Limited by agents/lines' },
  { feature: 'Availability', rispa: '24/7, no breaks', traditional: 'Business hours only' },
  { feature: 'Cost per call', rispa: 'Fraction of agent cost', traditional: 'High labor cost' },
  { feature: 'Scalability', rispa: 'Instant, on demand', traditional: 'Hiring & training required' },
]

function Comparison() {
  return (
    <section className="section" id="comparison">
      <SectionTitle
        eyebrow="Why Rispa"
        title="Rispa vs. traditional call systems."
        description="See how an AI voice agent stacks up against legacy IVR and call center setups."
      />
      <Container>
        <div className="comparison-table">
          <div className="comparison-table__header comparison-table__row">
            <div className="comparison-table__cell comparison-table__cell--label"></div>
            <div className="comparison-table__cell comparison-table__cell--rispa">Rispa</div>
            <div className="comparison-table__cell comparison-table__cell--traditional">Traditional</div>
          </div>

          {rows.map((row) => (
            <div className="comparison-table__row" key={row.feature}>
              <div className="comparison-table__cell comparison-table__cell--label">{row.feature}</div>
              <div className="comparison-table__cell comparison-table__cell--rispa">
                <span className="comparison-table__check">✓</span> {row.rispa}
              </div>
              <div className="comparison-table__cell comparison-table__cell--traditional">
                <span className="comparison-table__cross">✕</span> {row.traditional}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Comparison