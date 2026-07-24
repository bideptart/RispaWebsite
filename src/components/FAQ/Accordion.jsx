function Accordion({ item, open, onToggle }) {
  return (
    <article className={`accordion ${open ? 'is-open' : ''}`}>
      <button type="button" className="accordion__trigger" onClick={onToggle}>
        <span>{item.question}</span>
        <span>{open ? '−' : '+'}</span>
      </button>
      {open ? <p className="accordion__content">{item.answer}</p> : null}
    </article>
  )
}

export default Accordion
