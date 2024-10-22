<template>
  <p class="heading">Home page {{ cosmetics.length }}</p>
  <div class="item">
    <div class="container">
      <div 
      class="item__wrapper"
      v-if="created"
      >
        <the-item
          v-for="item in cosmetics"
          :key="item.id"
          :id="item.id"
          :image_link="item.image_link"
          :name="item.name"
          :product_type="item.product_type"
          :price="item.price"
          :price_sign="item.price_sign"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

import { defineOptions, onMounted , onUnmounted, ref} from "vue";
//components
import TheItem from "@/components/TheItem.vue";

//pinia
import { useCosmeticStore } from "@/stores/cosmetic";

import { storeToRefs } from "pinia";

defineOptions({
  name: "HomeView",
});

let created = ref(false);

// store
const store = useCosmeticStore();
const { cosmetics } = storeToRefs(store);
const { fetchCosmetics } = store;

//get cosmetics

onMounted(() => {
  created.value = true
  fetchCosmetics();
});


onUnmounted( () => {
   store.$reset();
})
</script>