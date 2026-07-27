import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function IntegrationsCarousel() {
  const [isPaused, setIsPaused] = useState(false)

  // Create array of integration images (SMS, Webhooks, Scheduling, Analytics)
  const integrationImages = [
    { src: '/images/sms.png', label: 'SMS' },
    { src: '/images/webhooks.png', label: 'Webhooks' },
    { src: '/images/scudeling.png', label: 'Scheduling' },
    { src: '/images/anyslit.png', label: 'Analytics' },
  ]

  // Duplicate images for seamless loop
  const allImages = [...integrationImages, ...integrationImages]

  return (
    <div className="integrations-carousel-section">
      <div className="integrations-carousel-track">
        <motion.div
          className="integrations-carousel-content"
          animate={{
            x: isPaused ? 0 : [0, -50 + '%']
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }
          }}
          style={{ x: 0 }}
        >
          {allImages.map((item, index) => (
            <div 
              key={index} 
              className="integration-card"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <img 
                src={item.src} 
                alt={item.label}
                className="integration-image"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default IntegrationsCarousel
