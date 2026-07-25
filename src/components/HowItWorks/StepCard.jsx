function StepCard({ step, title, description, points }) {
  return (
    <article className="step-card">
      <span className="step-card__number">{step}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {points && (
        <ul style={{ marginTop: '1rem', listStyle: 'disc', paddingLeft: '1.5rem', fontSize: '0.9rem', opacity: 0.85 }}>
          {points.map((point, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>{point}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default StepCard
