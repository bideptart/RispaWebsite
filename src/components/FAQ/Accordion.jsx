function Accordion({ item, open, onToggle }) {
  return (
    <article
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
        boxShadow: open ? '0 4px 16px -6px rgba(33,137,126,0.15)' : '0 1px 4px rgba(0,0,0,0.04)',
        borderColor: open ? 'rgba(33,137,126,0.3)' : '#e2e8f0',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1.1rem 1.4rem',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        {/* Arrow */}
        <span style={{
          fontSize: '0.6rem',
          color: open ? '#21897e' : '#94a3b8',
          flexShrink: 0,
          transition: 'color 0.2s ease',
          lineHeight: 1,
        }}>
          {open ? '▼' : '▶'}
        </span>

        {/* Question */}
        <span style={{
          flex: 1,
          fontSize: '0.975rem',
          fontWeight: 600,
          color: open ? '#21897e' : '#111827',
          fontFamily: 'Inter, system-ui, sans-serif',
          lineHeight: 1.4,
          transition: 'color 0.2s ease',
        }}>
          {item.question}
        </span>
      </button>

      {/* Answer */}
      {open && (
        <div style={{
          padding: '0 1.4rem 1.1rem 2.6rem',
          borderTop: '1px solid #f1f5f9',
        }}>
          <p style={{
            margin: 0,
            fontSize: '0.9rem',
            color: '#4b5563',
            lineHeight: 1.65,
          }}>
            {item.answer}
          </p>
        </div>
      )}
    </article>
  )
}

export default Accordion
