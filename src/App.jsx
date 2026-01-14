import './App.css'

function App() {
  return (
    <div className="container">
      
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      
      <main className="main-content">
        <div className="fx-3d-scene">
          <div className="fx-3d-world">
            <div className="fx-layer fx-layer-1">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" alt="" />
            </div>
            
            <div className="hero-title-wrapper">
              <h1 className="title">PowerHouse</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
