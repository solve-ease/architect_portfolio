/**
 * KeyInfo — horizontal metadata strip
 * Shows project title, type, location, year, status, area in labeled columns.
 */
function KeyInfo({ items = [] }) {
  return (
    <section className="pd-keyinfo">
      {items.map((item, i) => (
        <div key={i} className="pd-keyinfo-item">
          <span className="pd-keyinfo-label">{item.label}</span>
          <span className="pd-keyinfo-value">{item.value}</span>
        </div>
      ))}
    </section>
  )
}

export default KeyInfo
