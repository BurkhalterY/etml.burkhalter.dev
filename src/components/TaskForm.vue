<script setup>
import { DELETE_TASK, MUTATE_TASK } from "@/api/mutations"
import { GET_MATTERS, GET_WEEK } from "@/api/queries"
import { usePopupStore } from "@/stores/popup"
import { getWeekNumber } from "@/utils"
import { useMutation, useQuery } from "@vue/apollo-composable"
import { ref } from "vue"

const popupStore = usePopupStore()

const task = ref({
  id: popupStore.additionalData.id || null,
  date: popupStore.additionalData.date || "",
  promotion: popupStore.additionalData.promotion || "mtu1e",
  type: popupStore.additionalData.type || "homework",
  matterId: popupStore.additionalData.matterId || null,
  title: popupStore.additionalData.title || "",
  content: popupStore.additionalData.content || "",
})
const originalData = ref({ ...task.value })

const { result } = useQuery(GET_MATTERS)

const { mutate, error, onDone } = useMutation(MUTATE_TASK, () => ({
  variables: task.value,
  update: (cache, { data: { task } }) => {
    if (originalData.value.id) {
      const date = new Date(originalData.value.date)
      const day = (date.getDay() + 6) % 7
      const { year, week } = getWeekNumber(date)

      const QUERY = {
        query: GET_WEEK,
        variables: {
          promotion: originalData.value.promotion,
          year: year,
          week: week,
        },
      }

      const cachedData = cache.readQuery(QUERY)
      const newData = JSON.parse(JSON.stringify(cachedData))
      newData.week.days[day].tasks = newData.week.days[day].tasks.filter(
        (task) => task.id != originalData.value.id
      )
      cache.writeQuery({ ...QUERY, data: newData })
    }

    const date = new Date(task.date)
    const day = (date.getDay() + 6) % 7
    const { year, week } = getWeekNumber(date)

    const QUERY = {
      query: GET_WEEK,
      variables: {
        promotion: task.promotion,
        year: year,
        week: week,
      },
    }
    const cachedData = cache.readQuery(QUERY)
    if (cachedData) {
      const newData = JSON.parse(JSON.stringify(cachedData))
      newData.week.days[day].tasks.push(task)
      cache.writeQuery({ ...QUERY, data: newData })
    }
  },
}))

onDone(() => {
  popupStore.component = false
})

const {
  mutate: mutateDelete,
  error: deleteError,
  onDone: onDeleted,
} = useMutation(DELETE_TASK, () => ({
  variables: { id: originalData.value.id },
  update: (cache) => {
    const date = new Date(originalData.value.date)
    const day = (date.getDay() + 6) % 7
    const { year, week } = getWeekNumber(date)

    const QUERY = {
      query: GET_WEEK,
      variables: {
        promotion: originalData.value.promotion,
        year: year,
        week: week,
      },
    }

    const cachedData = cache.readQuery(QUERY)
    const newData = JSON.parse(JSON.stringify(cachedData))
    newData.week.days[day].tasks = newData.week.days[day].tasks.filter(
      (task) => task.id != originalData.value.id
    )
    cache.writeQuery({ ...QUERY, data: newData })
  },
}))

onDeleted(() => {
  popupStore.component = false
})

const timer = ref(3)
let interval

const startInterval = () => {
  timer.value--
  interval = setInterval(() => {
    timer.value--
    if (timer.value == 0) clearInterval(interval)
  }, 1000)
}

const resetInterval = () => {
  clearInterval(interval)
  timer.value = 3
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-xl font-bold text-center">Devoir</h2>
    <span v-if="error" class="text-red-500">
      {{ error.message }}
    </span>
    <span v-if="deleteError" class="text-red-500">
      {{ deleteError.message }}
    </span>

    <label>Date :</label>
    <input
      type="date"
      v-model="task.date"
      class="p-2 border rounded-sm"
      @keyup.enter="mutate"
    />

    <label>Classe :</label>
    <select
      v-model="task.promotion"
      class="p-2 bg-white border rounded-sm"
      @keyup.enter="mutate"
    >
      <option value="mtu1e">MTU1E</option>
    </select>

    <label>Type :</label>
    <select
      v-model="task.type"
      class="p-2 bg-white border rounded-sm"
      @keyup.enter="mutate"
    >
      <option value="homework">Devoir</option>
      <option value="test">Test</option>
      <option value="info">Information</option>
      <option value="summary">Résumé de cours</option>
    </select>

    <label>Matière :</label>
    <select
      v-model="task.matterId"
      class="p-2 bg-white border rounded-sm"
      @keyup.enter="mutate"
    >
      <option v-for="matter in result?.matters || []" :value="matter.id">
        {{ matter.name }}
      </option>
    </select>

    <label>Title :</label>
    <input
      type="text"
      v-model="task.title"
      class="p-2 border rounded-sm"
      @keyup.enter="mutate"
    />

    <label>Description :</label>
    <input
      type="text"
      v-model="task.content"
      class="p-2 border rounded-sm"
      @keyup.enter="mutate"
    />

    <div class="flex gap-1">
      <button
        @click="mutate"
        class="flex-grow p-2 mt-2 text-white rounded-sm bg-etml hover:opacity-90 active:opacity-80"
      >
        Valider
      </button>
      <button
        v-if="task.id"
        @mouseenter="startInterval"
        @mouseleave="resetInterval"
        @click="mutateDelete"
        class="p-2 mt-2 font-bold text-white bg-red-600 rounded-sm hover:opacity-90 active:opacity-80 aspect-square disabled:cursor-not-allowed"
        :disabled="timer"
      >
        {{ timer || "⨉" }}
      </button>
    </div>
  </div>
</template>
