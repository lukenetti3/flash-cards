import React from "react"

function Slider(props) {
  
  return(
    
    <div className="mySlides">
      <div className="singleCard">
        <p>{props.question}</p>
        <p>{props.answer}</p>
        {console.log(props.length)}
        <p style={{textAlign: "center"}}>{props.length}</p>
      </div>
      <div>
        <p>{props.currLength}/{props.total}</p>
      </div>
    </div>

  )
}


export default Slider