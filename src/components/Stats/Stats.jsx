import Container from '../Container'
import StatCard from './StatCard'

const stats = [
  { value: '2.4M+', label: 'Calls handled / month' },
  { value: '62%', label: 'Average ops time saved' },
  { value: '3.1x', label: 'Lift in qualified leads' },
]

function Stats() {
  return (
    <section className="section section--tight">
      <Container className="stats-grid">
        {stats.map((item) => (
          <StatCard key={item.label} value={item.value} label={item.label} />
        ))}
      </Container>
    </section>
  )
}

export default Stats
