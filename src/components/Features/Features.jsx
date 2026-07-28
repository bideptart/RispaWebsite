import { features } from '../../data/features'
import SectionTitle from '../SectionTitle'
import Container from '../Container'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Features() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeFeature = features[activeIndex]
  const intervalRef = useRef(null)

  const handleNext = () => setActiveIndex((p) => (p + 1) % features.length)
  const handlePrev = () => setActiveIndex((p) => (p - 1 + features.length) % features.length)

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 4000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(handleNext, 4000)
  }
  const handleNextWithReset = () => { resetInterval(); handleNext() }
  const handlePrevWithReset = () => { resetInterval(); handlePrev() }

  const isActive = (i) => i === activeIndex
  const isNearby = (i) =>
    i === (activeIndex + 1) % features.length ||
    i === (activeIndex - 1 + features.length) % features.length

  const randomRotate = () => Math.floor(Math.random() * 21) - 10

  return (
    <section className="section features-testimonials-section" id="features">
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

        <div className="features-testimonials">
          <div className="ft-grid">
            {/* Left — stacked image deck */}
            <div className="ft-images">
              <div className="ft-images-stack">
                <AnimatePresence mode="popLayout">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, scale: 0.9, z: -100, rotateY: randomRotate() }}
                      animate={{
                        opacity: isActive(index) ? 1 : isNearby(index) ? 0.7 : 0,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotateY: isActive(index) ? 0 : randomRotate(),
                        zIndex: isActive(index) ? 999 : features.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{ opacity: 0, scale: 0.9, z: 100, rotateY: randomRotate() }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="ft-image-layer"
                    >
                      {feature.image ? (
                        <img
                          src={feature.image}
                          alt={feature.title}
                          draggable={false}
                          className="ft-photo"
                        />
                      ) : (
                        <div className="ft-fallback-card">
                          <div className="ft-fallback-icon">{feature.icon}</div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Right — text panel + controls */}
            <div className="ft-text-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="ft-text-panel"
                >
                  <h3 className="ft-name">{activeFeature.title}</h3>
                  <p className="ft-designation">
                    {activeFeature.points?.slice(0, 2).join(' · ') || activeFeature.icon}
                  </p>

                  <motion.p className="ft-quote">
                    {activeFeature.description.split(' ').map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.02 * index }}
                        className="ft-word"
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                  </motion.p>

                  {activeFeature.points && (
                    <ul className="ft-points">
                      {activeFeature.points.map((pt, i) => (
                        <motion.li
                          key={pt}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.08 }}
                        >
                          <span className="ft-point-dot" />
                          {pt}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="ft-controls">
                <button onClick={handlePrevWithReset} className="ft-arrow group-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ft-arrow-svg">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button onClick={handleNextWithReset} className="ft-arrow group-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ft-arrow-svg">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Features
