<template>
  <div class="brand">
    <div class="container">
      <div class="brand__wrapper" v-if="brand">
        <div class="brand__nav">
           <traverse-history />
        <the-router :base="'/brand'" :sub="brand" />
        </div>
        <!-- brand title -->
        <div class="brand__title">
          <p class="heading">Brand: {{ brand }}</p>
          <p class="small-text">
             {{ fileredByBrand(brand).length }}  products were found</p>
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
          :category="item.category"
          :brand="item.brand"
          :rating="item.rating"
          :currency="item.currency"
          @addItemCart="pushToCart(item)"
          @addToFavorite="pushtoFavorite(item)"
          />
        </div>
      </div>
      <p class="body-text" v-else>Something is wrong, try again</p>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
//vue router
import { useRoute } from "vue-router";

//componets
import TraverseHistory from "@/components/sections/TraverseHistory.vue";
import TheRouter from "@/components/sections/TheRouter.vue";
import TheItem from "@/components/TheItem.vue";

//pinia
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { storeToRefs } from "pinia";

//product
import type { Product } from "@/models/product";

defineOptions({
  name: "BrandView",
});
const store = useCosmeticStore();
// pinia store
const { fileredByBrand  } = storeToRefs(store);
const {  addToCart, addToFavorite } = store;

//router
const route = useRoute();
const brand = route.params.brand  as string;

//add to wish list
function pushToCart(item: Product) {
  addToCart(item);
}

// add to favorite
function pushtoFavorite(item: Product){
    addToFavorite(item);
}

//variables
let created = ref(false);

//hooks
onMounted(() => {
  created.value = true;

});
onUnmounted(() => {
  store.$reset;
});
</script>