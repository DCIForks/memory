import { useState } from 'react'
import Card from './components/Card'



function App() {
  const images = [ "🍒", "🍒" ]
  const faceDown = [...images].fill(false)
  const [ turned, setTurned ] = useState(faceDown)  


  const turnCard = (index) => {    
    turned[index] = !turned[index]
    setTurned([...turned])
  }


  const cards = images.map(( image, index ) => (
    <Card
      key={image+index}
      image={image}
      turned={turned[index]}
      turnCard={() => turnCard(index)}
    />
  ))


  return (
    <>
      {cards}
    </>
  );
}



export default App;
