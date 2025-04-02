<template>
  <div class="cart__item">
    <div class="cart__img">
      <router-link :to="'/product/' + id">
        <img
          :src="image_link"
          @error="$event.target.src = api_featured_image"
        />
      </router-link>
    </div>
    <div class="cart__info">
      <div class="cart__info-name">
        <router-link :to="'/product/' + id" class="body-text">
          {{ name }}
        </router-link>
      </div>
      <div class="cart__info-description">
        <router-link :to="'/product-type/' + product_type" class="small-text">
          {{ product_type }}
        </router-link>
        <router-link
          :to="'/category/' + category"
          class="small-text"
          v-if="category"
        >
          /{{ category }}</router-link
        >
        <p class="body-text"> color: {{ product_colors }}</p>
      </div>
    </div>
    <div class="cart__counter">
      <button class="delete" @click="$emit('decrement')"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"/></svg></button>
      <p class="body-text"> {{quantity}} </p>
      <button class="edit" @click="$emit('increment')"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></button>
    </div>
    <div class="cart__price">
      <p class="body-text">{{ price }} {{ price_sign }} ({{ currency }})</p>
    </div>
    <div class="cart__delete">
      <button class="delete" @click="$emit('deleteItem')">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "ShoppingItem",
});
//props
defineProps({
  id: {
    type: [String, Number],
  },
  image_link: {
    type: String,
  },
  api_featured_image: {
    type: String,
  },
  name: {
    type: String,
  },
  product_type: {
    type: String,
  },
  category: {
    type: String,
  },
  product_colors: {
    type: String,
  },
  price: {
    type: Number,
  },
  price_sign: {
    type: String,
  },
  currency: {
    type: String,
  },
  quantity:{
   type: Number,
  }
});
</script>