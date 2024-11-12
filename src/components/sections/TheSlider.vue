<template>
  <swiper
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <a href="/">
        <img src="@/assets/img/1.jpg" alt="#" />
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="/">
        <img src="@/assets/img/2.jpg" alt="#" />
      </a>
    </swiper-slide>
        <swiper-slide>
      <a href="/">
        <img src="@/assets/img/3.jpg" alt="#" />
      </a>
    </swiper-slide>
        <swiper-slide>
      <a href="/">
        <img src="@/assets/img/4.jpg" alt="#" />
      </a>
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
import { Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
