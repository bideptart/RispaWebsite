import { useState } from 'react'
import { faqItems } from '../../data/faq'
import Container from '../Container'
import SectionTitle from '../SectionTitle'
import Accordion from './Accordion'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section className="section section--faq" id="faq">
      <SectionTitle
        eyebrow="FAQ"
        title="Questions we always get asked."
        description="Everything you need to know about Rispa.ai, our voice agents, and how to get started."
        align="center"
      />
      <Container className="faq-list faq-list--compact">
        {faqItems.map((item, index) => (
          <Accordion
            key={item.question}
            item={item}
            open={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </Container>
    </section>
  )
}

export default FAQ
