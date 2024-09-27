import router, { routerInfo } from "@/router";
export function back() {
  if (router.currentRoute.value.name === routerInfo.home.name) {
    return;
  }
  if (!window.history.state.back) {
    router.replace({ name: routerInfo.home.name });
    return;
  }
  router.back();
}
