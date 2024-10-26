<template>
  <div class="brand">
    <div class="container">
      <div class="brand__wrapper">
        <div class="brand__header">
            <p class="heading">{{ allBrand.length }} Brands</p>
         <p class="body-text">{{allProductTypes}}</p>
   <p class="body-text">{{allCategory}}</p>
        </div>

        <div class="brand__items" v-if="created">
          <the-brand
            v-for="(item, index) in allBrand"
            :index="index"
            :key="index"
            :brand="item"
          >
            {{ brand }}
          </the-brand>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { defineOptions, ref, onMounted, onUnmounted } from "vue";
//components

import TheBrand from "@/components/TheBrand.vue";

defineOptions({
  name: "AllBrandView",
});

//pinia
import { useCosmeticStore } from "@/stores/cosmetic";
import { storeToRefs } from "pinia";

const store = useCosmeticStore();
const { fetchCosmetics } = store;
const { allBrand, allProductTypes, allCategory } = storeToRefs(store);

let created = ref(false); 

onMounted(() => {
   created.value = true
  fetchCosmetics();
});

onUnmounted(() => {

  store.$reset;
});
</script>