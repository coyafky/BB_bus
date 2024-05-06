

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import SvgIcon from "vue3-icon";
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("svg-icon", SvgIcon);
app.mount('#app')