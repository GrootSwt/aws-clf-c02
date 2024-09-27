import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DetailView from "@/views/DetailView.vue";
import NotFoundView from "@/views/error/NotFoundView.vue";

export const routerInfo = {
  home: {
    name: "home",
    path: "/home",
    component: HomeView,
    meta: {}
  },
  detail: {
    name: "detail",
    path: "/detail/:dirname/:filename",
    component: DetailView
  }
} as const;

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: { name: routerInfo.home.name } },
  { ...routerInfo.home },
  { ...routerInfo.detail },
  {
    name: "notFound",
    path: "/:pathMatch(.*)*",
    component: NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
