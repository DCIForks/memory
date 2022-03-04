const Card = ({ image, turned }) => {
  const className = `card ${turned ? "face-up" : "face-down"}`

  if (!turned) {
    image = ""
  }

  return (
    <div className={className}>
      {image}
    </div>
  )
}


export default Card