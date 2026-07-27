import Badge from './Badge'
import Container from './Container'

/**
 * SectionTitle
 *
 * align="left"   → badge + title on left column, description on right (two-col layout)
 * align="center" → everything centered, single column
 * align="split"  → badge + title left, custom `right` node on right (for CallFlow etc.)
 */
function SectionTitle({ eyebrow, title, description, align = 'left', right }) {
  if (align === 'center') {
    return (
      <Container className="section-title section-title--center">
        <Badge>{eyebrow}</Badge>
        <h2 style={{ maxWidth: '22ch' }}>{title}</h2>
        {description && <p style={{ maxWidth: '60ch' }}>{description}</p>}
      </Container>
    )
  }

  // Two-column: title left, description (or custom right node) right
  return (
    <Container>
      <div className="section-title-row">
        <div className="section-title-row__left">
          <Badge>{eyebrow}</Badge>
          <h2 className="section-title-row__heading">{title}</h2>
        </div>
        <div className="section-title-row__right">
          {right || (description && <p className="section-title-row__desc">{description}</p>)}
        </div>
      </div>
    </Container>
  )
}

export default SectionTitle
