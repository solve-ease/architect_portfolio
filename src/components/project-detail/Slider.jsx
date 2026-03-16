import { useState } from 'react'

/**
 * Slider — text content on the left, auto-advancing image carousel on the right.
 */
function Slider({ text = '', images = [], heading = '' }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  const paragraphs = text.trim().split('\n\n')

  return (
    <section className="pd-slider">
      <div className="pd-slider-text">
        {heading && <h2 className="pd-slider-heading">{heading}</h2>}
        {paragraphs.map((para, i) => (
          <p key={i} className={i === 0 ? 'pd-slider-body' : 'pd-slider-body-secondary'}>{para}</p>
        ))}
      </div>

      {images.length > 0 && (
        <div className="pd-slider-carousel">
          <div className="pd-slider-track">
            <img
              key={images[current]}
              src={images[current]}
              alt={`Slide ${current + 1}`}
              loading="lazy"
            />
          </div>
          {images.length > 1 && (
            <div className="pd-slider-controls">
              <button onClick={prev} aria-label="Previous image">‹</button>
              <span className="pd-slider-counter">
                {current + 1} / {images.length}
              </span>
              <button onClick={next} aria-label="Next image">›</button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default Slider
