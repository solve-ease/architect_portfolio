import { useEffect, useRef, useState } from 'react'
import '../styles/ProjectDetail.css'

function ProjectPanel({ project, heroImage, onClose, onHeroReady }) {
  const [activeImg, setActiveImg] = useState(null)
  const heroImgRef = useRef(null)

  // Lock body scroll while panel is open
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  // Allow scrolling inside the panel after a tick
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.style.overflow = ''
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  // If the hero image is already in the browser cache it may never fire onLoad.
  // Check img.complete on mount and call onHeroReady immediately in that case.
  useEffect(() => {
    if (heroImgRef.current?.complete) {
      onHeroReady?.()
    }
  }, [onHeroReady])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const descParagraphs = project.description.trim().split('\n\n')
  const galleryImages = project.images

  return (
    <div className="pd-root pp-panel">
      {/* ── Close button ── */}
      <button
        className="pd-close"
        onClick={onClose}
        aria-label="Close project"
      >
        <span className="pd-close-icon">
          <span></span>
          <span></span>
        </span>
        <span className="pd-close-label">Close</span>
      </button>

      {/* ── Hero – hero image is already cached from the zoom overlay, show immediately ── */}
      <section className="pd-hero">
        <div className="pd-hero-img-wrap loaded">
          <img
            ref={heroImgRef}
            src={heroImage}
            alt={project.title}
            className="pd-hero-img"
            onLoad={() => onHeroReady?.()}
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

        {/* ── Text + second gallery image side-by-side ── */}
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

        {/* ── Back / close strip ── */}
        <section className="pd-back-strip">
          <button className="pd-back-btn" onClick={onClose}>
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

export default ProjectPanel
