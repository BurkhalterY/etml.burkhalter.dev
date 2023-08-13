<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const startYear = computed(
  () =>
    ({
      mtu1e: 2022,
      mtu2e: 2023,
    }[route.params.promotion])
)
const endYear = computed(() => startYear.value + 1)
</script>

<template>
  <div
    class="px-12 pt-12 text-white bg-cover bg-[url(/img/cover.webp)]"
    :class="{
      'bg-right-bottom': route.name == 'Cover',
      'bg-left-bottom': route.name == 'End',
    }"
  >
    <template v-if="route.name == 'Cover'">
      <img
        src="/img/etml.svg"
        alt="ETML"
        class="float-right w-1/3 md:-mr-4 xl:w-1/6 brightness-0 invert"
      />
      <h1
        class="absolute right-0 w-full text-6xl font-thin text-center xl:pl-1 xl:w-1/2 bottom-24"
      >
        Agenda {{ startYear }}-{{ endYear }}
      </h1>
    </template>
  </div>
</template>
