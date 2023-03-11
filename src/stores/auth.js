import { useQuery } from "@vue/apollo-composable"
import gql from "graphql-tag"
import { defineStore } from "pinia"
import { ref, watch } from "vue"

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("token"))
  const user = ref(null)

  watch(token, async (value) => {
    localStorage.setItem("token", value)
  })

  const { result, loading } = useQuery(
    gql`
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
  )

  watch(loading, async (value) => {
    if (!value && result.value.me) {
      const { id, email, firstName, lastName, admin } = result.value.me
      user.value = { id, email, firstName, lastName, admin }
    }
  })

  return { token, user }
})
