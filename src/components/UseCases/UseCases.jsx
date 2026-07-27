import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../Container'
import SectionTitle from '../SectionTitle'

const useCases = [
  {
    icon: '🏥',
    title: 'Healthcare & Clinics',
    description: 'Book appointments, send reminders, and answer patient FAQs — without your front desk juggling calls all day.',
  },
  {
    icon: '💇',
    title: 'Salons & Spas',
    description: 'Handle booking requests, cancellations, and service inquiries 24/7, even after closing hours.',
  },
  {
    icon: '🍽️',
    title: 'Restaurants',
    description: 'Take reservations, answer menu questions, and manage takeout orders without missing a single call during rush hour.',
  },
  {
    icon: '🏠',
    title: 'Real Estate',
    description: 'Qualify leads instantly, schedule property visits, and answer listing questions before a human agent even picks up.',
  },
  {
    icon: '🔧',
    title: 'Home Services',
    description: 'Capture service requests, dispatch details, and quote inquiries for plumbers, electricians, and contractors.',
  },
  {
    icon: '🛍️',
    title: 'Retail & E-commerce',
    description: 'Handle order status, return requests, and product questions — freeing up your team for in-store customers.',
  },
]

function UseCases() {
  const [active, setActive] = useState(0)

  const next = () => setActive((prev) => (prev + 1) % useCases.length)
  const prev = () => setActive((prev) => (prev - 1 + useCases.length) % useCases.length)

  return (
    <section className="section" id="use-cases">
      <SectionTitle
        eyebrow="Real-world use cases"
        title="Built for how your business actually works."
        description="Whatever industry you're in, Rispa adapts to the calls you receive every day."
      />
      <Container>
        <div className="use-case-stack">
          <div className="use-case-stack__cards">
            {useCases.map((item, index) => {
              const offset = index - active
              const isActive = offset === 0

              if (Math.abs(offset) > 2) return null

              return (
                <motion.article
                  key={item.title}
                  className="use-case-stack__card"
                  animate={{
                    x: offset * 40,
                    scale: 1 - Math.abs(offset) * 0.08,
                    opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.25,
                    zIndex: 10 - Math.abs(offset),
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                  style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                >
                  <div className="use-case-stack__icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              )
            })}
          </div>

          <div className="use-case-stack__controls">
            <button className="use-case-stack__btn" onClick={prev} aria-label="Previous">
              ←
            </button>
            <div className="use-case-stack__dots">
              {useCases.map((_, index) => (
                <span
                  key={index}
                  className={`use-case-stack__dot ${index === active ? 'use-case-stack__dot--active' : ''}`}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
            <button className="use-case-stack__btn" onClick={next} aria-label="Next">
              →
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default UseCases