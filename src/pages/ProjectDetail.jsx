import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import projectData from '../data/projectData'
import '../styles/ProjectDetail.css'

function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const fromZoom = location.state?.fromZoom ?? false
  const project = projectData.find((p) => p.id === projectId)
  const heroImage = location.state?.heroImage || project?.coverImage
  const heroRef = useRef(null)
  const [heroLoaded, setHeroLoaded] = useState(fromZoom)
  const [activeImg, setActiveImg] = useState(null)

  useEffect(() => {
    // Scroll to top when page opens
    window.scrollTo(0, 0)
    // Lock body scroll initially then release after entry animation
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => {
      document.body.style.overflow = ''
    }, 900)
    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [projectId])

  if (!project) {
    return (
      <div className="pd-not-found">
        <p>Project not found.</p>
        <button onClick={() => navigate('/')}>← Back to Home</button>
      </div>
    )
  }

  const descParagraphs = project.description.trim().split('\n\n')

  // Split gallery images: first is cover (already shown as hero), rest go in gallery
  const galleryImages = project.images

  return (
    <div className="pd-root">
      {/* ── Close / Back button ── */}
      <button
        className="pd-close"
        onClick={() => navigate('/')}
        aria-label="Close project and return to home"
      >
        <span className="pd-close-icon">
          <span></span>
          <span></span>
        </span>
        <span className="pd-close-label">Close</span>
      </button>

      {/* ── Hero ── */}
      <section className="pd-hero">
        <div
          className={`pd-hero-img-wrap ${heroLoaded ? 'loaded' : ''}`}
          style={fromZoom ? { transition: 'none' } : undefined}
        >
          <img
            ref={heroRef}
            src={heroImage}
            alt={project.title}
            className="pd-hero-img"
            onLoad={() => setHeroLoaded(true)}
          />
        </div>
        <div className="pd-hero-overlay">
          <div className="pd-hero-content">
            <p className="pd-hero-type">{project.type}</p>
            <h1 className="pd-hero-title">{project.title}</h1>
            <p className="pd-hero-location">{project.location} — {project.year}</p>
          </div>
        </div>
        <div className="pd-scroll-hint">
          <span>Scroll</span>
          <span className="pd-scroll-arrow">↓</span>
        </div>
      </section>

      {/* ── Body ── */}
      <main className="pd-body">

        {/* ── Info strip ── */}
        <section className="pd-info-strip">
          <div className="pd-info-item">
            <span className="pd-info-label">Project</span>
            <span className="pd-info-value">{project.title}</span>
          </div>
          <div className="pd-info-item">
            <span className="pd-info-label">Type</span>
            <span className="pd-info-value">{project.type}</span>
          </div>
          <div className="pd-info-item">
            <span className="pd-info-label">Location</span>
            <span className="pd-info-value">{project.location}</span>
          </div>
          <div className="pd-info-item">
            <span className="pd-info-label">Year</span>
            <span className="pd-info-value">{project.year}</span>
          </div>
          <div className="pd-info-item">
            <span className="pd-info-label">Status</span>
            <span className="pd-info-value">{project.status}</span>
          </div>
          <div className="pd-info-item">
            <span className="pd-info-label">Area</span>
            <span className="pd-info-value">{project.area}</span>
          </div>
        </section>

        {/* ── Text + first gallery image side-by-side ── */}
        <section className="pd-intro">
          <div className="pd-intro-text">
            {descParagraphs.map((para, i) => (
              <p key={i} className={i === 0 ? 'pd-lead' : ''}>{para}</p>
            ))}
          </div>
          {galleryImages.length > 1 && (
            <div className="pd-intro-img-wrap">
              <img
                src={galleryImages[1]}
                alt={`${project.title} view`}
                loading="lazy"
                onClick={() => setActiveImg(galleryImages[1])}
              />
            </div>
          )}
        </section>

        {/* ── Full-width image ── */}
        {galleryImages.length > 2 && (
          <section className="pd-full-img">
            <img
              src={galleryImages[2]}
              alt={`${project.title} render`}
              loading="lazy"
              onClick={() => setActiveImg(galleryImages[2])}
            />
          </section>
        )}

        {/* ── Grid of remaining images ── */}
        {galleryImages.length > 3 && (
          <section className="pd-gallery">
            {galleryImages.slice(3).map((src, i) => (
              <div key={i} className="pd-gallery-item" onClick={() => setActiveImg(src)}>
                <img src={src} alt={`${project.title} image ${i + 4}`} loading="lazy" />
              </div>
            ))}
          </section>
        )}

        {/* ── Back strip ── */}
        <section className="pd-back-strip">
          <button className="pd-back-btn" onClick={() => navigate('/')}>
            <span className="pd-back-arrow">←</span>
            <span>All Projects</span>
          </button>
        </section>
      </main>

      {/* ── Lightbox ── */}
      {activeImg && (
        <div className="pd-lightbox" onClick={() => setActiveImg(null)}>
          <button className="pd-lightbox-close" onClick={() => setActiveImg(null)} aria-label="Close lightbox">✕</button>
          <img src={activeImg} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  )
}

export default ProjectDetail
