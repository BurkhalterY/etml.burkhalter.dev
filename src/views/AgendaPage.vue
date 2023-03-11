<script setup>
import { useQuery } from "@vue/apollo-composable"
import gql from "graphql-tag"
import { ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const { result } = useQuery(
  gql`
    query getWeek($promotion: String!, $year: Int!, $week: Int!) {
      week(promotion: $promotion, year: $year, number: $week) {
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
  () => {
    return {
      promotion: route.params.promotion,
      year: parseInt(route.params.year),
      week: parseInt(route.params.week),
    }
  }
)

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
const types = ref({
  homework: { active: true, emoji: "🏠" },
  test: { active: true, emoji: "📝" },
  info: { active: true, emoji: "📢" },
  summary: { active: true, emoji: "📓" },
})
</script>

<template>
  <div class="flex flex-col flex-wrap gap-y-4 gap-x-16">
    <div class="w-1/2 pr-16">
      <h1 class="text-2xl font-light border-b border-black">
        Semaine {{ route.params.week }}
        <span class="float-right">{{ route.params.year }}</span>
      </h1>
      <div class="w-full border-b border-orange-700">
        <h2 class="inline font-bold text-orange-700 uppercase text-2xs">
          Communications
        </h2>
      </div>
      <div class="w-full border-b border-orange-700">&nbsp;</div>
      <div class="w-full border-b border-orange-700">&nbsp;</div>
    </div>
    <div class="w-1/2 pr-16" v-for="(day, i) in result?.week?.days || []">
      <h2 class="px-1 text-white bg-orange-700">
        <span class="text-2xl font-light">
          {{ new Date(day.date).getDate() }}
        </span>
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
