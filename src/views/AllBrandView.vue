<template>
   <div class="brand">
      <div class="container">
         <div class="brand__wrapper">
            <p class="heading"> All Brand page {{ allBrand }}</p>
         </div>
      </div>
   </div>

</template>


<script setup>
import { defineOptions,  onMounted, onUnmounted } from 'vue';

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