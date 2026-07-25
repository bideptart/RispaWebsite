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
<<<<<<< HEAD
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                background: 'rgba(33,137,126,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#21897e',
                fontSize: '1.5rem'
              }}>📅</div>
              <div>
                <h3 style={{
                  fontFamily: 'Outfit, system-ui, sans-serif',
                  fontSize: '1.35rem',
                  fontWeight: '600',
                  color: '#0d2422',
                  margin: '0'
                }}>Appointment Booking</h3>
                <p style={{ color: '#59716d', fontSize: '0.95rem', margin: '0' }}>Priya Sharma</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ 
                display: 'flex', 
                gap: '3px', 
                alignItems: 'flex-end',
                height: '24px',
                padding: '0.5rem 0.75rem',
                background: '#f7fbfa',
                borderRadius: '999px'
              }}>
                {[1,2,3,4,5,6,7,8,9].map(i => (
                  <div 
                    key={i}
                    style={{
                      width: '3px',
                      height: `${6 + Math.sin(i) * 10}px`,
                      background: '#21897e',
                      borderRadius: '999px',
                      animation: `pulse${i} ${0.6 + i * 0.1}s ease-in-out infinite alternate`
                    }}
                  ></div>
                ))}
              </div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: '#21897e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                boxShadow: '0 8px 20px -8px rgba(33,137,126,0.6)'
              }}>📞</div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: '#fff',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0d2422',
                boxShadow: '0 4px 10px -6px rgba(0,0,0,0.1)'
              }}>💬</div>
            </div>
          </div>
          
          {/* Agent message */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              color: '#59716d',
              marginBottom: '0.5rem'
            }}>
              <span style={{ fontSize: '1.2rem' }}>🤖</span>
              9278 Agent
            </div>
            <p style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#21897e',
              margin: '0'
            }}>
              हो गया! आपका अपॉइंटमेंट सफलतापूर्वक बुक हो गया है।
            </p>
          </div>
          
          {/* Appointment confirmation widget */}
          <div style={{
            background: '#f7fbfa',
            borderRadius: '20px',
            padding: '1.5rem',
            border: '1px solid rgba(33,137,126,0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ color: '#21897e', fontSize: '1.2rem' }}>📅</span>
              <span style={{ fontWeight: '600', color: '#0d2422' }}>अपॉइंटमेंट बुक हुआ</span>
            </div>
            
            {/* Date selector */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '1rem'
            }}>
              <button style={{
                background: '#fff',
                border: '1px solid #d7e7e3',
                borderRadius: '10px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#59716d'
              }}>‹</button>
              <div style={{ 
                fontFamily: 'Outfit, system-ui, sans-serif',
                fontSize: '1rem', 
                fontWeight: '600', 
                color: '#0d2422' 
              }}>28 Jan</div>
              <button style={{
                background: '#fff',
                border: '1px solid #d7e7e3',
                borderRadius: '10px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#59716d'
              }}>›</button>
            </div>
            
            {/* Time slots */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '0.75rem'
            }}>
              <button style={{
                background: '#fff',
                border: '1px solid #d7e7e3',
                borderRadius: '12px',
                padding: '0.75rem',
                color: '#59716d',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>09:00</button>
              <button style={{
                background: '#21897e',
                border: '1px solid #21897e',
                borderRadius: '12px',
                padding: '0.75rem',
                color: '#fff',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.95rem',
                boxShadow: '0 4px 12px -4px rgba(33,137,126,0.4)'
              }}>10:00</button>
              <button style={{
                background: '#fff',
                border: '1px solid #d7e7e3',
                borderRadius: '12px',
                padding: '0.75rem',
                color: '#59716d',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}>11:00</button>
            </div>
          </div>
          
          {/* Footer */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: '2.5rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(33,137,126,0.08)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#59716d',
              fontSize: '0.9rem'
            }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'rgba(33,137,126,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem'
              }}>🌐</div>
              Tamil · Inbound Call
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: '#d1fae5',
              color: '#047857',
              padding: '0.35rem 0.85rem',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 8px #22c55e'
              }}></span>
              Live
            </div>
          </div>
=======
          <AppointmentCardWidget />
>>>>>>> d8db9f5091352e850318560371c1c6c4b933a75a
        </div>
      </div>
    </div>
  )
}

export default HeroAnimation
