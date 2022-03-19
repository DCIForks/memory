

const Card = ({ image, turned, turnCard }) => {
  const className = `card ${turned ? "face-up" : "face-down"}`

  // Add a div.space to define the perspective of the 3D card
  // See styles.css for details on how the CSS perspective is styled.

  return (
    <div className="space">
      <div
        className={className}
        onClick={turnCard}
      >
        <div className="front">{image}</div>
        <div className="back"></div>
      </div>
    </div>
  )
}


export default Card