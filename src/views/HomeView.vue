<template>
   <p class="heading">Home page {{ cosmetics.length }}</p>
   <div class="product">
         <div class="product__item"
   v-for="item in cosmetics"
   :key="item.id"
   >
   <p class="body-text">
    {{item.id}} {{ item.name }} {{ item.product_type }}
   </p>
   <div class="product__img">
      <img :src="item.image_link" alt="">
   </div>
   
   </div>
   </div>

</template>

<script setup>

import { defineOptions, onMounted } from 'vue';

//pinia
import { useCosmeticStore } from '@/stores/cosmetic';
 
import { storeToRefs } from 'pinia';


defineOptions({
   name: "HomeView",
})

const store = useCosmeticStore();
const { cosmetics } = storeToRefs(store);
const { fetchCosmetics} = store;

//get cosmetics

onMounted(() => {
   fetchCosmetics()
})

</script>