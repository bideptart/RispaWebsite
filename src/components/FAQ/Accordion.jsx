function Accordion({ item, open, onToggle }) {
  return (
    <article className={`accordion accordion--compact ${open ? 'is-open' : ''}`}>
      <div className="accordion__header">
        <button type="button" className="accordion__trigger accordion__trigger--compact" onClick={onToggle}>
          <div className="accordion__trigger-left accordion__trigger-left--compact">
            <span className="accordion__arrow">{open ? '▼' : '▶'}</span>
            <span className="accordion__question accordion__question--compact">{item.question}</span>
          </div>
        </button>
      </div>
      {open && (
        <div className="accordion__content-wrapper accordion__content-wrapper--compact">
          <p className="accordion__content accordion__content--compact">{item.answer}</p>
        </div>
      )}
    </article>
  )
}

export default Accordion
