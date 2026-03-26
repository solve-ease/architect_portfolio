import { useEffect, useRef } from 'react'
import '../styles/About.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const evolo = '/about/AboutUs.webp'
const m3m = '/assets/architect_images_webp_reduced/Renders for website/M3m/Final 1.webp'
const migsun = '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op1/2 copy.webp'
const pentagon = '/assets/architect_images_webp_reduced/Renders for website/Pentagon/Scene 1(1)_style_transfer01 copy.webp'
const whitehouse = '/about/OurVision.webp'

const clientLogos = [
  '/about/clients/Amity_University_logo.png',
  '/about/clients/RPS-Group-color.png',
  '/about/clients/home_about_us.png',
  '/about/clients/image (3).png',
  '/about/clients/image.png',
  '/about/clients/image (1).png',
  '/about/clients/image (2).png',
  '/about/clients/logo_black.png',
  '/about/clients/images.png',
  '/about/clients/images (1).png',
  '/about/clients/1690966414036.jpg',
  '/about/clients/15736259983 (2).jpg',
  // '/about/clients/_.jpg',
]

function About() {
  const containerRef = useRef(null)

  const milestones = [
    {
      title: "Our Story",
      subtitle: "A COLLECTION OF KEY MILESTONES",
      content: `The ParaFlux Architects is a small, innovative architecture studio based in Noida, India. Our ideology is rooted in the belief that architecture is not just about creating beautiful buildings, but also
about shaping the way people experience and interact with their surroundings. We believe that
architecture has the power to transform people’s lives and create a better world.
At ParaFlux, we strive to create architecture that is both functional and aesthetically pleasing,
while also being sustainable and environmentally responsible. We believe in using local materials and techniques whenever possible, and in designing buildings that are energy-efficient and
als and techniques whenever possible, and in designing buildings that are energy-efficient and
ecologically sensitive.`,
      image: evolo
    },
    {
      title: "Our Vision",
      subtitle: "SHAPING THE FUTURE",
      content: `Our vision is to establish an architectural firm that excels in creating exceptional real estate
projects. We strive to redefine the standards of architectural design by integrating innovative
concepts, sustainable practices, and modern technologies. Our aim is to shape spaces that not
only meet the functional needs of our clients but also evoke a sense of awe and inspiration. We
envision a future where our firm’s projects are recognized for their distinctive aesthetics, superior
quality, and seamless integration with the surrounding environment. By pushing the boundaries
of creativity and embracing the latest trends in real estate, we aspire to leave a lasting impact on
the urban landscape and enhance the lives of individuals and communities through our transformative designs.`,
      image: whitehouse
    },
    {
      title: "Our Clients",
      subtitle: "TRUSTED BY LEADING ORGANIZATIONS",
      isClientsSection: true
    }
  ]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let isScrolling = false
    let scrollTimeout

    const handleWheel = (e) => {
      if (isScrolling) return

      e.preventDefault()

      const slides = container.querySelectorAll('.about-slide')
      const currentIndex = Math.round(container.scrollTop / window.innerHeight)

      if (e.deltaY > 0 && currentIndex < slides.length - 1) {
        // Scroll down
        isScrolling = true
        container.scrollTo({
          top: (currentIndex + 1) * window.innerHeight,
          behavior: 'smooth'
        })
      } else if (e.deltaY < 0 && currentIndex > 0) {
        // Scroll up
        isScrolling = true
        container.scrollTo({
          top: (currentIndex - 1) * window.innerHeight,
          behavior: 'smooth'
        })
      }

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        isScrolling = false
      }, 800)
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <div className="about-page">
      <div className="about-container" ref={containerRef}>
        {milestones.map((milestone, index) => (
          <div key={index} className="about-slide">
            {index === 0 && (
              <div className="about-navbar-wrapper">
                <Navbar variant="white" transparent={true} />
              </div>
            )}
            {milestone.isClientsSection ? (
              <div className="clients-section">
                <div className="clients-header">
                  <h1>{milestone.title}</h1>
                  <h2>{milestone.subtitle}</h2>
                </div>
                <div className="clients-collage">
                  {clientLogos.map((logo, idx) => (
                    <div key={idx} className="client-logo-item">
                      <img src={logo} alt={`Client ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="about-image-section">
                  <img src={milestone.image} alt={milestone.title} />
                </div>
                <div className="about-content-section">
                  <div className="about-content-wrapper">
                    <h1>{milestone.title}</h1>
                    <h2>{milestone.subtitle}</h2>
                    <p>{milestone.content}</p>
                    {index < milestones.length - 1 && (
                      <div className="scroll-indicator">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
        <div className="about-slide footer-slide">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default About
