<template>
  <div class="brand">
    <the-decor/>
    <div class="container">
      <div class="brand__wrapper">
        <div class="brand__nav">
          <traverse-history/>
        </div>
        <div class="brand__items">
         <the-category-type
            v-for="(item, index) in allCategory"
            :index="index"
            :key="index"
            :brand="item"
          >
            {{ item }}
            </the-category-type>
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
import TheCategoryType from "@/components/TheCategoryType.vue";

defineOptions({
  name: "AllCategoryView",
});

//pinia
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { storeToRefs } from "pinia";

const store = useCosmeticStore();
const { fetchCosmetics } = store;
const {allCategory } = storeToRefs(store);

let created = ref(false);

onMounted(() => {
  created.value = true;
  fetchCosmetics();
});

onUnmounted(() => {
  store.$reset;
});

</script>
