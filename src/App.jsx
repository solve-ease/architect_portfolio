import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Team from './pages/Team'
import Footer from './components/Footer'
import logo from './assets/PARAFLULX_LOGO.webp'
import logo_mobile from './assets/logo_white.webp' 

function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Disable scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])
  
  // Only show navbar on home page
  if (location.pathname !== '/') {
    return null
  }
  
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar navbar-desktop">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Team</Link>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className='hamburger-container'>
        <button 
          className={`hamburger-button ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <img src={logo_mobile} alt="paraflux architects" className="mobile-menu-logo" />
        </div>
        
        <nav className="mobile-menu-nav">
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          {/* <a href="#studio" onClick={closeMenu}>Studio</a> */}
          <Link to="/team" onClick={closeMenu}>Team</Link>
          {/* <a href="#news" onClick={closeMenu}>News</a> */}
          {/* <a href="#careers" onClick={closeMenu}>Careers</a> */}
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="mobile-menu-footer">
          <p>We speak your language</p>
        </div>
      </div>
    </>
  )
}

function AppContent() {
  const location = useLocation()
  const showFooter = location.pathname !== '/'
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <AppContent />
      </div>
    </Router>
  )
}

export default App
