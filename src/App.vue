<script setup>
import Spirals from "@/components/Spirals.vue"
import TheHeader from "@/components/TheHeader.vue"
import { usePageStore } from "@/stores/page"
import { usePopupStore } from "@/stores/popup"
import { reactive } from "vue"

const popupStore = usePopupStore()
const pageStore = usePageStore()

const unnumberedPages = reactive([0, 1, 2, 98, 99])
</script>

<template>
  <div>
    <div class="flex flex-col min-h-screen max-h-screen">
      <TheHeader />
      <div class="flex-grow overflow-x-hidden overflow-y-auto">
        <div
          class="mx-auto transition-transform md:my-8 xl:max-w-6xl drop-shadow-lg relative"
          :class="{
            'xl:-translate-x-1/4': pageStore.pageRight == 1,
            'xl:translate-x-1/4': pageStore.pageLeft == 98,
          }"
        >
          <div
            class="transition-all bg-white page"
            :class="{
              'right-page': pageStore.pageRight == 1,
              'left-page': pageStore.pageLeft == 98,
            }"
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
              v-if="!unnumberedPages.includes(pageStore.pageLeft)"
              class="absolute text-sm font-bold bottom-10 left-16 text-etml"
            >
              {{ pageStore.pageLeft }}
            </div>
            <div
              v-if="!unnumberedPages.includes(pageStore.pageRight)"
              class="absolute text-sm font-bold bottom-10 right-16 text-etml"
            >
              {{ pageStore.pageRight }}
            </div>
            <div
              v-if="!unnumberedPages.includes(pageStore.pageRight)"
              class="absolute w-24 h-24 -rotate-45 border-b border-black border-dashed bottom-5 right-5"
            />
          </div>
          <div
            class="absolute top-5 flex-col justify-around hidden w-16 -translate-x-1/2 xl:flex left-1/2 right-1/2 h-[735px]"
          >
            <div v-for="i in 28" class="w-full h-0 overflow-visible">
              <Spirals
                :firstPage="pageStore.pageRight == 1"
                :lastPage="pageStore.pageLeft == 98"
              />
            </div>
          </div>
        </div>
      </div>
      <teleport to="body">
        <div
          v-if="popupStore.component"
          @click="popupStore.component = null"
          class="fixed inset-0 z-20 grid items-center justify-center px-4 py-8 overflow-y-auto bg-black bg-opacity-25"
        >
          <div @click.stop class="p-4 bg-white rounded-md">
            <component :is="popupStore.component" />
          </div>
        </div>
      </teleport>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1280px) {
  .page {
    clip-path: polygon(
      100% 0,
      100% 100%,
      calc(50% + 4px) 100%,
      calc(50% + 4px) 0,
      calc(50% - 4px) 0,
      0 0,
      0 100%,
      calc(50% - 4px) 100%,
      calc(50% - 4px) 0
    );
  }
  .right-page {
    clip-path: polygon(
      100% 0,
      100% 100%,
      calc(50% + 4px) 100%,
      calc(50% + 4px) 0,
      calc(50% + 4px) 0,
      calc(50% + 4px) 0,
      calc(50% + 4px) 100%,
      calc(50% + 4px) 100%,
      calc(50% + 4px) 0
    );
  }
  .left-page {
    clip-path: polygon(
      calc(50% - 4px) 0,
      calc(50% - 4px) 100%,
      calc(50% - 4px) 100%,
      calc(50% - 4px) 0,
      calc(50% - 4px) 0,
      0 0,
      0 100%,
      calc(50% - 4px) 100%,
      calc(50% - 4px) 0
    );
  }
}
</style>
