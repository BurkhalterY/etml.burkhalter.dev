import { GET_ME } from "@/api/queries"
import { useLazyQuery } from "@vue/apollo-composable"
import { defineStore } from "pinia"
import { computed, ref, watch } from "vue"

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null)
  const logged = computed(() => !!user.value)
  const isAdmin = computed(() => user.value?.admin)

  const { load, result, loading, error } = useLazyQuery(GET_ME, null, {
    fetchPolicy: "network-only",
  })

  if (localStorage.hasOwnProperty("token")) load()

  const login = (token) => {
    localStorage.setItem("token", token)
    load()
  }

  watch(loading, async (value) => {
    if (!value && !error.value) user.value = result.value.me
  })

  return { login, user, logged, isAdmin }
})
