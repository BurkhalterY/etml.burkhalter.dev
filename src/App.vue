<template>
  <div>
    <TheHeader />
    <div
      class="relative w-full mx-auto mt-16 mb-8 overflow-hidden drop-shadow-lg max-w-7xl"
    >
      <div class="p-12 bg-white page">
        <router-view v-slot="{ Component }">
          <transition mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
        <div class="absolute text-sm font-bold bottom-12 left-12 text-etml">
          60
        </div>
        <div class="absolute text-sm font-bold bottom-12 right-12 text-etml">
          61
        </div>
        <div
          class="absolute bottom-0 right-0 w-48 h-48 origin-center -rotate-45 border-b border-black border-dashed"
        />
      </div>
      <div
        class="absolute top-0 w-16 h-full -translate-x-1/2 left-1/2 right-1/2"
      >
        <div
          class="absolute w-full h-full py-8 bg-center bg-repeat-y bg-contain bg-origin-content bg-clip-content"
          style="background-image: url('/img/rings.png')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue"
</script>

<style>
body {
  background-color: whitesmoke;
}
</style>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.page {
  clip-path: polygon(
    0 0,
    calc(50% - 0.25rem) 0,
    calc(50% - 0.25rem) 100%,
    100% 100%,
    100% 0,
    calc(50% + 0.25rem) 0,
    calc(50% + 0.25rem) 100%,
    0 100%
  );
}
</style>
