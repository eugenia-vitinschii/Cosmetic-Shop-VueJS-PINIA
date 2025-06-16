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
    <!-- <swiper-slide v-for="item in top" :key="item.id">
      <the-item
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

 

  <!-- <script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay,Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay,Pagination],
    };
  },
};
</script> -->


<script setup lang="ts">
//vue
import { onMounted } from "vue";

//components
import TheItem from "@/components/TheItem.vue";

//pinia
// import { useSliderStore } from "@/stores/cosmetic.store";
// import { storeToRefs } from "pinia";

// //product
// import type { Product } from "@/models/product";
defineOptions({
  name: "TopSliders",
});

// // store
// const store = useSliderStore();
// const { top } = storeToRefs(store);
// const { fetchTopProducts,  pushToCart, pushToFavorite } = store;


// // add to wish list
// function addToCart(item: Product) {
//  pushToCart(item);

// }
// // add to favorite
// function addToFavorite(item: Product){
//     pushToFavorite(item);
// }
// onMounted(() => {
//   fetchTopProducts();
// });
</script>
