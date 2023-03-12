import { GET_ME } from "@/api/queries"
import { useQuery } from "@vue/apollo-composable"
import { defineStore } from "pinia"
import { ref, watch } from "vue"

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("token"))
  const user = ref(null)

  watch(token, async (value) => {
    localStorage.setItem("token", value)
  })

  const { result, loading } = useQuery(GET_ME)

  watch(loading, async (value) => {
    if (!value && result.value.me) {
      user.value = result.value.me
    }
  })

  return { token, user }
})
