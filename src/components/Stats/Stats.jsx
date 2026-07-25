import Container from '../Container'
import StatCard from './StatCard'

const stats = [
  { value: '1.8M+', label: 'Calls answered every month' },
  { value: '58%', label: 'Average reduction in front-desk workload' },
  { value: '2.7x', label: 'More booked appointments from inbound calls' },
  { value: '99.99%', label: 'Platform uptime' },
]

function Stats() {
  return (
    <section className="section stats-section">
      <Container>
        <div className="stats-header">
          <div className="stats-badge">BY THE NUMBERS</div>
          <h2 className="stats-title">Trusted at scale.</h2>
        </div>
        <div className="stats-grid">
          {stats.map((item) => (
            <StatCard key={item.label} value={item.value} label={item.label} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Stats
