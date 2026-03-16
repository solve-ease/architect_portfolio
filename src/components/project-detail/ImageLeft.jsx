/**
 * ImageLeft — full image fills left half of viewport, right half is blank/white.
 */
function ImageLeft({ src, alt = '' }) {
  return (
    <section className="pd-image-left">
      <div className="pd-image-left-img">
        <img src={src} alt={alt} loading="lazy" />
      </div>
      <div className="pd-image-left-space" />
    </section>
  )
}

export default ImageLeft
