import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { VolumeX, Keyboard, Volume2, UserPlus, Video, User, PhoneOff, Bot } from 'lucide-react'

function FeaturesHeroVisual() {
  const [callDuration, setCallDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    // Update current time
    const updateTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      setCurrentTime(`${hours}:${minutes}`)
    }

    updateTime()
    const timeInterval = setInterval(updateTime, 1000)

    return () => clearInterval(timeInterval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCallDuration(prev => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }
  return (
    <div className="features-visual-container">
      {/* Phone Mockup */}
      <motion.div 
        className="phone-mockup"
        initial={{ y: 0 }}
        animate={{ y: [ 0, -8, 0 ] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Phone Frame */}
        <div className="phone-frame">
          {/* Notch */}
          <div className="phone-notch"></div>

          {/* Status Bar - iPhone style */}
          <div className="phone-status-bar">
            <span className="time">{currentTime}</span>
            <div className="status-icons">
              <span className="ios-signal" aria-label="Signal">
                <span className="sig-bars">
                  <i></i><i></i><i></i><i></i>
                </span>
              </span>
              <span className="ios-wifi" aria-label="Wi-Fi">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 11.5a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z" fill="#0c211f"/>
                  <path d="M3.7 7.3a6.1 6.1 0 0 1 8.6 0l-1 1a4.7 4.7 0 0 0-6.6 0l-1-1Z" fill="#0c211f"/>
                  <path d="M1.4 4.9a9.4 9.4 0 0 1 13.2 0l-1 1a7.9 7.9 0 0 0-11.2 0l-1-1Z" fill="#0c211f"/>
                </svg>
              </span>
              <span className="ios-battery" aria-label="Battery">
                <span className="battery-shell">
                  <span className="battery-level"></span>
                </span>
                <span className="battery-nub"></span>
              </span>
            </div>
          </div>

          {/* Screen Content - iPhone call style */}
          <div className="phone-content">
            {/* Call Header - FaceTime / iOS Phone style */}
            <div className="call-header">
              <div className="call-label">📞 Rispa.ai · Voice Agent</div>
              <div className="call-number">+1 (415) 555‑0132</div>
              <div className="call-sub">{formatTime(callDuration)} · HD Voice</div>
            </div>

            {/* AI Avatar Circle - iOS contact poster style */}
            <div className="ai-avatar-wrap">
              <motion.span
                className="ai-avatar-ring"
                animate={{ scale: [1, 1.5], opacity: [0.45, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.span
                className="ai-avatar-ring ai-avatar-ring--delay"
                animate={{ scale: [1, 1.5], opacity: [0.45, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 1.1 }}
              />
              <motion.div
                className="ai-avatar-circle"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Bot className="ai-badge" strokeWidth={2} />
                <span className="ai-avatar-sparkle">✨</span>
              </motion.div>
            </div>

            {/* Agent Info - iOS style */}
            <div className="agent-info">
              <div className="agent-name">Riya · AI Receptionist</div>
              <div className="agent-status">
                <span className="status-dot"></span>
                Speaking · Live 🔊
              </div>
            </div>

            {/* Control Buttons Grid - iOS phone style */}
            <div className="control-buttons">
              <button className="control-btn">
                <span className="btn-icon"><VolumeX strokeWidth={2} /></span>
                <span className="btn-label">Mute</span>
              </button>
              <button className="control-btn">
                <span className="btn-icon"><Keyboard strokeWidth={2} /></span>
                <span className="btn-label">Keypad</span>
              </button>
              <button className="control-btn audio-active">
                <span className="btn-icon"><Volume2 strokeWidth={2} /></span>
                <span className="btn-label">Speaker</span>
              </button>
              <button className="control-btn">
                <span className="btn-icon"><UserPlus strokeWidth={2} /></span>
                <span className="btn-label">Add</span>
              </button>
              <button className="control-btn">
                <span className="btn-icon"><Video strokeWidth={2} /></span>
                <span className="btn-label">FaceTime</span>
              </button>
              <button className="control-btn">
                <span className="btn-icon"><User strokeWidth={2} /></span>
                <span className="btn-label">Contacts</span>
              </button>
            </div>

            {/* End Call Button - iOS style */}
            <button className="end-call-btn">
              <PhoneOff strokeWidth={2.2} />
            </button>

            {/* Home indicator - iPhone style */}
            <div className="ios-home-indicator"></div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default FeaturesHeroVisual
