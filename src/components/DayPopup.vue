<script setup>
import TaskForm from "@/components/TaskForm.vue"
import { useAuthStore } from "@/stores/auth"
import { usePopupStore } from "@/stores/popup"
import { computed, ref } from "vue"
import { useRoute } from "vue-router"

const popupStore = usePopupStore()
const authStore = useAuthStore()
const route = useRoute()

const formatedDate = computed(() => {
  const str = popupStore.additionalData.day.date.toLocaleDateString("fr", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return str.charAt(0).toUpperCase() + str.slice(1)
})

const types = ref({
  homework: { active: true, emoji: "" },
  test: { active: true, emoji: "📝" },
  info: { active: true, emoji: "📢" },
  summary: { active: true, emoji: "📓" },
})
</script>

<template>
  <div>
    <h2 class="font-bold">{{ formatedDate }}</h2>
    <table>
      <tr
        v-for="task in popupStore.additionalData.day.tasks"
        class="leading-relaxed border-b border-orange-700"
      >
        <td
          class="inline-block w-4 h-4 border border-orange-700 cursor-pointer"
        />
        <td class="px-2 align-top">
          <strong v-if="task.matter.shortName">
            {{ task.matter.shortName }}
          </strong>
        </td>
        <td class="px-2 align-top">
          {{ types[task.type].emoji }} {{ task.title }}
        </td>
        <td v-if="authStore.user?.admin" class="align-top">
          <button
            @click="
              ;[
                (popupStore.component = TaskForm),
                (popupStore.additionalData = {
                  id: task.id,
                  date: popupStore.additionalData.day.strDate,
                  promotion: route.params.promotion,
                  type: task.type,
                  matter: task.matter.abbr,
                  title: task.title,
                  content: task.content,
                }),
              ]
            "
            class="px-0.5 rounded text-sm text-white bg-etml"
          >
            Edit
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>
