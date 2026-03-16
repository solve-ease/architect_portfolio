/**
 * HeadingLeft — a large editorial heading aligned to the left side.
 */
function HeadingLeft({ heading = '', subtext = '' }) {
  return (
    <section className="pd-heading-left">
      <div className="pd-heading-left-inner">
        <h2 className="pd-heading-left-title">{heading}</h2>
        {subtext && <p className="pd-heading-left-sub">{subtext}</p>}
      </div>
    </section>
  )
}

export default HeadingLeft
