import './App.css'

function App() {
  return (
    <div className="container">
      <div className="background-grid">
        <div className="grid-item grid-item-1"></div>
        <div className="grid-item grid-item-2"></div>
        <div className="grid-item grid-item-3"></div>
        <div className="grid-item grid-item-4"></div>
        <div className="grid-item grid-item-5"></div>
        <div className="grid-item grid-item-6"></div>
        <div className="grid-item grid-item-7"></div>
        <div className="grid-item grid-item-8"></div>
      </div>
      
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
            <div className="fx-layer fx-layer-2">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer fx-layer-3">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer fx-layer-4">
              <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer fx-layer-5">
              <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer fx-layer-6">
              <img src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&h=400&fit=crop" alt="" />
            </div>
          </div>
        </div>
        
        <div className="hero-title-wrapper">
          <h1 className="title">PowerHouse</h1>
        </div>
      </main>
    </div>
  )
}

export default App
