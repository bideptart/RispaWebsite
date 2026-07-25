function FeatureCard({ feature }) {
  return (
    <article 
      className="feature-card"
      style={{
        borderRadius: '24px',
        padding: '2rem',
        background: '#ffffff',
        border: '1px solid rgba(215, 231, 227, 0.9)',
        boxShadow: '0 16px 40px -24px rgba(13, 36, 34, 0.12)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 24px 60px -30px rgba(33, 137, 126, 0.35)';
        e.currentTarget.style.borderColor = 'rgba(33, 137, 126, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 16px 40px -24px rgba(13, 36, 34, 0.12)';
        e.currentTarget.style.borderColor = 'rgba(215, 231, 227, 0.9)';
      }}
    >
      {/* Subtle background gradient on hover */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(33, 137, 126, 0.03) 0%, rgba(33, 137, 126, 0.01) 100%)',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none'
      }} 
        ref={(el) => {
          const card = el?.parentElement;
          if (card) {
            card.addEventListener('mouseenter', () => { if (el) el.style.opacity = '1'; });
            card.addEventListener('mouseleave', () => { if (el) el.style.opacity = '0'; });
          }
        }}
      />

      <div 
        className="feature-card__icon" 
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '18px',
          background: 'rgba(33, 137, 126, 0.08)',
          color: '#21897e',
          fontFamily: 'Outfit, system-ui, sans-serif',
          fontWeight: '700',
          fontSize: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          transition: 'all 0.3s ease'
        }}
        ref={(el) => {
          const card = el?.parentElement?.parentElement;
          if (card && el) {
            card.addEventListener('mouseenter', () => {
              el.style.background = '#21897e';
              el.style.color = '#ffffff';
              el.style.transform = 'scale(1.05)';
            });
            card.addEventListener('mouseleave', () => {
              el.style.background = 'rgba(33, 137, 126, 0.08)';
              el.style.color = '#21897e';
              el.style.transform = 'scale(1)';
            });
          }
        }}
      >
        {feature.icon}
      </div>

      <h3 style={{
        fontFamily: 'Outfit, system-ui, sans-serif',
        fontSize: '1.35rem',
        fontWeight: '600',
        color: '#0d2422',
        margin: '0 0 0.75rem 0',
        letterSpacing: '-0.02em'
      }}>
        {feature.title}
      </h3>

      <p style={{
        color: '#59716d',
        lineHeight: '1.7',
        margin: '0 0 1.25rem 0',
        fontSize: '0.95rem'
      }}>
        {feature.description}
      </p>

      <ul style={{
        listStyle: 'none',
        padding: '0',
        margin: '0'
      }}>
        {feature.points.map((point) => (
          <li key={point} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.5rem',
            marginBottom: '0.5rem',
            color: '#59716d',
            fontSize: '0.9rem'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#21897e',
              marginTop: '0.5rem',
              flexShrink: '0'
            }}></span>
            {point}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default FeatureCard
