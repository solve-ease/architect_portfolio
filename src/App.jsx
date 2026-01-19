import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import Footer from './components/Footer'

function Navbar() {
  const location = useLocation()
  
  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Team</Link>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
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
