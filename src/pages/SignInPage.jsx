import { useState } from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import logo from '../assets/logos/rispa-logo.svg'

function SignInPage({ onNavigate }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [keepSignedIn, setKeepSignedIn] = useState(false)

  return (
    <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f7fbfa 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Left side */}
      <div 
        style={{ 
          padding: '4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: `
            radial-gradient(ellipse at 15% 15%, rgba(33,137,126,0.15) 0%, transparent 70%),
            linear-gradient(180deg, #f7fbfa 0%, #ffffff 100%)
          `
        }}
      >
        <div>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.85rem',
              background: '#000',
              color: '#fff',
              borderRadius: '999px',
              marginBottom: '2rem',
              fontSize: '0.85rem',
              fontWeight: '700',
              letterSpacing: '0.16em'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#21897e' }}></span>
            ONE PLATFORM · AI-NATIVE
          </div>

          <h1 
            style={{
              fontFamily: 'Outfit, system-ui, sans-serif',
              fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              color: '#0d2422',
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem'
            }}
          >
            The phone system<br />
            that <span style={{ color: '#21897e', fontStyle: 'italic' }}>answers itself</span>.
          </h1>

          <p 
            style={{
              fontSize: '1.1rem',
              color: '#59716d',
              maxWidth: '400px',
              marginBottom: '2.5rem',
              lineHeight: '1.6'
            }}
          >
            Sign in to manage your number, agent personality, knowledge base, and live call insights.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1.25rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: '#21897e',
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                flexShrink: 0
              }}>✓</span>
              <div>
                <div style={{ fontWeight: '700', color: '#0d2422', fontSize: '1.05rem' }}>Live in 30 seconds</div>
                <div style={{ color: '#59716d', fontSize: '0.95rem' }}>Pick a number, drop your knowledge base, take calls.</div>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: '#21897e',
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                flexShrink: 0
              }}>✓</span>
              <div>
                <div style={{ fontWeight: '700', color: '#0d2422', fontSize: '1.05rem' }}>Per-second billing</div>
                <div style={{ color: '#59716d', fontSize: '0.95rem' }}>No contracts, no minute round-ups. Pay only for the seconds you use.</div>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: '#21897e',
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                flexShrink: 0
              }}>✓</span>
              <div>
                <div style={{ fontWeight: '700', color: '#0d2422', fontSize: '1.05rem' }}>Real-time insight</div>
                <div style={{ color: '#59716d', fontSize: '0.95rem' }}>Transcripts, sentiment, spend — all from your dashboard.</div>
              </div>
            </li>
          </ul>
        </div>

        <div style={{ color: '#718096', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} Rispa.ai · Encrypted · 30-day sessions
        </div>
      </div>

      {/* Right side (Sign in form) */}
      <div 
        style={{ 
          background: '#fff',
          padding: '4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div style={{ maxWidth: '420px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1 style={{
            fontFamily: 'Outfit, system-ui, sans-serif',
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#0d2422',
            letterSpacing: '-0.03em',
            marginBottom: '0.5rem'
          }}>
            Sign in to your <span style={{ color: '#21897e', fontStyle: 'italic' }}>portal</span>.
          </h1>
          <p style={{ color: '#59716d', marginBottom: '2rem', fontSize: '1rem' }}>
            Sign in to your dashboard.
          </p>

          <form 
            onSubmit={(e) => e.preventDefault()}
            style={{ display: 'grid', gap: '1.5rem' }}
          >
            <div>
              <label 
                htmlFor="email" 
                style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#0d2422',
                  marginBottom: '0.5rem'
                }}
              >
                Email or username
              </label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  border: '2px solid #e2e8f0',
                  fontSize: '1rem',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#21897e';
                  e.target.style.boxShadow = '0 0 0 4px rgba(33,137,126,0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <label 
                  htmlFor="password" 
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#0d2422'
                  }}
                >
                  Password
                </label>
                <a 
                  href="#" 
                  style={{
                    color: '#21897e',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}
                >
                  Forgot password?
                </a>
              </div>
              <div style={{ position: 'relative' }}>
                <input 
                  type="password" 
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    border: '2px solid #e2e8f0',
                    fontSize: '1rem',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                  }}
                />
                <button 
                  type="button"
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: '#59716d',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}
                >
                  Show
                </button>
              </div>
            </div>

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  border: '2px solid #e2e8f0',
                  cursor: 'pointer',
                  accentColor: '#21897e'
                }}
              />
              <span style={{ color: '#0d2422', fontWeight: '500' }}>Keep me signed in</span>
            </label>

            <button
              type="submit"
              style={{ 
                background: '#000', 
                color: '#fff',
                padding: '1rem 1.5rem',
                fontSize: '1.05rem',
                fontWeight: '700',
                borderRadius: '999px',
                border: 'none',
                width: '100%',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)',
                marginTop: '0.5rem',
                cursor: 'pointer'
              }}
            >
              Sign in →
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '2rem', color: '#718096', fontSize: '0.9rem' }}>
            🔒 End-to-end encrypted · sessions expire after 30 minutes of inactivity
          </div>

          <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: '#59716d' }}>
            By signing in you agree to our <a href="#" style={{ color: '#21897e', textDecoration: 'none', fontWeight: '600' }}>Terms</a> and <a href="#" style={{ color: '#21897e', textDecoration: 'none', fontWeight: '600' }}>Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
