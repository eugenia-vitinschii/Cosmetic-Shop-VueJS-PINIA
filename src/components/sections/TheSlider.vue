<template>

  <swiper-slide>
      <router-link :to="link">
      <img :src="img" alt="img">
      </router-link>
  </swiper-slide>
</template>

 

  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';



  // import required modules
  import { Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,ç
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
    props:{
      link: String,
      img: String
    }
    
  };
  </script>
