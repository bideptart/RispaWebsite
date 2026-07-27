import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          color: '#59716d',
          fontFamily: 'Inter, system-ui, sans-serif',
          padding: '2rem',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '1rem', color: '#0d2422', fontWeight: 600 }}>
            Something went wrong loading this page.
          </p>
          <pre style={{
            fontSize: '0.75rem',
            background: '#f7fbfa',
            padding: '1rem',
            borderRadius: '8px',
            maxWidth: '600px',
            overflowX: 'auto',
            color: '#c0392b',
          }}>
            {this.state.error?.message}
          </pre>
          <button
            onClick={() => window.location.href = '/'}
            style={{
              padding: '0.5rem 1.25rem',
              background: '#21897e',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem',
            }}
          >
            Go home
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
