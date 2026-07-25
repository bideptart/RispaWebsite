import Container from '../components/Container'
import Badge from '../components/Badge'
import Button from '../components/Button'
import CTA from '../components/CTA/CTA'

function BlogPage({ onNavigate }) {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI Voice Agents in Customer Service',
      excerpt: 'Discover how AI voice agents are transforming customer service and reducing operational costs for businesses.',
      date: 'July 25, 2026',
      author: 'Rispa Team',
      category: 'AI & Technology',
      image: '🤖'
    },
    {
      id: 2,
      title: 'How to Deploy Your First AI Voice Agent in 30 Seconds',
      excerpt: 'A step-by-step guide to setting up and deploying your first Rispa.ai voice agent with minimal effort.',
      date: 'July 20, 2026',
      author: 'Rispa Team',
      category: 'Getting Started',
      image: '⚡'
    },
    {
      id: 3,
      title: 'Reducing Front-Desk Workload by 58% with AI Agents',
      excerpt: 'Real-world case study: How businesses are saving time and money with Rispa.ai voice agents.',
      date: 'July 15, 2026',
      author: 'Case Studies',
      category: 'Success Stories',
      image: '📈'
    },
    {
      id: 4,
      title: 'Understanding Audio-Native AI vs Traditional Speech-to-Text',
      excerpt: 'Learn the technical differences that make Rispa.ai conversations sound natural and human-like.',
      date: 'July 10, 2026',
      author: 'Rispa Team',
      category: 'Technology',
      image: '🎧'
    },
  ]

  return (
    <div className="page-view blog-page">
      <section className="blog-hero-section">
        <Container className="blog-hero-container">
          <div className="blog-hero__content">
            <Badge>• INSIGHTS & UPDATES</Badge>
            <h1 className="blog-hero__title">
              Stories, insights, and <span className="text-teal">updates.</span>
            </h1>
            <p className="blog-hero__subtitle">
              Stay updated with the latest news, best practices, and success stories from the Rispa.ai community.
            </p>
          </div>
        </Container>
      </section>

      <section className="section blog-grid-section">
        <Container>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card__icon">{post.image}</div>
                <div className="blog-card__badge">{post.category}</div>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__meta">
                  <span className="blog-card__author">{post.author}</span>
                  <span className="blog-card__date">{post.date}</span>
                </div>
                <a href="#" className="blog-card__link">
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTA onNavigate={onNavigate} />
    </div>
  )
}

export default BlogPage
