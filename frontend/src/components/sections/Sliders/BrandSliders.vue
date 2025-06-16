<template>
  <swiper
    :pagination="{
      type: 'fraction',
    }"
    :modules="modules"
    :slidesPerView="4"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
                    :breakpoints= "{
            1054:{
             slidesPerView: 5,
            },
                896:{
                slidesPerView: 4,

              },
              663:{
                slidesPerView: 3,
              }
              ,
             200:{
                slidesPerView: 2,
              }
            }"
    class="mySwiper"
  >
    <!-- <swiper-slide v-for="item in brand" :key="item.id">
      <the-item
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
        @addItemCart="addToCart(item)"
        @addToFavorite="addToFavorite(item)"
      />
    </swiper-slide> -->
  </swiper>
</template>

 

  <script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
};
</script>


<script setup>
//vue
import { defineOptions, onMounted } from "vue";

//components
import TheItem from "@/components/TheItem.vue";

//pinia
// import { useSliderStore } from "@/stores";

// import { storeToRefs } from "pinia";

defineOptions({
  name: "BrandSliders",
});

// // store
// const store = useSliderStore();
// const { brand } = storeToRefs(store);
// const { fetchBrandProducts, pushToCart, pushToFavorite } = store;

// // add to wish list
// function addToCart(item) {
//   pushToCart({
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
//     active: item.active,
//   });
// }
// // add to favorite
// function addToFavorite(brand) {
//   pushToFavorite({
//     id: brand.id,
//     image_link: brand.image_link,
//     api_featured_image: brand.api_featured_image,
//     color: brand.color,
//     name: brand.name,
//     product_type: brand.product_type,
//     price: brand.price,
//     price_sign: brand.price_sign,
//     category: brand.category,
//     brand: brand.brand,
//     currency: brand.currency,
//     product_colors: brand.product_colors,
//     quantity: 1,
//     active: true,
//   });
// }
// onMounted(() => {
//   fetchBrandProducts();
// });
</script>
