import { useState } from 'react'
import Container from '../components/Container'
import Badge from '../components/Badge'
import Button from '../components/Button'
import CTA from '../components/CTA/CTA'
import { blogPosts, blogCategories } from '../data/blog'
import FeaturedPost from '../components/Blog/FeaturedPost'

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      {post.cover && (
        <div className="blog-card__cover">
          <img src={post.cover} alt={post.title} loading="lazy" />
        </div>
      )}
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className="blog-card__category">{post.category}</span>
          <span className="blog-card__dot" aria-hidden="true" />
          <span className="blog-card__read-time">{post.readTime}</span>
          <span className="blog-card__dot" aria-hidden="true" />
          <span className="blog-card__date">{post.date}</span>
        </div>
        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <div className="blog-card__footer">
          <span className="blog-card__author">{post.author}</span>
          <a href={`/blog/${post.slug}`} className="blog-card__link" aria-label={`Read ${post.title}`}>
            Read more →
          </a>
        </div>
      </div>
    </article>
  )
}

function BlogPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <div className="page-view blog-page">
      <section className="blog-hero-section">
        <Container className="blog-hero-container">
          <Badge>• BLOG</Badge>
          <h1 className="blog-hero__title">
            Field notes from the<br />
            <span className="text-teal">AI voice frontier.</span>
          </h1>
          <p className="blog-hero__subtitle">
            Research, product notes, and practical playbooks from the team building AI voice agents for businesses worldwide.
          </p>
          <div className="blog-hero__actions">
            <Button as="a" href="#blog-posts" onClick={(e) => { e.preventDefault(); document.getElementById('blog-posts')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Read the latest ↓
            </Button>
            <Button as="a" href="#cta" variant="secondary" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('cta') }}>
              Talk to sales
            </Button>
          </div>
        </Container>
      </section>

      <section className="section blog-posts-section" id="blog-posts">
        <Container>
          <FeaturedPost />

          <div className="blog-filter">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                className={`blog-filter__btn ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <CTA onNavigate={onNavigate} variant="features" />
    </div>
  )
}

export default BlogPage