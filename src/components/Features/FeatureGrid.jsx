import FeatureCard from './FeatureCard'

function FeatureGrid({ items }) {
  return (
    <div className="feature-grid">
      {items.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  )
}

export default FeatureGrid
