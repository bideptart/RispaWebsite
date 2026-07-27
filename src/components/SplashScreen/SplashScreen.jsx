import { useState, useEffect } from 'react'
import rispaMark from '/images/rispa-mark.svg'
import './SplashScreen.css'

function SplashScreen({ onFinish }) {
  const [phase, setPhase] = useState('enter')

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase('exit'), 2000)
    const finishTimer = setTimeout(() => onFinish(), 2800)
    // Hard safety: never block longer than 4s
    const safetyTimer = setTimeout(() => onFinish(), 4000)
    return () => {
      clearTimeout(enterTimer)
      clearTimeout(finishTimer)
      clearTimeout(safetyTimer)
    }
  }, [onFinish])

  return (
    <div className={`splash ${phase === 'exit' ? 'splash--exit' : ''}`}>
      <div className="splash__content">
        <img src={rispaMark} alt="Rispa.ai" className="splash__icon" />
        <h1 className="splash__name">Rispa.ai</h1>
        <p className="splash__tagline">AI voice agents that sound human</p>
      </div>
    </div>
  )
}

export default SplashScreen
