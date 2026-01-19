import '../styles/Footer.css'
import logo from '../assets/PARAFLULX_LOGO.webp'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Paraflux Logo" className="footer-logo-img" />
        </div>
        <div className="footer-links">
          <a href="#imprint">Imprint</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
