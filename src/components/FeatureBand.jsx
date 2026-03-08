function FeatureBand({ title, text, image, reverse = false }) {
  return (
    <article className={`feature-band ${reverse ? 'reverse' : ''}`}>
      <div className="feature-media-wrap">
        <img src={image} alt={title} className="feature-media" />
      </div>
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  )
}

export default FeatureBand
