<script setup>
import { usePageStore } from "@/stores/page"
import { usePopupStore } from "@/stores/popup"
import { now } from "@/utils"
import {
  BackwardIcon,
  CalendarDaysIcon,
  ForwardIcon,
  HomeIcon,
} from "@heroicons/vue/20/solid"
import { onMounted, onUnmounted, reactive } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()
const pageStore = usePageStore()
const popupStore = usePopupStore()

const choosePromotion = (promotion) => {
  router.push({
    name: route.name,
    params: {
      ...route.params,
      promotion,
    },
  })
}

const onKeyDown = (event) => {
  if (popupStore.component || event.target.tagName != "BODY") return
  if (event.keyCode == 37) pageStore.pageLeft--
  if (event.keyCode == 39) pageStore.pageRight++
  if (event.keyCode == 35)
    router.push({
      name: "End",
      params: { promotion: route.params.promotion },
    })
  if (event.keyCode == 36 && route.params.promotion == "mtu2e")
    router.push({
      name: "Agenda",
      params: {
        promotion: route.params.promotion,
        week: now().week,
      },
    })
}

/* Turn page with swiping on mobile
https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
*/
const touch = reactive({ x: null, y: null })
const onTouchStart = (event) => {
  touch.x = event.touches[0].clientX
  touch.y = event.touches[0].clientY
}
const onTouchMove = (event) => {
  if (!touch.x || !touch.y) return

  let xDiff = touch.x - event.touches[0].clientX
  let yDiff = touch.y - event.touches[0].clientY

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff < 0) {
      pageStore.pageLeft--
    } else {
      pageStore.pageRight++
    }
  }
  console.log(xDiff, yDiff)

  touch.x = null
  touch.y = null
}

onMounted(() => {
  document.addEventListener("keydown", onKeyDown)
  document.addEventListener("touchstart", onTouchStart)
  document.addEventListener("touchmove", onTouchMove)
})

onUnmounted(() => {
  document.removeEventListener("keydown", onKeyDown)
  document.removeEventListener("touchstart", onTouchStart)
  document.removeEventListener("touchmove", onTouchMove)
})
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
