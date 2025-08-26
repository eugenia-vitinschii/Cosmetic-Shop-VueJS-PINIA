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
          <product-card
         v-for="item in favorite"
          :key="item.id"
          :id="item.id"
          :image_link="item.image_link"
          :api_featured_image="item.api_featured_image"
          :name="item.name"
          :product_type="item.product_type"
          :price="Number(item.price)"
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
        <top-sliders/>
      </div>
    </div>
  </div>
  <!-- category -->
  <div class="swiper">
    <div class="container">
      <div class="swiper__wrapper">
        <p class="heading">Lipstick</p>
        <category-sliders/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//vue
import {ref,onMounted } from "vue"
import ProductCard from "@/components/product/ProductCard.vue";
import TopSliders from "@/components/sliders/TopSliders.vue";
import CategorySliders from "@/components/sliders/CategorySliders.vue";

import { useUserStore } from "@/stores/user.store";
import { storeToRefs } from "pinia";

//component settings
defineOptions({
   name: "FavoriteView"
})


//ref 
let created = ref<boolean>(false);

//import store
const user = useUserStore();
const { favorite } = storeToRefs(user)

//hooks
onMounted(() => {
  created.value = true
});
</script>