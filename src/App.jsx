import './App.css'
import { useEffect } from 'react'

function App() {
  // Random animation delays for each image in a small range
  useEffect(() => {
    const layers = document.querySelectorAll('.fx-layer');
    layers.forEach((layer) => {
      // Random delay between 0 and 2 seconds for more varied appearance
      const randomDelay = Math.random() * 2;
      layer.style.animationDelay = `${randomDelay}s`;
    });
  }, []);

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
          <div className="fx-3d-world fx-grid">
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=600&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600&h=400&fit=crop" alt="" />
            </div>
            <div className="fx-layer">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" alt="" />
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
