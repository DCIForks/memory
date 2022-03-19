import { useState, useEffect } from 'react'
import Card from './components/Card'
import { getLayout } from '../../tools/utilities'



function App() {
  const images = [ "🍒", "🍎", "🍏", "🍐", "🍑", "🍓", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍅", "🍆", "🍒", "🍎", "🍏", "🍐", "🍑", "🍓", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍅", "🍆" ]

  const faceDown = [...images].fill(false)
  const [ turned, setTurned ] = useState(faceDown)
  const [ layout, setLayout ] = useState(getLayout(images.length))
  const { columns, rows, side } = layout

  document.documentElement.style.setProperty("--card-size", side + "px")

  // Update the layout if the viewport is resized
  useEffect(() => {
    const windowResize = () => {
      const temp = getLayout(images.length)
      if (temp.side !== layout.side || temp.rows !== layout.rows) {
        setLayout(temp)
      }
    }

    window.addEventListener("resize", windowResize, false)

    return (() => {
      window.removeEventListener("resize", windowResize, false)
    })
  })
  

  const turnCard = (index) => {    
    turned[index] = !turned[index]
    setTurned([...turned])
  }


  const createCardLayout = () => {
    const layout = []

    for ( let row = 0; row < rows; row += 1 ) {
      const rowArray = []

      for ( let column = 0; column < columns; column += 1 ) {
        const index = row * columns + column
        const image = images[index]

        if (image) { // There might be empty spaces in last row
          const card = (
            <Card
              key={image+index}
              image={image}
              turned={turned[index]}
              turnCard={() => turnCard(index)}
            />
          )
          rowArray.push(card)
        }
      }
      const key = `row_${row}`      

      layout.push(
        <div
          key={key}
        >
          {rowArray}
        </div>
      )
    }

    return <>{layout}</>
  }

 
  const cards = createCardLayout()  


  return (
    <>
      {cards}
    </>
  );
}



export default App;
