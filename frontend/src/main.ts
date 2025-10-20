import { createApp } from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'

import router from './router'

import { useCosmeticStore } from './stores/cosmetic.store'

import './assets/sass/app.sass'


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)


const cosmetic = useCosmeticStore(pinia)
await cosmetic.fetchCosmetics()

app.mount('#app')



