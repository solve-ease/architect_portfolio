/**
 * ImageCentreWithHeading — a centred image with a heading text above it.
 */
function ImageCentreWithHeading({ src, alt = '', heading = '', caption = '' }) {
  return (
    <section className="pd-image-centre-heading">
      {heading && <h2 className="pd-image-centre-heading-title">{heading}</h2>}
      <figure className="pd-image-centre-heading-figure">
        <img src={src} alt={alt} />
        {caption && <figcaption className="pd-image-centre-heading-caption">{caption}</figcaption>}
      </figure>
    </section>
  )
}

export default ImageCentreWithHeading
