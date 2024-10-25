<template>
   <div class="brand">
      <div class="container">
             <p class="heading"> lenght: {{allBrand.length}} </p> 
         <div class="brand__wrapper">
             <the-brand
             v-for="item in allBrand"
            :id="item.id" 
            :key="item.brand"
            :brand="item.brand">
            {{item.brand}}
            </the-brand> 
         </div>
      </div>
   </div>
</template>


<script setup>
import { defineOptions,  onMounted, onUnmounted } from 'vue';
//components

import TheBrand from "@/components/TheBrand.vue"

defineOptions({
   name: "AllBrandView"
})

//pinia
import { useCosmeticStore}  from '@/stores/cosmetic';
import { storeToRefs} from 'pinia';

const store = useCosmeticStore();
const { fetchCosmetics} = store;
const { allBrand } = storeToRefs(store);


onMounted(() => {
  fetchCosmetics()
});

onUnmounted( ()=> {
   store.$reset
})
</script>