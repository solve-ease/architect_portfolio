import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const logo = '/assets/PARAFLULX_LOGO.webp'
const logo_black = '/assets/logo_white.webp'
const logo_white = '/assets/logo_white-removebg-preview.webp'
import './Navbar.css'
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'

function Navbar({ variant = 'default', transparent = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const displayLogo = variant === 'white' ? logo_white : logo

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
      <nav className={`team-navbar ${transparent ? 'transparent-navbar' : ''}`}>
        <div className="team-navbar-container">
          <div className="team-navbar-logo">
            <Link to="/">
              <img src={displayLogo} alt="Paraflux Logo" className={`team-logo-img ${isMenuOpen ? 'hidden' : ''}`} />
              <img src={logo_black} alt="Paraflux Logo" className={`team-logo-img logo-white ${isMenuOpen ? 'visible' : ''}`} />
            </Link>
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
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img src={logo_black} alt="Paraflux Logo" />
            </Link>
          </div>
        </div>

        <div className="menu-content">
          <nav className="menu-nav">
            {/* <a href="#sectors" className="menu-link">Sectors</a> */}
            <Link to="/" className="menu-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/projects" className="menu-link" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link to="/about" className="menu-link" onClick={() => setIsMenuOpen(false)}>About</Link>
            {/* <a href="#studio" className="menu-link">Studio</a> */}
            <Link to="/team" className="menu-link" onClick={() => setIsMenuOpen(false)}>Team</Link>
            {/* <a href="#news" className="menu-link">News</a> */}
            {/* <a href="#careers" className="menu-link">Careers</a> */}
            <Link to="/careers" className="menu-link" onClick={() => setIsMenuOpen(false)}>Careers</Link>
            <Link to="/contact" className="menu-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
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
            <a href="https://www.instagram.com/theparaflux/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UChezPoGWROarpH8610zIjOQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
