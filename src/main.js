import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import { IonicVue } from "@ionic/vue";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/core.css";
import BaseLayout from "./components/base/BaseLayout.vue";
import ArrowBaseLayout from "./components/base/ArrowBaseLayout.vue";
import './registerServiceWorker'

/**
 * sets authorization headers from local storage token
 */
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}

/**
 * adds store and router to ionic vue app
 */
const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);

/**
 * creates default component
 */
app.component("base-layout", BaseLayout);
app.component("arrow-base-layout", ArrowBaseLayout);

/**
 * mounts app
 */
router.isReady().then(() => {
  app.mount("#app");
});
