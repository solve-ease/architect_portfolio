import { useState, useRef, useEffect, useCallback } from 'react'

/**
 * Slider — text content on the left, draggable image carousel on the right.
 *
 * Three-box concept:
 * Box1 (off-screen left) | Box2 (visible - current image) | gap | Box3 (5% peek - next image)
 *
 * Dragging left moves current image to Box1, next image slides from Box3 to Box2.
 */
function Slider({ text = '', images = [], heading = '' }) {
  const [current, setCurrent] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const containerRef = useRef(null)
  const startXRef = useRef(0)
  const startYRef = useRef(0)
  const startOffsetRef = useRef(0)
  const isScrollingRef = useRef(false)
  // Ref mirrors dragOffset so handleDragEnd doesn't need dragOffset in its
  // closure — prevents global listener teardown/re-add on every touchmove
  // (which causes Safari to miss touchend and leave the slider stuck).
  const dragOffsetRef = useRef(0)

  const paragraphs = text.trim().split('\n\n')

  // Calculate positions for the three-box layout
  // Each image takes 100% of container width
  // Gap between images is 24px
  // Next image peeks at 5%
  const GAP = 24
  const PEEK_PERCENT = 5

  const goToNext = useCallback(() => {
    if (isAnimating || images.length <= 1) return
    setIsAnimating(true)
    setCurrent((c) => (c + 1) % images.length)
    setDragOffset(0)
  }, [isAnimating, images.length])

  const goToPrev = useCallback(() => {
    if (isAnimating || images.length <= 1) return
    setIsAnimating(true)
    setCurrent((c) => (c - 1 + images.length) % images.length)
    setDragOffset(0)
  }, [isAnimating, images.length])

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  const handleDragStart = (e) => {
    if (isAnimating || images.length <= 1) return
    
    // Only prevent default for mouse events to prevent image ghost dragging 
    if (e.type === 'mousedown') {
      e.preventDefault()
    }

    setIsDragging(true)
    isScrollingRef.current = false
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX
    const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY
    startXRef.current = clientX
    startYRef.current = clientY
    startOffsetRef.current = dragOffset
    dragOffsetRef.current = dragOffset
  }

  const handleDragMove = useCallback((e) => {
    if (!isDragging) return
    
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX
    const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY
    const diffX = clientX - startXRef.current
    const diffY = clientY - startYRef.current

    // If scrolling vertically, let the browser handle it and cancel our dragging
    if (e.type === 'touchmove') {
      if (!isScrollingRef.current && Math.abs(diffY) > Math.abs(diffX)) {
        isScrollingRef.current = true
        setIsDragging(false)
        setDragOffset(0)
        return
      }
      if (isScrollingRef.current) return
      
      // We are horizontally swiping, prevent default so Safari doesn't navigate back/forward
      if (e.cancelable) {
        e.preventDefault()
      }
    } else {
      e.preventDefault()
    }

    const newOffset = startOffsetRef.current + diffX
    dragOffsetRef.current = newOffset
    setDragOffset(newOffset)
  }, [isDragging])

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return
    setIsDragging(false)

    if (isScrollingRef.current) return

    const container = containerRef.current
    if (!container) {
      setDragOffset(0)
      dragOffsetRef.current = 0
      return
    }

    const containerWidth = container.offsetWidth
    const threshold = containerWidth * 0.15 // 15% of container width to trigger slide

    if (dragOffsetRef.current < -threshold) {
      // Dragged left enough - go to next
      goToNext()
    } else if (dragOffsetRef.current > threshold) {
      // Dragged right enough - go to prev
      goToPrev()
    } else {
      // Not enough drag - snap back
      setDragOffset(0)
    }
    dragOffsetRef.current = 0
  }, [isDragging, goToNext, goToPrev])

  // Add global mouse/touch handlers for drag outside element
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMove = (e) => handleDragMove(e)
      const handleGlobalEnd = () => handleDragEnd()

      window.addEventListener('mousemove', handleGlobalMove)
      window.addEventListener('mouseup', handleGlobalEnd)
      window.addEventListener('touchmove', handleGlobalMove, { passive: false })
      window.addEventListener('touchend', handleGlobalEnd)

      return () => {
        window.removeEventListener('mousemove', handleGlobalMove)
        window.removeEventListener('mouseup', handleGlobalEnd)
        window.removeEventListener('touchmove', handleGlobalMove)
        window.removeEventListener('touchend', handleGlobalEnd)
      }
    }
  }, [isDragging, handleDragMove, handleDragEnd])

  // Calculate the transform for the track
  // Each slide position = -(slideWidth + gap) * index
  // slideWidth = 100% - peekWidth - gap
  // But we want the next image to peek by PEEK_PERCENT
  const getTrackStyle = () => {
    // The visible image width is (100% - peek% - gap)
    // We translate by that amount per slide
    const slideOffset = `calc(${-current} * (100% - ${PEEK_PERCENT}% - ${GAP}px + ${GAP}px))`

    return {
      transform: `translateX(calc(${slideOffset} + ${dragOffset}px))`,
      transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
    }
  }

  return (
    <section className="pd-slider">
      <div className="pd-slider-text">
        {heading && <h2 className="pd-slider-heading">{heading}</h2>}
        {paragraphs.map((para, i) => (
          <p key={i} className={i === 0 ? 'pd-slider-body' : 'pd-slider-body-secondary'}>{para}</p>
        ))}
      </div>

      {images.length > 0 && (
        <>
          <div
            className="pd-slider-carousel-wrapper"
            ref={containerRef}
          >
            <div
              className={`pd-slider-carousel ${isDragging ? 'dragging' : ''}`}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              <div
                className="pd-slider-track"
                style={getTrackStyle()}
              >
                {images.map((img, idx) => (
                  <div key={idx} className="pd-slider-slide">
                    <img
                      src={img}
                      alt={`Slide ${idx + 1}`}
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {images.length > 1 && (
            <div className="pd-slider-controls">
              <span className="pd-slider-counter">
                {current + 1} of {images.length}
              </span>
            </div>
          )}
        </>
      )}
    </section>
  )
}

export default Slider
