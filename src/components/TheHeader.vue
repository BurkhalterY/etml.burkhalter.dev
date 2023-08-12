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
  <nav
    class="items-center w-full grid-cols-2 gap-2 px-2 py-1 text-white lg:grid-cols-3 md:grid md:h-12 bg-etml"
  >
    <div
      class="flex flex-wrap items-center justify-around h-full select-none md:items-baseline md:flex-col"
    >
      <div>etml.burkhalter.dev</div>
      <div class="text-2xs">&copy; 2023 Yannis Burkhalter</div>
    </div>
    <div
      v-if="route.params.promotion"
      class="flex flex-wrap items-center justify-center h-full gap-y-1 gap-x-3"
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
      <router-link
        v-if="route.params.promotion == 'mtu2e'"
        :to="{
          name: 'Agenda',
          params: {
            promotion: route.params.promotion,
            week: now().week,
          },
        }"
        class="w-6 font-semibold hover:opacity-75"
      >
        Auj.
      </router-link>
      <div v-else class="w-6 font-semibold opacity-50 select-none">Auj.</div>
      <div class="flex items-center justify-center h-full gap-3">
        <button @click="pageStore.pageLeft--" class="w-6 hover:opacity-75">
          <BackwardIcon />
        </button>
        <input
          type="text"
          :value="pageStore.pageLeft"
          @keydown.enter="(event) => (pageStore.pageLeft = event.target.value)"
          class="h-10 p-2 text-lg font-semibold text-center rounded outline-none aspect-square text-etml"
        />
        <button @click="pageStore.pageRight++" class="w-6 hover:opacity-75">
          <ForwardIcon />
        </button>
      </div>
      <select
        :value="route.params.promotion"
        @change="(event) => choosePromotion(event.target.value)"
        class="w-24 h-8 px-2 text-lg font-semibold bg-white rounded text-etml"
      >
        <option value="mtu1e">MTU1E</option>
        <option value="mtu2e">MTU2E</option>
      </select>
    </div>
    <div />
  </nav>
</template>
