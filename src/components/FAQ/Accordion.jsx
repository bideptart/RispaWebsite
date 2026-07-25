function Accordion({ item, open, onToggle, index }) {
  // Pad the index to 2 digits (01, 02, etc.)
  const paddedIndex = String(index + 1).padStart(2, '0')

  return (
    <article className={`accordion ${open ? 'is-open' : ''}`}>
      <div className="accordion__header">
        <button type="button" className="accordion__trigger" onClick={onToggle}>
          <div className="accordion__trigger-left">
            <span className="accordion__number">{paddedIndex}</span>
            <span className="accordion__question">{item.question}</span>
          </div>
          <div className={`accordion__toggle ${open ? 'is-open' : ''}`}>
            <span>{open ? '−' : '+'}</span>
          </div>
        </button>
      </div>
      {open ? (
        <div className="accordion__content-wrapper">
          <div className="accordion__divider"></div>
          <p className="accordion__content">{item.answer}</p>
        </div>
      ) : null}
    </article>
  )
}

export default Accordion
