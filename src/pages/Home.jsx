import { useEffect, useRef, useState, useMemo } from 'react'
import '../styles/Home.css'

// Logo
const logo = '/assets/PARAFLULX_LOGO.webp'

// Conventional centger (3 images)
const conv1 = '/assets/architect_images_webp_reduced/Renders for website/Conventional centger/04-05_Thesis page_01 copy.webp'
const conv2 = '/assets/architect_images_webp_reduced/Renders for website/Conventional centger/Thesis  (1).webp'
const conv3 = '/assets/architect_images_webp_reduced/Renders for website/Conventional centger/Untitled-1 copy.webp'

// Evolo (3 images)
const evolo1 = '/assets/architect_images_webp_reduced/Renders for website/Evolo/CloseUp.webp'
const evolo2 = '/assets/architect_images_webp_reduced/Renders for website/Evolo/EVOLO SHEET 01 copy.webp'
const evolo3 = '/assets/architect_images_webp_reduced/Renders for website/Evolo/Final 2.webp'

// GPM Retail (3 images)
const gpm1 = '/assets/architect_images_webp_reduced/Renders for website/GPM Retail/F1.webp'
const gpm2 = '/assets/architect_images_webp_reduced/Renders for website/GPM Retail/f3.webp'
const gpm3 = '/assets/architect_images_webp_reduced/Renders for website/GPM Retail/f5.webp'

// M3m (5 images)
const m3m1 = '/assets/architect_images_webp_reduced/Renders for website/M3m/Final 1.webp'
const m3m2 = '/assets/architect_images_webp_reduced/Renders for website/M3m/Scene 12.webp'
const m3m3 = '/assets/architect_images_webp_reduced/Renders for website/M3m/Scene 16.webp'
const m3m4 = '/assets/architect_images_webp_reduced/Renders for website/M3m/Scene 22.webp'
const m3m5 = '/assets/architect_images_webp_reduced/Renders for website/M3m/Commercail (3).webp'

// Migsun Lucknow (2 images)
const migLuck1 = '/assets/architect_images_webp_reduced/Renders for website/Migsun Lucknow/Cover Page.webp'
const migLuck2 = '/assets/architect_images_webp_reduced/Renders for website/Migsun Lucknow/Mixed Use- luknow (2).webp'

// Migsun mixed use (6 images)
const migMix1 = '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op1/1 copy.webp'
const migMix2 = '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op1/5.webp'
const migMix3 = '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op2/F2.webp'
const migMix4 = '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op2/f6.webp'
const migMix5 = '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op3/2 copy.webp'
const migMix6 = '/assets/architect_images_webp_reduced/Renders for website/Migsun_mixed use/op3/4 copy.webp'

// Migsun rohini (3 images)
const migRoh1 = '/assets/architect_images_webp_reduced/Renders for website/Migsun rohini/op1/Cover Image.webp'
const migRoh2 = '/assets/architect_images_webp_reduced/Renders for website/Migsun rohini/op1/2.webp'
const migRoh3 = '/assets/architect_images_webp_reduced/Renders for website/Migsun rohini/op2/Mixed Use (3)_Bloom.webp'

// Noida one (2 images)
const noida1 = '/assets/architect_images_webp_reduced/Renders for website/Noida one/Noida One (1).webp'
const noida2 = '/assets/architect_images_webp_reduced/Renders for website/Noida one/Noida One (2).webp'

// Omaxe mall (3 images)
const omaxe1 = '/assets/architect_images_webp_reduced/Renders for website/Omaxe mall/op1/Final_02_op2.webp'
const omaxe2 = '/assets/architect_images_webp_reduced/Renders for website/Omaxe mall/op1/Final_05_op2.webp'
const omaxe3 = '/assets/architect_images_webp_reduced/Renders for website/Omaxe mall/op2/Final 01.webp'

// Pentagon (2 images)
const pent1 = '/assets/architect_images_webp_reduced/Renders for website/Pentagon/Image(1)_style_transfer01 copy.webp'
const pent2 = '/assets/architect_images_webp_reduced/Renders for website/Pentagon/Scene 1(1)_style_transfer01 copy.webp'

// Rsp (3 images)
const rsp1 = '/assets/architect_images_webp_reduced/Renders for website/Rsp/Scene 13.webp'
const rsp2 = '/assets/architect_images_webp_reduced/Renders for website/Rsp/Scene 24.webp'
const rsp3 = '/assets/architect_images_webp_reduced/Renders for website/Rsp/RSP Mall_0p1_ (4).webp'

// The White house (3 images)
const white1 = '/assets/architect_images_webp_reduced/Renders for website/The White house/The White House (1) COVER IMAGE.webp'
const white2 = '/assets/architect_images_webp_reduced/Renders for website/The White house/The White House (2).webp'
const white3 = '/assets/architect_images_webp_reduced/Renders for website/The White house/The White House (3).webp'

// Mobile optimized images - Conventional centger
const conv1Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Conventional centger/04-05_Thesis page_01 copy.webp'
const conv2Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Conventional centger/Thesis  (1).webp'
const conv3Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Conventional centger/Untitled-1 copy.webp'

// Evolo mobile
const evolo1Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Evolo/CloseUp.webp'
const evolo2Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Evolo/EVOLO SHEET 01 copy.webp'
const evolo3Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Evolo/Final 2.webp'

// GPM Retail mobile
const gpm1Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/GPM Retail/F1.webp'
const gpm2Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/GPM Retail/f3.webp'
const gpm3Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/GPM Retail/f5.webp'

// M3m mobile
const m3m1Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/M3m/Final 1.webp'
const m3m2Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/M3m/Scene 12.webp'
const m3m3Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/M3m/Scene 16.webp'
const m3m4Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/M3m/Scene 22.webp'
const m3m5Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/M3m/Commercail (3).webp'

// Migsun Lucknow mobile
const migLuck1Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Migsun Lucknow/Cover Page.webp'
const migLuck2Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Migsun Lucknow/Mixed Use- luknow (2).webp'

// Migsun mixed use mobile
const migMix1Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Migsun_mixed use/op1/1 copy.webp'
const migMix2Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Migsun_mixed use/op1/5.webp'
const migMix3Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Migsun_mixed use/op2/F2.webp'
const migMix4Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Migsun_mixed use/op2/f6.webp'
const migMix5Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Migsun_mixed use/op3/2 copy.webp'
const migMix6Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Migsun_mixed use/op3/4 copy.webp'

// Migsun rohini mobile
const migRoh1Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Migsun rohini/op1/Cover Image.webp'
const migRoh2Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Migsun rohini/op1/2.webp'
const migRoh3Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Migsun rohini/op2/Mixed Use (3)_Bloom.webp'

// Noida one mobile
const noida1Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Noida one/Noida One (1).webp'
const noida2Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Noida one/Noida One (2).webp'

// Omaxe mall mobile
const omaxe1Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Omaxe mall/op1/Final_02_op2.webp'
const omaxe2Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Omaxe mall/op1/Final_05_op2.webp'
const omaxe3Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Omaxe mall/op2/Final 01.webp'

// Pentagon mobile
const pent1Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Pentagon/Image(1)_style_transfer01 copy.webp'
const pent2Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Pentagon/Scene 1(1)_style_transfer01 copy.webp'

// Rsp mobile
const rsp1Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Rsp/Scene 13.webp'
const rsp2Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Rsp/Scene 24.webp'
const rsp3Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/Rsp/RSP Mall_0p1_ (4).webp'

// The White house mobile
const white1Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/The White house/The White House (1) COVER IMAGE.webp'
const white2Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/The White house/The White House (2).webp'
const white3Mobile = '/assets/architect_images_webp_reduced_mobile/Renders for website/The White house/The White House (3).webp'

function Home() {
  const worldRef = useRef(null);
  const sceneRef = useRef(null);
  const logoRef = useRef(null);
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const rafId = useRef(null);

  // Detect if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Create image sets with srcSet for responsive loading
  const imageSets = useMemo(() => ({
    conv1: { mobile: conv1Mobile, desktop: conv1 },
    conv2: { mobile: conv2Mobile, desktop: conv2 },
    conv3: { mobile: conv3Mobile, desktop: conv3 },
    evolo1: { mobile: evolo1Mobile, desktop: evolo1 },
    evolo2: { mobile: evolo2Mobile, desktop: evolo2 },
    evolo3: { mobile: evolo3Mobile, desktop: evolo3 },
    gpm1: { mobile: gpm1Mobile, desktop: gpm1 },
    gpm2: { mobile: gpm2Mobile, desktop: gpm2 },
    gpm3: { mobile: gpm3Mobile, desktop: gpm3 },
    m3m1: { mobile: m3m1Mobile, desktop: m3m1 },
    m3m2: { mobile: m3m2Mobile, desktop: m3m2 },
    m3m3: { mobile: m3m3Mobile, desktop: m3m3 },
    m3m4: { mobile: m3m4Mobile, desktop: m3m4 },
    m3m5: { mobile: m3m5Mobile, desktop: m3m5 },
    migLuck1: { mobile: migLuck1Mobile, desktop: migLuck1 },
    migLuck2: { mobile: migLuck2Mobile, desktop: migLuck2 },
    migMix1: { mobile: migMix1Mobile, desktop: migMix1 },
    migMix2: { mobile: migMix2Mobile, desktop: migMix2 },
    migMix3: { mobile: migMix3Mobile, desktop: migMix3 },
    migMix4: { mobile: migMix4Mobile, desktop: migMix4 },
    migMix5: { mobile: migMix5Mobile, desktop: migMix5 },
    migMix6: { mobile: migMix6Mobile, desktop: migMix6 },
    migRoh1: { mobile: migRoh1Mobile, desktop: migRoh1 },
    migRoh2: { mobile: migRoh2Mobile, desktop: migRoh2 },
    migRoh3: { mobile: migRoh3Mobile, desktop: migRoh3 },
    noida1: { mobile: noida1Mobile, desktop: noida1 },
    noida2: { mobile: noida2Mobile, desktop: noida2 },
    omaxe1: { mobile: omaxe1Mobile, desktop: omaxe1 },
    omaxe2: { mobile: omaxe2Mobile, desktop: omaxe2 },
    omaxe3: { mobile: omaxe3Mobile, desktop: omaxe3 },
    pent1: { mobile: pent1Mobile, desktop: pent1 },
    pent2: { mobile: pent2Mobile, desktop: pent2 },
    rsp1: { mobile: rsp1Mobile, desktop: rsp1 },
    rsp2: { mobile: rsp2Mobile, desktop: rsp2 },
    rsp3: { mobile: rsp3Mobile, desktop: rsp3 },
    white1: { mobile: white1Mobile, desktop: white1 },
    white2: { mobile: white2Mobile, desktop: white2 },
    white3: { mobile: white3Mobile, desktop: white3 },
  }), []);

  // Helper component for responsive images with picture element
  const ResponsiveImage = ({ imageKey, alt, priority = false }) => (
    <picture>
      <source 
        media="(max-width: 1000px)" 
        srcSet={imageSets[imageKey].mobile}
      />
      <img 
        src={imageSets[imageKey].desktop}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchpriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );

  // Random animation delays for each image in a small range
  useEffect(() => {
    const layers = document.querySelectorAll('.fx-layer');
    layers.forEach((layer) => {
      // Random delay between 0 and 2 seconds for more varied appearance
      const randomDelay = Math.random() * 2;
      layer.style.animationDelay = `${randomDelay}s`;
    });
  }, []);

  // Drag functionality (Mouse and Touch) - Optimized for mobile
  useEffect(() => {
    const handleStart = (e) => {
      e.preventDefault(); // Prevent default drag behavior
      isDragging.current = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      
      startPos.current = {
        x: clientX - offset.x,
        y: clientY - offset.y
      };
      if (sceneRef.current) {
        sceneRef.current.style.cursor = 'grabbing';
        // Force hardware acceleration
        if (worldRef.current) {
          worldRef.current.style.willChange = 'transform';
        }
      }
    };

    const handleMove = (e) => {
      if (!isDragging.current) return;
      
      e.preventDefault(); // Prevent scrolling/default behavior during drag
      
      // Cancel previous frame
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      
      // Use requestAnimationFrame for smooth updates
      rafId.current = requestAnimationFrame(() => {
        let newX = clientX - startPos.current.x;
        let newY = clientY - startPos.current.y;
        
        // Calculate boundaries based on viewport and grid size
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Define maximum drag limits to reduce white space
        // Reduced from 0.8 to 0.3 to minimize white space on x-axis
        // Increased y-axis limits slightly for more vertical freedom
        const maxOffsetX = viewportWidth * 1.0;
        const minOffsetX = -viewportWidth * 1.0;
        const maxOffsetY = viewportHeight * .9;
        const minOffsetY = -viewportHeight * 1.0;
        
        // Clamp the offset within boundaries
        newX = Math.max(minOffsetX, Math.min(maxOffsetX, newX));
        newY = Math.max(minOffsetY, Math.min(maxOffsetY, newY));
        
        const newOffset = {
          x: newX,
          y: newY
        };
        setOffset(newOffset);
      });
    };

    const handleEnd = () => {
      isDragging.current = false;
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      if (sceneRef.current) {
        sceneRef.current.style.cursor = 'grab';
        // Remove will-change after interaction
        if (worldRef.current) {
          worldRef.current.style.willChange = 'auto';
        }
      }
    };

    const scene = sceneRef.current;
    const world = worldRef.current;
    
    if (scene) {
      // Prevent default image drag behavior
      const preventDragStart = (e) => e.preventDefault();
      scene.addEventListener('dragstart', preventDragStart);
      
      // Mouse events
      scene.addEventListener('mousedown', handleStart);
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);
      
      // Touch events - passive: false to allow smooth dragging
      scene.addEventListener('touchstart', handleStart, { passive: false });
      window.addEventListener('touchmove', handleMove, { passive: false });
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      if (scene) {
        const preventDragStart = (e) => e.preventDefault();
        scene.removeEventListener('dragstart', preventDragStart);
        scene.removeEventListener('mousedown', handleStart);
        scene.removeEventListener('touchstart', handleStart);
      }
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
      
      // Clean up RAF on unmount
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [offset]);

  // Zoom functionality on scroll
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      
      setZoom((prevZoom) => {
        const zoomDelta = e.deltaY * -0.001;
        const newZoom = prevZoom + zoomDelta;
        
        // Clamp zoom between 0.85 and 1.35
        return Math.min(Math.max(newZoom, 0.85), 1.5);
      });
    };

    const scene = document.querySelector('.fx-3d-scene');
    if (scene) {
      scene.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (scene) {
        scene.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="main-content">
      <div className="fx-3d-scene" ref={sceneRef}>
        <div 
          className="fx-3d-world fx-grid" 
          ref={worldRef}
          style={{
            transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${zoom})`,
            transition: isDragging.current ? 'none' : 'transform 0.3s ease-out',
            willChange: isDragging.current ? 'transform' : 'auto'
          }}
        >
          <div className="fx-layer">
            <ResponsiveImage imageKey="conv1" alt="Architecture render" priority={true} />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="evolo1" alt="Architecture render" priority={true} />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="gpm1" alt="Architecture render" priority={true} />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="m3m1" alt="Architecture render" priority={true} />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="migLuck1" alt="Architecture render" priority={true} />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="migMix1" alt="Architecture render" priority={true} />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="migRoh1" alt="Architecture render" priority={true} />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="noida1" alt="Architecture render" priority={true} />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="omaxe1" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="pent1" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="rsp1" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="white1" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="conv2" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="evolo2" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="gpm2" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="m3m2" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="migLuck2" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="migMix2" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="migRoh2" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="noida2" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="omaxe2" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="pent2" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="rsp2" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="white2" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="conv3" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="evolo3" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="gpm3" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="m3m3" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="migMix3" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="migRoh3" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="omaxe3" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="rsp3" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="white3" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="m3m4" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="migMix4" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="m3m5" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="migMix5" alt="Architecture render" />
          </div>
          <div className="fx-layer">
            <ResponsiveImage imageKey="migMix6" alt="Architecture render" />
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
