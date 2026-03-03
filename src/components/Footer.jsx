import { Link } from 'react-router-dom'
import '../styles/Footer.css'
const logo = '/assets/logo_white.webp'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-logo">
              <Link to="/">
                <img src={logo} alt="Paraflux Logo" className="footer-logo-img" />
              </Link>
            </div>
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div className="footer-links-container">
            <div className="footer-column">
              <Link to="/">Home</Link>
              <Link to="/about">Our Story</Link>
              <a href="#studio">Studio</a>
              <Link to="/team">Team</Link>
              <a href="#careers">Careers</a>
            </div>
            
            <div className="footer-column">
              <a href="#projects">Projects</a>
              <a href="#news">News</a>
              <a href="#contact">Contact</a>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p>© Paraflux 2026 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
