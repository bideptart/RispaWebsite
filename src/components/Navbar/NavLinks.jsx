const links = [
  { id: 'features',   label: 'Features',   href: '/features' },
  { id: 'industries', label: 'Industries', href: '/industries' },
  { id: 'pricing',    label: 'Pricing',    href: '/pricing' },
  { id: 'blog',       label: 'Blog',       href: '/blog' },
  { id: 'faq',        label: 'FAQ',        href: '/faq' },
]

function NavLinks({ activePage, onClick }) {
  return (
    <>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={activePage === link.id ? 'active' : ''}
          onClick={onClick}
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
