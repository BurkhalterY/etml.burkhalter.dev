<script setup>
import { GET_WEEK } from "@/api/queries"
import DayPopup from "@/components/DayPopup.vue"
import TaskForm from "@/components/TaskForm.vue"
import { useAuthStore } from "@/stores/auth"
import { usePopupStore } from "@/stores/popup"
import { days, getYear, months, tasksSorter, types } from "@/utils"
import { useQuery } from "@vue/apollo-composable"
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const popupStore = usePopupStore()

const online = computed(() => navigator.onLine)

const week = computed(() => {
  const w = parseInt(route.params.week)
  if (w > 26 && w < 34)
    router.push({ name: route.name, params: { ...route.params, week: 34 } })
  return w
})
const year = computed(() => getYear(route.params.promotion, week.value))

const { result, error } = useQuery(
  GET_WEEK,
  () => ({
    promotion: route.params.promotion,
    year: year.value,
    week: week.value,
  }),
  {
    fetchPolicy: "cache-and-network",
  }
)

const LINES_PER_DAY = 5
const LINES_ON_SUNDAY = 3
</script>

<template>
  <div class="flex flex-col flex-wrap gap-y-4 gap-x-16">
    <div class="w-full xl:w-1/2 xl:pr-16">
      <h1 class="text-2xl font-light border-b border-black">
        Semaine {{ week }}
        <span class="float-right">{{ year }}</span>
      </h1>
      <div class="w-full border-b border-orange-700">
        <h2 class="inline font-black text-orange-700 uppercase text-2xs">
          Communications
        </h2>
      </div>
      <div class="w-full border-b border-orange-700">
        <template v-if="!online">
          <transition appear>
            <div class="text-center text-red-500 transition-opacity">
              Aucune connexion Internet.
            </div>
          </transition>
        </template>
        <template v-else-if="error">
          <transition appear>
            <div class="text-center text-red-500 transition-opacity">
              Une erreur est survenue
            </div>
          </transition>
        </template>
        <template v-else>&nbsp;</template>
      </div>
      <div class="w-full border-b border-orange-700">
        <template v-if="!online">
          <transition appear>
            <div class="text-center text-red-500 transition-opacity">
              Les données affichées peuvent ne pas être à jour.
            </div>
          </transition>
        </template>
        <template v-else>&nbsp;</template>
      </div>
    </div>
    <div
      v-for="(day, i) in result?.week?.days?.map((day) => ({
        ...day,
        strDate: day.date,
        date: new Date(day.date),
      })) || []"
      :key="i"
      class="w-full xl:w-1/2 xl:pr-16"
    >
      <transition appear>
        <div class="transition-opacity">
          <h2
            @click="
              day.tasks.length
                ? [
                    (popupStore.component = DayPopup),
                    (popupStore.additionalData = { day }),
                  ]
                : []
            "
            class="px-1 text-white bg-orange-700"
            :class="{ 'cursor-pointer': day.tasks.length }"
          >
            <span class="text-2xl font-light">
              {{ day.date.getDate() }}
            </span>
            <span class="ml-2 font-light uppercase text-md">
              {{ days[day.date.getDay()] }}
            </span>
            <span
              v-if="i == 0 || day.date.getDate() == 1"
              class="float-right text-2xl font-light"
            >
              {{ months[day.date.getMonth()] }}
            </span>
          </h2>
          <ul>
            <li
              v-for="task in [...day.tasks]
                .sort(tasksSorter)
                .slice(
                  0,
                  (day.date.getDay() ? LINES_PER_DAY : LINES_ON_SUNDAY) - 1
                )"
              :key="task.id"
              class="relative leading-relaxed truncate border-b border-orange-700"
              :title="task.title"
            >
              <div
                class="inline-block w-4 h-4 mb-1 align-middle border border-orange-700 cursor-pointer"
              />
              {{}}
              <span
                v-if="task.matter.shortName"
                class="inline-block w-20 font-semibold"
              >
                {{
                  // yes, it is hardcoded...
                  task.matter.abbr == "ecdr" &&
                  route.params.promotion == "mtu2e"
                    ? "Droit"
                    : task.matter.shortName
                }}
              </span>
              {{ types[task.type].emoji }} {{ task.title }}
            </li>
            <li class="leading-relaxed border-b border-orange-700">
              <template
                v-if="
                  day.tasks.length >=
                  (day.date.getDay() ? LINES_PER_DAY : LINES_ON_SUNDAY)
                "
              >
                +
                {{
                  day.tasks.length +
                  1 -
                  (day.date.getDay() ? LINES_PER_DAY : LINES_ON_SUNDAY)
                }}
                {{
                  day.tasks.length +
                    1 -
                    (day.date.getDay() ? LINES_PER_DAY : LINES_ON_SUNDAY) >=
                  2
                    ? "autres éléments"
                    : "autre élément"
                }}
                <button
                  @click="
                    day.tasks.length
                      ? [
                          (popupStore.component = DayPopup),
                          (popupStore.additionalData = { day }),
                        ]
                      : []
                  "
                  class="mx-0.5 px-0.5 rounded text-sm text-white bg-etml"
                >
                  Voir
                </button>
              </template>
              <button
                v-if="authStore.isAdmin"
                @click="
                  ;[
                    (popupStore.component = TaskForm),
                    (popupStore.additionalData = {
                      date: day.strDate,
                      promotion: route.params.promotion,
                      matter: '',
                      type: 'homework',
                      title: '',
                    }),
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
                (day.date.getDay() ? LINES_PER_DAY : LINES_ON_SUNDAY) -
                  day.tasks.length -
                  1,
                0
              )"
              :key="i"
              class="leading-relaxed border-b border-orange-700"
            >
              &nbsp;
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>
