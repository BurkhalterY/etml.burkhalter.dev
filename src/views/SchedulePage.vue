<script setup>
import { reactive } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const schedule = reactive({
  mtu1e: [
    {
      name: "Lundi",
      periods: [
        {
          start: "08:00",
          end: "08:45",
          matter: "Histoire",
          classroom: "S312",
        },
        {
          start: "08:50",
          end: "09:35",
          matter: "Histoire",
          classroom: "S312",
        },
        {
          start: "09:50",
          end: "10:35",
          matter: "Économie",
          classroom: "S312",
        },
        {
          start: "10:40",
          end: "11:25",
          matter: "Économie",
          classroom: "S312",
        },
        {
          start: "11:30",
          end: "12:15",
          matter: "",
          classroom: "",
        },
        {
          start: "12:20",
          end: "13:05",
          matter: "Français",
          classroom: "S312",
        },
        {
          start: "13:10",
          end: "13:55",
          matter: "Mathématiques",
          classroom: "S312",
        },
        {
          start: "14:00",
          end: "14:45",
          matter: "Mathématiques",
          classroom: "S312",
        },
        {
          start: "15:00",
          end: "15:45",
          matter: "Anglais",
          classroom: "S312",
        },
        {
          start: "15:50",
          end: "16:35",
          matter: "Anglais",
          classroom: "S312",
        },
      ],
    },
    {
      name: "Vendredi",
      periods: [
        {
          start: "08:00",
          end: "08:45",
          matter: "Français",
          classroom: "S312",
        },
        {
          start: "08:50",
          end: "09:35",
          matter: "Français",
          classroom: "S312",
        },
        {
          start: "09:50",
          end: "10:35",
          matter: "Mathématiques",
          classroom: "S312",
        },
        {
          start: "10:40",
          end: "11:25",
          matter: "Mathématiques",
          classroom: "S312",
        },
        {
          start: "11:30",
          end: "12:15",
          matter: "Mathématiques",
          classroom: "S312",
        },
        {
          start: "12:20",
          end: "13:05",
          matter: "",
          classroom: "",
        },
        {
          start: "13:10",
          end: "13:55",
          matter: "Histoire",
          classroom: "S312",
        },
        {
          start: "14:00",
          end: "14:45",
          matter: "Physique",
          classroom: "S416",
        },
        {
          start: "15:00",
          end: "15:45",
          matter: "Physique",
          classroom: "S416",
        },
        {
          start: "15:50",
          end: "16:35",
          matter: "Allemand",
          classroom: "S312",
        },
        {
          start: "16:40",
          end: "17:25",
          matter: "Appuis math.",
          classroom: "S312",
          optional: true,
        },
        {
          start: "17:30",
          end: "18:15",
          matter: "Rattrapages",
          classroom: "",
          optional: true,
        },
      ],
    },
  ],
  mtu2e: [
    {
      name: "Lundi",
      periods: [
        {
          start: "08:00",
          end: "08:45",
          matter: "Français",
          classroom: "S316",
        },
        {
          start: "08:50",
          end: "09:35",
          matter: "Français",
          classroom: "S316",
        },
        {
          start: "09:50",
          end: "10:35",
          matter: "Chimie",
          classroom: "S314",
        },
        {
          start: "10:40",
          end: "11:25",
          matter: "Chimie",
          classroom: "S314",
        },
        {
          start: "11:30",
          end: "12:15",
          matter: "",
          classroom: "",
        },
        {
          start: "12:20",
          end: "13:05",
          matter: "TIP",
          classroom: "S204B",
        },
        {
          start: "13:10",
          end: "13:55",
          matter: "TIP",
          classroom: "S204B",
        },
        {
          start: "14:00",
          end: "14:45",
          matter: "Mathématiques",
          classroom: "S316",
        },
        {
          start: "15:00",
          end: "15:45",
          matter: "Mathématiques",
          classroom: "S316",
        },
        {
          start: "15:50",
          end: "16:35",
          matter: "Mathématiques",
          classroom: "S316",
        },
      ],
    },
    {
      name: "Vendredi",
      periods: [
        {
          start: "08:00",
          end: "08:45",
          matter: "Français",
          classroom: "S316",
        },
        {
          start: "08:50",
          end: "09:85",
          matter: "Allemand",
          classroom: "S316",
        },
        {
          start: "09:50",
          end: "10:35",
          matter: "Allemand",
          classroom: "S316",
        },
        {
          start: "10:40",
          end: "11:25",
          matter: "Anglais",
          classroom: "S316",
        },
        {
          start: "11:30",
          end: "12:15",
          matter: "Anglais",
          classroom: "S316",
        },
        {
          start: "12:20",
          end: "13:05",
          matter: "",
          classroom: "",
        },
        {
          start: "13:10",
          end: "13:55",
          matter: "Mathématiques",
          classroom: "S316",
        },
        {
          start: "14:00",
          end: "14:45",
          matter: "Mathématiques",
          classroom: "S316",
        },
        {
          start: "15:00",
          end: "15:45",
          matter: "Physique",
          classroom: "S416",
        },
        {
          start: "15:50",
          end: "16:35",
          matter: "Physique",
          classroom: "S416",
        },
        {
          start: "16:40",
          end: "17:25",
          matter: "Rattrapages",
          classroom: "",
          optional: true,
        },
        {
          start: "17:30",
          end: "18:15",
          matter: "Rattrapages",
          classroom: "",
          optional: true,
        },
      ],
    },
  ],
})
</script>

<template>
  <div class="flex flex-col gap-y-8 gap-x-32 xl:flex-row">
    <table
      v-for="day in schedule[route.params.promotion]"
      :key="day"
      class="h-0 text-center xl:w-1/2"
    >
      <tr class="text-white">
        <th class="bg-opacity-50 border bg-etml border-etml" colspan="2">
          Horaire
        </th>
        <th class="uppercase border bg-etml border-etml" colspan="2">
          {{ day.name }}
        </th>
      </tr>
      <tr class="text-left align-top">
        <td class="w-16 px-1 text-sm font-bold border text-etml border-etml">
          de
        </td>
        <td class="w-16 px-1 text-sm font-bold border text-etml border-etml">
          à
        </td>
        <td class="border border-etml">&nbsp;</td>
        <td
          class="w-16 text-sm font-bold text-center bg-opacity-50 border bg-etml text-etml border-etml"
        >
          salle
        </td>
      </tr>
      <tr
        v-for="period in day.periods"
        :key="period"
        :class="{ 'bg-neutral-200': period.optional }"
      >
        <td class="w-16 border border-etml">{{ period.start }}</td>
        <td class="w-16 border border-etml">{{ period.end }}</td>
        <td class="px-1 text-left border border-etml">
          {{ period.matter }}
        </td>
        <td class="w-16 bg-opacity-50 border bg-etml border-etml">
          {{ period.classroom }}
        </td>
      </tr>
    </table>
  </div>
</template>
