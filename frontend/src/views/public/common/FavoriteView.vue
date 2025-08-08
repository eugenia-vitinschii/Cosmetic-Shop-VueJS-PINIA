<template>
<!-- favorite page -->
<div class="favorite"> 
   <div class="container">
      <div class="favorite__wrapper">
         <div class="favorite__title">
            <p class="heading" v-if="favorite.length >= 1">Favorite ({{favorite.length}})</p>
            <router-link to="/" class="body text" v-else>No Favorite items, add now!</router-link>
         </div>
         
         <!-- favorite items -->
         <div class="favorite__items products-wrapper" v-if="created">
            <button @click="user.resetFavorite()"> clear</button>
          <the-product-card
         v-for="item in favorite"
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
          :isFavorite="item.id ? user.isFavorite(item.id) :false"
          @toggleFavorite="user.toggleFavorite(item)"
          />
         </div>
      </div>
   </div>
</div>
  <!-- top -->
  <div class="swiper">
    <div class="container">
      <div class="swiper__wrapper">
        <p class="heading">Top products</p>
        <!-- <top-sliders/> -->
      </div>
    </div>
  </div>
  <!-- category -->
  <div class="swiper">
    <div class="container">
      <div class="swiper__wrapper">
        <p class="heading">Lipstick</p>
        <!-- <category-sliders/> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//vue
import {ref,onMounted } from "vue"
import TheProductCard from "@/components/TheProductCard.vue";
// import TopSliders  from "@/components/sections/Sliders/TopSliders.vue";
// import CategorySliders  from "@/components/sections/Sliders/CategorySliders.vue";

import { useUserStore } from "@/stores/user.store";
import { storeToRefs } from "pinia";

//component settings
defineOptions({
   name: "FavoriteView"
})

//import components


//ref 
let created = ref<boolean>(false);

//import store
const user = useUserStore();
const { favorite } = storeToRefs(user)

// import type { Product } from "@/models/product";

//pinia actions, data , getters
 



//hooks
onMounted(() => {
  created.value = true
});
</script>