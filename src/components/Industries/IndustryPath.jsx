import { useEffect, useRef } from 'react'
import Container from '../Container'
import Badge from '../Badge'
import { Code, Pencil, Phone, BarChart3, Check } from 'lucide-react'
import { industryPath } from '../../data/industryPath'
import './industry-path.css'

const ICONS = {
  code: Code,
  pencil: Pencil,
  phone: Phone,
  chart: BarChart3,
}

function IndustryPath() {
  const rootRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    const rows = root.querySelectorAll('.ip__row')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      rows.forEach((r) => r.classList.add('is-in'))
      root.style.setProperty('--path', '1')
      return
    }

    root.classList.add('ip-anim')

    const revealIo = new IntersectionObserver(onReveal, { threshold: 0.25 })
    rows.forEach((r) => revealIo.observe(r))

    const centreIo = new IntersectionObserver(onCentre, { rootMargin: '-45% 0px -45% 0px' })
    rows.forEach((r) => centreIo.observe(r))

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()

    return () => {
      revealIo.disconnect()
      centreIo.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  function onReveal(entries, io) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-in')
      io.unobserve(entry.target)
    })
  }

  function onCentre(entries) {
    entries.forEach((entry) => {
      entry.target.classList.toggle('is-here', entry.isIntersecting)
    })
  }

  function onScroll() {
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(measure)
  }

  function measure() {
    const root = rootRef.current
    if (!root) return
    const r = root.getBoundingClientRect()
    const p = (window.innerHeight * 0.62 - r.top) / r.height
    root.style.setProperty('--path', String(Math.max(0, Math.min(1, p))))
  }

  return (
    <section className="section ip-section" id="industry-path" ref={rootRef}>
      <Container className="container">
        <div className="ip-head">
          <Badge>HOW IT WORKS</Badge>
          <h2 className="ip-head__title">From idea to live agent in four steps.</h2>
          <p className="ip-head__sub">
            No infra to spin up, no models to host. Your first agent is taking calls before lunch.
          </p>
        </div>

        <div className="ip">
          <div className="ip__spine" aria-hidden="true">
            <span className="ip__spine-fill" />
          </div>

          <ol className="ip__list">
            {industryPath.map((item, i) => {
              const Icon = ICONS[item.icon]
              const side = i % 2 === 0 ? 'is-left' : 'is-right'
              return (
                <li className={'ip__row ' + side} key={item.title} style={{ '--i': i }}>
                  <span className="ip__num">{String(i + 1).padStart(2, '0')}</span>

                  <div className="ip__node" aria-hidden="true">
                    <span className="ip__node-ring" />
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <div className="ip__card">
                    <h3 className="ip__title">{item.title}</h3>
                    <p className="ip__desc">{item.description}</p>
                    <ul className="ip__points">
                      {item.points.map((t) => (
                        <li className="ip__point" key={t}>
                          <Check size={14} strokeWidth={3} aria-hidden="true" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </Container>
    </section>
  )
}

export default IndustryPath