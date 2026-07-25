import { features } from '../../data/features'
import SectionTitle from '../SectionTitle'
import Container from '../Container'
import Stats from '../Stats/Stats'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Features() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeFeature = features[activeIndex]
  const intervalRef = useRef(null)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % features.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext()
    }, 4000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      handleNext()
    }, 4000)
  }

  const handleNextWithReset = () => {
    resetInterval()
    handleNext()
  }

  const handlePrevWithReset = () => {
    resetInterval()
    handlePrev()
  }

  const handleDotClickWithReset = (index) => {
    resetInterval()
    setActiveIndex(index)
  }

  return (
    <section className="section" id="features">
      <Container>
        <SectionTitle
          eyebrow="THE HUMAN-KIND EXPERIENCE"
          title={
            <>
              Conversations indistinguishable from{' '}
              <span className="highlighted-text">your best agent.</span>
            </>
          }
          description="Rispa.ai skips the brittle speech-to-text and text-to-speech relay and runs on a single audio-native engine — so your callers hear pauses, emotion, and timing that feel right."
        />
        
        <Stats />
        
        <div className="features-slider">
          <div className="slider-indicator">
            <span className="slider-badge">
              {String(activeIndex + 1).padStart(2, '0')} / {String(features.length).padStart(2, '0')}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="feature-slider-content"
            >
              <div className="feature-illustration">
                <div className="illustration-card">
                  <div className="illustration-icon-wrapper">
                    <span className="illustration-icon">{activeFeature.icon}</span>
                  </div>
                </div>
              </div>

              <div className="feature-text">
                <h3 className="feature-slider-title">{activeFeature.title}</h3>
                <p className="feature-slider-description">{activeFeature.description}</p>
                
                <div className="slider-nav">
                  <button onClick={handlePrevWithReset} className="slider-nav-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button onClick={handleNextWithReset} className="slider-nav-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                  <div className="slider-dots">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleDotClickWithReset(index)}
                        className={`slider-dot ${index === activeIndex ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}

export default Features
