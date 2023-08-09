import gql from "graphql-tag"

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

export const REGISTER = gql`
  mutation register(
    $email: String!
    $password: String!
    $firstName: String
    $lastName: String
  ) {
    register(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
    }
  }
`

export const MUTATE_TASK = gql`
  mutation mutateTask(
    $date: Date!
    $promotion: String!
    $matter: String!
    $type: String!
    $title: String!
    $id: Int
  ) {
    task(
      date: $date
      promotion: $promotion
      matter: $matter
      type: $type
      title: $title
      id: $id
    ) {
      id
      date
      promotion
      matter {
        abbr
        shortName
      }
      type
      title
    }
  }
`
export const DELETE_TASK = gql`
  mutation deleteTask($id: Int!) {
    deleteTask(id: $id)
  }
`
