import gql from "graphql-tag"

export const GET_WEEK = gql`
  query getWeek(
    $threads: [String!]
    $includeSelf: Boolean
    $year: Int!
    $number: Int!
  ) {
    week(
      threads: $threads
      includeSelf: $includeSelf
      year: $year
      number: $number
    ) {
      number
      days {
        date
        tasks {
          id
          thread {
            id
            code
          }
          date
          matter {
            id
            shortName
          }
          type
          title
        }
      }
    }
  }
`

export const GET_MATTERS_AND_THREADS = gql`
  query getMatters {
    matters {
      id
      name
    }
    threads {
      id
      code
    }
  }
`

/*export const GET_GRADEBOOK = gql`
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
`*/

export const GET_ME = gql`
  query getMe {
    me {
      id
      firstName
      lastName
      admin
      isPublic
    }
  }
`
