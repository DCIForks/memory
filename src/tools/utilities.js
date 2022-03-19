const getLayout = (cardCount, width, height) => {
  if (!width || !height) {
    ({ width, height } = document.body.getBoundingClientRect())
  }

  let side = 0
  let columns
  let rows
  let layout
  
  const shortSide = Math.min(width, height)
  const longSide = Math.max(width, height)

  // Create an array of potential row x column layouts
  const layouts = []
  const maxCardsOnShortSide = Math.floor(Math.sqrt(cardCount))
  
  for ( let ii = 1; ii <= maxCardsOnShortSide; ii += 1 ) {
    const longSideCount = Math.ceil(cardCount / ii)
    layouts.push([ii, longSideCount])
  }
  
  // Find the layout that gives the longest sides
  layouts.forEach( sides => {
    const [ short, long ] = sides
    const maxEdge = Math.min( shortSide / short, longSide / long )
    if (side <= maxEdge) {
      // Prefer a squarer layout to long and thin, for equal sides
      side = maxEdge
      layout = sides
    }
  })

  // Set the rows and columns to match the width and height
  if (width < height) {
    ([ columns, rows ] = layout)
  } else {
    ([ rows, columns ] = layout)
  }
  
  return {
    columns,
    rows,
    side
  }
}


export { getLayout }

// module.exports = { getLayout }