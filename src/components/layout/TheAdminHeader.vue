<template>
   <div class="a">
      <div class="container">
         <div class="a__wrapper">
            <ul>
               <li><router-link to="/all">Show product list</router-link></li>
               <li><router-link to="/add">Add new product</router-link></li>
            </ul>
         </div>
      </div>
   </div>
</template>


<script setup>
 //vue
 import {defineOptions} from "vue";

//component
defineOptions({
   name: "AdminHeader"
})
</script>
