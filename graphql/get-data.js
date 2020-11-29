import { gql } from "@apollo/client"

export const CARDS = gql`
  query MyQuery {
      cards {
        question
        answer
        id
      }
    }
  `
export const ADD_CARD = gql`
  mutation MyMutation($q: String, $a: String) {
  insert_cards_one(object: {question: $q, answer: $a }) {
    question
    answer
  }
}
`
export const DELETE_CARDS = gql`
  mutation MyMutation {
    delete_cards(where: {}) {
      affected_rows
    }
  }
`