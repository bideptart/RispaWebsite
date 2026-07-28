import { motion } from 'framer-motion'

function IndustriesHeroVisual() {
  return (
    <motion.div
      className="dashboard-mockup"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="dashboard-mockup__header">
        <div className="dashboard-mockup__brand">
          <div className="dashboard-mockup__logo">
            <span></span><span></span><span></span><span></span>
          </div>
          <div>
            <div className="dashboard-mockup__name">Rispa</div>
            <div className="dashboard-mockup__subtitle">UNIFIED COMMUNICATIONS</div>
          </div>
        </div>
        <span className="dashboard-mockup__badge">
          <span className="dashboard-mockup__dot"></span> AI-Enhanced · All Channels
        </span>
      </div>

      <div className="dashboard-mockup__tabs">
        <span className="dashboard-mockup__tab dashboard-mockup__tab--active">📞 Voice</span>
        <span className="dashboard-mockup__tab">💬 SMS &amp; MMS</span>
        <span className="dashboard-mockup__tab">👥 Team Chat</span>
      </div>

      <div className="dashboard-mockup__row">
        <div className="dashboard-mockup__row-left">
          <span className="dashboard-mockup__icon">📞</span>
          <div>
            <div className="dashboard-mockup__row-title">Voice</div>
            <div className="dashboard-mockup__row-sub">1.2M min / day</div>
          </div>
        </div>
        <span className="dashboard-mockup__tier">Tier-1</span>
      </div>

      <div className="dashboard-mockup__chat">
        <div className="dashboard-mockup__chat-label">AI RECEPTIONIST</div>
        <div className="dashboard-mockup__chat-bubble">Good morning! How can I help?</div>
        <div className="dashboard-mockup__chat-dots">
          <span></span><span></span><span></span>
        </div>
      </div>

      <div className="dashboard-mockup__stats">
        <div className="dashboard-mockup__stat">
          <div className="dashboard-mockup__stat-value">99.999%</div>
          <div className="dashboard-mockup__stat-label">Uptime SLA</div>
        </div>
        <div className="dashboard-mockup__stat">
          <div className="dashboard-mockup__stat-value">150+</div>
          <div className="dashboard-mockup__stat-label">Countries</div>
        </div>
        <div className="dashboard-mockup__stat">
          <div className="dashboard-mockup__stat-value">70+</div>
          <div className="dashboard-mockup__stat-label">Global PoPs</div>
        </div>
        <div className="dashboard-mockup__stat">
          <div className="dashboard-mockup__stat-value">4</div>
          <div className="dashboard-mockup__stat-label">Channels · One Platform</div>
        </div>
      </div>
    </motion.div>
  )
}

export default IndustriesHeroVisual