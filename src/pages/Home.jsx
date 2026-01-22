import { useEffect, useRef, useState } from 'react'
import '../styles/Home.css'
import logo from '../assets/PARAFLULX_LOGO.webp'

// Conventional centger (3 images)
import conv1 from '../assets/architect_images_webp_reduced/Renders for website/Conventional centger/04-05_Thesis page_01 copy.webp'
import conv2 from '../assets/architect_images_webp_reduced/Renders for website/Conventional centger/Thesis  (1).webp'
import conv3 from '../assets/architect_images_webp_reduced/Renders for website/Conventional centger/Untitled-1 copy.webp'

// Evolo (3 images)
import evolo1 from '../assets/architect_images_webp_reduced/Renders for website/Evolo/CloseUp.webp'
import evolo2 from '../assets/architect_images_webp_reduced/Renders for website/Evolo/EVOLO SHEET 01 copy.webp'
import evolo3 from '../assets/architect_images_webp_reduced/Renders for website/Evolo/Final 2.webp'

// GPM Retail (3 images)
import gpm1 from '../assets/architect_images_webp_reduced/Renders for website/GPM Retail/F1.webp'
import gpm2 from '../assets/architect_images_webp_reduced/Renders for website/GPM Retail/f3.webp'
import gpm3 from '../assets/architect_images_webp_reduced/Renders for website/GPM Retail/f5.webp'

// M3m (5 images)
import m3m1 from '../assets/architect_images_webp_reduced/Renders for website/M3m/Final 1.webp'
import m3m2 from '../assets/architect_images_webp_reduced/Renders for website/M3m/Scene 12.webp'
import m3m3 from '../assets/architect_images_webp_reduced/Renders for website/M3m/Scene 16.webp'
import m3m4 from '../assets/architect_images_webp_reduced/Renders for website/M3m/Scene 22.webp'
import m3m5 from '../assets/architect_images_webp_reduced/Renders for website/M3m/Commercail (3).webp'

// Migsun Lucknow (2 images)
import migLuck1 from '../assets/architect_images_webp_reduced/Renders for website/Migsun Lucknow/Cover Page.webp'
import migLuck2 from '../assets/architect_images_webp_reduced/Renders for website/Migsun Lucknow/Mixed Use- luknow (2).webp'

// Migsun mixed use (6 images)
import migMix1 from '../assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op1/1 copy.webp'
import migMix2 from '../assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op1/5.webp'
import migMix3 from '../assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op2/F2.webp'
import migMix4 from '../assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op2/f6.webp'
import migMix5 from '../assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op3/2 copy.webp'
import migMix6 from '../assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op3/4 copy.webp'

// Migsun rohini (3 images)
import migRoh1 from '../assets/architect_images_webp_reduced/Renders for website/Migsun rohini/op1/Cover Image.webp'
import migRoh2 from '../assets/architect_images_webp_reduced/Renders for website/Migsun rohini/op1/2.webp'
import migRoh3 from '../assets/architect_images_webp_reduced/Renders for website/Migsun rohini/op2/Mixed Use (3)_Bloom.webp'

// Noida one (2 images)
import noida1 from '../assets/architect_images_webp_reduced/Renders for website/Noida one/Noida One (1).webp'
import noida2 from '../assets/architect_images_webp_reduced/Renders for website/Noida one/Noida One (2).webp'

// Omaxe mall (3 images)
import omaxe1 from '../assets/architect_images_webp_reduced/Renders for website/Omaxe mall/op1/Final_02_op2.webp'
import omaxe2 from '../assets/architect_images_webp_reduced/Renders for website/Omaxe mall/op1/Final_05_op2.webp'
import omaxe3 from '../assets/architect_images_webp_reduced/Renders for website/Omaxe mall/op2/Final 01.webp'

// Pentagon (2 images)
import pent1 from '../assets/architect_images_webp_reduced/Renders for website/Pentagon/Image(1)_style_transfer01 copy.webp'
import pent2 from '../assets/architect_images_webp_reduced/Renders for website/Pentagon/Scene 1(1)_style_transfer01 copy.webp'

// Rsp (3 images)
import rsp1 from '../assets/architect_images_webp_reduced/Renders for website/Rsp/Scene 13.webp'
import rsp2 from '../assets/architect_images_webp_reduced/Renders for website/Rsp/Scene 24.webp'
import rsp3 from '../assets/architect_images_webp_reduced/Renders for website/Rsp/RSP Mall_0p1_ (4).webp'

// The White house (3 images)
import white1 from '../assets/architect_images_webp_reduced/Renders for website/The White house/The White House (1) COVER IMAGE.webp'
import white2 from '../assets/architect_images_webp_reduced/Renders for website/The White house/The White House (2).webp'
import white3 from '../assets/architect_images_webp_reduced/Renders for website/The White house/The White House (3).webp'

function Home() {
  const worldRef = useRef(null);
  const logoRef = useRef(null);
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Random animation delays for each image in a small range
  useEffect(() => {
    const layers = document.querySelectorAll('.fx-layer');
    layers.forEach((layer) => {
      // Random delay between 0 and 2 seconds for more varied appearance
      const randomDelay = Math.random() * 2;
      layer.style.animationDelay = `${randomDelay}s`;
    });
  }, []);

  // Drag functionality
  useEffect(() => {
    const handleMouseDown = (e) => {
      isDragging.current = true;
      startPos.current = {
        x: e.clientX - offset.x,
        y: e.clientY - offset.y
      };
      if (worldRef.current) {
        worldRef.current.style.cursor = 'grabbing';
      }
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      
      const newOffset = {
        x: e.clientX - startPos.current.x,
        y: e.clientY - startPos.current.y
      };
      setOffset(newOffset);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      if (worldRef.current) {
        worldRef.current.style.cursor = 'grab';
      }
    };

    const world = worldRef.current;
    if (world) {
      world.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (world) {
        world.removeEventListener('mousedown', handleMouseDown);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [offset]);

  return (
    <div className="main-content">
      <div className="fx-3d-scene">
        <div 
          className="fx-3d-world fx-grid" 
          ref={worldRef}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            transition: isDragging.current ? 'none' : 'transform 0.3s ease-out'
          }}
        >
          <div className="fx-layer">
            <img src={conv1} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={evolo1} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={gpm1} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={m3m1} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={migLuck1} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={migMix1} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={migRoh1} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={noida1} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={omaxe1} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={pent1} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={rsp1} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={white1} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={conv2} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={evolo2} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={gpm2} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={m3m2} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={migLuck2} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={migMix2} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={migRoh2} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={noida2} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={omaxe2} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={pent2} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={rsp2} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={white2} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={conv3} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={evolo3} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={gpm3} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={m3m3} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={migMix3} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={migRoh3} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={omaxe3} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={rsp3} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={white3} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={m3m4} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={migMix4} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={m3m5} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={migMix5} alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <img src={migMix6} alt="Architecture render" />
          </div>
        </div>
      </div>
      
      <div 
        className="hero-title-wrapper"
        ref={logoRef}
        style={{
          transform: `translate(calc(-50% + ${offset.x * 0.25}px), calc(-50% + ${offset.y * 0.25}px)) translateZ(-400px)`,
          transition: isDragging.current ? 'none' : 'transform 0.3s ease-out'
        }}
      >
        <img src={logo} alt="Paraflux" className="hero-logo" />
      </div>
    </div>
  )
}

export default Home
