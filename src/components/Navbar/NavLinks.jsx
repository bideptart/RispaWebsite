const links = [
  { id: 'features',   label: 'Features',   href: '/features' },
  { id: 'industries', label: 'Industries', href: '/industries' },
  { id: 'pricing',    label: 'Pricing',    href: '/pricing' },
  { id: 'blog',       label: 'Blog',       href: '/blog' },
  { id: 'faq',        label: 'FAQ',        href: '/faq' },
]

function NavLinks({ activePage, onClick, onNavigate }) {
  const handleClick = (event, link) => {
    event.preventDefault()

    if (typeof onClick === 'function') {
      onClick()
    }

    if (typeof onNavigate === 'function') {
      onNavigate(link.id)
    }
  }

  return (
    <>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className={activePage === link.id ? 'active' : ''}
          onClick={(event) => handleClick(event, link)}
          style={{
            color: activePage === link.id ? '#21897e' : '#59716d',
            fontWeight: activePage === link.id ? '700' : '500',
            fontSize: '16px',
            transition: 'color 0.2s ease',
          }}
        >
          {link.label}
        </a>
      ))}
    </>
  )
}

export default NavLinks
