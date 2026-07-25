import Button from '../Button'

function HeroButtons({ onNavigate }) {
  return (
    <div className="hero__actions">
      <Button as="a" href="#cta" className="button--primary" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('cta') }}>
        Build your first agent &rarr;
      </Button>
      <Button as="a" href="#features" variant="secondary" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('features') }}>
        Features &rarr;
      </Button>
    </div>
  )
}

export default HeroButtons
