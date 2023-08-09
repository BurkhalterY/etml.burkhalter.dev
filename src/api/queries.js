import gql from "graphql-tag"

export const GET_WEEK = gql`
  query getWeek($promotion: String!, $year: Int!, $week: Int!) {
    week(promotion: $promotion, year: $year, number: $week) {
      number
      days {
        date
        tasks {
          id
          promotion
          date
          matter {
            abbr
            shortName
          }
          type
          title
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
      firstName
      lastName
      admin
    }
  }
`
