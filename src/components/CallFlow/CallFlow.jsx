import Container from '../Container'
import Badge from '../Badge'
import { PhoneIncoming, Zap, Brain, CalendarCheck } from 'lucide-react'
import './call-flow-stack.css'

const flowSteps = [
  {
    Icon: PhoneIncoming,
    title: 'Customer calls in',
    description: 'A call lands on your business number at 3pm or 3am. Nobody has to be at a desk for it to be answered.',
  },
  {
    Icon: Zap,
    title: 'Rispa answers instantly',
    description: 'Picked up in under a second. No hold music, no queue, no voicemail for the caller to hang up on.',
  },
  {
    Icon: Brain,
    title: 'It works out what they need',
    description: 'Natural back-and-forth, interruptions and all. The caller talks the way they would to a person.',
  },
  {
    Icon: CalendarCheck,
    title: 'It resolves or books',
    description: 'Answers the question, books the slot, or hands off to a human with the context already gathered.',
  },
]

function CallFlow() {
  return (
    <section className="section cf-section" id="call-flow">
      <Container className="container">
        <div className="cf-layout">
          <div className="cf-copy">
            <Badge>SEE IT IN ACTION</Badge>
            <h2 className="cf-copy__title">From ring to resolved.</h2>
            <p className="cf-copy__sub">
              One call, start to finish, without anyone on your team touching a handset.
            </p>
            <p className="cf-copy__note">Scroll to follow the call</p>
          </div>

          <ol className="cf-stack">
            {flowSteps.map((step, i) => {
              const { Icon } = step
              return (
                <li className="cf-card" key={step.title} style={{ '--i': i }}>
                  <div className="cf-card__top">
                    <span className="cf-card__icon">
                      <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="cf-card__step">
                      Step {i + 1}
                      <span className="cf-card__of">of {flowSteps.length}</span>
                    </span>
                  </div>
                  <h3 className="cf-card__title">{step.title}</h3>
                  <p className="cf-card__desc">{step.description}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </Container>
    </section>
  )
}

export default CallFlow