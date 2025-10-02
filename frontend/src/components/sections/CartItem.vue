<template>
  <div class="cart-item">
    <div class="cart-item__media">
      <div class="custom-checkbox">
        <input type="checkbox" :id="'select-' + props.colorKey">
        <label class="subheading" :for="'select-' + props.colorKey"></label>
          </div>
      <router-link :to="'/product/' + id">
        <app-image :src="image_link" :backup="api_featured_image" fallback="@/assets/img/no-img.jpg" alt="Img" />
      </router-link>
    </div>
    <div class="cart-item__body">
      <div class="cart-item__info">
        <div class="cart-item__info-title">
          <router-link :to="'/product/' + id" class="body-text">
            {{ name }}
          </router-link>
        </div>
        <div class="cart-item__info-meta">
          <router-link :to="'/product-type/' + product_type" class="small-text">
            {{ product_type }}
          </router-link>
          <router-link :to="'/category/' + category" class="small-text" v-if="category">
            /{{ category }}</router-link>
          <p class="body-text" v-if="selectedColor && selectedColor.colour_name"> color: <span class="bold">{{
            selectedColor.colour_name}}</span></p>
          <div class="cart-item__info-hex" v-if="selectedColor && selectedColor.colour_name"
            :style="{ background: selectedColor.hex_value }">
          </div>
        </div>
      </div>
      <div class="cart-item__counter">
        <button class="counter-button" @click="user.decrementQuantity(props.colorKey)"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
            <path d="M200-440v-80h560v80H200Z" />
          </svg></button>
        <p class="body-text"> {{ quantity }} </p>
        <button class="counter-button" @click="user.incrementQuantity(props.colorKey)"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg></button>
        <p class="body-text">{{ price * quantity }} {{ price_sign }} ({{ currency }})</p>
      </div>
    </div>
     <div class="cart-item__actions">
        <button class="delete" @click="user.removeFromCart(props.colorKey)">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path
              d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </button>
      </div>
  </div>
</template>

<script setup lang="ts">
//product model
import type { CartItem } from "@/types/cart";

//components
import AppImage from "../core/AppImage.vue";

//store
import { useUserStore } from "@/stores/user.store";

defineOptions({
  name: "CartItem",
});
const user = useUserStore()

//props
const props = defineProps<CartItem>()

</script>