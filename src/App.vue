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
      class="max-w-xl mx-auto overflow-hidden transition-all bg-white md:my-8 xl:max-w-6xl drop-shadow-lg"
      :class="pageStore.pageRight != 1 ? 'page' : 'half-page'"
    >
      <router-view v-slot="{ Component, route }">
        <transition mode="out-in">
          <component
            :is="Component"
            :key="route.path"
            class="px-5 pt-8 pb-20 transition-opacity ease-in-out md:px-16 md:pt-12 min-h-[800px] xl:h-[800px]"
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
        v-if="pageStore.pageRight != 1"
        class="absolute w-24 h-24 -rotate-45 border-t border-black border-dashed -bottom-12 -right-12"
      />
    </div>
    <div
      class="absolute top-0 justify-between hidden w-16 py-8 mt-24 -translate-x-1/2 xl:flex flex-col md:mt-20 left-1/2 right-1/2 h-[775px]"
    >
      <div v-for="i in 28" class="w-16 h-0 overflow-visible">
        <img
          :src="
            pageStore.pageRight != 1
              ? '/img/spirals-1.svg'
              : '/img/spirals-2.svg'
          "
          class="-scale-x-100"
        />
      </div>
    </div>
    <teleport to="body">
      <div
        v-if="popupStore.component"
        @click="popupStore.component = null"
        class="fixed inset-0 z-20 grid items-center justify-center px-4 py-8 overflow-y-scroll bg-black bg-opacity-25"
      >
        <div @click.stop class="p-4 bg-white rounded-md">
          <component :is="popupStore.component" />
        </div>
      </div>
    </teleport>
  </div>
</template>

<style scoped>
@media (min-width: 1280px) {
  .page {
    clip-path: polygon(
      100% 0,
      100% 100%,
      calc(50% + 0.25rem) 100%,
      calc(50% + 0.25rem) 0,
      calc(50% - 0.25rem) 0,
      0 0,
      0 100%,
      calc(50% - 0.25rem) 100%,
      calc(50% - 0.25rem) 0
    );
  }

  .half-page {
    clip-path: polygon(
      100% 0,
      100% 100%,
      calc(50% + 0.25rem) 100%,
      calc(50% + 0.25rem) 0,
      calc(50% + 0.25rem) 0,
      calc(50% + 0.25rem) 0,
      calc(50% + 0.25rem) 100%,
      calc(50% + 0.25rem) 100%,
      calc(50% + 0.25rem) 0
    );
  }
}
</style>
