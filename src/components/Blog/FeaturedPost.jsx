import { ArrowRight } from 'lucide-react'
import { featuredPost as post } from '../../data/featuredPost'
import './featured-post.css'

function FeaturedPost({ onOpen }) {
  function open(e) {
    if (!onOpen) return
    e.preventDefault()
    onOpen(post.slug)
  }

  return (
    <article className="fp">
      <a className="fp__media" href={`/blog/${post.slug}`} onClick={open} tabIndex={-1} aria-hidden="true">
        <img src={post.image} alt="" loading="eager" />
      </a>

      <div className="fp__body">
        <p className="fp__eyebrow">{post.eyebrow}</p>
        <h2 className="fp__title">
          <a href={`/blog/${post.slug}`} onClick={open}>{post.title}</a>
        </h2>
        <p className="fp__excerpt">{post.excerpt}</p>

        <div className="fp__by">
          <span className="fp__avatar" aria-hidden="true">{post.initials}</span>
          <span className="fp__meta">
            <span className="fp__author">{post.author}</span>
            <span className="fp__when">{post.date} · {post.readTime}</span>
          </span>
        </div>

        <a className="fp__link" href={`/blog/${post.slug}`} onClick={open}>
          Read the full piece
          <ArrowRight size={14} strokeWidth={2.25} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export default FeaturedPost