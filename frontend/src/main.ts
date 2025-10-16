import { createApp } from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import { useCosmeticStore } from './stores/cosmetic.store'

import './assets/sass/app.sass'


createApp(App).use(createPinia()).use(router).mount('#app')



const cosmetic = useCosmeticStore()
await cosmetic.fetchCosmetics()