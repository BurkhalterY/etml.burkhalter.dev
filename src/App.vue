<template>
  <div class="flex flex-col h-full min-h-screen">
    <TheHeader />
    <div class="w-full max-w-5xl p-2 mx-auto my-24 grow">
      <router-view v-slot="{ Component }">
        <transition mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import TheFooter from "@/components/TheFooter.vue"
import TheHeader from "@/components/TheHeader.vue"
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
