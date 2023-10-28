import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'
import VueClickAway from "vue3-click-away";


import './assets/index.css'

createApp(App).use(store).use(VueClickAway).use(router).mount('#app')
