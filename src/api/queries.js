import gql from "graphql-tag"

export const GET_WEEK = gql`
  query getWeek($promotion: String!, $year: Int!, $week: Int!) {
    week(promotion: $promotion, year: $year, number: $week) {
      number
      dateFrom
      dateTo
      days {
        date
        tasks {
          id
          type
          title
          content
          matter {
            id
            abbr
            name
          }
        }
      }
    }
  }
`

export const GET_MATTERS = gql`
  query getMatters {
    matters {
      abbr
      name
    }
  }
`

export const GET_ME = gql`
  query getMe {
    me {
      id
      email
      firstName
      lastName
      admin
    }
  }
`
