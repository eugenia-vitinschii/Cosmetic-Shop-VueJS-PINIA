<template>
   <div class="admin-header">
         <div class="admin-header__wrapper">
            <ul>
               <li><router-link to="/admin" class="admin-header__link">Admin Dashboard</router-link></li>
               <li><router-link to="/admin/all" class="admin-header__link" >Show product list</router-link></li>
               <li><router-link to="/admin/add" class="admin-header__link">Add new product</router-link></li>
            </ul>
            <admin-theme-toggle/>

         </div>
      </div>
</template>


<script setup lang="ts">
import AdminThemeToggle from '../admin/ui/AdminThemeToggle.vue';

//component
defineOptions({
   name: "AdminHeader"
})
</script>
