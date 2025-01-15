<template>
   <div class="card">
      <div class="container">
         <div class="card__wrapper">
            <shopping-item/>
         </div>
      </div>
   </div>
</template>

<script setup>
//vue
import {defineOptions }from "vue"

//vue settings component
defineOptions({
   name: "ShoppingView"
})

//import components
import ShoppingItem from "@/components/sections/ShoppingItem.vue"


</script>