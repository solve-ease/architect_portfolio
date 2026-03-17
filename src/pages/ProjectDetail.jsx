import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import projectData from '../data/projectData'
import '../styles/ProjectDetail.css'
import '../styles/ProjectDetailSections.css'

// Section components
import KeyInfo from '../components/project-detail/KeyInfo'
import ImageLeft from '../components/project-detail/ImageLeft'
import Slider from '../components/project-detail/Slider'
import TextRight from '../components/project-detail/TextRight'
import ImageLeftTextRight from '../components/project-detail/ImageLeftTextRight'
import HeadingRight from '../components/project-detail/HeadingRight'
import ImageRight from '../components/project-detail/ImageRight'
import HeadingLeft from '../components/project-detail/HeadingLeft'
import ImageCentre from '../components/project-detail/ImageCentre'
import ImageCentreWithHeading from '../components/project-detail/ImageCentreWithHeading'

// Registry mapping section type strings to components
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

function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const fromZoom = location.state?.fromZoom ?? false
  const project = projectData.find((p) => p.id === projectId)
  const heroImage = location.state?.heroImage || project?.coverImage
  const heroRef = useRef(null)
  const [heroLoaded, setHeroLoaded] = useState(fromZoom)

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
        {/* <span className="pd-close-label">Close</span> */}
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
            onError={() => setHeroLoaded(true)}
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

      {/* ── Body: render sections from project config ── */}
      <main className="pd-body">
        {project.sections && project.sections.map((section, i) => {
          const Component = SECTION_COMPONENTS[section.type]
          if (!Component) return null
          return <Component key={i} {...section.props} />
        })}

        {/* ── Back strip ── */}
        <section className="pd-back-strip">
          <button className="pd-back-btn" onClick={() => navigate('/')}>
            <span className="pd-back-arrow">←</span>
            <span>All Projects</span>
          </button>
        </section>
      </main>
    </div>
  )
}

export default ProjectDetail

