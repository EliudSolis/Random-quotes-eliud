import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './utils/colors'

function App() {
 
  const randomNumber = (quotes) => {
     const  random = Math.floor(Math.random()*quotes.length)
         return quotes[random]
  }
 
 let quoteRandom = randomNumber(quotes)
 let colorRandom = randomNumber(colors)
 



  const [number, setNumber] = useState(quoteRandom)
  const [color, setColor] = useState(colorRandom)


  const getRandomAll = () =>{
    quoteRandom = randomNumber(quotes)
    colorRandom = randomNumber(colors)


    setNumber(quoteRandom)
    setColor(colorRandom)
 
  }

  let objStyle= {
    backgroundColor: color, 
  }

  


  return (
    <div className="App" style={objStyle}>
    
     <QuoteBox quote={number}  color={color} pickJustOne={getRandomAll}/> 
    
     
    </div>
  )
}

export default App
