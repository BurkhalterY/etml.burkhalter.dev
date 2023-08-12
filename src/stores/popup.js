import { defineStore } from "pinia"
import { ref, shallowRef, watch } from "vue"
import { useRouter } from "vue-router"

export const usePopupStore = defineStore("popup", () => {
  const component = shallowRef(null)
  const additionalData = ref(null)

  const router = useRouter()

  watch(component, async (newValue, oldValue) => {
    if (oldValue && !newValue) additionalData.value = null
  })

  router.beforeEach((to, from) => {
    if (component.value) {
      component.value = null
      return false
    }
  })

  return { component, additionalData }
})
