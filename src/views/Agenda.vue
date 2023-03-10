<script setup>
import { useQuery } from "@vue/apollo-composable"
import gql from "graphql-tag"
import { computed, ref, watch } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const queryParams = ref({
  year: parseInt(route.params.year),
  week: parseInt(route.params.week),
})

watch(
  () => route.params,
  (params) => {
    queryParams.value = {
      year: parseInt(route.params.year),
      week: parseInt(route.params.week),
    }
  }
)

const { result } = useQuery(
  gql`
    query getWeek($year: Int, $week: Int) {
      week(promotion: 1, year: $year, number: $week) {
        number
        dateFrom
        dateTo
        days {
          date
          tasks {
            id
            type
            title
            content
            matter {
              id
              abbr
              name
            }
          }
        }
      }
    }
  `,
  queryParams
)

const week = computed(() => result.value?.data?.week)

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

/*const data = reactive({
  weeks: [
    {
      number: 9,
      dateFrom: new Date("2023-02-27"),
      dateTo: new Date("2023-03-03"),
      days: [
        {
          date: new Date("2023-02-27"),
          tasks: [
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
          tasks: [],
        },
        {
          date: new Date("2023-03-01"),
          tasks: [],
        },
        {
          date: new Date("2023-03-02"),
          tasks: [],
        },
        {
          date: new Date("2023-03-03"),
          tasks: [
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
          tasks: [],
        },
        {
          date: new Date("2023-03-05"),
          tasks: [],
        },
      ],
    },
  ],
})

const week = computed(() => data.weeks[0])*/

const types = ref({
  homework: { active: true, emoji: "🏠" },
  test: { active: true, emoji: "📝" },
  info: { active: true, emoji: "📢" },
  summary: { active: true, emoji: "📓" },
})
</script>

<template>
  <div class="flex flex-col flex-wrap gap-y-4 gap-x-32">
    <h1 class="text-2xl font-light border-b border-black">
      Semaine {{ route.params.week }}
      <span class="float-right">{{ route.params.year }}</span>
    </h1>
    <div>
      <div class="flex w-full gap-x-1">
        <h2 class="text-xs font-bold text-orange-700 uppercase">
          Communications
        </h2>
        <div class="flex-grow border-b border-orange-700"></div>
      </div>
      <div class="w-full border-b border-orange-700">&nbsp;</div>
      <div class="w-full border-b border-orange-700">&nbsp;</div>
    </div>
    <div class="flex-grow" v-for="(day, i) in result?.week?.days || []">
      <h2 class="px-1 text-white bg-orange-700">
        <span class="text-2xl font-light">{{
          new Date(day.date).getDate()
        }}</span>
        <span class="ml-2 font-light uppercase text-md">
          {{ days[new Date(day.date).getDay()] }}
        </span>
        <span
          class="float-right text-2xl font-light"
          v-if="i == 0 || new Date(day.date).getDate() == 1"
        >
          {{ months[new Date(day.date).getMonth()] }}
        </span>
      </h2>
      <ul>
        <li
          v-for="line in day.tasks"
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
            (new Date(day.date).getDay() ? 5 : 3) - day.tasks.length,
            0
          )"
          class="leading-relaxed border-b border-orange-700"
        >
          &nbsp;
        </li>
      </ul>
    </div>
  </div>
</template>
