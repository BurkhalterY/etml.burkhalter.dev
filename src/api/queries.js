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
          date
          promotion {
            code
          }
          type
          title
          content
          matter {
            id
            shortName
          }
        }
      }
    }
  }
`

export const GET_MATTERS = gql`
  query getMatters {
    matters {
      id
      name
    }
  }
`

export const GET_GRADEBOOK = gql`
  query getGradebook($promotion: String!) {
    gradebook(promotion: $promotion) {
      semesterAverage
      sub4Matters
      negativePoints
      success
      averages {
        value
        matter {
          id
          abbr
          name
        }
        grades {
          id
          value
          date
          test {
            id
            title
            content
          }
        }
      }
    }
    tests(promotion: $promotion) {
      id
      title
      content
      matter {
        id
        abbr
      }
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
