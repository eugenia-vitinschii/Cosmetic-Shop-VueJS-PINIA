<template>
  <div class="swiper">
    <div class="container">
      <div class="swiper__wrapper">
        <the-slider />
      </div>
    </div>
  </div>

  <div class="item">
    <div class="container">
      <div class="item__wrapper products-wrapper" v-if="created">
        <the-item
          v-for="item in cosmetics"
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
          :buy="buyItem"
          @addItemCart="pushToCart(item)"
          @addToFavorite="pushtoFavorite(item)"
          :isActive="item.active"
        />
        <div class="item__item">
          <div class="item__img">
            <button class="load-more" @click="loadMore()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path
                  d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                />
              </svg>
            </button>
          </div>
          <div class="item__txt">
            <p class="body-text">Show more</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 


<script setup>
//vue
import { defineOptions, onMounted, ref } from "vue";

//components
import TheSlider from "@/components/sections/TheSlider.vue";
import TheItem from "@/components/TheItem.vue";

//pinia
import { useCosmeticStore } from "@/stores/cosmetic";

import { storeToRefs } from "pinia";

defineOptions({
  name: "HomeView",
});

let created = ref(false);
let buyItem = ref(true);


// store
const store = useCosmeticStore();
const { cosmetics, } = storeToRefs(store);
const { loadMore, addToCart, addToFavorite} = store;

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
    active: item.active
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
    product_colors: cosmetics.product_colors,
    quantity: 1,
    active: true
  });
}

//hooks
onMounted(() => {
  created.value = true;
  loadMore();
});


// onUnmounted(() => {
//   store.$reset();
// });

</script>