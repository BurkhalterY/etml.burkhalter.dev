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
    path: "/schedule/:thread",
    name: "Schedule",
    component: () => import("@/views/SchedulePage.vue"),
  },
  {
    path: "/agenda/:year/:month/:day/:thread?",
    name: "Agenda",
    component: () => import("@/views/AgendaPage.vue"),
  },
  {
    path: "/gradebook",
    name: "Gradebook",
    component: () => import("@/views/GradebookPage.vue"),
  },
  {
    path: "/wip",
    name: "WIP",
    component: () => import("@/views/WipPage.vue"),
  },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes,
})

export default router
