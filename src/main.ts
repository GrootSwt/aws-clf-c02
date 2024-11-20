import { createApp } from "vue";
import "@/assets/styles/index.scss";
import router from "./router";
import loadingDirective from "./directives/Loading";
import App from "./App.vue";
import utils from "./utils";
import "@/components/web/CustomArticle";

const app = createApp(App);
app.use(router);
app.directive("loading", loadingDirective);
app.config.globalProperties.$device = utils.device.getDeviceInfo();
app.config.globalProperties.$back = utils.navigator.back;
app.mount("#app");

// Check App update
const worker = new Worker("worker.js");
worker.postMessage("start");
worker.onmessage = (event) => {
  if (event.data.updated) {
    const result = confirm("应用已更新，是否立即刷新以获取最新版本？");
    if (result) {
      window.location.reload();
    } else {
      worker.postMessage("start");
    }
  }
};

window.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    worker.postMessage("stop");
  } else {
    worker.postMessage("start");
  }
});
