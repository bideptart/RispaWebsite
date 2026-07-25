function IndustryCard({ industry }) {
  // Simple icon mapping
  const icons = {
    code: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    flask: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2h-4l-4 10a5 5 0 0 0 4 10h4a5 5 0 0 0 4-10l-4-10z"></path>
        <path d="M9 2h6"></path>
        <path d="M9 12h6"></path>
      </svg>
    ),
    rocket: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.66-.8 1-1.83 1-3a1 1 0 0 0-.29-.71l-2-2a1 1 0 0 0-.71-.29c-1.17 0-2.2.34-3 1z"></path>
        <path d="M12 13a3 3 0 0 0 3-3c0-3-1-6-5-6s-5 3-5 6a3 3 0 0 0 3 3z"></path>
        <path d="M12 10v3"></path>
        <path d="M15 13l-3 3-3-3"></path>
      </svg>
    ),
    chart: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
  }

  return (
    <article
      className="industry-card"
      style={{
        borderRadius: '24px',
        padding: '1.75rem',
        background: '#ffffff',
        border: '1px solid rgba(215, 231, 227, 0.9)',
        boxShadow: '0 16px 40px -24px rgba(13, 36, 34, 0.12)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 24px 60px -30px rgba(33, 137, 126, 0.35)';
        e.currentTarget.style.borderColor = 'rgba(33, 137, 126, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 16px 40px -24px rgba(13, 36, 34, 0.12)';
        e.currentTarget.style.borderColor = 'rgba(215, 231, 227, 0.9)';
      }}
    >
      <div className="industry-card__top">
        <span className="industry-card__number">{industry.number}</span>
        <div className="industry-card__icon">{icons[industry.icon]}</div>
      </div>
      <h3>{industry.title}</h3>
      <p>{industry.description}</p>
    </article>
  )
}

export default IndustryCard
