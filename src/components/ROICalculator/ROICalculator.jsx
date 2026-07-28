import { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import Badge from '../Badge'
import { Check } from 'lucide-react'
import './roi-panel.css'

const MISSED_RATE = 0.30
const BOOKING_RATE = 0.25
const MINS_PER_CALL = 4

function useTween(target) {
  const [shown, setShown] = useState(target)
  const fromRef = useRef(target)
  const rafRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(target)
      fromRef.current = target
      return
    }
    const from = fromRef.current
    const start = performance.now()
    cancelAnimationFrame(rafRef.current)
    const step = (now) => {
      const p = Math.min((now - start) / 420, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setShown(from + (target - from) * eased)
      if (p < 1) rafRef.current = requestAnimationFrame(step)
      else fromRef.current = target
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [target])

  return shown
}

function pctOf(v, min, max) {
  return ((v - min) / (max - min)) * 100
}

const SWEEP_FROM = 100
const SWEEP_TO = 1200
const SWEEP_MS = 2400

function ROICalculator() {
  const [calls, setCalls] = useState(SWEEP_FROM)
  const [value, setValue] = useState(680)
  const rootRef = useRef(null)
  const sweepRef = useRef(null)
  const touchedRef = useRef(false)
  const ranRef = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCalls(SWEEP_TO)
      return
    }
    const io = new IntersectionObserver(onSeen, { threshold: 0.4 })
    io.observe(rootRef.current)
    return () => {
      io.disconnect()
      cancelAnimationFrame(sweepRef.current)
    }
  }, [])

  function onSeen(entries) {
    if (!entries[0].isIntersecting) return
    if (ranRef.current || touchedRef.current) return
    ranRef.current = true
    const start = performance.now()
    const step = (now) => {
      if (touchedRef.current) return
      const p = Math.min((now - start) / SWEEP_MS, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCalls(Math.round((SWEEP_FROM + (SWEEP_TO - SWEEP_FROM) * eased) / 50) * 50)
      if (p < 1) sweepRef.current = requestAnimationFrame(step)
    }
    sweepRef.current = requestAnimationFrame(step)
  }

  function stopSweep() {
    touchedRef.current = true
    cancelAnimationFrame(sweepRef.current)
  }

  const recovered = Math.round(calls * MISSED_RATE)
  const bookings = Math.round(calls * MISSED_RATE * BOOKING_RATE)
  const hours = Math.round((calls * MINS_PER_CALL) / 60)
  const revenue = bookings * value

  const tRevenue = useTween(revenue)
  const tRecovered = useTween(recovered)
  const tHours = useTween(hours)
  const tBookings = useTween(bookings)

  return (
    <section className="section roi-section" id="roi-calculator" ref={rootRef}>
      <Container className="container">
        <div className="roi-grid">

          <div className="roi-copy">
            <Badge>SEE YOUR IMPACT</Badge>
            <h2 className="roi-copy__title">What could Rispa do for you?</h2>
            <p className="roi-copy__sub">
              Move the sliders to match your own numbers. Everything on the right recalculates as
              you go.
            </p>
            <ul className="roi-copy__list">
              <li><Check size={15} strokeWidth={3} aria-hidden="true" />No missed calls, day or night</li>
              <li><Check size={15} strokeWidth={3} aria-hidden="true" />Staff off routine call handling</li>
              <li><Check size={15} strokeWidth={3} aria-hidden="true" />More enquiries turned into bookings</li>
            </ul>
          </div>

          <div className="roi-panel">
            <div className="roi-field">
              <label className="roi-label" htmlFor="roi-calls">
                Monthly inbound calls
                <span className="roi-val">{calls.toLocaleString()}</span>
              </label>
              <input
                id="roi-calls"
                type="range"
                min="50"
                max="5000"
                step="50"
                value={calls}
                onPointerDown={stopSweep}
                onKeyDown={stopSweep}
                onChange={(e) => { stopSweep(); setCalls(Number(e.target.value)) }}
                style={{ '--p': pctOf(calls, 50, 5000) + '%' }}
              />
              <div className="roi-ends"><span>50</span><span>5,000</span></div>
            </div>

            <div className="roi-field">
              <label className="roi-label" htmlFor="roi-value">
                Average booking value
                <span className="roi-val">HK${value.toLocaleString()}</span>
              </label>
              <input
                id="roi-value"
                type="range"
                min="100"
                max="5000"
                step="20"
                value={value}
                onPointerDown={stopSweep}
                onKeyDown={stopSweep}
                onChange={(e) => { stopSweep(); setValue(Number(e.target.value)) }}
                style={{ '--p': pctOf(value, 100, 5000) + '%' }}
              />
              <div className="roi-ends"><span>HK$100</span><span>HK$5,000</span></div>
            </div>

            <div className="roi-headline">
              <p className="roi-headline__label">Recovered revenue / month</p>
              <p className="roi-headline__value">
                <span className="roi-cur">HK$</span>
                {Math.round(tRevenue).toLocaleString()}
              </p>
              <div className="roi-bar" aria-hidden="true">
                <span style={{ width: pctOf(calls, 50, 5000) + '%' }} />
              </div>
            </div>

            <dl className="roi-stats">
              <div className="roi-stat">
                <dt>{Math.round(tRecovered).toLocaleString()}</dt>
                <dd>Calls recovered</dd>
              </div>
              <div className="roi-stat">
                <dt>{Math.round(tHours).toLocaleString()}</dt>
                <dd>Staff hours saved</dd>
              </div>
              <div className="roi-stat">
                <dt>{Math.round(tBookings).toLocaleString()}</dt>
                <dd>Extra bookings</dd>
              </div>
            </dl>

            <p className="roi-note">
              Assumes 30% of calls currently go unanswered, 25% of recovered calls convert, and
              4 minutes of staff time per call. Adjust these in the code to match your own data.
            </p>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default ROICalculator