

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import SvgIcon from "vue3-icon";
import App from './App.vue'
import router from './router'
import './assets/main.css'; // 引入全局CSS文件
import '../mock/cities'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("svg-icon", SvgIcon);
app.mount('#app')
