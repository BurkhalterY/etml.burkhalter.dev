<script setup>
import { usePageStore } from "@/stores/page"
import { now } from "@/utils"
import {
  BackwardIcon,
  CalendarDaysIcon,
  ForwardIcon,
  HomeIcon,
} from "@heroicons/vue/20/solid"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()
const pageStore = usePageStore()

const choosePromotion = (promotion) => {
  router.push({
    name: route.name,
    params: {
      ...route.params,
      promotion,
    },
  })
}
</script>

<template>
  <div
    class="fixed top-0 left-0 z-10 flex items-center justify-between w-full h-12 p-2 text-white bg-etml"
  >
    <div class="hidden select-none xl:inline">
      <div class="text-center">etml.burkhalter.dev</div>
      <div class="text-center text-2xs">&copy; 2023 Yannis Burkhalter</div>
    </div>
    <nav
      class="flex flex-wrap items-center gap-3"
      v-if="route.params.promotion"
    >
      <router-link
        :to="{
          name: 'Cover',
          params: { promotion: route.params.promotion },
        }"
        class="hover:opacity-75"
      >
        <HomeIcon class="w-6" />
      </router-link>
      <router-link
        :to="{
          name: 'Schedule',
          params: {
            promotion: route.params.promotion,
          },
        }"
        class="hover:opacity-75"
      >
        <CalendarDaysIcon class="w-6" />
      </router-link>
      <button @click="pageStore.pageLeft--" class="hover:opacity-75">
        <BackwardIcon class="w-6" />
      </button>
      <input
        type="text"
        :value="pageStore.pageLeft"
        @keydown.enter="(event) => (pageStore.pageLeft = event.target.value)"
        class="w-10 p-1 text-lg text-center rounded outline-none text-etml"
      />
      <button @click="pageStore.pageRight++" class="hover:opacity-75">
        <ForwardIcon class="w-6" />
      </button>
      <router-link
        v-if="route.params.promotion == 'mtu2e'"
        :to="{
          name: 'Agenda',
          params: {
            promotion: route.params.promotion,
            week: now().week,
          },
        }"
        class="text-xl font-semibold hover:opacity-75"
      >
        Aujourd'hui
      </router-link>
      <span v-else class="text-xl font-semibold opacity-50 select-none">
        Aujourd'hui
      </span>
    </nav>
    <select
      class="w-32 px-2 py-1 bg-white rounded text-etml"
      :value="route.params.promotion"
      @change="(event) => choosePromotion(event.target.value)"
    >
      <option value="mtu1e">MTU1E</option>
      <option value="mtu2e">MTU2E</option>
    </select>
  </div>
</template>
