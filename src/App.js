import React, {useState, useEffect} from "react";
import "./style.css";
import { useQuery, useMutation } from "@apollo/client"
import { CARDS, ADD_CARD, DELETE_CARDS } from "../graphql/get-data.js"
import Slider from "../components/Slider"


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
      <h1>Welcome to Luke's flash cards</h1>
      <h3>New flashcard</h3>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Question" name="question" onChange={handleChange} value={values.question}/>
        <textarea placeholder="Answer" name="answer" onChange={handleChange} value={values.answer}/>
        <button type="submit">Submit</button>
      </form>
      <button onClick={deleteCards}>Clear all cards</button>
      <Slider arr={cards}/>
    </div>
  );
}
