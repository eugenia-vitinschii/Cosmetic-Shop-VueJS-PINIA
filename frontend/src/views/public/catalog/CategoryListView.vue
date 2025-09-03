<template>
  <div class="brand">
    <div class="container">
      <div class="brand__wrapper">
        <div class="brand__nav">
          <button-back/>
        </div>
        <div class="brand__items">
         <category-type-link
            v-for="(item, index) in allCategory"
            :index="index"
            :key="index"
            :brand="item"
          >
            {{ item }}
            </category-type-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"> 
import { ref, onMounted, onUnmounted } from "vue";

//components
import ButtonBack from "@/components/sections/ButtonBack.vue";
import CategoryTypeLink from "@/components/ui/CategoryTypeLink.vue";

defineOptions({
  name: "CategoryListView",
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
