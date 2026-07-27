import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { VolumeX, Keyboard, Volume2, UserPlus, Video, User, PhoneOff } from 'lucide-react'

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

          {/* Status Bar */}
          <div className="phone-status-bar">
            <span className="time">{currentTime}</span>
            <div className="status-icons">
              <span>📡</span>
              <span>🔋</span>
            </div>
          </div>

          {/* Screen Content */}
          <div className="phone-content">
            {/* Incoming Call Header */}
            <div className="call-header">
              <div className="call-label">INCOMING CALL</div>
              <div className="call-number">+27 21 555 - XXXX</div>
            </div>

            {/* AI Avatar Circle */}
            <motion.div 
              className="ai-avatar-circle"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <div className="ai-badge">AI</div>
            </motion.div>

            {/* Agent Info */}
            <div className="agent-info">
              <div className="agent-name">AI Receptionist</div>
              <div className="agent-status">
                <span className="status-dot"></span>
                Answering - {formatTime(callDuration)}
              </div>
            </div>

            {/* Control Buttons Grid */}
            <div className="control-buttons">
              <button className="control-btn">
                <span className="btn-icon"><VolumeX size={20} /></span>
                <span className="btn-label">Mute</span>
              </button>
              <button className="control-btn">
                <span className="btn-icon"><Keyboard size={20} /></span>
                <span className="btn-label">Keypad</span>
              </button>
              <button className="control-btn audio-active">
                <span className="btn-icon"><Volume2 size={20} /></span>
                <span className="btn-label">Audio</span>
              </button>
              <button className="control-btn">
                <span className="btn-icon"><UserPlus size={20} /></span>
                <span className="btn-label">Add call</span>
              </button>
              <button className="control-btn">
                <span className="btn-icon"><Video size={20} /></span>
                <span className="btn-label">Video</span>
              </button>
              <button className="control-btn">
                <span className="btn-icon"><User size={20} /></span>
                <span className="btn-label">Contacts</span>
              </button>
            </div>

            {/* End Call Button */}
            <button className="end-call-btn">
              <PhoneOff size={28} color="white" fill="white" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default FeaturesHeroVisual
