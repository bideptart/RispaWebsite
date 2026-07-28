import { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import Badge from '../Badge'
import { PhoneIncoming, Check, RotateCcw } from 'lucide-react'
import { callScript, callMeta } from '../../data/callScript'
import './call-demo.css'

const BARS = [0, 1, 2, 3, 4, 5, 6, 7, 8]

function stamp(s) {
  return Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0')
}

function CallDemo() {
  const [clock, setClock] = useState(0)
  const [running, setRunning] = useState(false)
  const rootRef = useRef(null)
  const rafRef = useRef(null)
  const doneRef = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setClock(callMeta.duration)
      return
    }
    const io = new IntersectionObserver(onSeen, { threshold: 0.3 })
    io.observe(rootRef.current)
    return () => {
      io.disconnect()
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    if (!running) return
    let last = performance.now()
    const step = (now) => {
      const delta = (now - last) / 1000
      last = now
      setClock((c) => {
        const next = c + delta
        if (next >= callMeta.duration) {
          doneRef.current = true
          setRunning(false)
          return callMeta.duration
        }
        return next
      })
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [running])

  function onSeen(entries) {
    if (entries[0].isIntersecting && !doneRef.current) setRunning(true)
    else setRunning(false)
  }

  function replay() {
    doneRef.current = false
    setClock(0)
    setRunning(true)
  }

  const shown = callScript.filter((t) => clock >= t.at)
  const live = clock < callMeta.duration

  return (
    <section className="section cd-section" id="call-demo" ref={rootRef}>
      <Container className="container">
        <div className="cd-layout">
          <div className="cd-copy">
            <Badge>WHAT A CALL SOUNDS LIKE</Badge>
            <h2 className="cd-copy__title">Forty-seven seconds. No one picked up a phone.</h2>
            <p className="cd-copy__sub">
              The agent recognised a returning patient, checked a live calendar, quoted from your
              own price list, and sent a confirmation — inside one call.
            </p>
            <p className="cd-copy__sub">
              Every green line is something it did while still talking.
            </p>
            <button type="button" className="cd-replay" onClick={replay}>
              <RotateCcw size={15} strokeWidth={2.25} aria-hidden="true" />
              Play again
            </button>
          </div>

          <div className="cd-phone">
            <header className="cd-bar">
              <span className="cd-bar__icon" aria-hidden="true">
                <PhoneIncoming size={15} strokeWidth={2.25} />
              </span>
              <span className="cd-bar__id">
                <span className="cd-bar__num">{callMeta.number}</span>
                <span className="cd-bar__label">{callMeta.label}</span>
              </span>
              <span className={live ? 'cd-wave is-live' : 'cd-wave'} aria-hidden="true">
                {BARS.map((b) => (
                  <span key={b} style={{ '--b': b }} />
                ))}
              </span>
              <span className="cd-bar__clock">{stamp(clock)}</span>
            </header>

            <div className="cd-thread">
              {shown.map((t, i) => (
                <div className={'cd-turn is-' + t.who} key={i}>
                  <p className="cd-who">
                    {t.who === 'agent' ? 'Rispa' : 'Caller'}
                    <span className="cd-at">{stamp(t.at)}</span>
                  </p>
                  <p className="cd-bubble">{t.text}</p>
                  {t.action ? (
                    <p className="cd-action">
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                      {t.action}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>

            <footer className={live ? 'cd-end is-live' : 'cd-end'}>
              {live ? (
                <>
                  <span className="cd-end__pip" aria-hidden="true" />
                  Call in progress
                </>
              ) : (
                <>
                  <Check size={14} strokeWidth={3} aria-hidden="true" />
                  {callMeta.outcome}
                </>
              )}
            </footer>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CallDemo