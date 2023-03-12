import { defineStore } from "pinia"
import { ref, shallowRef, watch } from "vue"

export const usePopupStore = defineStore("popup", () => {
  const component = shallowRef(null)
  const additionalData = ref(null)

  watch(component, async (newValue, oldValue) => {
    if (oldValue && !newValue) additionalData.value = null
  })

  return { component, additionalData }
})
