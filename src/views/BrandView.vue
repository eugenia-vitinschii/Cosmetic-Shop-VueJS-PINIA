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
          <p class="heading">Brand: {{ brand }}</p>
          <p class="small-text">Au fost gasite ( {{ fileredByBrand(brand).length }} ) produse</p>
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
          :currency="item.currency"
          @addItemCart="pushToCart(item)"
          @addToFavorite="pushtoFavorite(item)"
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
// pinia store
const { fileredByBrand  } = storeToRefs(store);
const route = useRoute();
const brand = route.params.brand;
const {  addToCart, addToFavorite } = store;

//add to wish list
function pushToCart(item) {
  addToCart({
    id: item.id,
    image_link: item.image_link,
    api_featured_image: item.api_featured_image,
    color: item.color,
    name: item.name,
    product_type: item.product_type,
    price: item.price,
    price_sign: item.price_sign,
    category: item.category,
    brand: item.brand,
    currency: item.currency,
  });
}

// add to favorite
function pushtoFavorite(cosmetics){
    addToFavorite({
    id: cosmetics.id,
    image_link: cosmetics.image_link,
    api_featured_image: cosmetics.api_featured_image,
    color: cosmetics.color,
    name: cosmetics.name,
    product_type: cosmetics.product_type,
    price: cosmetics.price,
    price_sign: cosmetics.price_sign,
    category: cosmetics.category,
    brand: cosmetics.brand,
    currency: cosmetics.currency,
    product_colors: cosmetics.product_colors
  });
}
let created = ref(false);

onMounted(() => {
  created.value = true;

});


</script>