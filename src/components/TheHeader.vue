<script setup>
import { computed, ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

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

const previous = computed(() => {
  switch (route.name) {
    case "Cover":
      return
    case "Intro":
      return { name: "Cover" }
    case "Agenda":
      if (route.params.week == 34) return { name: "Intro" }
      return {
        name: "Agenda",
        params: {
          code: "mtu1e",
          year: route.params.year - (route.params.week == 1),
          week: route.params.week - 1 || 52,
        },
      }
  }
})

const next = computed(() => {
  switch (route.name) {
    case "Cover":
      return { name: "Intro" }
    case "Intro":
      return {
        name: "Agenda",
        params: {
          code: "mtu1e",
          year: now.value.year - (now.value.week <= 34),
          week: 34,
        },
      }
    case "Agenda":
      if (route.params.week == 26) return
      return {
        name: "Agenda",
        params: {
          code: "mtu1e",
          year: parseInt(route.params.year) + (route.params.week == 52),
          week: (route.params.week % 52) + 1,
        },
      }
  }
})
</script>

<template>
  <div
    class="fixed top-0 left-0 z-10 flex justify-between w-full p-1 text-white bg-etml"
  >
    <span>etml.burkhalter.dev</span>
    <nav class="flex gap-2 px-1 border-x">
      <router-link :to="{ ...previous }">Previous</router-link>
      <router-link :to="{ name: 'Cover' }">Cover</router-link>
      <router-link :to="{ name: 'Intro' }">Intro</router-link>
      <router-link
        :to="{
          name: 'Agenda',
          params: {
            code: 'mtu1e',
            year: now.year,
            week: now.week,
          },
        }"
      >
        Agenda
      </router-link>
      <router-link :to="{ ...next }">Next</router-link>
    </nav>
    <span>&copy; Burkhalter Yannis</span>
  </div>
</template>
