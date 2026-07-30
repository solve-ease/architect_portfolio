import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/BlogPost.css'

function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchPost() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`/api/posts/${encodeURIComponent(slug)}`)
        if (res.status === 404) {
          setError('not-found')
          return
        }
        if (!res.ok) throw new Error('Failed to load post')
        const data = await res.json()
        setPost(data)
      } catch {
        setError('error')
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [slug])

  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <div className="blog-post-page">
      <Navbar />

      <main className="blog-post-main">
        {loading && (
          <div className="blog-post-status">
            <div className="blog-loader" aria-label="Loading post"></div>
          </div>
        )}

        {!loading && error === 'not-found' && (
          <div className="blog-post-status">
            <h2 className="blog-post-not-found-title">Post not found</h2>
            <p>The article you are looking for does not exist or has been removed.</p>
            <Link to="/blog" className="blog-post-back-link">← Back to Insights</Link>
          </div>
        )}

        {!loading && error === 'error' && (
          <div className="blog-post-status">
            <p>We could not load this article. Please try again later.</p>
            <Link to="/blog" className="blog-post-back-link">← Back to Insights</Link>
          </div>
        )}

        {!loading && !error && post && (
          <>
            <div className="blog-post-hero">
              <img
                src={post.coverImage}
                alt={post.title}
                className="blog-post-hero-image"
              />
            </div>

            <div className="blog-post-content">
              <Link to="/blog" className="blog-post-back-link">← Back to Insights</Link>

              <div className="blog-post-category">{post.category}</div>

              <h1 className="blog-post-title">{post.title}</h1>

              <div className="blog-post-meta">
                <div className="blog-post-author-info">
                  <span className="blog-post-author">{post.author}</span>
                  {post.authorRole && (
                    <span className="blog-post-author-role">{post.authorRole}</span>
                  )}
                </div>
                <div className="blog-post-date-info">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="blog-post-meta-dot">·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="blog-post-divider"></div>

              <div className="blog-post-body">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </>
        )}
      </main>

      {!loading && !error && post && <Footer />}
    </div>
  )
}

export default BlogPost
