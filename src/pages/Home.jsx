import { useEffect, useLayoutEffect, useRef, useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'
import { imageKeyToProject } from '../data/projectData'

// Logo
const logo = '/assets/PARAFLULX_LOGO.webp'

// Number of images per column (must sum to 32)
const COLUMN_SIZES = [6, 5, 6, 5, 6, 4];

function Home() {
  const navigate = useNavigate();
  const worldRef = useRef(null);
  const sceneRef = useRef(null);
  const logoRef = useRef(null);
  const isDragging = useRef(false);
  const didDrag = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });

  // Restore state from sessionStorage when returning from project detail
  const [skipIntro] = useState(() => {
    return sessionStorage.getItem('homeVisited') === 'true';
  });
  const [offset, setOffset] = useState(() => {
    const saved = sessionStorage.getItem('homeOffset');
    return saved ? JSON.parse(saved) : { x: 0, y: 0 };
  });
  const [zoom, setZoom] = useState(() => {
    const saved = sessionStorage.getItem('homeZoom');
    return saved ? parseFloat(saved) : 1;
  });

  // Refs to access current offset/zoom in callbacks without stale closures
  const offsetRef = useRef(offset);
  offsetRef.current = offset;
  const zoomRef = useRef(zoom);
  zoomRef.current = zoom;

  const [isMobile, setIsMobile] = useState(false);
  const rafId = useRef(null);

  // Clicked image info — set on click, triggers dismiss animation for all others
  const [clickedInfo, setClickedInfo] = useState(null); // { key, src, rect, projectId }

  // Zoom-to-fullscreen overlay state
  const [zoomOverlay, setZoomOverlay] = useState(null); // { src, rect, projectId }

  // Clear saved home state on mount (already consumed by useState initializers above)
  useEffect(() => {
    sessionStorage.removeItem('homeVisited');
    sessionStorage.removeItem('homeOffset');
    sessionStorage.removeItem('homeZoom');
  }, []);

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
  const imageSets = useMemo(() => {
    const sets = {};
    for (let i = 1; i <= 32; i++) {
      sets[`img${i}`] = { mobile: `/assets/mobile/${i}.webp`, desktop: `/assets/home/${i}.webp` };
    }
    return sets;
  }, []);

  // Group images into columns per COLUMN_SIZES
  const columns = useMemo(() => {
    const cols = [];
    let idx = 1;
    for (const size of COLUMN_SIZES) {
      const col = [];
      for (let i = 0; i < size; i++) col.push(idx++);
      cols.push(col);
    }
    return cols;
  }, []);

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

  // Skip fly-in animation when returning from project detail — set final state before paint
  // Column Y offsets must match the CSS @keyframes fx-fly-in-offset1 … offset7 final translateY values
  const COLUMN_Y_OFFSETS = useMemo(() => [-45, 60, -80, 35, -20, 75, -55], []);

  useLayoutEffect(() => {
    if (!skipIntro) return;
    const colEls = document.querySelectorAll('.fx-col');
    const layers = document.querySelectorAll('.fx-layer');

    colEls.forEach((col, colIdx) => {
      col.style.transform = `translateY(${COLUMN_Y_OFFSETS[colIdx]}px)`;
    });

    layers.forEach((layer) => {
      layer.style.opacity = '1';
      layer.style.transform = 'translateZ(0) scale(1)';
      layer.style.animation = 'none';
    });
  }, [skipIntro, COLUMN_Y_OFFSETS]);

  // Random animation delays + lock in final state after fly-in so CSS transitions work
  useEffect(() => {
    if (skipIntro) return;

    const layers = document.querySelectorAll('.fx-layer');

    const handleAnimationEnd = (e) => {
      const layer = e.currentTarget;
      // Capture the computed transform that fill-mode is holding
      const finalTransform = getComputedStyle(layer).transform;
      // Set final state as inline styles so transitions own these properties going forward
      layer.style.opacity = '1';
      layer.style.transform = finalTransform;
      // Remove the animation entirely — fill-mode was suppressing CSS transitions on
      // opacity/transform; with no animation active the transitions work normally
      layer.style.animation = 'none';
      layer.removeEventListener('animationend', handleAnimationEnd);
    };

    layers.forEach((layer) => {
      // Random delay between 0 and 2 seconds for more varied appearance
      const randomDelay = Math.random() * 2;
      layer.style.animationDelay = `${randomDelay}s`;
      layer.addEventListener('animationend', handleAnimationEnd);
    });

    return () => {
      layers.forEach((layer) => {
        layer.removeEventListener('animationend', handleAnimationEnd);
      });
    };
  }, [skipIntro]);

  // Drag functionality (Mouse and Touch) - Optimized for mobile
  useEffect(() => {
    const handleStart = (e) => {
      e.preventDefault(); // Prevent default drag behavior
      isDragging.current = true;
      didDrag.current = false;
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
        didDrag.current = true;
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

  // Handle image click — first dismiss others, then zoom to fullscreen
  const handleLayerClick = useCallback((e, imageKey) => {
    // Ignore if user was dragging
    if (didDrag.current) {
      didDrag.current = false;
      return;
    }
    const projectId = imageKeyToProject[imageKey];
    if (!projectId) return;

    // Get the clicked layer element rect
    const layerEl = e.currentTarget;
    const rect = layerEl.getBoundingClientRect();

    // Get current src from the img inside
    const imgEl = layerEl.querySelector('img');
    const src = imgEl ? imgEl.currentSrc || imgEl.src : '';

    setClickedInfo({ key: imageKey, src, rect, projectId });
  }, []);

  // Step 1: when an image is clicked, wait for the dismiss animation then start the zoom overlay
  useEffect(() => {
    if (!clickedInfo) return;
    const timer = setTimeout(() => {
      setZoomOverlay({ src: clickedInfo.src, rect: clickedInfo.rect, projectId: clickedInfo.projectId });
    }, 350);
    return () => clearTimeout(timer);
  }, [clickedInfo]);

  // Step 2: When zoom overlay mounts, run the animation then navigate to project page.
  useEffect(() => {
    if (!zoomOverlay) return;
    const timer = setTimeout(() => {
      // Save home page state so it can be restored on return
      sessionStorage.setItem('homeOffset', JSON.stringify(offsetRef.current));
      sessionStorage.setItem('homeZoom', String(zoomRef.current));
      sessionStorage.setItem('homeVisited', 'true');
      navigate(`/project/${zoomOverlay.projectId}`, {
        state: { heroImage: zoomOverlay.src, fromZoom: true },
      });
    }, 650);
    return () => clearTimeout(timer);
  }, [zoomOverlay, navigate]);

  return (
    <div className={`main-content${skipIntro ? ' fx-skip-intro' : ''}`}>
      {/* Zoom-to-fullscreen overlay */}
      {zoomOverlay && (
        <div
          className="home-zoom-overlay"
          style={{
            '--zoom-x': `${zoomOverlay.rect.left}px`,
            '--zoom-y': `${zoomOverlay.rect.top}px`,
            '--zoom-w': `${zoomOverlay.rect.width}px`,
            '--zoom-h': `${zoomOverlay.rect.height}px`,
            backgroundImage: `url(${zoomOverlay.src})`,
          }}
        />
      )}

      <div className="fx-3d-scene" ref={sceneRef}>
        <div 
          className={`fx-3d-world fx-grid${clickedInfo ? ' fx-world-dismissing' : ''}`} 
          ref={worldRef}
          style={{
            transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${zoom})`,
            transition: isDragging.current ? 'none' : 'transform 0.3s ease-out',
            willChange: isDragging.current ? 'transform' : 'auto'
          }}
        >
          {columns.map((colItems, colIdx) => (
            <div key={`col${colIdx}`} className="fx-col">
              {colItems.map((num) => (
                <div
                  key={`img${num}`}
                  className="fx-layer"
                  data-chosen={clickedInfo?.key === `img${num}` ? 'true' : undefined}
                  onClick={(e) => handleLayerClick(e, `img${num}`)}
                >
                  <ResponsiveImage imageKey={`img${num}`} alt={`Architecture render ${num}`} priority={num <= 6} />
                </div>
              ))}
            </div>
          ))}
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
