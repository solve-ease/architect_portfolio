import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Blog.css'

function Blog() {
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch('/api/categories')
        if (!res.ok) return
        const data = await res.json()
        setCategories(data.categories)
      } catch {
        // categories are non-critical — fail silently
      }
    }
    loadCategories()
  }, [])

  useEffect(() => {
    async function loadPosts() {
      setLoading(true)
      setError(null)
      try {
        const url = selectedCategory
          ? `/api/posts?category=${encodeURIComponent(selectedCategory)}`
          : '/api/posts'
        const res = await fetch(url)
        if (!res.ok) throw new Error('Failed to load posts')
        const data = await res.json()
        setPosts(data.posts)
      } catch {
        setError('We could not load the blog posts. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    loadPosts()
  }, [selectedCategory, retryCount])

  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <div className="blog-page">
      <Navbar />

      <main className="blog-main">
        <header className="blog-header">
          <h1 className="blog-heading">Insights</h1>
          <p className="blog-subheading">
            Ideas, perspectives, and stories from the ParaFlux studio
          </p>
        </header>

        {categories.length > 0 && (
          <div className="blog-categories">
            <button
              className={`blog-category-btn${!selectedCategory ? ' active' : ''}`}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`blog-category-btn${selectedCategory === cat ? ' active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="blog-status">
            <div className="blog-loader" aria-label="Loading posts"></div>
          </div>
        )}

        {error && !loading && (
          <div className="blog-status">
            <p className="blog-error">{error}</p>
            <button className="blog-retry-btn" onClick={() => setRetryCount((c) => c + 1)}>
              Try again
            </button>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="blog-status">
            <p className="blog-empty">No posts found in this category.</p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="blog-grid">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className={`blog-card${index === 0 ? ' blog-card-featured' : ''}`}
              >
                <Link to={`/blog/${post.slug}`} className="blog-card-image-link">
                  <div className="blog-card-image-wrapper">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="blog-card-image"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <span className="blog-card-category">{post.category}</span>
                  </div>
                </Link>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="blog-card-meta-dot">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="blog-card-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-author">{post.author}</span>
                    <Link to={`/blog/${post.slug}`} className="blog-card-read-more">
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Blog
