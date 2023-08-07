<script setup>
import TheHeader from "@/components/TheHeader.vue"
import { usePageStore } from "@/stores/page"
import { usePopupStore } from "@/stores/popup"

const popupStore = usePopupStore()
const pageStore = usePageStore()
</script>

<template>
  <div>
    <TheHeader />
    <div
      class="max-w-xl mx-auto mt-12 mb-8 overflow-hidden bg-white xl:max-w-6xl drop-shadow-lg page"
    >
      <router-view v-slot="{ Component, route }">
        <transition mode="out-in">
          <component
            :is="Component"
            :key="route.path"
            class="px-16 pt-12 pb-20 min-h-[800px] xl:h-[800px]"
          />
        </transition>
      </router-view>
      <div
        v-if="pageStore.pageLeft >= 4"
        class="absolute text-sm font-bold bottom-10 left-16 text-etml"
      >
        {{ pageStore.pageLeft }}
      </div>
      <div
        v-if="pageStore.pageRight >= 2"
        class="absolute text-sm font-bold bottom-10 right-16 text-etml"
      >
        {{ pageStore.pageRight }}
      </div>
      <div
        class="absolute w-24 h-24 -rotate-45 border-t border-black border-dashed -bottom-12 -right-12"
      />
    </div>
    <div
      class="absolute hidden xl:block top-0 w-16 pt-6 mt-24 sm:mt-20 -translate-x-1/2 left-1/2 right-1/2 h-[775px]"
    >
      <div
        class="w-full h-full bg-repeat-y bg-contain bg-origin-content bg-clip-content"
        style="background-image: url('/img/rings.png')"
      />
    </div>
    <teleport to="body">
      <div
        v-if="popupStore.component"
        class="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full bg-black bg-opacity-25"
        @click="popupStore.component = null"
      >
        <div class="p-4 bg-white rounded w-max" @click.stop>
          <component :is="popupStore.component" />
        </div>
      </div>
    </teleport>
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

@media (min-width: 1280px) {
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
}
</style>
