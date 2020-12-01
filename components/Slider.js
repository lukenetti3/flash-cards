import React from "react"
import { BiRightArrowCircle, BiLeftArrowCircle} from "react-icons/bi"
import { Slide } from 'react-slideshow-image'

function Slider(props) {

  const cards = props.arr
    
  return(
    <div>
    <div>
      {cards.map((card, i) => (
      <div className="slides-container" key={i}>
        <BiLeftArrowCircle style={{fontSize: "3em", color: "#3C91E6"}} onClick={() => nextSlide(-1)}/>
        <div className="single-card">
          <h4>Question:</h4>
          <p>{card.question}</p>
          <h4>Answer:</h4>
          <p>{card.answer}</p>
        </div>
        <BiRightArrowCircle style={{fontSize: "3em", color: "#3C91E6"}} onClick={() => nextSlide(1)}/>
      </div>
      ))}
    </div>

    <Slide easing="ease">
          <div className="each-slide">
            <div style={{backgroundColor: "blue"}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundColor: "red"}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundColor: "green"}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
        </div>
  )
}


export default Slider