import React from "react"
import { BiRightArrowCircle, BiLeftArrowCircle} from "react-icons/bi"

function prevSlide() {
  
  const singleCard = document.querySelector(".single-card")
  singleCard.classList.add("testing")

}


function FlashSlider(props) {

  return(
      <div className="slides-container">
        <BiLeftArrowCircle style={{fontSize: "3em", color: "#3C91E6"}} onClick={prevSlide}/>
        <div className="single-card">
          <h4>Question:</h4>
          <p>{props.question}</p>
          <h4>Answer:</h4>
          <p>{props.answer}</p>
          {console.log(props.length)}
          <p style={{textAlign: "center"}}>{props.currLength}/{props.total}</p>
        </div>
        <BiRightArrowCircle style={{fontSize: "3em", color: "#3C91E6"}}/>
      </div>
  )
}


export default FlashSlider