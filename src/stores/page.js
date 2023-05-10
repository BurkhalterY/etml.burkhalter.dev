import { getWeekNumber } from "@/utils"
import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { useRoute, useRouter } from "vue-router"

export const usePageStore = defineStore("page", () => {
  const route = useRoute()
  const router = useRouter()

  const now = ref(getWeekNumber(new Date(Date.now() + 86400000))) // jump directly to the next week when it is the weekend

  const pageLeft = computed({
    get() {
      switch (route.name) {
        case "Cover":
          return 0
        case "Intro":
          return 2
        case "Schedule":
          return 4
        case "Agenda":
          return route.params.number >= 34
            ? (route.params.number - 34) * 2 + 6
            : route.params.number * 2 + 42
        case "Gradebook":
          return 96
        case "WIP":
          return 98
      }
    },
    set(pageNumber) {
      if (pageNumber % 2) pageNumber -= 1
      switch (true) {
        case pageNumber <= 1:
          router.push({ name: "Cover" })
          break
        case pageNumber >= 2 && pageNumber <= 3:
          router.push({ name: "Intro" })
          break
        case pageNumber >= 4 && pageNumber <= 5:
          router.push({
            name: "Schedule",
            params: {
              thread: "my",
            },
          })
          break
        case pageNumber >= 6 && pageNumber <= 43:
          router.push({
            name: "Agenda",
            params: {
              thread: "my",
              year: now.value.year - (now.value.number <= 26),
              number: (pageNumber - 6) / 2 + 34,
            },
          })
          break
        case pageNumber >= 44 && pageNumber <= 95:
          router.push({
            name: "Agenda",
            params: {
              thread: "my",
              year: now.value.year - (now.value.number >= 34),
              number: pageNumber / 2 - 21,
            },
          })
          break
        case pageNumber >= 96 && pageNumber <= 97:
          router.push({ name: "Gradebook" })
          break
        case pageNumber >= 98:
          router.push({ name: "WIP" })
          break
      }
    },
  })

  const pageRight = computed({
    get() {
      return pageLeft.value + 1
    },
    set(pageNumber) {
      pageLeft.value = pageNumber - 1
    },
  })

  return { pageLeft, pageRight, now }
})
