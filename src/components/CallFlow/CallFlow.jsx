import { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import Badge from '../Badge'

const flowSteps = [
  { icon: '📞', title: 'Customer calls in',    description: 'A call comes in on your business number, any time, day or night.' },
  { icon: '🎙️', title: 'AI answers instantly', description: 'Rispa picks up in real-time, no hold music, no waiting queue.' },
  { icon: '🧠', title: 'Understands intent',   description: 'Natural conversation flow figures out what the caller actually needs.' },
  { icon: '✅', title: 'Resolves or books',    description: 'Answers the question, books the appointment, or routes to a human.' },
]

function CallFlow() {
  const [visibleSteps, setVisibleSteps] = useState([])
  const stepRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index)
            setVisibleSteps((prev) => (prev.includes(index) ? prev : [...prev, index]))
          }
        })
      },
      { threshold: 0.3 }
    )
    stepRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section call-flow-section" id="call-flow">
      <Container>
        <div className="call-flow-layout">

          {/* Left: badge + title + description */}
          <div className="call-flow-layout__left">
            <Badge>See it in action</Badge>
            <h2 className="section-title-row__heading" style={{ marginTop: '0.75rem' }}>
              From ring<br />to resolved.
            </h2>
            <p className="section-title-row__desc" style={{ marginTop: '0.75rem' }}>
              Watch how a single call moves through Rispa, start to finish.
            </p>
          </div>

          {/* Right: animated steps */}
          <div className="call-flow">
            {flowSteps.map((step, index) => (
              <div
                key={step.title}
                ref={(el) => (stepRefs.current[index] = el)}
                data-index={index}
                className={`call-flow__step ${visibleSteps.includes(index) ? 'call-flow__step--visible' : ''}`}
              >
                <div className="call-flow__icon">{step.icon}</div>
                <div className="call-flow__content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < flowSteps.length - 1 && <div className="call-flow__connector" />}
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}

export default CallFlow
