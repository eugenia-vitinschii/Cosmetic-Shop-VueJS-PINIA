<template>
<!-- favorite page -->
<div class="favorite"> 
   <div class="container">
      <div class="favorite__wrapper">
         <div class="favorite__title">
            <p class="heading">Favorite ()</p>
            <router-link to="/" class="body text">No Favorite items, add now!</router-link>
         </div>
         
         <!-- favorite items -->
         <div class="favorite__items">
            
         </div>
      </div>
   </div>
</div>
   
</template>

<script setup>
//vue
import {defineOptions} from "vue"

//component settings
defineOptions({
   name: "FavoriteView"
})

</script>