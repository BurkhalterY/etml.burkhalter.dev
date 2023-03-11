import { defineStore } from "pinia"
import { ref, watch } from "vue"

export const useAuthStore = defineStore("auth", () => {
  const userId = ref()
  const email = ref()
  const firstName = ref()
  const lastName = ref()
  const token = ref(localStorage.getItem("token"))

  watch(token, async (value) => {
    localStorage.setItem("token", value)
  })

  return { userId, email, firstName, lastName, token }
})
