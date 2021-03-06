import React, {useState} from "react"
import Carousel from 'react-elastic-carousel'

function Slider(props) {
  const [toggleAnswer, setToggleAnswer] = useState(false)

  const cards = props.arr

  function showAnswer() {
    setToggleAnswer(!toggleAnswer)
  }
    
  return(
    <Carousel itemsToShow={1} className="carousel">
      {cards.map((card, i) => (
      <div className="slides-container" key={i} onClick={showAnswer}>
        <div className="single-card">
          {toggleAnswer ?
          <div className="answer">
            <h3>{card.answer}</h3>
          </div>
          :
          <div>
            <h3>{card.question}</h3>
          </div>
          }
        </div>
      </div>
      ))}
    </Carousel>
  )
}


export default Slider