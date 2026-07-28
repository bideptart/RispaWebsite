import { useEffect, useRef, useState } from 'react'
import { callPool, boardStats } from '../../data/liveCalls'
import './live-board.css'

const SLOTS = 5

function seed() {
  return callPool.slice(0, SLOTS).map((c, i) => ({ ...c, secs: 12 + i * 23, key: i }))
}

function LiveBoard() {
  const [rows, setRows] = useState(seed)
  const [total, setTotal] = useState(47)
  const nextKey = useRef(SLOTS)
  const poolRef = useRef(SLOTS)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const tick = setInterval(() => {
      setRows((rs) => rs.map((r) => ({ ...r, secs: r.secs + 1 })))
    }, 1000)

    const swap = setInterval(() => {
      setRows((rs) => {
        const out = rs.reduce((a, b, i) => (b.secs > rs[a].secs ? i : a), 0)
        const src = callPool[poolRef.current % callPool.length]
        poolRef.current += 1
        const copy = rs.slice()
        copy[out] = { ...src, secs: 1, key: nextKey.current }
        nextKey.current += 1
        return copy
      })
      setTotal((t) => Math.max(38, Math.min(61, t + (Math.random() < 0.5 ? -1 : 2))))
    }, 3600)

    return () => {
      clearInterval(tick)
      clearInterval(swap)
    }
  }, [])

  return (
    <div className="lb">
      <header className="lb__bar">
        <span className="lb__live">
          <span className="lb__pip" aria-hidden="true" />
          Live
        </span>
        <span className="lb__count">
          <strong>{total}</strong> calls in progress
        </span>
      </header>

      <ul className="lb__rows">
        {rows.map((r) => (
          <li className="lb__row" key={r.key}>
            <span className="lb__num">{r.num}</span>

            <span className="lb__meta">
              <span className="lb__sector">{r.sector}</span>
              <span className="lb__lang">{r.lang}</span>
            </span>

            <span className="lb__wave" aria-hidden="true">
              {[0, 1, 2, 3, 4, 5, 6].map((b) => (
                <span key={b} style={{ '--b': b }} />
              ))}
            </span>

            <span className="lb__state">{r.state}</span>

            <span className="lb__time">
              {Math.floor(r.secs / 60)}:{String(r.secs % 60).padStart(2, '0')}
            </span>
          </li>
        ))}
      </ul>

      <footer className="lb__foot">
        {boardStats.map((s) => (
          <span className="lb__stat" key={s.label}>
            <strong>{s.value}</strong>
            {s.label}
          </span>
        ))}
      </footer>
    </div>
  )
}

export default LiveBoard