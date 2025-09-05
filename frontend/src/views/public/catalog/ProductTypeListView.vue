<template>
  <div class="brand">
    <div class="container">
      <div class="brand__wrapper">
        <div class="brand__nav page-header">
          <back-button/>
          <the-breadcrumbs
            :items="[
              {label: 'home', to: '/'},
            ]"
            :current="'types'"
          />
        </div>
        <div class="brand__items">
         <product-type-link
            v-for="(item, index) in allProductTypes"
            :index="index"
            :key="index"
            :brand="item"
          >
            {{ item }}
            </product-type-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

//components
import TheBreadcrumbs from "@/components/core/Breadcrumbs.vue"
import BackButton from "@/components/core/BackButton.vue";
import ProductTypeLink from "@/components/ui/ProductTypeLink.vue";

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
