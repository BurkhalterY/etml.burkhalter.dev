<script setup>
import { MUTATE_TASK } from "@/api/mutations"
import { GET_MATTERS, GET_WEEK } from "@/api/queries"
import { usePopupStore } from "@/stores/popup"
import { useMutation, useQuery } from "@vue/apollo-composable"
import { ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const popupStore = usePopupStore()

const task = ref({
  id: null,
  date: popupStore.additionalData.date,
  promotion: "mtu1e",
  type: "homework",
  title: "",
  content: "",
  matter: "",
})

const { result } = useQuery(GET_MATTERS)

const { mutate, error, onDone } = useMutation(MUTATE_TASK, () => ({
  variables: task.value,
  update: (cache, { data: { task } }) => {
    const QUERY = {
      query: GET_WEEK,
      variables: {
        promotion: route.params.promotion,
        year: parseInt(route.params.year),
        week: parseInt(route.params.week),
      },
    }
    const cachedData = cache.readQuery(QUERY)
    const newData = JSON.parse(JSON.stringify(cachedData))
    newData.week.days[popupStore.additionalData.day].tasks.push(task)
    cache.writeQuery({ ...QUERY, data: newData })
  },
}))

onDone(() => {
  popupStore.component = false
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-xl font-bold text-center">Devoir</h2>
    <span v-if="error" class="text-red-500">
      {{ error.message }}
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
      v-model="task.matter"
      class="p-2 bg-white border rounded-sm"
      @keyup.enter="mutate"
    >
      <option v-for="matter in result?.matters || []" :value="matter.abbr">
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

    <button
      @click="mutate"
      class="p-2 mt-2 text-white rounded-sm bg-etml hover:opacity-90 active:opacity-80"
    >
      Valider
    </button>
  </div>
</template>
