import Container from '../Container'
import SectionTitle from '../SectionTitle'
import StepCard from './StepCard'

const steps = [
  {
    step: '01',
    title: 'Design your agent',
    description: 'Pick a voice, write the prompt, set guardrails. Describe the agent in plain English and ship it.',
    points: ['System prompt + personas', 'Guardrails and conversation flow', 'Plain-English agent definition'],
  },
  {
    step: '02',
    title: 'Connect your knowledge',
    description: 'Point the agent at your knowledge base, FAQs, or product docs. It answers from your source of truth, not a generic model.',
    points: ['RAG over your knowledge base', 'Live document sync', 'Source citations on every answer'],
  },
  {
    step: '03',
    title: 'Launch & scale',
    description: 'Plug in your phone number, route inbound or outbound, and go live. Scale from one call to thousands without a queue.',
    points: ['Phone number routing (inbound + outbound)', 'Real-time latency tracking', 'Self-hosted control panel'],
  },
]

function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <SectionTitle
        eyebrow="How it works"
        title="From idea to live agent in three steps."
        description="No infra to spin up, no models to host. Design, connect, and launch — your first agent is taking calls before lunch."
      />
      <Container className="steps-grid">
        {steps.map((item) => (
          <StepCard key={item.step} {...item} />
        ))}
      </Container>
    </section>
  )
}

export default HowItWorks
