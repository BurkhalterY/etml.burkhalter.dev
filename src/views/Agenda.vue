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

const week = computed(() => data.weeks[0])

const types = ref({
  homework: { active: true, emoji: "🏠" },
  test: { active: true, emoji: "📝" },
  info: { active: true, emoji: "📢" },
  summary: { active: true, emoji: "📓" },
})
</script>

<template>
  <div style="height: 750px">
    <div class="flex flex-col flex-wrap h-full gap-y-4 gap-x-32">
      <h2 class="text-3xl font-light border-b border-black">
        Semaine {{ week.number }}
        <span class="float-right">{{ week.dateFrom.getFullYear() }}</span>
      </h2>
      <div>
        <div class="flex w-full gap-x-1">
          <h3 class="text-sm font-bold text-orange-700 uppercase">
            Communications
          </h3>
          <div class="flex-grow border-b border-orange-700"></div>
        </div>
        <div class="w-full border-b border-orange-700">&nbsp;</div>
        <div class="w-full border-b border-orange-700">&nbsp;</div>
      </div>
      <div v-for="(day, i) in week.days">
        <h3 class="p-1 text-white bg-orange-700">
          <span class="text-3xl font-light">{{ day.date.getDate() }}</span>
          <span class="ml-2 text-lg font-light uppercase">
            {{ days[day.date.getDay()] }}
          </span>
          <span
            class="float-right text-3xl font-light"
            v-if="i == 0 || day.date.getDate() == 1"
          >
            {{ months[day.date.getMonth()] }}
          </span>
        </h3>
        <ul>
          <li
            v-for="line in day.lines"
            class="leading-relaxed border-b border-orange-700"
          >
            <div
              class="inline-block w-4 h-4 border border-orange-700 cursor-pointer align-sub"
            />
            {{ types[line.type].emoji }}
            {{ line.matter }} :
            {{ line.content }}
          </li>
          <li
            v-for="i in Math.max(
              (day.date.getDay() ? 5 : 3) - day.lines.length,
              0
            )"
            class="leading-relaxed border-b border-orange-700"
          >
            &nbsp;
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
