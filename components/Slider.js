import React from "react"
import { BiRightArrowCircle, BiLeftArrowCircle} from "react-icons/bi"


function Slider(props) {

  const cards = props.arr
  const slideIndex = 1
  dispSlides(slideIndex)

  function prevSlide() {
    dispSlides
  }

  function dispSlides() {
    const singleCard = document.getElementsByClassName("single-card")
  }

  return(
    <div>
      {cards.map((card, i) => (
      <div className="slides-container" key={i}>
        <BiLeftArrowCircle style={{fontSize: "3em", color: "#3C91E6"}} onClick={prevSlide}/>
        <div className="single-card">
          <h4>Question:</h4>
          <p>{card.question}</p>
          <h4>Answer:</h4>
          <p>{card.answer}</p>
        </div>
        <BiRightArrowCircle style={{fontSize: "3em", color: "#3C91E6"}}/>
      </div>
      ))}
    </div>
  )
}


export default Slider