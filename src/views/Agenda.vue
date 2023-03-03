<script setup>
import { computed, reactive, ref } from "vue"

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
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
]

const data = reactive({
  weeks: [
    {
      number: 9,
      dateFrom: new Date("2023-02-27"),
      dateTo: new Date("2023-03-03"),
      days: [
        {
          date: new Date("2023-02-27"),
          lines: [
            {
              matter: "Général",
              type: "info",
              content: "Cours en salle N322",
            },
            {
              matter: "Économie",
              type: "test",
              content: "Test N° 4",
            },
            {
              matter: "Français",
              type: "homework",
              content: "Candide, lire ch. 13-19",
            },
            {
              matter: "Anglais",
              type: "homework",
              content: "Unit 4, WB p. 24-25 + voc p. 16-17",
            },
          ],
        },
        {
          date: new Date("2023-02-28"),
          lines: [],
        },
        {
          date: new Date("2023-03-01"),
          lines: [],
        },
        {
          date: new Date("2023-03-02"),
          lines: [],
        },
        {
          date: new Date("2023-03-03"),
          lines: [
            {
              matter: "Général",
              type: "info",
              content: "Cours en salle N322",
            },
            {
              matter: "Économie",
              type: "test",
              content: "Test N° 4",
            },
            {
              matter: "Français",
              type: "homework",
              content: "Candide, lire ch. 13-19",
            },
            {
              matter: "Anglais",
              type: "homework",
              content: "Unit 4, WB p. 24-25 + voc p. 16-17",
            },
          ],
        },
        {
          date: new Date("2023-03-04"),
          lines: [],
        },
        {
          date: new Date("2023-03-05"),
          lines: [],
        },
      ],
    },
  ],
})

const pages = computed(() => {
  const leftPage = data.weeks[0].days.splice(0, 3)
  const rightPage = data.weeks[0].days.splice(-4)
  return [leftPage, rightPage]
})

const types = ref({
  homework: { active: true, emoji: "🏠" },
  test: { active: true, emoji: "📝" },
  info: { active: true, emoji: "📢" },
  summary: { active: true, emoji: "📓" },
})
</script>

<template>
  <div class="flex gap-x-24">
    <div v-for="page of pages" class="flex flex-col flex-grow">
      <h2 class="text-3xl font-light">Semaine {{ data.weeks[0].number }}</h2>
      <div v-for="(day, i) of page">
        <h3 class="bg-orange-700 text-white p-1">
          <span class="text-3xl font-light">{{ day.date.getDate() }}</span>
          <span class="text-lg font-light uppercase ml-2">
            {{ days[day.date.getDay()] }}
          </span>
          <span
            class="text-3xl font-light float-right"
            v-if="i == 0 || day.date.getDate() == 1"
          >
            {{ months[day.date.getMonth()] }}
          </span>
        </h3>
        <ul>
          <li
            v-for="line of day.lines"
            class="border-orange-700 border-b leading-loose"
          >
            <input type="checkbox" />
            {{ types[line.type].emoji }}
            {{ line.matter }} :
            {{ line.content }}
          </li>
          <li
            v-for="line of day.lines"
            class="border-orange-700 border-b leading-loose"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>
