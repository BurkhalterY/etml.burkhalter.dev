import { defineStore } from "pinia"
import { ref, shallowRef, watch } from "vue"

export const usePopupStore = defineStore("popup", () => {
  const component = shallowRef(null)
  const additionalData = ref(null)

  watch(component, async (value, oldValue) => {
    if (oldValue) additionalData.value = null
  })

  return { component, additionalData }
})
