<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const years = ref([])

const now = ref(new Date(Date.now() + 86400000))
const currentDate = ref(
  new Date(route.params.year, route.params.month, route.params.day)
)

const nextWeek = () => {
  const date = new Date(currentDate.value)
  date.setDate(date.getDate() + 7)
  return date
}

const lastWeek = () => {
  const date = new Date(currentDate.value)
  date.setDate(date.getDate() - 7)
  return date
}

const dateToParams = (date) => ({
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
})

for (let y = now.value.getFullYear(); y >= 2020; y--) {
  years.value.push(y)
}
</script>

<template>
  <div
    class="fixed top-0 left-0 z-10 flex justify-between w-full h-8 p-1 text-white bg-etml"
  >
    <span class="hidden xl:inline">etml.burkhalter.dev</span>
    <nav class="flex flex-wrap justify-center text-2xl sm:text-base">
      <select class="px-2 border-r text-etml">
        <option v-for="y in years" :value="y">{{ y }} - {{ y + 1 }}</option>
      </select>
      <div class="flex gap-2 px-2 border-x">
        <router-link
          :to="{
            name: 'Agenda',
            params: {
              ...dateToParams(nextWeek()),
              thread: 'my',
            },
          }"
          @click="addDays(7)"
          class="cursor-pointer select-none"
        >
          🡄
        </router-link>
        <router-link
          :to="{
            name: 'Agenda',
            params: {
              ...dateToParams(lastWeek()),
              thread: 'my',
            },
          }"
          @click="addDays(-7)"
          class="cursor-pointer select-none"
        >
          🡆
        </router-link>
      </div>
      <router-link
        :to="{
          name: 'Agenda',
          params: {
            ...dateToParams(now),
            thread: 'my',
          },
        }"
        class="px-2 border-r"
      >
        Aujourd'hui
      </router-link>
    </nav>
    <span class="hidden xl:inline">&copy; Burkhalter Yannis</span>
  </div>
</template>
