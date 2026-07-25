import { motion } from 'framer-motion'

function FeaturesHeroVisual() {
  return (
    <div className="features-visual-container">
      {/* Outer Pulse Rings */}
      <div className="orbital-ring orbital-ring--outer"></div>
      <div className="orbital-ring orbital-ring--inner"></div>

      {/* Floating Agent Card Top-Right */}
      <motion.div 
        className="floating-agent-card"
        initial={{ y: -10 }}
        animate={{ y: [ -10, 5, -10 ] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="agent-avatar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span className="live-call-dot"></span>
        </div>
        <div>
          <strong>Rispa Agent</strong>
          <span>On a live call</span>
        </div>
      </motion.div>

      {/* Floating Voice Waveform Badge Left */}
      <motion.div 
        className="floating-voice-badge"
        initial={{ x: -10 }}
        animate={{ x: [ -10, 6, -10 ] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="mic-circle">🎙️</div>
        <div className="mini-waveform">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </motion.div>

      {/* Central Interactive Audio Message Panel */}
      <div className="central-audio-panel">
        <div className="chat-preview-row">
          <div className="mini-avatar">👩</div>
          <div className="mini-lines">
            <span className="line-long"></span>
            <span className="line-short"></span>
          </div>
          <span className="call-icon">📞</span>
        </div>
        <div className="chat-preview-row active-row">
          <div className="mini-avatar">👨</div>
          <div className="mini-lines">
            <span className="line-long"></span>
            <span className="line-short"></span>
          </div>
          <span className="chat-icon">💬</span>
        </div>
        <div className="chat-preview-row">
          <div className="mini-avatar">🧑</div>
          <div className="mini-lines">
            <span className="line-long"></span>
          </div>
          <span className="mail-icon">✉️</span>
        </div>

        {/* WhatsApp Confirmation Card */}
        <div className="whatsapp-card">
          <strong>WhatsApp Automation</strong>
          <p>Automated confirmation & follow-up messages sent instantly.</p>
        </div>
      </div>

      {/* Floating Bottom Channel Icons Bar */}
      <motion.div 
        className="floating-channels-bar"
        initial={{ y: 10 }}
        animate={{ y: [ 10, -4, 10 ] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="channel-btn phone">📞</span>
        <span className="channel-btn whatsapp">💬</span>
        <span className="channel-btn chat">💭</span>
        <span className="channel-btn email">✉️</span>
        <span className="channel-btn web">🌐</span>
      </motion.div>
    </div>
  )
}

export default FeaturesHeroVisual
