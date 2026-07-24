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
    <div className="industry-card-container">
      <div className="industry-card-inner">
        {/* Front Side */}
        <div className="industry-card-front">
          <div className="industry-card-top">
            <span className="industry-card-number">{industry.number}</span>
            <div className="industry-card-icon">
              {icons[industry.icon]}
            </div>
          </div>
          <h3>{industry.title}</h3>
          <p>{industry.description}</p>
        </div>
        {/* Back Side (same as front for now, or we can add different content later) */}
        <div className="industry-card-back">
          <div className="industry-card-top">
            <span className="industry-card-number">{industry.number}</span>
            <div className="industry-card-icon">
              {icons[industry.icon]}
            </div>
          </div>
          <h3>{industry.title}</h3>
          <p>{industry.description}</p>
        </div>
      </div>
    </div>
  )
}

export default IndustryCard
