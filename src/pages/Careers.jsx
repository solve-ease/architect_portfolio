import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Careers.css'

const openings = [
  {
    id: 1,
    title: 'Project Architect',
    type: 'Full-time',
    location: 'Noida, India',
    description:
      'We are looking for a talented Project Architect to lead design development from concept through construction documentation. You will collaborate with clients, consultants, and the in-house team to deliver projects of exceptional quality.',
    requirements: [
      'B.Arch or M.Arch degree from a recognised institution',
      '3–6 years of professional experience in an architectural practice',
      'Proficiency in AutoCAD, Revit, and SketchUp',
      'Strong design sensibility and attention to detail',
      'Excellent communication and presentation skills',
    ],
  },
  {
    id: 2,
    title: 'Interior Designer',
    type: 'Full-time',
    location: 'Noida, India',
    description:
      'We are seeking a creative Interior Designer to join our studio. The ideal candidate will have a passion for spatial design, a keen eye for materials and finishes, and the ability to translate client briefs into compelling interiors.',
    requirements: [
      'Degree in Interior Design or a related discipline',
      '2–4 years of experience in interior design or architecture',
      'Proficiency in AutoCAD, 3ds Max / Lumion, and Adobe Creative Suite',
      'Strong portfolio demonstrating diverse project typologies',
      'Ability to manage multiple projects simultaneously',
    ],
  },
  {
    id: 3,
    title: 'Architectural Visualiser',
    type: 'Full-time',
    location: 'Noida, India (Remote considered)',
    description:
      'We are looking for a skilled Architectural Visualiser to produce photorealistic renders and animations that bring our designs to life. You will work closely with the design team to communicate spatial quality to clients and stakeholders.',
    requirements: [
      'Experience with 3ds Max, V-Ray / Corona Renderer, and Lumion',
      'Strong understanding of lighting, materials, and composition',
      'Ability to interpret architectural drawings and models',
      'Portfolio showcasing high-quality architectural visualisation',
      'Knowledge of Unreal Engine or real-time rendering is a plus',
    ],
  },
  {
    id: 4,
    title: 'Architecture Intern',
    type: 'Internship',
    location: 'Noida, India',
    description:
      'We welcome motivated architecture students and recent graduates to join our studio as interns. You will gain hands-on experience across all stages of design, from conceptual sketches to detailed drawings and site visits.',
    requirements: [
      'Currently enrolled in or recently graduated from a B.Arch / M.Arch programme',
      'Basic proficiency in AutoCAD and SketchUp',
      'Enthusiasm for architecture and a strong willingness to learn',
      'Good organisational skills and attention to detail',
      'Portfolio of academic or personal work',
    ],
  },
]

function Careers() {
  return (
    <div className="careers-page">
      <Navbar />

      <main className="careers-content">
        <h1 className="careers-heading">Careers</h1>
        <p className="careers-subheading">
          Join a studio where design thinking, craft, and ambition come together.<br />
          We are always looking for talented individuals to grow with us.
        </p>

        <div className="careers-divider"></div>

        {/* Studio culture section */}
        <section className="careers-culture">
          <div className="careers-culture-text">
            <h2>Working at Paraflux</h2>
            <p>
              At Paraflux Architects, we believe the best architecture emerges from
              collaborative thinking and rigorous design. Our studio is a place where
              curiosity is encouraged, ideas are challenged, and every project is an
              opportunity to push boundaries.
            </p>
            <p>
              We work across a wide range of scales and typologies — from intimate
              residences to large-scale mixed-use developments — giving our team
              exposure to diverse and stimulating challenges throughout their careers.
            </p>
            <p>
              We are committed to fostering an inclusive, supportive environment where
              every team member can develop their skills and make a meaningful
              contribution to the work we produce.
            </p>
          </div>

          <div className="careers-culture-values">
            <div className="careers-value">
              <h3>Design Excellence</h3>
              <p>We hold ourselves to the highest standard of design quality on every project, regardless of scale or budget.</p>
            </div>
            <div className="careers-value">
              <h3>Collaboration</h3>
              <p>Great architecture is a team effort. We work closely with clients, consultants, and each other to achieve the best outcomes.</p>
            </div>
            <div className="careers-value">
              <h3>Growth</h3>
              <p>We invest in our people through mentorship, training, and opportunities to take on increasing responsibility.</p>
            </div>
          </div>
        </section>

        <div className="careers-divider"></div>

        {/* Open positions */}
        <section className="careers-openings">
          <h2 className="careers-section-title">Open Positions</h2>

          <div className="careers-listings">
            {openings.map((opening) => (
              <div key={opening.id} className="careers-listing">
                <div className="careers-listing-header">
                  <div className="careers-listing-title-group">
                    <h3 className="careers-listing-title">{opening.title}</h3>
                    <div className="careers-listing-meta">
                      <span className="careers-tag">{opening.type}</span>
                      <span className="careers-location">{opening.location}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:info@paraflux.com?subject=Application – ${opening.title}`}
                    className="careers-apply-btn"
                  >
                    Apply
                  </a>
                </div>

                <p className="careers-listing-description">{opening.description}</p>

                <div className="careers-requirements">
                  <h4>Requirements</h4>
                  <ul>
                    {opening.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Speculative applications */}
        <section className="careers-speculative">
          <h2>Don't see a suitable role?</h2>
          <p>
            We are always interested in hearing from talented architects, designers,
            and creatives. Send your CV and portfolio to{' '}
            <a href="mailto:info@paraflux.com">info@paraflux.com</a> and we will be
            in touch if a suitable opportunity arises.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Careers
