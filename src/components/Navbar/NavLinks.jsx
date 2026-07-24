const links = [
  { id: 'features', label: 'Features' },
  { id: 'industries', label: 'Industries' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
]

function NavLinks({ activePage, onNavigate, onClick }) {
  const handleClick = (e, linkId) => {
    e.preventDefault()
    if (onClick) onClick()
    if (onNavigate) onNavigate(linkId)
  }

  return (
    <>
      {links.map((link) => (
        <a 
          key={link.id} 
          href={`#${link.id}`} 
          className={activePage === link.id ? 'active' : ''}
          onClick={(e) => handleClick(e, link.id)}
          style={{ 
            color: activePage === link.id ? '#21897e' : '#59716d', 
            fontWeight: activePage === link.id ? '700' : '500',
            fontSize: '16px',
            transition: 'color 0.2s ease'
          }}
        >
          {link.label}
        </a>
      ))}
    </>
  )
}

export default NavLinks