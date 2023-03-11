<script setup>
import { usePopupStore } from "@/stores/popup"

const popupStore = usePopupStore()
</script>

<template>
  <div v-if="popupStore.additionalData">
    <h2 class="font-bold">{{ popupStore.additionalData.title }}</h2>
    <p>{{ popupStore.additionalData.content }}</p>
  </div>
</template>
