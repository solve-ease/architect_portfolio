import { useEffect, useRef, useState } from 'react'
import '../styles/ProjectDetail.css'
import '../styles/ProjectDetailSections.css'

// Section components — same registry as ProjectDetail.jsx
import KeyInfo from './project-detail/KeyInfo'
import ImageLeft from './project-detail/ImageLeft'
import Slider from './project-detail/Slider'
import TextRight from './project-detail/TextRight'
import ImageLeftTextRight from './project-detail/ImageLeftTextRight'
import HeadingRight from './project-detail/HeadingRight'
import ImageRight from './project-detail/ImageRight'
import HeadingLeft from './project-detail/HeadingLeft'
import ImageCentre from './project-detail/ImageCentre'
import ImageCentreWithHeading from './project-detail/ImageCentreWithHeading'

const SECTION_COMPONENTS = {
  KeyInfo,
  ImageLeft,
  Slider,
  TextRight,
  ImageLeftTextRight,
  HeadingRight,
  ImageRight,
  HeadingLeft,
  ImageCentre,
  ImageCentreWithHeading,
}

function ProjectPanel({ project, heroImage, onClose, onHeroReady, isClosing }) {
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
    <div className={`pd-root pp-panel${isClosing ? ' pp-closing' : ''}`}>
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
        {/* <span className="pd-close-label"></span> */}
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

        {/* ── Sections-based layout (preferred when project.sections is defined) ── */}
        {project.sections && project.sections.length > 0 ? (
          project.sections.map((section, i) => {
            const Component = SECTION_COMPONENTS[section.type]
            if (!Component) return null
            return <Component key={i} {...section.props} />
          })
        ) : (
          /* ── Fallback: legacy hardcoded layout for projects without sections ── */
          <>
            {/* Info strip */}
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

            {/* Text + second gallery image side-by-side */}
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

            {/* Full-width image */}
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

            {/* Grid of remaining images */}
            {galleryImages.length > 3 && (
              <section className="pd-gallery">
                {galleryImages.slice(3).map((src, i) => (
                  <div key={i} className="pd-gallery-item" onClick={() => setActiveImg(src)}>
                    <img src={src} alt={`${project.title} image ${i + 4}`} loading="lazy" />
                  </div>
                ))}
              </section>
            )}
          </>
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
