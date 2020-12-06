import React, {useState, useEffect} from "react";
import "./style.css";
import { useQuery, useMutation } from "@apollo/client"
import { CARDS, ADD_CARD, DELETE_CARDS } from "./graphql/get-data.js"
import Slider from "./components/Slider"

export default function App() {
  const { loading, error, data } = useQuery(CARDS)
  const [values, setValues] = useState({question: "", answer: ""})
  const [insert_cards_one] = useMutation(ADD_CARD)
  const [deleteAllCards, {deleteData}] = useMutation(DELETE_CARDS)
  const [cards, setCards] = useState([])

   useEffect(() => {
     if(loading === false && data) {
       setCards(data.cards)
     }
   },[loading, data, deleteData])
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>; 

  function handleChange(event) {
    const {name, value} = event.target
    setValues(prevValue => ({...prevValue, [name]: value}))
  }

  function handleSubmit(event) {
    event.preventDefault()
    insert_cards_one({variables: { q: values.question, a: values.answer}})
    setCards(prevCard => [...prevCard, values])
    setValues({question: "", answer: ""}) 
  }

  function deleteCards() {
    deleteAllCards()
    setCards([])
  }

  return (
    <div>
      <div className="header">
        <div>
          <h1 style={{color: "#0A2A4A"}}>Welcome to Luke's flash cards</h1>
          <form onSubmit={handleSubmit}>
            <label>Question</label>
            <br />
            <textarea rows="5" name="question" onChange={handleChange} value={values.question}/>
            <br />
            <label>Answer</label>
            <br /> 
            <input rows="2" name="answer" onChange={handleChange} value={values.answer}/>
            <div style={{display: "flex"}}>
              <button className="btn" type="submit">Create</button>
              <p id="note">*Click card to show answer</p>
            </div>
          </form>
          <button className="btn" id="clearBtn" onClick={deleteCards}>Clear all cards</button>
        </div>
      </div>
      {cards == "" ? <h3 style={{textAlign: "center"}}>No cards available. Create a new card!</h3> : <Slider arr={cards} />}
    </div>
  );
}
