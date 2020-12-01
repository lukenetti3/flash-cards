import React from "react"
import { BiRightArrowCircle, BiLeftArrowCircle} from "react-icons/bi"
import Carousel from 'react-elastic-carousel'

function Slider(props) {

  const cards = props.arr
    
  return(
    <Carousel>
      {cards.map((card, i) => (
      <div className="slides-container" key={i}>
        <div className="single-card">
          <h4>Question:</h4>
          <p>{card.question}</p>
          <h4>Answer:</h4>
          <p>{card.answer}</p>
        </div>
      </div>
      ))}
    </Carousel>
  )
}


export default Slider