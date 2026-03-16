/**
 * TextRight — blank left half, text content on the right half.
 */
function TextRight({ text = '', heading = '' }) {
  return (
    <section className="pd-text-right">
      <div className="pd-text-right-space" />
      <div className="pd-text-right-content">
        {heading && <h2 className="pd-text-right-heading">{heading}</h2>}
        {text.trim().split('\n\n').map((para, i) => (
          <p key={i} className={i === 0 ? 'pd-lead' : ''}>{para}</p>
        ))}
      </div>
    </section>
  )
}

export default TextRight
