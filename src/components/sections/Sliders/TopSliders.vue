<template>
  <swiper
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    :slidesPerView="4"
        :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    class="mySwiper"
  >
    <swiper-slide v-for="item in top" :key="item.id">
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
        :buy="buyItem"
        @addItemCart="pushToCart(item)"
        @addToFavorite="pushtoFavorite(item)"
        :isActive="item.active"
      />
    </swiper-slide>
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
import { Autoplay,Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay,Pagination, Navigation],
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
import { useSliderStore } from "@/stores/sliders";

import { storeToRefs } from "pinia";

defineOptions({
  name: "TopSliders",
});

// store
const store = useSliderStore();
const { top } = storeToRefs(store);
const { fetchTopProducts } = store;

onMounted(() => {
  fetchTopProducts();
});
</script>
