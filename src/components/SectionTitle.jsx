import Badge from './Badge'
import Container from './Container'

function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  return (
    <Container className={`section-title section-title--${align}`}>
      <Badge>{eyebrow}</Badge>
      <h2>{title}</h2>
      <p>{description}</p>
    </Container>
  )
}

export default SectionTitle
