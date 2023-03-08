<script setup>
import TheHeader from "@/components/TheHeader.vue"
</script>

<template>
  <div>
    <TheHeader />
    <div
      class="relative max-w-6xl mx-auto mt-16 mb-8 overflow-hidden bg-white drop-shadow-lg page"
    >
      <router-view v-slot="{ Component }">
        <transition mode="out-in">
          <component
            :is="Component"
            class="px-16 pt-12 pb-20"
            style="height: 800px"
          />
        </transition>
      </router-view>
      <div class="absolute text-sm font-bold bottom-10 left-16 text-etml">
        60
      </div>
      <div class="absolute text-sm font-bold bottom-10 right-16 text-etml">
        61
      </div>
      <div
        class="absolute w-24 h-24 -rotate-45 border-t border-black border-dashed -bottom-12 -right-12"
      />
    </div>
    <div
      class="absolute top-0 w-16 pt-6 mt-16 -translate-x-1/2 left-1/2 right-1/2"
      style="height: 775px"
    >
      <div
        class="w-full h-full bg-repeat-y bg-contain bg-origin-content bg-clip-content"
        style="background-image: url('/img/rings.png')"
      />
    </div>
  </div>
</template>

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

.demi-page {
  clip-path: polygon(
    100% 100%,
    100% 0,
    calc(50% + 0.25rem) 0,
    calc(50% + 0.25rem) 100%
  );
}
</style>
