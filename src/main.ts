import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "./assets/app.css";
import "./assets/ins2wgm.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
