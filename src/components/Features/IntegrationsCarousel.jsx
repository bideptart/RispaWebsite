import { useState } from 'react'

function IntegrationsCarousel() {
  // Create array of integration images (Webhooks, Scheduling, Analytics)
  const integrationImages = [
    { src: '/images/webhooks.png', label: 'Webhooks' },
    { src: '/images/scudeling.png', label: 'Scheduling' },
    { src: '/images/anyslit.png', label: 'Analytics' },
  ]

  return (
    <div className="integrations-carousel-section">
      <div className="integrations-carousel-track">
        <div className="integrations-carousel-content">
          {integrationImages.map((item, index) => (
            <div 
              key={`${item.label}-${index}`}
              className="integration-card"
            >
              <img 
                src={item.src} 
                alt={item.label}
                className="integration-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IntegrationsCarousel
