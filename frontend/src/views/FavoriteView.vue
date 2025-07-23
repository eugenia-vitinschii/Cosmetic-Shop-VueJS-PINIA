<template>
<!-- favorite page -->
<div class="favorite"> 
   <div class="container">
      <div class="favorite__wrapper">
         <div class="favorite__title">
            <p class="heading" v-if="user.favorite.length >= 1">Favorite ({{user.favorite.length}})</p>
            <router-link to="/" class="body text" v-else>No Favorite items, add now!</router-link>
         </div>
         
         <!-- favorite items -->
         <div class="favorite__items products-wrapper" v-if="created">
          <the-item
         v-for="item in user.favorite"
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
          :rating="item.rating"
          @addToFavorite="deleteFromFavorite(item)"
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

//component settings
defineOptions({
   name: "FavoriteView"
})


//import components
import TheItem from "@/components/TheItem.vue";
import TopSliders  from "@/components/sections/Sliders/TopSliders.vue";
import CategorySliders  from "@/components/sections/Sliders/CategorySliders.vue";

//ref 
let created = ref<boolean>(false);

//import store
import {useCosmeticStore} from "@/stores/cosmetic.store";
import { storeToRefs} from "pinia";
// import type { Product } from "@/models/product";

//pinia actions, data , getters
const store = useCosmeticStore();
const {user} = storeToRefs(store);
const { removeFromFavorites} = store;

//delete from favorite
function deleteFromFavorite(id: string){
removeFromFavorites(id)
}

//hooks
onMounted(() => {
  created.value = true
});
</script>