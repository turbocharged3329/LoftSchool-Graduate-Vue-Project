import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import store from './store'

const app = createApp(App);

app.config.globalProperties.axios = axios;
app.use(store);

app.mount("#app");
