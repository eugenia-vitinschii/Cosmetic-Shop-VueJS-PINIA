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
          @addItemCart="pushToCart(item)"
          @addToFavorite="deleteFromFavorite(item.id)"
          :isActive="item.active"
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

<script setup>
//vue
import {defineOptions, ref} from "vue"
import {onMounted} from "vue"

//component settings
defineOptions({
   name: "FavoriteView"
})


//import components
import TheItem from "@/components/TheItem.vue";
import TopSliders  from "@/components/sections/Sliders/TopSliders.vue";
import CategorySliders  from "@/components/sections/Sliders/CategorySliders.vue";

//ref 
let created = ref(false);

//import store
import {useCosmeticStore} from "@/stores";
import { storeToRefs} from "pinia";

//pinia actions, data , getters
const store = useCosmeticStore();
const {user} = storeToRefs(store);
const { addToCart, removeFromFavorites} = store;

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
//delete from favorite
function deleteFromFavorite(item){
removeFromFavorites(item)
}

//hooks
onMounted(() => {
  created.value = true
});
</script>