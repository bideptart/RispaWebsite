import { useState, useMemo } from 'react'
import { faqItems } from '../../data/faq'
import Container from '../Container'
import Badge from '../Badge'
import Accordion from './Accordion'

const FAQ_CATEGORIES = [
  'All',
  'Getting started',
  'Billing & pricing',
  'Phone numbers',
  'Agents & capabilities',
  'Security & data',
]

// Map each FAQ item to a category (fallback: "Getting started")
const ITEM_CATEGORIES = {
  'What is Rispa.ai?':                         'Getting started',
  'How fast can we launch our first agent?':   'Getting started',
  'Can we use our existing phone numbers?':    'Phone numbers',
  'Do the agents sound like real humans?':     'Agents & capabilities',
  'What kind of analytics do we get?':         'Agents & capabilities',
  'How does pricing work?':                    'Billing & pricing',
  'Is my data secure?':                        'Security & data',
}

function FAQ() {
  const [openIndex, setOpenIndex]     = useState(-1)
  const [query, setQuery]             = useState('')
  const [activeTab, setActiveTab]     = useState('All')

  const filtered = useMemo(() => {
    return faqItems.filter(item => {
      const matchesSearch = query.trim() === '' ||
        item.question.toLowerCase().includes(query.toLowerCase()) ||
        item.answer.toLowerCase().includes(query.toLowerCase())

      const cat = ITEM_CATEGORIES[item.question] ?? 'Getting started'
      const matchesTab = activeTab === 'All' || cat === activeTab

      return matchesSearch && matchesTab
    })
  }, [query, activeTab])

  return (
    <section className="section" id="faq">
      <Container>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Badge>FAQ</Badge>
          <h2 style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}>
            Questions we always get asked.
          </h2>
          <p style={{ color: 'var(--text-soft)', maxWidth: '50ch', margin: '0 auto' }}>
            Everything you need to know about Rispa, our voice agents, and how to get started.
          </p>
        </div>

        {/* Search bar */}
        <div className="faq-search-wrap">
          <div className="faq-search">
            <svg className="faq-search__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              className="faq-search__input"
              type="text"
              placeholder="Search questions..."
              value={query}
              onChange={e => { setQuery(e.target.value); setOpenIndex(-1) }}
              aria-label="Search FAQ"
            />
            {query && (
              <button className="faq-search__clear" onClick={() => setQuery('')} aria-label="Clear search">✕</button>
            )}
          </div>
        </div>

        {/* Category tabs */}
        <div className="faq-tabs">
          {FAQ_CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`faq-tab ${activeTab === cat ? 'faq-tab--active' : ''}`}
              onClick={() => { setActiveTab(cat); setOpenIndex(-1) }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <div style={{
          maxWidth: '960px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
        }}>
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <Accordion
                key={item.question}
                item={item}
                open={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--text-soft)', padding: '2rem 0' }}>
              No results for "<strong>{query}</strong>". Try a different search.
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}

export default FAQ
