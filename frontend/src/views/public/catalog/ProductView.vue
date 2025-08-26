<template>
   <!-- product page  -->
  <div class="product">
    <div class="container">
      <div class="product__wrapper" >
         <button-back />
         <div class="product__cosmetics"  v-if="item">
          <!-- product cosmetics -->
            <product-details
            v-if="created"
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
              :selectedColor="item.selectedColor"
              :isFavorite="item.id ? user.isFavorite(item.id) :false"
              @toggleFavorite="toggleFavorite"
              @addItemToCart="pushToCart"
        />
         </div>
         <p v-else>Loading...</p>
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
import { useUserStore } from "@/stores/user.store";

//route
import { useRoute } from "vue-router";

//component settings
defineOptions({
  name: "ProductView",
});

//pinia store 
const cosmetic = useCosmeticStore();
const user = useUserStore()


const route = useRoute();
const id = route.params.id as string;

let created = ref(false);

const item = computed(() => cosmetic.products.find((p) => p.id === id))

onMounted(async() => {
  created.value = true;
  await cosmetic.fetchProductById(id);
});

import type { CartItem} from "@/types/cart";

//push to cart
function pushToCart(item: CartItem) {
  user.addToCart(item)
}

//toogle favorite
function toggleFavorite(){
  if(item.value) user.toggleFavorite(item.value)
}

</script>