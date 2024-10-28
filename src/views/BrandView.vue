<template>
  <div class="brand">
    <div class="container">
      <div class="brand__wrapper">
        <div class="brand__nav">
           <traverse-history />
        <the-router :items="'/all-brand'" :item="brand" />
        </div>
        <!-- brand title -->
        <div class="brand__title">
          <p class="heading">The {{ brand }}</p>
          <p class="small-text">{{ fileredByBrand(brand).length }}</p>
        </div>
        <!-- brand items -->
        <div class="brand__items products-wrapper" v-if="created">
          <the-item
            v-for="item in fileredByBrand(brand)"
            :key="item.id"
            :id="item.id"
            :image_link="item.image_link"
            :api_featured_image="item.api_featured_image"
            :name="item.name"
            :product_type="item.product_type"
            :price="item.price"
            :price_sign="item.price_sign"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { defineOptions, ref, onMounted } from "vue";
import { useRoute } from "vue-router";

//componets
import TraverseHistory from "@/components/sections/TraverseHistory.vue";
import TheRouter from "@/components/sections/TheRouter.vue";
import TheItem from "@/components/TheItem.vue";

//pinia
import { useCosmeticStore } from "@/stores/cosmetic";
import { storeToRefs } from "pinia";

defineOptions({
  name: "BrandView",
});
const store = useCosmeticStore();
const { fetchCosmetics } = store;
const { fileredByBrand } = storeToRefs(store);

const route = useRoute();
const brand = route.params.brand;

let created = ref(false);

onMounted(() => {
  created.value = true;
  fetchCosmetics();
});


</script>