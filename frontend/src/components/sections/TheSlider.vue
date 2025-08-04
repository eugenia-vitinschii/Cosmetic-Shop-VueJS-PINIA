<template>
  <swiper
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    class="mySwiper"
  >
    <swiper-slide>
      <router-link to="/product-type/foundation"><img src="@/assets/img/1.jpg" alt="#" /></router-link>
    </swiper-slide>

    <swiper-slide>
      <router-link to="/brand/annabelle"><img src="@/assets/img/2.jpg" alt="#" /></router-link>
    </swiper-slide>
    
    <swiper-slide>
      <router-link to="/category/cream"><img src="@/assets/img/3.jpg" alt="#" /> </router-link>
    </swiper-slide>

    <swiper-slide>
      <router-link to="/brand/maybelline">  <img src="@/assets/img/4.jpg" alt="#" /></router-link>
    </swiper-slide>
  </swiper>
</template>

 

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay , Pagination, Navigation } from "swiper/modules";


const modules = [Autoplay, Pagination, Navigation ];
</script>
