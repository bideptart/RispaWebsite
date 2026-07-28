import Container from '../Container'
import SectionTitle from '../SectionTitle'
import StepCard from './StepCard'

const steps = [
  {
    step: '01',
    title: 'Build',
    description: 'Write your agent\'s behavior in plain English, or start from a ready-made template. Paste your website URL to auto-import company facts and FAQs — no engineering required.',
    points: ['Plain-English prompt editor', 'Ready-made industry templates', 'Auto-import from URL or docs'],
  },
  {
    step: '02',
    title: 'Evaluate',
    description: 'Review and edit your agent\'s voice, language, and behavior any time in a simple form. Changes save and apply immediately — no redeploy needed.',
    points: ['Live voice & language preview', 'Instant updates, no redeploy', 'Test with real call simulations'],
  },
  {
    step: '03',
    title: 'Launch',
    description: 'Forward your existing number to Rispa or provision a new line in minutes. Go live immediately — inbound and outbound, any scale.',
    points: ['Forward your existing number', 'Provision new lines instantly', 'Inbound + outbound from day one'],
  },
  {
    step: '04',
    title: 'Optimise',
    description: 'Track call counts, minutes used, and average call duration in your dashboard. Fine-tune your agent\'s prompt based on real call data and transcripts.',
    points: ['Real-time analytics dashboard', 'Full call transcripts', 'CSAT & SLA tracking'],
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
