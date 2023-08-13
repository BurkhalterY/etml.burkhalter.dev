import { defineStore } from "pinia"
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"

export const usePageStore = defineStore("page", () => {
  const route = useRoute()
  const router = useRouter()

  const pageLeft = computed({
    get: () => {
      switch (route.name) {
        case "Cover":
          return 0
        case "Intro":
          return 2
        case "Schedule":
          return 4
        case "Agenda":
          return route.params.week >= 34
            ? (route.params.week - 34) * 2 + 6
            : route.params.week * 2 + 42
        case "WIP":
          return 96
        case "End":
          return 98
      }
    },
    set: (pageNumber) => {
      if (pageNumber % 2) pageNumber -= 1
      if (pageNumber <= 1) {
        router.push({
          name: "Cover",
          params: { promotion: route.params.promotion },
        })
        return
      }
      if (pageNumber >= 2 && pageNumber <= 3) {
        router.push({
          name: "Intro",
          params: { promotion: route.params.promotion },
        })
        return
      }
      if (pageNumber >= 4 && pageNumber <= 5) {
        router.push({
          name: "Schedule",
          params: {
            promotion: route.params.promotion,
          },
        })
        return
      }
      if (pageNumber >= 6 && pageNumber <= 43) {
        router.push({
          name: "Agenda",
          params: {
            promotion: route.params.promotion,
            week: (pageNumber - 6) / 2 + 34,
          },
        })
        return
      }
      if (pageNumber >= 44 && pageNumber <= 95) {
        router.push({
          name: "Agenda",
          params: {
            promotion: route.params.promotion,
            week: pageNumber / 2 - 21,
          },
        })
        return
      }
      if (pageNumber >= 96 && pageNumber <= 97) {
        router.push({
          name: "WIP",
          params: { promotion: route.params.promotion },
        })
        return
      }
      if (pageNumber >= 98) {
        router.push({
          name: "End",
          params: { promotion: route.params.promotion },
        })
        return
      }
    },
  })

  const pageRight = computed({
    get: () => pageLeft.value + 1,
    set: (pageNumber) => {
      pageLeft.value = pageNumber
    },
  })

  return { pageLeft, pageRight }
})
