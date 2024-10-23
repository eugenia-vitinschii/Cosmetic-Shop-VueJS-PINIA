<template>
   <div class="brand">
      <div class="container">
         <div class="brand__wrapper">
            <p class="heading">Brand page {{ brand }}</p>
         </div>
      </div>
   </div>

</template>


<script setup>
import { defineOptions } from 'vue';
import { useRoute } from "vue-router";
defineOptions({
   name: "BrandView"
})

const route = useRoute();
const brand = route.params.brand

</script>