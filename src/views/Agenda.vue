<script setup>
import { dates } from "@/data/agenda.json"
</script>

<template>
  <div>
    <div v-for="date of dates">
      <p>{{ date.content }}</p>
    </div>
  </div>
</template>
