/**
 * ImageCentre — a single image centred on the page with generous padding.
 */
function ImageCentre({ src, alt = '', caption = '' }) {
  return (
    <section className="pd-image-centre">
      <figure className="pd-image-centre-figure">
        <img src={src} alt={alt} loading="lazy" />
        {caption && <figcaption className="pd-image-centre-caption">{caption}</figcaption>}
      </figure>
    </section>
  )
}

export default ImageCentre
