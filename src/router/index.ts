import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DetailView from "@/views/Detail/DetailView.vue";
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
    path: "/detail/:dir_index/:file_index",
    component: DetailView
  },
  notFound: {
    name: "notFound",
    path: "/:pathMatch(.*)*",
    component: NotFoundView
  }
} as const;

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: { name: routerInfo.home.name } },
  { ...routerInfo.home },
  { ...routerInfo.detail },
  { ...routerInfo.notFound }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
