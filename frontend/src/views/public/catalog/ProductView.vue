<template>
   <!-- product page  -->
  <div class="product">
    <div class="container">
      <div class="product__wrapper" >
         <button-back />
         <div class="product__cosmetics"  v-if="created">
          <!-- product cosmetics -->
            <product-details
            v-if="item"
          :id="item.id"
          :image_link="item.image_link"
          :name="item.name"
          :product_type="item.product_type"
          :price="item.price"
          :price_sign="item.price_sign"
          :api_featured_image="item.api_featured_image"
          :brand="item.brand"
          :description="item.description"
          :category="item.category"
          :currency="item.currency"
          :rating="item.rating"
          :tag_list="item.tag_list"
          :product_colors="item.product_colors"
          :website_link="item.website_link"
           @addItemCart="pushToCart"
           @addItemFavorite="pushtoFavorite(item)"
        />
         </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//vue
import {ref,  onMounted, computed} from "vue";

// components
import ButtonBack from "@/components/sections/ButtonBack.vue";
import ProductDetails from "@/components/product/ProductDetails.vue";

//pinia & router
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

//product
import type { Product, ProductColor } from "@/models/product";

//component settings
defineOptions({
  name: "ProductView",
});
//pinia store 
const store = useCosmeticStore();


const { cosmetics } = storeToRefs(store);
const { fetchProductById ,  addToCart, addToFavorite } = store;

const route = useRoute();
const id = route.params.id as string;
let created = ref(false);

//add to wish list
function pushToCart({item, color}:{ item: Product; color: ProductColor | null}) {
  if(!color){
    alert("Please select a color befor adding to cart");
    return
  }
  addToCart(item, color);
}
// add to favorite
function pushtoFavorite(item: Product){
    addToFavorite(item);
}
const item = computed(() => cosmetics.value.find((p) => p.id === id))


onMounted(() => {
  created.value = true;
  console.log('mounted product');
  fetchProductById(id);
});

</script>