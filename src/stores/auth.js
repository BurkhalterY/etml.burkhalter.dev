import { GET_ME } from "@/api/queries"
import { useLazyQuery } from "@vue/apollo-composable"
import { defineStore } from "pinia"
import { ref, watch } from "vue"

export const useAuthStore = defineStore("auth", () => {
  const admin = ref(false)

  const { load, result, loading, error } = useLazyQuery(GET_ME)

  if (localStorage.hasOwnProperty("token")) {
    load()
  }

  watch(loading, async (value) => {
    if (!value && !error.value) {
      admin.value = result.value.me.admin
    }
  })

  return { admin }
})
