<template>
<!-- banner -->
  <div class="swiper">
    <div class="container">
      <div class="swiper__wrapper">
        <the-slider />
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
<!-- brand -->
  <div class="swiper">
    <div class="container">
      <div class="swiper__wrapper">
        <p class="heading">Dior products</p>
        <brand-sliders/>
      </div>
    </div>
  </div>
</template>
 


<script setup>
//vue
import { defineOptions} from "vue";

//components
import TheSlider from "@/components/sections/TheSlider.vue";
import TopSliders  from "@/components/sections/Sliders/TopSliders.vue";
import BrandSliders  from "@/components/sections/Sliders/BrandSliders.vue";
// import TheItem from "@/components/TheItem.vue";

//pinia
// import { useCosmeticStore } from "@/stores/cosmetic";

// import { storeToRefs } from "pinia";
 

defineOptions({
  name: "HomeView",
});

// let created = ref(false);
// let buyItem = ref(true);


// store
// const store = useCosmeticStore();
// const { cosmetics, } = storeToRefs(store);
// const { loadMore, addToCart, addToFavorite} = store;

//add to wish list
// function pushToCart(item) {
//   addToCart({
//     id: item.id,
//     image_link: item.image_link,
//     api_featured_image: item.api_featured_image,
//     color: item.color,
//     name: item.name,
//     product_type: item.product_type,
//     price: item.price,
//     price_sign: item.price_sign,
//     category: item.category,
//     brand: item.brand,
//     currency: item.currency,
//     active: item.active
//   });

// }
// // add to favorite
// function pushtoFavorite(cosmetics){
//     addToFavorite({
//     id: cosmetics.id,
//     image_link: cosmetics.image_link,
//     api_featured_image: cosmetics.api_featured_image,
//     color: cosmetics.color,
//     name: cosmetics.name,
//     product_type: cosmetics.product_type,
//     price: cosmetics.price,
//     price_sign: cosmetics.price_sign,
//     category: cosmetics.category,
//     brand: cosmetics.brand,
//     currency: cosmetics.currency,
//     product_colors: cosmetics.product_colors,
//     quantity: 1,
//     active: true
//   });
// }

//hooks


// onMounted(() => {
//   created.value = true;
//   loadMore();
// });


// onUnmounted(() => {
//   store.$reset();
// });

</script>