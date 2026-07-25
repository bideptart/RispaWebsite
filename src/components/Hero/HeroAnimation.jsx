import AppointmentCardWidget from './AppointmentCardWidget'

function HeroAnimation() {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      maxWidth: '700px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      {/* Background orb/glow */}
      <div style={{
        position: 'absolute',
        top: '-80px',
        left: '-60px',
        width: '280px',
        height: '280px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(33,137,126,0.25) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: '0'
      }}></div>
      
      <div style={{
        background: '#fff',
        borderRadius: '32px',
        border: '1px solid rgba(33,137,126,0.1)',
        boxShadow: '0 30px 80px -40px rgba(33,137,126,0.5)',
        padding: '2.5rem',
        position: 'relative',
        zIndex: '1',
        overflow: 'hidden'
      }}>
        {/* Background pattern */}
        <div style={{
          position: 'absolute',
          inset: '0',
          backgroundImage: 'radial-gradient(rgba(33,137,126,0.15) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          opacity: '0.4',
          zIndex: '0'
        }}></div>
        
        {/* Content wrapper */}
        <div style={{ position: 'relative', zIndex: '1' }}>
          <AppointmentCardWidget />
        </div>
      </div>
    </div>
  )
}

export default HeroAnimation
