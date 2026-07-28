import { useEffect, useMemo, useRef, useState } from 'react'
import Container from '../Container'
import { Play, Pause, ArrowRight } from 'lucide-react'
import { dayEvents, daySummary, officeHours } from '../../data/dayTimeline'

const DAY = 1440
const pct = (m) => (m / DAY) * 100
const HOURS = ['00', '06', '12', '18', '24']

function DayTimeline({ onNavigate }) {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [head, setHead] = useState(0)
  const rafRef = useRef(null)
  const panelRef = useRef(null)
  const statsRef = useRef(null)
  const hardPauseRef = useRef(false)
  const resumeRef = useRef(null)

  const industries = useMemo(() => {
    const seen = new Map()
    dayEvents.forEach((e, i) => {
      if (seen.has(e.industry)) seen.get(e.industry).count += 1
      else seen.set(e.industry, { name: e.industry, index: i, count: 1 })
    })
    return [...seen.values()]
  }, [])

  useEffect(() => {
    const nums = statsRef.current.querySelectorAll('.dtx-stat__num')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nums.forEach(setFinal)
      return
    }
    const io = new IntersectionObserver(onStatsSeen, { threshold: 0.6 })
    nums.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(onPanelSeen, { threshold: 0.3 })
    io.observe(panelRef.current)
    return () => {
      io.disconnect()
      clearTimeout(resumeRef.current)
    }
  }, [])

  useEffect(() => {
    if (!playing) return
    let last = performance.now()
    const step = (now) => {
      const delta = now - last
      last = now
      setHead((h) => advance(h, delta))
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [playing])

  useEffect(() => {
    if (!playing) return
    let idx = 0
    dayEvents.forEach((e, i) => { if (head >= e.min) idx = i })
    setActive(idx)
  }, [head, playing])

  function setFinal(el) {
    el.textContent = el.dataset.to
  }

  function onStatsSeen(entries, io) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      countUp(entry.target)
      io.unobserve(entry.target)
    })
  }

  function countUp(el) {
    const to = Number(el.dataset.to)
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / 900, 1)
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  function onPanelSeen(entries) {
    if (hardPauseRef.current) return
    setPlaying(entries[0].isIntersecting)
  }

  function advance(h, delta) {
    const next = h + delta * 0.05
    return next >= DAY ? 0 : next
  }

  function togglePlay() {
    const next = !playing
    hardPauseRef.current = !next
    clearTimeout(resumeRef.current)
    setPlaying(next)
  }

  function pick(i) {
    setPlaying(false)
    setActive(i)
    setHead(dayEvents[i].min)
    clearTimeout(resumeRef.current)
    if (hardPauseRef.current) return
    resumeRef.current = setTimeout(resume, 6000)
  }

  function resume() {
    if (!hardPauseRef.current) setPlaying(true)
  }

  function onKeyDown(e) {
    const last = dayEvents.length - 1
    let next = null
    if (e.key === 'ArrowRight') next = active === last ? 0 : active + 1
    if (e.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = last
    if (next === null) return
    e.preventDefault()
    pick(next)
  }

  function handleCta(e) {
    if (!onNavigate) return
    e.preventDefault()
    onNavigate('cta')
  }

  function pinClass(e, i) {
    let c = 'dtx-pin'
    if (i === active) c += ' is-active'
    if (e.urgent) c += ' is-urgent'
    if (head >= e.min) c += ' is-passed'
    return c
  }

  const cur = dayEvents[active]
  const shut = cur.min < officeHours.open || cur.min > officeHours.close
  const dayStyle = { left: pct(officeHours.open) + '%', width: pct(officeHours.close - officeHours.open) + '%' }
  const trailStyle = { width: pct(head) + '%' }
  const headStyle = { left: pct(head) + '%' }

  return (
    <section className="section dtx-section" id="day-timeline">
      <Container className="container">
        <p className="dtx-eyebrow">One ordinary Tuesday</p>
        <h2 className="dtx-title">Ten calls. Six industries. Nobody missed.</h2>

        <div className="dtx-layout">
          <div className="dtx-panel" ref={panelRef}>
            <header className="dtx-panel__head">
              <button type="button" className="dtx-play" onClick={togglePlay} aria-label="Play or pause the day">
                {playing ? <Pause size={15} strokeWidth={2.5} /> : <Play size={15} strokeWidth={2.5} />}
              </button>
              <span className="dtx-clock">{cur.time}</span>
              <span className={shut ? 'dtx-state is-shut' : 'dtx-state'}>
                <span className="dtx-state__dot" />
                {shut ? 'Office shut' : 'Office open'}
              </span>
            </header>

            <div className="dtx-track" role="tablist" aria-label="Calls through the day" onKeyDown={onKeyDown}>
              <span className="dtx-track__base" />
              <span className="dtx-track__day" style={dayStyle} />
              <span className="dtx-track__trail" style={trailStyle} />
              <span className="dtx-track__head" style={headStyle} />
              {dayEvents.map((e, i) => (
                <button
                  key={e.time}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={e.time + ' ' + e.industry}
                  tabIndex={i === active ? 0 : -1}
                  className={pinClass(e, i)}
                  style={{ left: pct(e.min) + '%' }}
                  onClick={() => pick(i)}
                />
              ))}
            </div>

            <div className="dtx-scale">
              {HOURS.map((h, i) => (
                <span key={h} style={{ left: i * 25 + '%' }}>{h}</span>
              ))}
            </div>

            <div className="dtx-detail" key={cur.time}>
              <p className="dtx-detail__meta">
                <span className="dtx-detail__time">{cur.time}</span>
                <span className="dtx-detail__sep" />
                <span className="dtx-detail__industry">{cur.industry}</span>
              </p>
              <h3 className="dtx-detail__title">{cur.title}</h3>
              <p className="dtx-detail__body">{cur.detail}</p>
              <p className="dtx-detail__caller">
                {cur.caller}
                {shut ? <span className="dtx-detail__tag">After hours</span> : null}
              </p>
            </div>
          </div>

          <aside className="dtx-side">
            <p className="dtx-side__lead">
              Every one of these came through a single AI agent. Different sectors, different
              scripts, one platform, and none of them rang out.
            </p>

            <p className="dtx-side__label">Sectors in this day</p>
            <ul className="dtx-side__list">
              {industries.map((ind) => (
                <li key={ind.name}>
                  <button
                    type="button"
                    className={cur.industry === ind.name ? 'dtx-chip is-on' : 'dtx-chip'}
                    onClick={() => pick(ind.index)}
                  >
                    <span>{ind.name}</span>
                    <span className="dtx-chip__n">{ind.count}</span>
                  </button>
                </li>
              ))}
            </ul>

            <dl className="dtx-stats" ref={statsRef}>
              {daySummary.map((s) => (
                <div className="dtx-stat" key={s.label}>
                  <dt className="dtx-stat__num" data-to={s.value}>0</dt>
                  <dd className="dtx-stat__label">{s.label}</dd>
                </div>
              ))}
            </dl>

            <a className="dtx-cta" href="#cta" onClick={handleCta}>
              Build your first agent
              <ArrowRight size={15} strokeWidth={2.25} />
            </a>
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default DayTimeline