<template>
  <swiper
    :modules="modules"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :breakpoints= "{
      1054:{ slidesPerView: 5},
      896:{slidesPerView: 4,},
      663:{slidesPerView: 3,},
      200:{slidesPerView: 2,}
    }"
    class="mySwiper"
    >
    <swiper-slide 
      v-for="item in cosmetic.productsByTag('category')" 
      :key="item.id">
      <product-card
          :id="item.id"
          :image_link="item.image_link"
          :api_featured_image="item.api_featured_image"
          :name="item.name"
          :product_type="item.product_type"
          :price="Number(item.price)"
          :price_sign="item.price_sign"
          :category="item.category"
          :brand="item.brand"
          :rating="item.rating"
          :currency="item.currency"
          :isFavorite="item.id ? user.isFavorite(item.id) :false"
          @toggleFavorite="user.toggleFavorite(item)"
      />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { defineOptions, onMounted } from "vue";
//pinia
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { useUserStore } from "@/stores/user.store";
// components
import ProductCard from "../product/ProductCard.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

//pinia variables
const cosmetic = useCosmeticStore();
const user = useUserStore();

const modules = [Autoplay];

defineOptions({
  name: "CategorySliders",
});
onMounted(() => {
cosmetic.fetchCosmetics();
});
</script>