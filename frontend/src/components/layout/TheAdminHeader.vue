<template>
   <div class="admin-header">
      <div class="admin-header__wrapper">
         <button class="admin-svg-button" @click="isSidebarOpen = !isSidebarOpen">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-80h280v-560H480v560Z"/></svg>
         </button>
         <p class="admin-subheading">Hi, admin!</p>
         <admin-theme-toggle/>
      </div>
      <admin-sidebar 
         :open="isSidebarOpen" 
         @close="isSidebarOpen = false"
      />
      </div>
</template>


<script setup lang="ts">
//vue
import {ref} from 'vue'

//components
import AdminThemeToggle from '../admin/ui/AdminThemeToggle.vue';
import AdminSidebar from './AdminSidebar.vue';

//component
defineOptions({
   name: "AdminHeader"
})

//variables
const isSidebarOpen = ref(false)

</script>
