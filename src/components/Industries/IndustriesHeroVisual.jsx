import { motion } from 'framer-motion'

function IndustriesHeroVisual() {
  const languages = [
    { text: 'नमस्ते', x: -90, y: -70 },
    { text: 'வணக்கம்', x: 100, y: -40 },
    { text: 'Hello · నమస్తే', x: 20, y: 100 },
    { text: 'Hola · Bonjour', x: -100, y: 50 }
  ]

  return (
    <div className="industries-visual-container">
      {/* Background Orbit Radar Grid */}
      <div className="radar-grid"></div>
      <div className="radar-circle radar-circle--outer"></div>
      <div className="radar-circle radar-circle--inner"></div>

      {/* Central Pulsing Audio Core */}
      <motion.div 
        className="central-voice-core"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="core-bars">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </motion.div>

      {/* Orbiting Language Chips */}
      {languages.map((lang, index) => (
        <motion.div
          key={lang.text}
          className="orbit-lang-chip"
          style={{ x: lang.x, y: lang.y }}
          animate={{
            y: [lang.y - 6, lang.y + 6, lang.y - 6]
          }}
          transition={{
            duration: 3 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="lang-node-dot"></span>
          <span>{lang.text}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default IndustriesHeroVisual
