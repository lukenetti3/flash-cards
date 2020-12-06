import React, {useState} from "react"
import Carousel from 'react-elastic-carousel'
import {useSpring, animated} from 'react-spring'

function Slider(props) {
  const [toggleAnswer, setToggleAnswer] = useState(false)

  const cards = props.arr

  function showAnswer() {
    setToggleAnswer(!toggleAnswer)
  }

  const animateProps = useSpring({opacity: 1, from: {opacity: 0}})
    
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