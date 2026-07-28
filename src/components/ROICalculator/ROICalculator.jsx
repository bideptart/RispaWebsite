import { useState } from 'react'
import Container from '../Container'
import Badge from '../Badge'

function ROICalculator() {
  const [calls, setCalls] = useState(500)

  const missedCallsSaved = Math.round(calls * 0.3)
  const hoursSaved       = Math.round((calls * 4) / 60)
  const extraBookings    = Math.round(calls * 0.15)

  return (
    <section className="section roi-section" id="roi-calculator">
      <Container>
        <div className="roi-layout">

          {/* Left — copy */}
          <div className="roi-layout__copy">
            <Badge>SEE YOUR IMPACT</Badge>
            <h2 className="roi-layout__heading">
              What could Rispa<br />do for you?
            </h2>
            <p className="roi-layout__desc">
              Drag the slider to match your monthly call volume and see your estimated savings in real time.
            </p>
            <ul className="roi-layout__bullets">
              <li>
                <span className="roi-bullet-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                No missed calls — 24/7 coverage
              </li>
              <li>
                <span className="roi-bullet-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                Free up staff from routine call handling
              </li>
              <li>
                <span className="roi-bullet-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                Convert more enquiries to bookings
              </li>
            </ul>
          </div>

          {/* Right — calculator */}
          <div className="roi-layout__calc">
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
          </div>

        </div>
      </Container>
    </section>
  )
}

export default ROICalculator
