import NavLinks from './NavLinks'
import Button from '../Button'

function MobileMenu({ open, onClose, activePage, onNavigate }) {
  return (
    <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
      <div className="mobile-menu__panel">
        <nav className="mobile-menu__links">
          <NavLinks activePage={activePage} onNavigate={onNavigate} onClick={onClose} />
        </nav>
        <Button 
          as="a" 
          href="#cta" 
          onClick={(e) => {
            e.preventDefault()
            onClose()
            if (onNavigate) onNavigate('pricing')
          }}
        >
          Get a free trial
        </Button>
      </div>
    </div>
  )
}

export default MobileMenu
