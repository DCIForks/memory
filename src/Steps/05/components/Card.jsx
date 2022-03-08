const Card = ({ image, turned, turnCard }) => {
  const className = `card ${turned ? "face-up" : "face-down"}`

  if (!turned) {
    image = ""
  }

  return (
    <div
      className={className}
      onClick={turnCard}
    >
      {image}
    </div>
  )
}


export default Card