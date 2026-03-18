import { useNavigate } from 'react-router-dom'
import projectData from '../data/projectData'
import '../styles/Projects.css'

function Projects() {
  const navigate = useNavigate()

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`)
  }

  return (
    <div className="projects-root">
      {/* Header Section */}
      <section className="projects-header">
        <h1 className="projects-title">Our Projects</h1>
        <p className="projects-subtitle">
          Explore our portfolio of architectural excellence
        </p>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="project-card-image-wrapper">
              <img
                src={project.coverImage}
                alt={project.title}
                className="project-card-image"
                loading="lazy"
              />
              <div className="project-card-overlay">
                <div className="project-card-content">
                  <p className="project-card-type">{project.type}</p>
                  <h2 className="project-card-title">{project.title}</h2>
                  <p className="project-card-location">{project.location}</p>
                  {project.status && (
                    <p className="project-card-status">{project.status}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Back to Home Button */}
      <section className="projects-back">
        <button className="projects-back-btn" onClick={() => navigate('/')}>
          <span className="projects-back-arrow">←</span>
          <span>Back to Home</span>
        </button>
      </section>
    </div>
  )
}

export default Projects
