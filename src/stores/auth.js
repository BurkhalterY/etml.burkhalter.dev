import { GET_ME } from "@/api/queries"
import { useLazyQuery } from "@vue/apollo-composable"
import { defineStore } from "pinia"
import { ref, watch } from "vue"

export const useAuthStore = defineStore("auth", () => {
  const logged = ref(false)
  const admin = ref(false)

  const { load, result, loading, error } = useLazyQuery(GET_ME)

  if (localStorage.hasOwnProperty("token")) {
    load()
  }

  watch(loading, async (value) => {
    if (!value && !error.value) {
      logged.value = true
      admin.value = result.value.me.admin
    }
  })

  return { admin }
})
