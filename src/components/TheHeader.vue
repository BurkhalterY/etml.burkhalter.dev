<script setup>
import { usePageStore } from "@/stores/page"

const pageStore = usePageStore()
</script>

<template>
  <div
    class="fixed top-0 left-0 z-10 justify-between w-full p-1 text-white h-18 sm:h-8 xl:flex bg-etml"
  >
    <span class="hidden xl:inline">etml.burkhalter.dev</span>
    <nav class="flex flex-wrap justify-center text-2xl sm:text-base">
      <div class="flex gap-2 px-2 border-x">
        <span
          @click="pageStore.pageLeft = 0"
          class="cursor-pointer select-none"
          title="First"
          >⇤</span
        >
        <span
          @click="pageStore.pageLeft -= 2"
          class="cursor-pointer select-none"
          title="Previous"
          >←</span
        >
        <input
          type="text"
          :value="pageStore.pageLeft"
          @change="(e) => (pageStore.pageLeft = e.target.value)"
          class="w-16 text-center text-etml"
        />
        <span
          @click="pageStore.pageLeft += 2"
          class="cursor-pointer select-none"
          title="Next"
          >→</span
        >
        <span
          @click="pageStore.pageLeft = Infinity"
          class="cursor-pointer select-none"
          title="Last"
          >⇥</span
        >
      </div>
      <router-link :to="{ name: 'Intro' }" class="px-2 border-r">
        Accueil
      </router-link>
      <router-link
        :to="{
          name: 'Agenda',
          params: {
            promotion: 'mtu1e',
            year: pageStore.now.year,
            week: pageStore.now.week,
          },
        }"
        class="px-2 border-r"
      >
        Aujourd'hui
      </router-link>
    </nav>
    <span class="hidden xl:inline">&copy; Burkhalter Yannis</span>
  </div>
</template>
