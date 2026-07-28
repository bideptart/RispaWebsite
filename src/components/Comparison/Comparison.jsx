import { useEffect, useRef } from 'react'
import Container from '../Container'
import Badge from '../Badge'
import { Check, X, Phone } from 'lucide-react'
import './comparison-pro.css'

const without = [
  'Every call after closing time goes to voicemail, and most callers never leave one',
  'Peak hours produce busy tones, and those callers ring somebody else instead',
  'Anyone who would rather not speak English gives up partway through',
  'More coverage means more salaries, whether the phone rings or not',
  'Consent and opt-out tracking lives in a spreadsheet someone has to maintain',
  'Follow-ups happen when a person remembers to make them',
]

const withRispa = [
  'Answered on the first ring at 2am, on a Sunday, in the middle of a sale',
  'Hundreds of calls at once — capacity stops being a headcount question',
  'The caller picks the language and the agent follows them into it',
  'Qualified, booked and logged before anyone on your team is involved',
  'Consent, opt-out and recording disclosure handled on every single call',
  'Every reminder goes out on time, with nobody in the loop',
]

function Comparison() {
  const rootRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const root = rootRef.current
    root.classList.add('vs-anim')
    const io = new IntersectionObserver(onSeen, { threshold: 0.2 })
    root.querySelectorAll('.vs-card').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  function onSeen(entries, io) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-in')
      io.unobserve(entry.target)
    })
  }

  return (
    <section className="section vs-section" id="comparison" ref={rootRef}>
      <Container className="container">
        <div className="vs-head">
          <Badge>WHY RISPA</Badge>
          <h2 className="vs-head__title">The same phone line, without the payroll.</h2>
          <p className="vs-head__sub">
            A missed call is a customer who has already dialled someone else. Adding more agents
            scales the cost, not the coverage.
          </p>
        </div>

        <div className="vs-grid">
          <div className="vs-card vs-card--bad">
            <p className="vs-card__tag vs-card__tag--bad">
              <X size={13} strokeWidth={3} aria-hidden="true" />
              Without a voice agent
            </p>
            <ul className="vs-list">
              {without.map((t, i) => (
                <li key={t} style={{ '--i': i }}>
                  <span className="vs-mark vs-mark--bad" aria-hidden="true">
                    <X size={11} strokeWidth={3.5} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="vs-card vs-card--good">
            <span className="vs-card__cap" aria-hidden="true" />
            <p className="vs-card__tag vs-card__tag--good">
              <Phone size={13} strokeWidth={2.75} aria-hidden="true" />
              With Rispa
            </p>
            <ul className="vs-list">
              {withRispa.map((t, i) => (
                <li key={t} style={{ '--i': i }}>
                  <span className="vs-mark vs-mark--good" aria-hidden="true">
                    <Check size={11} strokeWidth={3.5} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Comparison