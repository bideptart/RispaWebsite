import { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import SectionTitle from '../SectionTitle'

const timelineEvents = [
  { time: '9:02 AM', icon: '📞', title: 'Call comes in', description: 'A patient calls to book a check-up appointment.' },
  { time: '9:02 AM', icon: '🤖', title: 'Rispa answers instantly', description: 'No hold music. The agent greets and understands the request in seconds.' },
  { time: '9:03 AM', icon: '📅', title: 'Appointment booked', description: 'Slot confirmed and added directly to the calendar.' },
  { time: '6:00 PM', icon: '🔔', title: 'Reminder sent', description: 'An automatic reminder call goes out ahead of the appointment.' },
  { time: '8:15 PM', icon: '💬', title: 'Follow-up handled', description: 'A missed call from earlier gets a callback with the same context.' },
]

function DayTimeline() {
  const [visibleItems, setVisibleItems] = useState([])
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index)
            setVisibleItems((prev) => (prev.includes(index) ? prev : [...prev, index]))
          }
        })
      },
      { threshold: 0.3 }
    )

    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section day-timeline-section" id="day-timeline">
      <SectionTitle
        eyebrow="A day with Rispa"
        title="From first ring to final follow-up."
        description="Here's what a single business day looks like when Rispa is answering."
      />
      <Container>
        <div className="day-timeline">
          <div className="day-timeline__line" />
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`day-timeline__item ${visibleItems.includes(index) ? 'day-timeline__item--visible' : ''} ${index % 2 === 0 ? 'day-timeline__item--left' : 'day-timeline__item--right'}`}
            >
              <div className="day-timeline__dot" />
              <div className="day-timeline__card">
                <span className="day-timeline__time">{event.time}</span>
                <div className="day-timeline__icon">{event.icon}</div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default DayTimeline