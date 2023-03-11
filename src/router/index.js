import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Cover",
    component: () => import("@/views/CoverPage.vue"),
  },
  {
    path: "/intro",
    name: "Intro",
    component: () => import("@/views/IntroPage.vue"),
  },
  {
    path: "/agenda/:code/:year/:week",
    name: "Agenda",
    component: () => import("@/views/AgendaPage.vue"),
  },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes,
})

export default router
