import React from 'react'

const QuoteBox = ({quote, color, pickJustOne}) => {
  
 const objColor = {
    color: color
  }

const buttonColor = {
  backgroundColor: color
}

  console.log(objColor)
  return (
    <div className='quoteBox' style={objColor}>
      
        <section > {quote.quote}</section> 
        <section > {quote.author}</section>
     
        <button className='button '  style={buttonColor} onClick={pickJustOne}>&gt;</button>
    </div>
    
  )
}

export default QuoteBox