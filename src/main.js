import { createApp } from 'vue'
import { createPinia } from 'pinia'
import SvgIcon from "vue3-icon";
import App from './App.vue'
import router from './router'
import './assets/main.css'; // 引入全局CSS文件
import '../mock/cities'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const app = createApp(App)
const pinia = createPinia(); // 创建 pinia 实例
pinia.use(piniaPluginPersistedstate); // 使用持久化插件

app.use(pinia) // 使用 pinia
app.use(router)
app.component("svg-icon", SvgIcon);



app.mount('#app')