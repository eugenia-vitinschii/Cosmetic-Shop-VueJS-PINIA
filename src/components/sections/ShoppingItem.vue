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
      <button class="button-svg" @click="$emit('decrement')">-</button>
      <p class="body-text"> {{quantity}} </p>
      <button class="button-svg" @click="$emit('increment')">+</button>
    </div>
    <div class="cart__price">
      <p class="body-text">{{ price }} {{ price_sign }} ({{ currency }})</p>
    </div>
    <div class="cart__delete">
      <button class="red-button" @click="$emit('deleteItem')">delete</button>
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