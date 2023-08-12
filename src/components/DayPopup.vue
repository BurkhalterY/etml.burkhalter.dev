<script setup>
import TaskForm from "@/components/TaskForm.vue"
import { useAuthStore } from "@/stores/auth"
import { usePopupStore } from "@/stores/popup"
import { days, months, tasksSorter, types } from "@/utils"
import { useRoute } from "vue-router"

const popupStore = usePopupStore()
const authStore = useAuthStore()
const route = useRoute()
</script>

<template>
  <div>
    <h2 class="px-1 text-white bg-orange-700">
      <span class="text-2xl font-light">
        {{ popupStore.additionalData.day.date.getDate() }}
      </span>
      <span class="ml-2 font-light uppercase text-md">
        {{ days[popupStore.additionalData.day.date.getDay()] }}
      </span>
      <span class="float-right text-2xl font-light">
        {{ months[popupStore.additionalData.day.date.getMonth()] }}
      </span>
    </h2>
    <table>
      <tr
        v-for="task in [...popupStore.additionalData.day.tasks].sort(
          tasksSorter
        )"
        class="leading-snug border-b border-orange-700"
      >
        <td class="px-0 py-1 align-top">
          <div
            class="inline-block w-4 h-4 mb-1 align-middle border border-orange-700 cursor-pointer"
          />
        </td>
        <td
          v-if="task.matter.shortName"
          class="px-2 py-1 font-semibold align-top"
        >
          {{
            task.matter.abbr == "ecdr" && route.params.promotion == "mtu2e"
              ? "Droit"
              : task.matter.shortName
          }}
        </td>
        <td
          class="px-2 py-1 align-top"
          :colspan="task.matter.shortName ? 1 : 2"
        >
          {{ types[task.type].emoji }} {{ task.title }}
        </td>
        <td v-if="authStore.isAdmin" class="py-1 align-top">
          <button
            @click="
              ;[
                (popupStore.component = TaskForm),
                (popupStore.additionalData = task),
              ]
            "
            class="mx-0.5 px-0.5 rounded text-sm text-white bg-etml"
          >
            Éditer
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>
