import { useEffect, useRef } from 'react'
import '../styles/About.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const evolo = '/assets/architect_images_webp_reduced/Renders for website/Evolo/CloseUp.webp'
const m3m = '/assets/architect_images_webp_reduced/Renders for website/M3m/Final 1.webp'
const migsun = '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op1/2 copy.webp'
const pentagon = '/assets/architect_images_webp_reduced/Renders for website/Pentagon/Scene 1(1)_style_transfer01 copy.webp'
const whitehouse = '/assets/architect_images_webp_reduced/Renders for website/The White house/The White House (1) COVER IMAGE.webp'

function About() {
  const containerRef = useRef(null)

  const milestones = [
    {
      title: "Global Reach",
      subtitle: "EXPANDING HORIZONS",
      content: "From our humble beginnings, we've established a truly global presence. Our multidisciplinary team brings together diverse perspectives and expertise, enabling us to tackle complex architectural challenges across continents and cultures.",
      image: m3m
    },
    {
      title: "Our Story",
      subtitle: "A COLLECTION OF KEY MILESTONES",
      content: "Founded in London in 2011, we have grown into a team of 50+ working from 7 global offices across 6 time zones. We have over 50 projects on-site across 3 continents from the tallest residential tower in New Delhi to an award-winning 53 hectare masterplan in Moscow.",
      image: evolo
    },
    {
      title: "Innovation",
      subtitle: "PUSHING BOUNDARIES",
      content: "We believe in pushing the boundaries of what's possible in architecture. Our commitment to innovation drives us to explore new materials, technologies, and design methodologies that create sustainable and inspiring spaces for generations to come.",
      image: migsun
    },
    {
      title: "Excellence",
      subtitle: "AWARD-WINNING DESIGNS",
      content: "Our dedication to excellence has earned us recognition worldwide. Each project reflects our passion for creating spaces that blend functionality with aesthetic beauty, always keeping the end-user experience at the forefront of our design process.",
      image: pentagon
    },
    {
      title: "Vision",
      subtitle: "SHAPING THE FUTURE",
      content: "Looking ahead, we continue to shape the future of architecture. Our vision is to create sustainable, human-centric environments that not only meet today's needs but anticipate the challenges and opportunities of tomorrow.",
      image: whitehouse
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
