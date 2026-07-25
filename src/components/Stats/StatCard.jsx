function StatCard({ value, label }) {
  return (
    <article className="stat-card">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </article>
  )
}

export default StatCard
