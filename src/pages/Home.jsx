import { useEffect, useLayoutEffect, useRef, useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'
import { imageKeyToProject } from '../data/projectData'

// Logo
const logo = '/assets/PARAFLULX_LOGO.webp'

// Number of images per column (must sum to 32)
const COLUMN_SIZES = [6, 5, 6, 5, 6, 5];

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
    for (let i = 1; i <= 33; i++) {
      sets[`img${i}`] = { mobile: `/assets/home/${i}.webp`, desktop: `/assets/home/${i}.webp` };
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
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );

  // Skip fly-in animation when returning from project detail — set final state before paint
  // Column Y offsets must match the CSS @keyframes fx-fly-in-offset1 … offset7 final translateY values
 const COLUMN_Y_OFFSETS = useMemo(() => [-122.5, -150, -100, -57.5, -50, -187.5], []);

  useLayoutEffect(() => {
    if (!skipIntro) return;
    const colEls = document.querySelectorAll('.fx-col');
    const layers = document.querySelectorAll('.fx-layer');

    colEls.forEach((col, colIdx) => {
      col.style.transform = `translateY(${COLUMN_Y_OFFSETS[colIdx]}px)`;
    });

    layers.forEach((layer) => {
      layer.style.opacity = '1';
      layer.style.visibility = 'visible';
      layer.style.transform = 'translateZ(0) scale(1)';
      layer.style.animation = 'none';
      layer.style.animationPlayState = 'running'; // Ensure running state
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
      layer.style.visibility = 'visible';
      layer.style.transform = finalTransform;
      // Remove the animation entirely — fill-mode was suppressing CSS transitions on
      // opacity/transform; with no animation active the transitions work normally
      layer.style.animation = 'none';
      layer.removeEventListener('animationend', handleAnimationEnd);
    };

    // Step 1: Reset the animation completely to ensure clean state
    // This fixes the glitch when returning to home page or on slow initial loads
    layers.forEach((layer) => {
      layer.style.animation = 'none';
    });

    // Step 2: Force reflow to flush the "none" state
    void document.body.offsetHeight;

    // Step 3: Re-apply the animation with random delays (all in one shorthand)
    layers.forEach((layer) => {
      const randomDelay = Math.random() * 2;
      layer.style.animation = `fx-fly-in 7.5s cubic-bezier(.43,.31,0,1) ${randomDelay}s forwards paused`;
      layer.addEventListener('animationend', handleAnimationEnd);
    });

    // Step 4: Force another reflow to ensure animation is fully registered
    void document.body.offsetHeight;

    // Step 5: Now unpause to start all animations
    layers.forEach((layer) => {
      layer.style.animationPlayState = 'running';
    });

    return () => {
      layers.forEach((layer) => {
        layer.removeEventListener('animationend', handleAnimationEnd);
      });
    };
  }, [skipIntro]);

  // Drag functionality (Mouse and Touch) - Optimized for fluid dynamics
  useEffect(() => {
    // Physics state for momentum and smooth lerping
    const physics = {
      position: { x: offsetRef.current.x, y: offsetRef.current.y },
      velocity: { x: 0, y: 0 },
      target: { x: offsetRef.current.x, y: offsetRef.current.y }
    };
    
    let lastMousePosition = { x: 0, y: 0 };
    let animationFrameId = null;

    const handleStart = (e) => {
      isDragging.current = true;
      didDrag.current = false;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      startPos.current = {
        x: clientX - physics.position.x,
        y: clientY - physics.position.y
      };
      lastMousePosition = { x: clientX, y: clientY };

      if (sceneRef.current) {
        sceneRef.current.style.cursor = 'grabbing';
      }
      if (worldRef.current) {
        worldRef.current.style.willChange = 'transform';
      }
    };

    const handleMove = (e) => {
      if (!isDragging.current) return;

      if (e.cancelable) {
        e.preventDefault();
      }

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      // Update target based on mouse position
      physics.target.x = clientX - startPos.current.x;
      physics.target.y = clientY - startPos.current.y;

      // Track rough velocity for momentum
      physics.velocity.x = clientX - lastMousePosition.x;
      physics.velocity.y = clientY - lastMousePosition.y;
      lastMousePosition = { x: clientX, y: clientY };

      didDrag.current = true;
    };

    const handleEnd = () => {
      isDragging.current = false;

      // Update React state once at the end
      setOffset({ x: physics.position.x, y: physics.position.y });

      if (sceneRef.current) {
        sceneRef.current.style.cursor = 'grab';
      }

      // Reset didDrag after a short delay to allow click handler to check it
      setTimeout(() => {
        didDrag.current = false;
      }, 50);
    };

    // The animation loop that runs continuously decoupled from input
    const physicsLoop = () => {
      if (!worldRef.current) return;

      // Calculate boundaries based on viewport and grid size
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const isSmallScreen = viewportWidth < 768;
      const maxOffsetX = isSmallScreen ? viewportWidth * 2.0 : viewportWidth * 1.5;
      const minOffsetX = isSmallScreen ? -viewportWidth * 2.0 : -viewportWidth * 1.5;
      const maxOffsetY = viewportHeight * 0.9;
      const minOffsetY = -viewportHeight * 1.0;

      if (isDragging.current) {
        // Softly clamp target to prevent dragging too far off screen
        physics.target.x = Math.max(minOffsetX - viewportWidth*0.5, Math.min(maxOffsetX + viewportWidth*0.5, physics.target.x));
        physics.target.y = Math.max(minOffsetY - viewportHeight*0.5, Math.min(maxOffsetY + viewportHeight*0.5, physics.target.y));

        // Smoothly interpolate current position towards target - lowered for more fluid drag
        physics.position.x += (physics.target.x - physics.position.x) * 0.15;
        physics.position.y += (physics.target.y - physics.position.y) * 0.15;
      } else {
        // Let it coast with friction - increased closer to 1 for longer gliding
        physics.velocity.x *= 0.96;
        physics.velocity.y *= 0.96;

        physics.position.x += physics.velocity.x;
        physics.position.y += physics.velocity.y;

        // Spring bound edges (rubber banding) - softened for smoother bounce
        if (physics.position.x > maxOffsetX) {
          physics.velocity.x += (maxOffsetX - physics.position.x) * 0.05;
        } else if (physics.position.x < minOffsetX) {
          physics.velocity.x += (minOffsetX - physics.position.x) * 0.05;
        }

        if (physics.position.y > maxOffsetY) {
          physics.velocity.y += (maxOffsetY - physics.position.y) * 0.05;
        } else if (physics.position.y < minOffsetY) {
          physics.velocity.y += (minOffsetY - physics.position.y) * 0.05;
        }

        // Keep target synced so picking it up again relies on current settled coordinates
        physics.target.x = physics.position.x;
        physics.target.y = physics.position.y;
      }

      // Small threshold to avoid updating DOM when fully settled
      if (
        isDragging.current || 
        Math.abs(physics.velocity.x) > 0.05 || 
        Math.abs(physics.velocity.y) > 0.05 ||
        physics.position.x > maxOffsetX + 0.5 ||
        physics.position.x < minOffsetX - 0.5 ||
        physics.position.y > maxOffsetY + 0.5 ||
        physics.position.y < minOffsetY - 0.5 
      ) {
        worldRef.current.style.transform = `translate3d(${physics.position.x}px, ${physics.position.y}px, 0) scale(${zoomRef.current})`;

        if (logoRef.current) {
          logoRef.current.style.transform = `translate(calc(-50% + ${physics.position.x * 0.25}px), calc(-50% + ${physics.position.y * 0.25}px)) translateZ(-400px)`;
        }

        offsetRef.current = { x: physics.position.x, y: physics.position.y };
      }

      animationFrameId = requestAnimationFrame(physicsLoop);
    };

    animationFrameId = requestAnimationFrame(physicsLoop);

    const scene = sceneRef.current;

    if (scene) {
      // Prevent default image drag behavior
      const preventDragStart = (e) => e.preventDefault();
      scene.addEventListener('dragstart', preventDragStart);

      // Mouse events
      scene.addEventListener('mousedown', handleStart, { passive: true });
      window.addEventListener('mousemove', handleMove, { passive: false });
      window.addEventListener('mouseup', handleEnd, { passive: true });

      // Touch events with passive where possible
      scene.addEventListener('touchstart', handleStart, { passive: true });
      window.addEventListener('touchmove', handleMove, { passive: false });
      window.addEventListener('touchend', handleEnd, { passive: true });
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
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
    };
  }, []); // Empty dependency array - handlers use refs

  // Zoom functionality on scroll - optimized to reduce re-renders
  useEffect(() => {
    let zoomRafId = null;

    const handleWheel = (e) => {
      e.preventDefault();

      // Cancel previous frame
      if (zoomRafId) {
        cancelAnimationFrame(zoomRafId);
      }

      zoomRafId = requestAnimationFrame(() => {
        const zoomDelta = e.deltaY * -0.001;
        const newZoom = Math.min(Math.max(zoomRef.current + zoomDelta, 0.85), 1.5);

        // Update ref
        zoomRef.current = newZoom;

        // Apply directly to DOM
        if (worldRef.current) {
          worldRef.current.style.transform = `translate3d(${offsetRef.current.x}px, ${offsetRef.current.y}px, 0) scale(${newZoom})`;
        }

        // Update React state (throttled - only for persistence)
        setZoom(newZoom);
      });
    };

    const scene = sceneRef.current;
    if (scene) {
      scene.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (scene) {
        scene.removeEventListener('wheel', handleWheel);
      }
      if (zoomRafId) {
        cancelAnimationFrame(zoomRafId);
      }
    };
  }, []);

  // Handle image click — first dismiss others, then zoom to fullscreen
  const handleLayerClick = useCallback((e, imageKey) => {
    console.log('Click detected on:', imageKey);
    console.log('didDrag.current:', didDrag.current);
    
    if (didDrag.current) {
      console.log('Ignoring click - was dragging');
      didDrag.current = false;
      return;
    }
    
    const projectId = imageKeyToProject[imageKey];
    console.log('projectId for', imageKey, ':', projectId);
    
    if (!projectId) {
      console.log('No projectId found!');
      return;
    }

    const layerEl = e.currentTarget;
    const rect = layerEl.getBoundingClientRect();
    const imgEl = layerEl.querySelector('img');
    const src = imgEl ? imgEl.currentSrc || imgEl.src : '';
    console.log('Setting click info for:', { key: imageKey, projectId, src });

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
            transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${zoom})`
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
                  onTouchEnd={(e) => {
                    // On mobile, touchend should also trigger the click
                    if (!isDragging.current) {
                      handleLayerClick(e, `img${num}`);
                    }
                  }}
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
          transform: `translate(calc(-50% + ${offset.x * 0.25}px), calc(-50% + ${offset.y * 0.25}px)) translateZ(-400px)`
        }}
      >
        <img src={logo} alt="Paraflux" className="hero-logo" />
      </div>
    </div>
  )
}

export default Home
