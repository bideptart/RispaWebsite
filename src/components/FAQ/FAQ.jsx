import { useState } from 'react'
import { faqItems } from '../../data/faq'
import Container from '../Container'
import Badge from '../Badge'
import Accordion from './Accordion'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section className="section" id="faq">
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <Badge>FAQ</Badge>
        <h2 style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}>
          Questions we always get asked.
        </h2>
        <p style={{ color: '#59716d', maxWidth: '50ch', margin: '0 auto' }}>
          Everything you need to know about Rispa, our voice agents, and how to get started.
        </p>
      </div>

      {/* Accordion list — constrained to 820px, centered */}
      <Container>
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
        }}>
          {faqItems.map((item, index) => (
            <Accordion
              key={item.question}
              item={item}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FAQ
