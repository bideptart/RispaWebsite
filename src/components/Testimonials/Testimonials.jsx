import Container from '../Container'
import Badge from '../Badge'
import { testimonials } from '../../data/testimonials'
import './testimonials-quiet.css'

function Card({ item, hidden }) {
  return (
    <li className="tq-card" aria-hidden={hidden ? 'true' : undefined}>
      <p className="tq-quote">&ldquo;{item.quote}&rdquo;</p>
      <div className="tq-who">
        <p className="tq-name">{item.name}</p>
        <p className="tq-role">{item.role}</p>
      </div>
    </li>
  )
}

function Testimonials() {
  return (
    <section className="section tq-section" id="testimonials">
      <Container className="container">
        <div className="tq-head">
          <Badge>• TRUSTED ON THE GROUND</Badge>
          <h2 className="tq-head__title">Trusted by Hong Kong businesses.</h2>
        </div>
      </Container>

      <div className="tq-scroll">
        <ul className="tq-rail">
          {testimonials.map((t) => (
            <Card item={t} key={t.quote} />
          ))}
          {testimonials.map((t) => (
            <Card item={t} key={t.quote + '-dup'} hidden />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Testimonials