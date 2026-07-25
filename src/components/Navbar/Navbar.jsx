import { useState } from 'react'
import logo from '../../assets/logos/rispa-logo.svg'
import useScroll from '../../hooks/useScroll'
import Container from '../Container'
import Button from '../Button'
import NavLinks from './NavLinks'
import MobileMenu from './MobileMenu'

function Navbar({ activePage, onNavigate }) {
  const scrolled = useScroll(16)
  const [open, setOpen] = useState(false)

  const handleBrandClick = (e) => {
    e.preventDefault()
    if (onNavigate) onNavigate('home')
  }

  return (
    <>
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <Container className="navbar__inner">
          <a className="navbar__brand" href="#top" aria-label="Rispa home" onClick={handleBrandClick}>
            <img src={logo} alt="Rispa" />
          </a>

          <nav className="navbar__links">
            <NavLinks activePage={activePage} />
          </nav>

          <div className="navbar__actions">
            <button 
              style={{ 
                background: 'transparent', 
                border: 'none', 
                color: '#0d2422', 
                fontWeight: '600', 
                padding: '0.7rem 1rem',
                fontSize: '0.95rem'
              }}
              onClick={() => onNavigate && onNavigate('sign-in')}
            >
              Sign in
            </button>
            <Button 
              as="a" 
              href="#cta" 
              onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('cta') }}
            >
              Get started
            </Button>
          </div>

          <button
            type="button"
            className={`navbar__toggle ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span></span>
            <span></span>
          </button>
        </Container>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} activePage={activePage} onNavigate={onNavigate} />
    </>
  )
}

export default Navbar
