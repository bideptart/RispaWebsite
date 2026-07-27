import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { id: 'features',   label: 'Features',   href: '/features' },
  { id: 'industries', label: 'Industries', href: '/industries' },
  { id: 'pricing',    label: 'Pricing',    href: '/pricing' },
  { id: 'blog',       label: 'Blog',       href: '/blog' },
  { id: 'faq',        label: 'FAQ',        href: '/faq' },
]

function NavLinks({ activePage, onNavigate }) {
  const tabsRef = useRef([])
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 })

  const activeIndex = links.findIndex((link) => link.id === activePage)

  useEffect(() => {
    const activeTab = tabsRef.current[activeIndex]
    if (activeTab) {
      setPosition({
        left: activeTab.offsetLeft,
        width: activeTab.getBoundingClientRect().width,
        opacity: activeIndex >= 0 ? 1 : 0,
      })
    } else {
      setPosition((prev) => ({ ...prev, opacity: 0 }))
    }
  }, [activeIndex])

  const resetToActive = () => {
    const activeTab = tabsRef.current[activeIndex]
    if (activeTab) {
      setPosition({
        left: activeTab.offsetLeft,
        width: activeTab.getBoundingClientRect().width,
        opacity: activeIndex >= 0 ? 1 : 0,
      })
    } else {
      setPosition((prev) => ({ ...prev, opacity: 0 }))
    }
  }

  const handleClick = (e, id) => {
    e.preventDefault()
    onNavigate(id)
  }

  const handleHover = (index) => {
    const tab = tabsRef.current[index]
    if (!tab) return
    setPosition({
      left: tab.offsetLeft,
      width: tab.getBoundingClientRect().width,
      opacity: 1,
    })
  }

  return (
    <ul className="slide-tabs" onMouseLeave={resetToActive}>
      {links.map((link, index) => (
        <li
          key={link.id}
          ref={(el) => (tabsRef.current[index] = el)}
          className="slide-tabs__tab"
          onMouseEnter={() => handleHover(index)}
          onClick={(e) => handleClick(e, link.id)}
        >
          <a href={link.href} className={activePage === link.id ? 'active' : ''} onClick={(e) => e.preventDefault()}>
            {link.label}
          </a>
        </li>
      ))}
      <motion.li
        className="slide-tabs__cursor"
        animate={position}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </ul>
  )
}

export default NavLinks