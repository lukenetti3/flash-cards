import React, {useState} from "react";
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
  mutation MyMutation {
    insert_cards_one {
    question
    answer
    id
  }
}
`

export default function App() {
  const [values, setValues] = useState({question: "", answer: ""})
  const [addCard, {mutatedData}] = useMutation(ADD_CARD)


  function handleChange(event) {
    const {name, value} = event.target
    setValues(prevValue => ({...prevValue, [name]: value}))
  }

  function handleSubmit(event) {
    event.preventDefault()
    addCard({variables: {question: values.question, answer: values.answer}})
    values.question = ""
    values.answer = ""
    console.log(data.cards)
  }


  const { loading, error, data } = useQuery(CARDS)
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Welcome to Luke's flash cards</h1>
      <h3>Enter a new flashcard</h3>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Question" name="question" onChange={handleChange} value={values.question}/>
        <textarea placeholder="Answer" name="answer" onChange={handleChange} value={values.answer}/>
        <button type="submit">Submit</button>
      </form>
        {data.cards.map(card => (
          <div>
            <p>Question: {card.question}</p>
            <p>Answer: {card.answer}</p>
          </div>
        ))}
    </div>
  );
}
