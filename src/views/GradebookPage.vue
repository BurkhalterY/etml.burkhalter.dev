<script setup>
import { GET_GRADEBOOK } from "@/api/queries"
import { useQuery } from "@vue/apollo-composable"
import { computed, ref } from "vue"

const promotion = ref("mtu1e")

const { result, loading } = useQuery(GET_GRADEBOOK, () => {
  return { promotion: promotion.value }
})

const currentAverageDef = ref(null)
const currentAverageVol = ref(null)
const currentAverage = computed(
  () => currentAverageVol.value || currentAverageDef.value
)

const GRADES_BY_MATTER_BY_SEMESTER = 5
</script>

<template>
  <div>
    <div class="flex flex-col gap-y-8 gap-x-32 xl:flex-row" v-if="!loading">
      <div class="xl:w-1/2">
        <h1 class="text-3xl font-light">Bulletin de notes</h1>
        <h2 class="mt-2 mb-1 text-2xl font-light">Semestre 1</h2>
        <table>
          <tr v-for="average in result.gradebook.averages">
            <th class="pl-1 pr-2 text-left align-bottom border border-black">
              <button
                @mouseenter="currentAverageVol = average"
                @mouseleave="currentAverageVol = null"
                @click="currentAverageDef = average"
              >
                {{ average.matter.abbr.toUpperCase() }}
              </button>
            </th>
            <td
              class="w-12 h-12 text-center border border-black"
              v-for="grade in average.grades.map((grade) => {
                return {
                  ...grade,
                  strDate: grade.date,
                  date: new Date(grade.date),
                }
              })"
            >
              <div class="text-xs">
                {{
                  grade.strDate
                    ? [
                        grade.date.getDate().toString().padStart(2, "0"),
                        (grade.date.getMonth() + 1).toString().padStart(2, "0"),
                      ].join(".")
                    : "&nbsp;"
                }}
              </div>
              <div class="text-lg">
                {{ grade.value.toFixed(1) }}
              </div>
            </td>
            <td
              class="w-12 h-12 text-center border border-black"
              v-for="i in GRADES_BY_MATTER_BY_SEMESTER - average.grades.length"
            >
              <button v-if="i == 1" class="w-6 h-6 text-white rounded bg-etml">
                +
              </button>
            </td>
            <td class="w-12 h-12 text-center border border-black">
              <div class="text-xl">
                {{ average.value.toFixed(1) }}
              </div>
            </td>
          </tr>
        </table>
        <div v-if="currentAverage">
          <h3 class="mt-2 mb-1 text-xl font-light">
            {{ currentAverage.matter.name }}
          </h3>
          <table>
            <tr>
              <th class="px-2 font-semibold text-left border border-black">
                Test
              </th>
              <th class="px-2 font-semibold text-left border border-black">
                Date
              </th>
              <th class="px-2 font-semibold text-left border border-black">
                Note
              </th>
            </tr>
            <tr
              v-for="grade in currentAverage.grades.map((grade) => {
                return {
                  ...grade,
                  strDate: grade.date,
                  date: new Date(grade.date),
                }
              })"
            >
              <td class="px-2 border border-black">
                {{ grade.test.title }}
              </td>
              <td class="px-2 text-center border border-black">
                {{
                  [
                    grade.date.getDate().toString().padStart(2, "0"),
                    (grade.date.getMonth() + 1).toString().padStart(2, "0"),
                    grade.date.getFullYear().toString(),
                  ].join(".")
                }}
              </td>
              <td class="px-2 text-lg text-center border border-black">
                {{ grade.value.toFixed(1) }}
              </td>
            </tr>
            <tr
              v-for="test in result.tests.filter(
                (test) => test.matter.id == currentAverage.matter.id
              )"
            >
              <td class="px-2 text-red-500 border border-black">
                {{ test.title }}
              </td>
              <td class="border border-black"></td>
              <td
                class="text-lg font-semibold text-center text-red-500 border border-black"
              >
                {{ "..." }}
              </td>
            </tr>
            <tr>
              <td class="px-2 font-semibold border border-black" colspan="2">
                Moyenne
              </td>
              <td
                class="px-2 text-lg font-semibold text-center border border-black"
              >
                {{ currentAverage.value.toFixed(1) }}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="xl:w-1/2">
        <h2>Moyennes</h2>
        <div>...</div>
      </div>
    </div>
  </div>
</template>
