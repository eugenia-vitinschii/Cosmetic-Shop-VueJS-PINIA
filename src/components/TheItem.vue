<template>
   <div class="item__item">
      <div class="item__img">
         <router-link :to="'/product/'+id">
            <img :src="image_link" alt="item">
         </router-link>
         
      </div>
      <div class="item__txt">
         <p class="body-text">
            {{ name }}
         </p>
         <p pclass="body__text">
            {{ item_type }}
         </p>
      </div>
      <div class="item__info">
         <p class="body__text">
           {{ price}} {{ price_sign }}
         </p>
      </div>
   </div>
</template>

<script setup>

import { defineOptions, defineProps } from 'vue';

defineOptions({
   name: "TheItem"
})

defineProps({
   id: {
      type: Number,
   },
   image_link: {
      type: String,
   },
   name: {
      type: String,
   },
   item_type : {
      type: String,
   },
   price: {
      type: Number,
   },
   price_sign: {
      type: String,
   },

})

</script>