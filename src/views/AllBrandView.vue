<template>
<!-- all brands -->
  <div class="brand">
    <div class="container">
      <div class="brand__wrapper">
        <!-- brand nav -->
        <div class="brand__nav">
          <traverse-history/>
        </div>
        <!-- brands items -->
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
import TraverseHistory from "@/components/sections/TraverseHistory.vue"
import TheBrand from "@/components/TheBrand.vue";

defineOptions({
  name: "AllBrandView",
});

//pinia
import { useCosmeticStore } from "@/stores/cosmetic";
import { storeToRefs } from "pinia";

const store = useCosmeticStore();
const { fetchCosmetics } = store;
const { allBrand  } = storeToRefs(store);

let created = ref(false); 

onMounted(() => {
   created.value = true
  fetchCosmetics();
});

onUnmounted(() => {

  store.$reset;
});
</script>