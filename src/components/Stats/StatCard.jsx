function StatCard({ value, label }) {
  return (
    <article
      className="stat-card"
      style={{
        borderRadius: '24px',
        padding: '2rem',
        background: '#ffffff',
        border: '1px solid rgba(215, 231, 227, 0.9)',
        boxShadow: '0 16px 40px -24px rgba(13, 36, 34, 0.12)',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = '0 24px 60px -30px rgba(33, 137, 126, 0.35)'
        e.currentTarget.style.borderColor = 'rgba(33, 137, 126, 0.5)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 16px 40px -24px rgba(13, 36, 34, 0.12)'
        e.currentTarget.style.borderColor = 'rgba(215, 231, 227, 0.9)'
      }}
    >
      <strong style={{
        fontFamily: 'Outfit, system-ui, sans-serif',
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#0d2422',
        display: 'block',
        marginBottom: '0.5rem',
        letterSpacing: '-0.03em',
      }}>
        {value}
      </strong>
      <span style={{
        color: '#59716d',
        fontSize: '1rem',
        fontWeight: '500',
      }}>
        {label}
      </span>
    </article>
  )
}

export default StatCard
