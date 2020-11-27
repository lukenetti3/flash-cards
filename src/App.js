import React, {useState, useEffect} from "react";
import "./style.css";
import { useQuery, useMutation, gql } from "@apollo/client"

const CARDS = gql`
  query MyQuery {
      cards {
        question
        answer
      }
    }
  `
const ADD_CARD = gql`
  mutation MyMutation($q: String, $a: String) {
  insert_cards_one(object: {question: $q, answer: $a }) {
    question
    answer
  }
}
`

export default function App() {
  const [values, setValues] = useState({question: "", answer: ""})
  const [cardList, setCardList] = useState([])
  const [insert_cards_one, {mutatedData}] = useMutation(ADD_CARD)

  const { loading, error, data } = useQuery(CARDS)
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

  function handleChange(event) {
    const {name, value} = event.target
    setValues(prevValue => ({...prevValue, [name]: value}))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setCardList(prevCard => [...prevCard, values])
    insert_cards_one({variables: { q: values.question, a: values.answer}})
    setValues({question: "", answer: ""})
  }

  const qas = data.cards.map(card => (
    <div>
      <p>Question: {card.question}</p>
      <p>Answer: {card.answer}</p>
    </div>
  ))

  // useEffect(() => {
  //   setCardList(data.cards)  
  // },[])

  return (
    <div>
      <h1>Welcome to Luke's flash cards</h1>
      <h3>Enter a new flashcard</h3>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Question" name="question" onChange={handleChange} value={values.question}/>
        <textarea placeholder="Answer" name="answer" onChange={handleChange} value={values.answer}/>
        <button type="submit">Submit</button>
      </form>
      { qas }
    </div>
  );
}
