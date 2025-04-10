import { now } from "@/utils"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/:promotion",
    name: "Cover",
    component: () => import("@/views/CoverPage.vue"),
  },
  {
    path: "/:promotion/intro",
    name: "Intro",
    component: () => import("@/views/IntroPage.vue"),
  },
  {
    path: "/:promotion/schedule",
    name: "Schedule",
    component: () => import("@/views/SchedulePage.vue"),
  },
  {
    path: "/:promotion/agenda/today",
    name: "Agenda.Today",
    redirect: (to) => ({
      name: "Agenda",
      params: {
        ...to.params,
        week: now().week,
      },
    }),
  },
  {
    path: "/:promotion/agenda/:week",
    name: "Agenda",
    component: () => import("@/views/AgendaPage.vue"),
  },
  {
    path: "/:promotion/wip",
    name: "WIP",
    component: () => import("@/views/WipPage.vue"),
  },
  {
    path: "/:promotion/end",
    name: "End",
    component: () => import("@/views/CoverPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/mtu2e",
  },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes,
})

router.beforeEach((to, from) => {
  if (to.params.promotion != "mtu1e" && to.params.promotion != "mtu2e") {
    return "/mtu2e"
  }
})

export default router
