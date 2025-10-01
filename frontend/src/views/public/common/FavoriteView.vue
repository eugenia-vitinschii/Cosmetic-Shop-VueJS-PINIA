<template>
<!-- favorite page -->
<div class="favorite"> 
   <div class="container">
      <div class="favorite__wrapper">
        <!-- page header -->
        <div class="page-header">
            <back-button/>
            <the-breadcrumbs
              :items="[
                {label: 'home', to: '/'},
              ]"
              :current="'favorite'"
            />
         </div>
         <!--- entity header -->
         <div class="entity-header" v-if="favorite.length > 0">
            <p class="heading">Favorite ({{favorite.length}})</p>
            <button @click="user.resetFavorite()"> 
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
            </button>
         </div>
          <empty-state
            v-else
            :entity="'favorite'"
            :link="'/'"
          />

         <!-- favorite items -->
         <div class="favorite__items products-wrapper" v-if="created">
            
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

//components
import TheBreadcrumbs from "@/components/core/Breadcrumbs.vue"
import BackButton from "@/components/core/BackButton.vue";
import EmptyState from "@/components/ui/EmptyState.vue";
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