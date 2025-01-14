<template>
  <!-- product item -->
  <div class="item__item">
    <div class="item__img">
      <router-link :to="'/product/' + id">
        <img
          :src="image_link"
          @error="$event.target.src = api_featured_image"
        />
      </router-link>
    </div>
    <div class="item__data">
      <div class="item__txt">
        <p class="body-text">
          {{ name }}
        </p>
        <br />
        <div class="item__txt-info">
          <router-link :to="'/product-type/' + product_type" class="small-text">
            {{ product_type }}
          </router-link>
          <router-link :to="'/category/' + category" class="small-text">
            /{{ category }}</router-link
          >
        </div>
        <div class="item__info">
          <p class="body-text" v-if="price !== '0.0'">
            {{ price }} {{ price_sign }}
          </p>
          <p class="body-text-light" v-else>not available</p>
        </div>
      </div>
     
    </div>
     <div class="item__button">
        <button>Buy</button>
      </div>
  </div>
</template>

<script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "TheItem",
});

defineProps({
  id: {
    type: Number,
  },
  image_link: {
    type: String,
  },
  name: {
    type: String,
  },
  item_type: {
    type: String,
  },
  price: {
    type: String,
  },
  price_sign: {
    type: String,
  },
  api_featured_image: {
    type: String,
  },
  product_type: {
    type: String,
  },
  category: {
    type: String,
  },
});
</script>