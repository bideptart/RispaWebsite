import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * IndustryGallery
 * Stacked-card carousel — active card in front, 2 peeking behind it.
 *
 * Props:
 *   items: Array<{ id, icon: LucideComponent, title, description }>
 */
export default function IndustryGallery({ items = [] }) {
  const [active, setActive] = useState(0)
  const total = items.length

  const prev = () => setActive((a) => (a - 1 + total) % total)
  const next = () => setActive((a) => (a + 1) % total)

  // Returns up to 3 indices: [behind-2, behind-1, active]
  const getStack = () => {
    return [
      (active - 2 + total) % total,
      (active - 1 + total) % total,
      active,
    ]
  }

  const stack = getStack()

  return (
    <div className="ig-wrapper">
      {/* Card stack */}
      <div className="ig-stack" aria-live="polite">
        {items.map((item, idx) => {
          const stackPos = stack.indexOf(idx) // -1 = hidden, 0 = back, 1 = mid, 2 = front
          if (stackPos === -1) return null

          const Icon = item.icon

          return (
            <div
              key={item.id}
              className={`ig-card ig-card--pos-${stackPos}`}
              aria-hidden={stackPos !== 2}
            >
              <div className="ig-card__icon-wrap">
                <Icon size={26} strokeWidth={1.8} />
              </div>
              <h3 className="ig-card__title">{item.title}</h3>
              <p className="ig-card__desc">{item.description}</p>
            </div>
          )
        })}
      </div>

      {/* Navigation */}
      <div className="ig-nav">
        <button
          className="ig-nav__btn"
          onClick={prev}
          aria-label="Previous industry"
        >
          <ChevronLeft size={18} strokeWidth={2.2} />
        </button>

        <div className="ig-dots">
          {items.map((_, idx) => (
            <button
              key={idx}
              className={`ig-dot ${idx === active ? 'ig-dot--active' : ''}`}
              onClick={() => setActive(idx)}
              aria-label={`Go to ${items[idx].title}`}
            />
          ))}
        </div>

        <button
          className="ig-nav__btn"
          onClick={next}
          aria-label="Next industry"
        >
          <ChevronRight size={18} strokeWidth={2.2} />
        </button>
      </div>
    </div>
  )
}
