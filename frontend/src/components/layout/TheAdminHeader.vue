<template>
   <div class="a">
      <div class="container">
         <div class="a__wrapper">
            <ul>
               <li><router-link to="/admin/all" class="header__link">Show product list</router-link></li>
               <li><router-link to="/admin/add" class="header__link">Add new product</router-link></li>
            </ul>
         </div>
      </div>
   </div>
</template>


<script setup lang="ts">
//component
defineOptions({
   name: "AdminHeader"
})
</script>
