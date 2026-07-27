import { useState } from 'react'
import Container from '../Container'
import SectionTitle from '../SectionTitle'

function ROICalculator() {
  const [calls, setCalls] = useState(500)

  const missedCallsSaved = Math.round(calls * 0.3)
  const hoursSaved = Math.round((calls * 4) / 60)
  const extraBookings = Math.round(calls * 0.15)

  return (
    <section className="section roi-section" id="roi-calculator">
      <SectionTitle
        eyebrow="See your impact"
        title="What could Rispa do for you?"
        description="Slide to match your monthly call volume and see the estimated impact."
      />
      <Container>
        <div className="roi-calculator">
          <div className="roi-calculator__input">
            <label htmlFor="calls-slider">
              Monthly inbound calls: <strong>{calls.toLocaleString()}</strong>
            </label>
            <input
              id="calls-slider"
              type="range"
              min="50"
              max="5000"
              step="50"
              value={calls}
              onChange={(e) => setCalls(Number(e.target.value))}
              className="roi-calculator__slider"
            />
          </div>

          <div className="roi-calculator__results">
            <div className="roi-result-card">
              <div className="roi-result-value">{missedCallsSaved.toLocaleString()}</div>
              <div className="roi-result-label">Missed calls recovered / month</div>
            </div>
            <div className="roi-result-card">
              <div className="roi-result-value">{hoursSaved.toLocaleString()}</div>
              <div className="roi-result-label">Staff hours saved / month</div>
            </div>
            <div className="roi-result-card">
              <div className="roi-result-value">{extraBookings.toLocaleString()}</div>
              <div className="roi-result-label">Extra bookings / month</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ROICalculator