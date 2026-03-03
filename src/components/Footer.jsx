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
              <img src={logo} alt="Paraflux Logo" className="footer-logo-img" />
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
              <a href="#home">Home</a>
              <a href="#our-story">Our Story</a>
              <a href="#studio">Studio</a>
              <a href="#team">Team</a>
              <a href="#careers">Careers</a>
            </div>
            
            <div className="footer-column">
              <a href="#projects">Projects</a>
              <a href="#news">News</a>
              <a href="#contact">Contact</a>
              <a href="#privacy">Privacy Policy</a>
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
