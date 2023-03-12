<script setup>
import { GET_WEEK } from "@/api/queries"
import TaskForm from "@/components/TaskForm.vue"
import { useAuthStore } from "@/stores/auth"
import { usePopupStore } from "@/stores/popup"
import { useQuery } from "@vue/apollo-composable"
import { ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const authStore = useAuthStore()
const popupStore = usePopupStore()

const { result } = useQuery(GET_WEEK, () => {
  return {
    promotion: route.params.promotion,
    year: parseInt(route.params.year),
    week: parseInt(route.params.week),
  }
})

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
  homework: { active: true, emoji: "" },
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
    <div
      class="w-1/2 pr-16"
      v-for="(day, i) in result?.week?.days?.map((day) => {
        return { ...day, strDate: day.date, date: new Date(day.date) }
      }) || []"
    >
      <h2 class="px-1 text-white bg-orange-700">
        <span class="text-2xl font-light">
          {{ day.date.getDate() }}
        </span>
        <span class="ml-2 font-light uppercase text-md">
          {{ days[day.date.getDay()] }}
        </span>
        <span
          class="float-right text-2xl font-light"
          v-if="i == 0 || day.date.getDate() == 1"
        >
          {{ months[day.date.getMonth()] }}
        </span>
      </h2>
      <ul>
        <li
          v-for="line in day.tasks.slice(0, day.date.getDay() ? 4 : 2)"
          class="leading-relaxed truncate border-b border-orange-700"
        >
          <div
            class="inline-block w-4 h-4 border border-orange-700 cursor-pointer align-sub"
          />
          {{ types[line.type].emoji }}
          {{ line.matter.name }} :
          {{ line.title }}
        </li>
        <li class="leading-relaxed border-b border-orange-700">
          <span v-if="day.tasks.length > (day.date.getDay() ? 4 : 2)">
            + {{ day.tasks.length - (day.date.getDay() ? 4 : 2) }}
            {{
              day.tasks.length - (day.date.getDay() ? 4 : 2) >= 2
                ? "autres éléments"
                : "autre élément"
            }}
            <button
              @click=""
              class="mx-0.5 px-0.5 rounded text-sm text-white bg-gray-600"
            >
              Voir
            </button>
          </span>
          <button
            v-if="authStore.user"
            @click="
              ;[
                (popupStore.component = TaskForm),
                (popupStore.additionalData = { date: day.strDate, day: i }),
              ]
            "
            class="mx-0.5 px-0.5 rounded text-sm text-white bg-etml"
          >
            Ajouter
          </button>
          &nbsp;
        </li>
        <li
          v-for="i in Math.max(
            (day.date.getDay() ? 4 : 2) - day.tasks.length,
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
