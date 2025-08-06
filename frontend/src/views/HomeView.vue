<template>
<!-- banner -->
  <div class="swiper">
    <div class="container">
      <div class="swiper__wrapper">
        <the-slider/>
      </div>
    </div>
  </div>

  <!-- top -->
  <div class="swiper">
    <div class="container">
      <div class="swiper__wrapper">
        <p class="heading">Brand</p>
        <brand-sliders/>
      </div>
    </div>
  </div>
    <!-- product link -->
  <div class="ad">
    <div class="container">
      <div class="ad__wrapper">
        <div class="ad__img picture">
         <router-link to="/product/264">
         <img src="@/assets/img/ad-1.jpg" alt="img">
         </router-link>
        </div>
      </div>
    </div>
  </div>
<!-- brand -->
  <div class="swiper">
    <div class="container">
      <div class="swiper__wrapper">
        <p class="heading">Top Products</p>
              <top-sliders/>
      </div>
    </div>
  </div>
  <!-- category -->
  <div class="swiper">
    <div class="container">
      <div class="swiper__wrapper">
        <p class="heading">Powder</p>
      <category-sliders/>
      </div>
    </div>
  </div>
</template>
 
<script setup lang="ts">
//components
import TheSlider from "@/components/sections/TheSlider.vue";
import TopSliders  from "@/components/sections/Sliders/TopSliders.vue";
import BrandSliders  from "@/components/sections/Sliders/BrandSliders.vue";
import CategorySliders  from "@/components/sections/Sliders/CategorySliders.vue";

// component settings
defineOptions({
  name: "HomeView",
});

</script>