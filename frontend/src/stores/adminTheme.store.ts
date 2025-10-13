// stores/adminTheme.store.ts

import {defineStore} from 'pinia'

import {ref, watchEffect, onMounted} from 'vue'


export const useAdminTheneStore = defineStore('adminTheme', () =>{
   const theme = ref<'admin-light' | 'admin-dark'>('admin-light')


   onMounted(() => {
      const saved = localStorage.getItem('admin-theme')
      if( saved === 'admin-dark' || saved === 'admin-light') theme.value = saved
   })


   watchEffect(() => {
      document.body.classList.remove('admin-light', 'admin-dark')
      document.body.classList.add(theme.value)

      localStorage.setItem('admin-theme', theme.value)
   })


   function toggleTheme(){
      theme.value = theme.value === 'admin-light' ? 'admin-dark' : 'admin-light'
   }

   return {theme, toggleTheme}
})