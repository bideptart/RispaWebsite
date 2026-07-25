import Container from '../Container'
import logo from '../../assets/logos/rispa-logo.svg'

function Footer({ onNavigate }) {
  return (
    <footer style={{ 
      background: '#0d1e1c', 
      padding: '4rem 0 2rem',
      position: 'relative'
    }}>
      {/* Top glow effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, transparent, rgba(33,137,126,0.6), transparent)'
      }}></div>
      
      <Container style={{ maxWidth: '1280px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr repeat(4, 1fr)', 
          gap: '2rem', 
          marginBottom: '3rem' 
        }}>
          {/* Brand section */}
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              marginBottom: '1.5rem' 
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: '#21897e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '24px',
                fontWeight: '900',
                fontFamily: 'Outfit, sans-serif'
              }}>R</div>
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '28px',
                fontWeight: '900',
                color: '#fff',
                letterSpacing: '-0.04em'
              }}>
                Rispa<span style={{ color: '#21897e' }}>.ai</span>
              </div>
            </div>
            
            <p style={{ 
              color: '#a0b3ae', 
              lineHeight: '1.7', 
              fontSize: '0.95rem',
              marginBottom: '1.5rem' 
            }}>
              Native-audio voice agents for Indian businesses. Sub-second latency, self-hosted dashboard, Indian carrier connectivity — without the enterprise vendor markup.
            </p>
            
            <button style={{
              background: 'linear-gradient(135deg, #21897e 0%, #1b6d63 100%)',
              border: 'none',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '999px',
              fontSize: '0.95rem',
              fontWeight: '700',
              boxShadow: '0 0 20px rgba(33,137,126,0.3)'
            }}>
              Customer dashboard ↗
            </button>
          </div>
          
          {/* Platform column */}
          <div>
            <h4 style={{ 
              color: '#e6efed', 
              marginBottom: '1.25rem', 
              fontSize: '0.85rem', 
              fontWeight: '700', 
              letterSpacing: '0.12em', 
              textTransform: 'uppercase' 
            }}>
              Platform
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>Features</a></li>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>Pricing</a></li>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>FAQ</a></li>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>Dashboard</a></li>
            </ul>
          </div>
          
          {/* Industries column */}
          <div>
            <h4 style={{ 
              color: '#e6efed', 
              marginBottom: '1.25rem', 
              fontSize: '0.85rem', 
              fontWeight: '700', 
              letterSpacing: '0.12em', 
              textTransform: 'uppercase' 
            }}>
              Industries
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>Real Estate</a></li>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>Legal Services</a></li>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>E-Commerce</a></li>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>Restaurants</a></li>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>Automotive</a></li>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>Home Services</a></li>
            </ul>
          </div>
          
          {/* Company column */}
          <div>
            <h4 style={{ 
              color: '#e6efed', 
              marginBottom: '1.25rem', 
              fontSize: '0.85rem', 
              fontWeight: '700', 
              letterSpacing: '0.12em', 
              textTransform: 'uppercase' 
            }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>About</a></li>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>Blog</a></li>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </div>
          
          {/* Legal column */}
          <div>
            <h4 style={{ 
              color: '#e6efed', 
              marginBottom: '1.25rem', 
              fontSize: '0.85rem', 
              fontWeight: '700', 
              letterSpacing: '0.12em', 
              textTransform: 'uppercase' 
            }}>
              Legal
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>Terms of Service</a></li>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>Refund & Cancellation</a></li>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>Grievance Redressal</a></li>
              <li><a href="#" style={{ color: '#a0b3ae', fontSize: '0.95rem', textDecoration: 'none' }}>All policies →</a></li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div style={{
          borderTop: '1px solid rgba(160, 179, 174, 0.15)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#7a8d88',
          fontSize: '0.85rem'
        }}>
          <div>© {new Date().getFullYear()} Rispa.ai. All rights reserved.</div>
        </div>
      </Container>
      
      {/* Chat button (like the snapshot) */}
      <button style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #21897e 0%, #1b6d63 100%)',
        border: 'none',
        color: '#fff',
        fontSize: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 30px rgba(33,137,126,0.4)',
        cursor: 'pointer'
      }}>
        💬
      </button>
    </footer>
  )
}

export default Footer
