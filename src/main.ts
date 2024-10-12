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
