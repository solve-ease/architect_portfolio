import { useState, useRef, useEffect, useCallback } from 'react'

/**
 * Slider — text content on the left, draggable image carousel on the right.
 *
 * Three-box concept:
 * Box1 (off-screen left) | Box2 (visible - current image) | gap | Box3 (5% peek - next image)
 *
 * Dragging left moves current image to Box1, next image slides from Box3 to Box2.
 *
 * All drag tracking uses refs (no React state) so there are zero re-renders
 * during a swipe. Global listeners are registered ONCE at mount and never
 * torn down mid-gesture — this fixes Safari dropping touchend when listeners
 * are removed/re-added on every touchmove reactrender cycle.
 */
function Slider({ text = '', images = [], heading = '' }) {
  const [current, setCurrent] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isDraggingUI, setIsDraggingUI] = useState(false) // only for cursor CSS

  const containerRef = useRef(null)
  const trackRef = useRef(null)

  // All drag state in refs — no re-renders during gestures
  const isDraggingRef = useRef(false)
  const isScrollingRef = useRef(false)
  const isAnimatingRef = useRef(false)
  const startXRef = useRef(0)
  const startYRef = useRef(0)
  const startOffsetRef = useRef(0)
  const dragOffsetRef = useRef(0)
  const currentRef = useRef(0)
  const imagesCountRef = useRef(images.length)

  // Keep refs in sync with state
  currentRef.current = current
  imagesCountRef.current = images.length
  isAnimatingRef.current = isAnimating

  const paragraphs = text.trim().split('\n\n')

  const GAP = 24
  const PEEK_PERCENT = 5

  // Apply transform directly to DOM — no setState, no re-render
  const applyTrackTransform = useCallback((offset, animated) => {
    const track = trackRef.current
    if (!track) return
    const c = currentRef.current
    const slideOffset = `calc(${-c} * (100% - ${PEEK_PERCENT}% - ${GAP}px + ${GAP}px))`
    track.style.transition = animated
      ? 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)'
      : 'none'
    track.style.transform = `translateX(calc(${slideOffset} + ${offset}px))`
  }, [])

  const goToNext = useCallback(() => {
    if (isAnimatingRef.current || imagesCountRef.current <= 1) return
    isAnimatingRef.current = true
    setIsAnimating(true)
    setCurrent((c) => {
      const next = (c + 1) % imagesCountRef.current
      currentRef.current = next
      return next
    })
    dragOffsetRef.current = 0
    setDragOffset(0)
  }, [])

  const goToPrev = useCallback(() => {
    if (isAnimatingRef.current || imagesCountRef.current <= 1) return
    isAnimatingRef.current = true
    setIsAnimating(true)
    setCurrent((c) => {
      const prev = (c - 1 + imagesCountRef.current) % imagesCountRef.current
      currentRef.current = prev
      return prev
    })
    dragOffsetRef.current = 0
    setDragOffset(0)
  }, [])

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
        isAnimatingRef.current = false
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  // After current changes, re-apply the transform with animation
  useEffect(() => {
    applyTrackTransform(0, true)
  }, [current, applyTrackTransform])

  const handleDragStart = useCallback((e) => {
    if (isAnimatingRef.current || imagesCountRef.current <= 1) return

    if (e.type === 'mousedown') {
      e.preventDefault()
    }

    isDraggingRef.current = true
    isScrollingRef.current = false
    setIsDraggingUI(true)

    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX
    const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY
    startXRef.current = clientX
    startYRef.current = clientY
    startOffsetRef.current = dragOffsetRef.current
  }, [])

  const handleDragMove = useCallback((e) => {
    if (!isDraggingRef.current) return

    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX
    const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY
    const diffX = clientX - startXRef.current
    const diffY = clientY - startYRef.current

    if (e.type === 'touchmove') {
      if (!isScrollingRef.current && Math.abs(diffY) > Math.abs(diffX)) {
        // Vertical scroll — cancel drag
        isScrollingRef.current = true
        isDraggingRef.current = false
        setIsDraggingUI(false)
        dragOffsetRef.current = 0
        applyTrackTransform(0, true)
        return
      }
      if (isScrollingRef.current) return
      if (e.cancelable) e.preventDefault()
    } else {
      e.preventDefault()
    }

    const newOffset = startOffsetRef.current + diffX
    dragOffsetRef.current = newOffset
    applyTrackTransform(newOffset, false)
  }, [applyTrackTransform])

  const handleDragEnd = useCallback(() => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    setIsDraggingUI(false)

    if (isScrollingRef.current) return

    const container = containerRef.current
    if (!container) {
      dragOffsetRef.current = 0
      applyTrackTransform(0, true)
      return
    }

    const containerWidth = container.offsetWidth
    const threshold = containerWidth * 0.15

    const offset = dragOffsetRef.current
    dragOffsetRef.current = 0

    if (offset < -threshold) {
      goToNext()
    } else if (offset > threshold) {
      goToPrev()
    } else {
      applyTrackTransform(0, true)
    }
    setDragOffset(0)
  }, [goToNext, goToPrev, applyTrackTransform])

  // Register ALL listeners once at mount — never torn down mid-gesture
  useEffect(() => {
    const carousel = containerRef.current?.querySelector('.pd-slider-carousel')
    if (!carousel) return

    const preventDrag = (e) => e.preventDefault()

    carousel.addEventListener('mousedown', handleDragStart, { passive: false })
    carousel.addEventListener('touchstart', handleDragStart, { passive: true })
    carousel.addEventListener('dragstart', preventDrag)

    window.addEventListener('mousemove', handleDragMove, { passive: false })
    window.addEventListener('mouseup', handleDragEnd, { passive: true })
    window.addEventListener('touchmove', handleDragMove, { passive: false })
    window.addEventListener('touchend', handleDragEnd, { passive: true })
    window.addEventListener('touchcancel', handleDragEnd, { passive: true })

    return () => {
      carousel.removeEventListener('mousedown', handleDragStart)
      carousel.removeEventListener('touchstart', handleDragStart)
      carousel.removeEventListener('dragstart', preventDrag)
      window.removeEventListener('mousemove', handleDragMove)
      window.removeEventListener('mouseup', handleDragEnd)
      window.removeEventListener('touchmove', handleDragMove)
      window.removeEventListener('touchend', handleDragEnd)
      window.removeEventListener('touchcancel', handleDragEnd)
    }
  }, [handleDragStart, handleDragMove, handleDragEnd])

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
              className={`pd-slider-carousel ${isDraggingUI ? 'dragging' : ''}`}
            >
              <div
                className="pd-slider-track"
                ref={trackRef}
                style={{
                  transform: `translateX(calc(${-current} * (100% - ${PEEK_PERCENT}% - ${GAP}px + ${GAP}px) + ${dragOffset}px))`,
                  transition: isDraggingUI ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
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
