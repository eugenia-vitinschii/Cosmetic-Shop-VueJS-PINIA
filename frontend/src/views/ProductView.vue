<template>
   <!-- product page  -->
  <div class="product">
    <div class="container">
      <div class="product__wrapper" >
         <traverse-history />
         <div class="product__cosmetics"  v-if="created">
          <!-- product cosmetics -->
            <the-product
          :id="cosmetics.id"
          :image_link="cosmetics.image_link"
          :name="cosmetics.name"
          :product_type="cosmetics.product_type"
          :price="cosmetics.price"
          :price_sign="cosmetics.price_sign"
          :api_featured_image="cosmetics.api_featured_image"
          :brand="cosmetics.brand"
          :description="cosmetics.description"
          :category="cosmetics.category"
          :rating="cosmetics.rating"
          :tag_list="cosmetics.tag_list"
          :product_colors="cosmetics.product_colors"
          :website_link="cosmetics.website_link"
           @addItemCart="pushToCart(cosmetics)"
           @addItemFavorite="pushtoFavorite(cosmetics)"
        />
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//vue
import { defineOptions, ref,  onMounted } from "vue";

// components
import TraverseHistory from "@/components/sections/TraverseHistory.vue";
import TheProduct from "@/components/TheProduct.vue";

//pinia & router
import { useCosmeticStore } from "@/stores";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

//component settings
defineOptions({
  name: "ProductView",
});
//pinia store 
const store = useCosmeticStore();
const route = useRoute();
const id = route.params.id;
const { cosmetics } = storeToRefs(store);
const { fetchCosmeticsById ,  addToCart, addToFavorite } = store;

let created = ref(false);

//add to wish list
function pushToCart(cosmetics) {
  addToCart({
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

onMounted(() => {
  created.value = true;
  console.log('mounted product');
  fetchCosmeticsById(id);
});

 
</script>