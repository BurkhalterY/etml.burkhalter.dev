<script setup>
import { dates } from "@/data/agenda.json"
import { ref } from "vue"

const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
]
const months = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
]

const types = ref({
  homework: { active: true, emoji: "🏠" },
  test: { active: true, emoji: "📝" },
  info: { active: true, emoji: "📢" },
  summary: { active: true, emoji: "📓" },
})

/*onMounted(() => {
  scrollToElement()
})*/

const formatDate = (str) => {
  const date = new Date(str)
  return `${days[date.getDay()]} ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`
}
</script>

<template>
  <div>
    <div class="flex justify-end gap-1 my-1">
      <button
        class="p-1 text-white border rounded-md border-etml bg-etml"
        :class="{ 'bg-transparent text-etml ': !types.homework.active }"
        @click="types.homework.active = !types.homework.active"
      >
        Devoirs
      </button>
      <button
        class="p-1 text-white border rounded-md border-etml bg-etml"
        :class="{ 'bg-transparent text-etml ': !types.test.active }"
        @click="types.test.active = !types.test.active"
      >
        Tests
      </button>
      <button
        class="p-1 text-white border rounded-md border-etml bg-etml"
        :class="{ 'bg-transparent text-etml ': !types.summary.active }"
        @click="types.summary.active = !types.summary.active"
      >
        Résumés des cours
      </button>
      <button
        class="p-1 text-white border rounded-md border-etml bg-etml"
        :class="{ 'bg-transparent text-etml ': !types.info.active }"
        @click="types.info.active = !types.info.active"
      >
        Informations
      </button>
    </div>
    <div v-for="date of dates" class="p-2 my-2 border rounded-sm">
      <h2 :id="date.date" class="text-2xl">{{ formatDate(date.date) }}</h2>
      <template v-for="line of date.lines">
        <span v-if="types[line.type].active">
          {{ types[line.type].emoji }}
          {{ line.matter }} : {{ line.content }}<br />
        </span>
      </template>
    </div>
  </div>
</template>
