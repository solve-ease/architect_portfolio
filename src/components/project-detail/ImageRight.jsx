/**
 * ImageRight — full image fills right half of viewport, left half is blank/white.
 */
function ImageRight({ src, alt = '' }) {
  return (
    <section className="pd-image-right">
      <div className="pd-image-right-space" />
      <div className="pd-image-right-img">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </section>
  )
}

export default ImageRight
