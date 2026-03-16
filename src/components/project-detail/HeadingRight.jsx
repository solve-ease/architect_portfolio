/**
 * HeadingRight — a large editorial heading aligned to the right side.
 */
function HeadingRight({ heading = '', subtext = '' }) {
  return (
    <section className="pd-heading-right">
      <div className="pd-heading-right-inner">
        <h2 className="pd-heading-right-title">{heading}</h2>
        {subtext && <p className="pd-heading-right-sub">{subtext}</p>}
      </div>
    </section>
  )
}

export default HeadingRight
