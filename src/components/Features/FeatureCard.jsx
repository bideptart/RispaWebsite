function FeatureCard({ feature }) {
  return (
    <article className="feature-card">
      <div className="feature-card__icon">{feature.icon}</div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
      <ul>
        {feature.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  )
}

export default FeatureCard
