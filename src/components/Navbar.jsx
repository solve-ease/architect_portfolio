import { useState, useEffect } from 'react'
import logo from '../assets/PARAFLULX_LOGO.webp'
import logo_black from '../assets/logo_white.webp'
import './Navbar.css'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className="team-navbar">
        <div className="team-navbar-container">
          <div className="team-navbar-logo">
            <img src={logo} alt="Paraflux Logo" className={`team-logo-img ${isMenuOpen ? 'hidden' : ''}`} />
            <img src={logo_black} alt="Paraflux Logo" className={`team-logo-img logo-white ${isMenuOpen ? 'visible' : ''}`} />
          </div>
          
          <div className="team-navbar-right">
            {/* <button 
              className="search-icon" 
              aria-label="Search"
            >
              <FaSearch />
            </button> */}
            <button 
              className={`team-hamburger-menu ${isMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <span className="team-hamburger-line"></span>
              <span className="team-hamburger-line"></span>
              <span className="team-hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="menu-header">
          <div className="menu-logo">
            <img src={logo_black} alt="Paraflux Logo" />
          </div>
        </div>

        <div className="menu-content">
          <nav className="menu-nav">
            {/* <a href="#sectors" className="menu-link">Sectors</a> */}
            <a href="#projects" className="menu-link">Projects</a>
            <a href="#our-story" className="menu-link">Our Story</a>
            {/* <a href="#studio" className="menu-link">Studio</a> */}
            <a href="#team" className="menu-link">Team</a>
            {/* <a href="#news" className="menu-link">News</a> */}
            {/* <a href="#careers" className="menu-link">Careers</a> */}
            <a href="#contact" className="menu-link">Contact</a>
          </nav>

          {/* <div className="menu-language">
            <span>We speak your language</span>
            <button className="menu-language-arrow" aria-label="Language Options">
              →
            </button>
          </div> */}

          <div className="menu-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
