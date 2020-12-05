import React from "react"
import { BiRightArrowCircle, BiLeftArrowCircle} from "react-icons/bi"
import Carousel from 'react-elastic-carousel'

function Slider(props) {

  const cards = props.arr
    
  return(
    <Carousel itemsToShow={1} className="carousel">
      {cards.map((card, i) => (
      <div className="slides-container" key={i}>
        <div className="single-card">
          <h2>Question:</h2>
          <p>{card.question}</p>
          <h2>Answer:</h2>
          <p>{card.answer}</p>
        </div>
      </div>
      ))}
    </Carousel>
  )
}


export default Slider