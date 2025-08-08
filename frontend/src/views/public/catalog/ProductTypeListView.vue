<template>
  <div class="brand">
    <the-decor/>
    <div class="container">
      <div class="brand__wrapper">
        <div class="brand__nav">
          <traverse-history/>
        </div>
        <div class="brand__items">
         <the-product-type
            v-for="(item, index) in allProductTypes"
            :index="index"
            :key="index"
            :brand="item"
          >
            {{ item }}
            </the-product-type>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

//components
import TheDecor from "@/components/sections/TheDecor.vue"
import TraverseHistory from "@/components/sections/TraverseHistory.vue";
import TheProductType from "@/components/TheProductType.vue";

defineOptions({
  name: "ProductTypeListView",
});

//pinia
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { storeToRefs } from "pinia";

const store = useCosmeticStore();
const { fetchCosmetics } = store;
const { allProductTypes } = storeToRefs(store);

let created = ref(false);

onMounted(() => {
  created.value = true;
  fetchCosmetics();
});

onUnmounted(() => {
  store.$reset;
});

</script>
