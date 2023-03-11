import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { useRoute, useRouter } from "vue-router"

export const usePageStore = defineStore("page", () => {
  const route = useRoute()
  const router = useRouter()

  const getWeekNumber = (d) => {
    /*
     * Source: http://www.merlyn.demon.co.uk/weekcalc.htm#WNR
     */
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
    const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7)
    return { year: d.getFullYear(), week: weekNo }
  }

  const now = ref(getWeekNumber(new Date()))

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
          return route.params.week >= 34
            ? (route.params.week - 34) * 2 + 6
            : route.params.week * 2 + 42
      }
    },
    set(pageNumber) {
      pageNumber = Math.min(pageNumber, 95)
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
              promotion: "mtu1e",
            },
          })
          break
        case pageNumber >= 6 && pageNumber <= 43:
          router.push({
            name: "Agenda",
            params: {
              promotion: "mtu1e",
              year: now.value.year - (now.value.week <= 26),
              week: (pageNumber - 6) / 2 + 34,
            },
          })
          break
        case pageNumber >= 44 && pageNumber <= 95:
          router.push({
            name: "Agenda",
            params: {
              promotion: "mtu1e",
              year: now.value.year - (now.value.week >= 34),
              week: pageNumber / 2 - 21,
            },
          })
          break
      }
    },
  })

  const pageRight = computed({
    get() {
      return pageLeft.value + 1
    },
    set(pageNumber) {
      pageLeft = pageNumber - 1
    },
  })

  return { pageLeft, pageRight, now }
})
