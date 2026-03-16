/**
 * ImageLeftTextRight — image on the left half, text on the right half.
 */
function ImageLeftTextRight({ src, alt = '', text = '', heading = '' }) {
  return (
    <section className="pd-img-left-text-right">
      <div className="pd-img-left-text-right-img">
        <img src={src} alt={alt} loading="lazy" />
      </div>
      <div className="pd-img-left-text-right-text">
        {heading && <h2 className="pd-section-heading">{heading}</h2>}
        {text.trim().split('\n\n').map((para, i) => (
          <p key={i} className={i === 0 ? 'pd-lead' : ''}>{para}</p>
        ))}
      </div>
    </section>
  )
}

export default ImageLeftTextRight
