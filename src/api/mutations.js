import gql from "graphql-tag"

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        firstName
        lastName
        admin
        profiles {
          id
          promotion
          isPublic
        }
      }
    }
  }
`

export const REGISTER = gql`
  mutation register(
    $email: String!
    $password: String!
    $firstName: String
    $lastName: String
    $promotion: String
    $isPublic: Boolean
  ) {
    register(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      promotion: $promotion
      isPublic: $isPublic
    ) {
      token
      user {
        id
        email
        firstName
        lastName
        admin
        profiles {
          id
          promotion
          isPublic
        }
      }
    }
  }
`

export const MUTATE_TASK = gql`
  mutation mutateTask(
    $date: Date!
    $promotion: String!
    $type: String!
    $matterId: Int!
    $title: String!
    $content: String
    $id: Int
  ) {
    task(
      date: $date
      promotion: $promotion
      type: $type
      matterId: $matterId
      title: $title
      content: $content
      id: $id
    ) {
      id
      date
      promotion
      type
      title
      content
      matter {
        id
        shortName
      }
    }
  }
`

export const DELETE_TASK = gql`
  mutation deleteTask($id: Int!) {
    deleteTask(id: $id)
  }
`
