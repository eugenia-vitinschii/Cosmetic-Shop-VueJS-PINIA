<template>
  <swiper
    :pagination="{
      type: 'fraction',
    }"
    :modules="modules"
    :slidesPerView="4"
    :aucategorylay="{
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
    <swiper-slide v-for="item in category" :key="item.id">
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
        @addItemCart="addToCart(item)"
        @addToFavorite="addToFavorite(item)"
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
import { Aucategorylay, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Aucategorylay, Pagination],
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
import { useSliderStore } from "@/stores";

import { storeToRefs } from "pinia";

defineOptions({
  name: "CategorySliders",
});

// store
const store = useSliderStore();
const { category } = storeToRefs(store);
const { fetchCategoryProducts, pushToCart, pushToFavorite } = store;

// add to wish list
function addToCart(item) {
  pushToCart({
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
    active: item.active,
  });
}
// add to favorite
function addToFavorite(category) {
  pushToFavorite({
    id: category.id,
    image_link: category.image_link,
    api_featured_image: category.api_featured_image,
    color: category.color,
    name: category.name,
    product_type: category.product_type,
    price: category.price,
    price_sign: category.price_sign,
    category: category.category,
    brand: category.brand,
    currency: category.currency,
    product_colors: category.product_colors,
    quantity: 1,
    active: true,
  });
}
onMounted(() => {
  fetchCategoryProducts();
});
</script>
