function IndustryCard({ industry }) {
  return (
    <article className="industry-card">
      <h3>{industry.name}</h3>
      <p>{industry.summary}</p>
    </article>
  )
}

export default IndustryCard
