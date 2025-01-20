<template>
  <!-- product item -->
  <div class="item__item">
   <!-- item data -->
    <div class="item__data">
      <!-- item img -->
      <div class="item__img">
        <router-link :to="'/product/' + id">
          <img
            :src="image_link"
            @error="$event.target.src = api_featured_image"
          />
        </router-link>
      </div>
      <!-- item information -->
      <div class="item__info">
         <div class="item__info-name">
             <router-link :to="'/product/' + id" class="body-text">
          {{ name }}
        </router-link>
         </div>
        <div class="item__info-description">
         <p class="small-text">{{brand}}</p>
          <router-link :to="'/product-type/' + product_type" class="small-text">
            {{ product_type }}
          </router-link>
          <router-link :to="'/category/' + category" class="small-text" v-if="category">
            /{{ category }}</router-link
          >
        </div>
        <div class="item__info-price">
          <p class="body-text" v-if="price !== '0.0'">
            {{ price }} {{ price_sign }} ({{currency}})
          </p>
          <p class="body-text-light" v-else>not available</p>
        </div>
      </div>
    </div>
    <!-- item button -->
    <div class="item__button" >
      <button @click="$emit('addToFavorite')" :class="$attrs.class"> 
        <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path
                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"
              />
            </svg></button>
      <button @click="$emit('addItemCart')" v-if="buy">Add to cart</button>
      <p class="body-text" v-else>Added</p> 
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
  brand: {
    type: String,
  },
  currency:{
   type: String
  },
  buy:{
    type: Boolean,
    default: true
  }
});
</script>