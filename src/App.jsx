import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './utils/colors'

function App() {
 
// First we create a function to take a random number
  const randomNumber = (quotes) => {
     const  random = Math.floor(Math.random()*quotes.length)
         return quotes[random]
  }
 
  //Once created the random number, we'll use the function to create two new variables
  //quoteRandom will handle the quotes of the JSON to pick a random quote
 let quoteRandom = randomNumber(quotes)
 //colorRandom will handle a random index from the util "colors" to pick a random color 
 let colorRandom = randomNumber(colors)
 


//Then we create two useStates, one per each color and quote, using the variables we defined before 
//to set our app in a random color and quote each time we reload.
  const [number, setNumber] = useState(quoteRandom)
  const [color, setColor] = useState(colorRandom)

//getRandomAll will change the status of our variables to pick random parameters
  const getRandomAll = () =>{
    quoteRandom = randomNumber(quotes)
    colorRandom = randomNumber(colors)


    setNumber(quoteRandom)
    setColor(colorRandom)
 
  }
// objStyle will handle in a random way our backgroun color of our body 
  let objStyle= {
    backgroundColor: color, 
  }

  


  return (
  //once we have our random color from the background we use it as an style from the app
    <div className="App" style={objStyle}>
   {/* we also use our functions number,  color and randomAll to set props of our component */}
     <QuoteBox quote={number}  color={color} pickJustOne={getRandomAll}/> 
    
     
    </div>
  )
}

export default App
