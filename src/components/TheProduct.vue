<template>
  <div class="product__item">
    <!-- top block  type/ img / price-->
    <div class="product__top">
      <div class="product__content">
        <!-- brand /category -->
        <div class="product__content--brand">
          <router-link :to="'/brand/' + brand" class="body-text">
            {{ brand }}
          </router-link>
          <router-link :to="'/category/' + category" class="body-text-light">
            /{{ category }}
          </router-link>
        </div>
        <div class="product__content--name">
          <p class="heading">{{ name }}</p>
        </div>
        <div class="product__content--type">
          <!-- product_type -->
          <router-link :to="'/product-type/' + product_type" class="small-text">
            {{ product_type }}
          </router-link>
        </div>
        <!-- svg color -->
        <div class="product__content--color" v-if="selected">
          <svg
            fill="#FDFCFA"
            id="visual"
            viewBox="0 0 900 600"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <rect x="0" y="0"></rect>
            <g transform="translate(399.3051184116206 277.2495989263084)">
              <path
                d="M145.5 -191.7C188.8 -168.9 224.2 -126.6 246.2 -76C268.2 -25.3 276.8 33.7 258.9 82.7C241 131.6 196.6 170.6 149 204.3C101.5 238 50.7 266.5 7.1 256.8C-36.6 247.1 -73.3 199.2 -97.1 157.8C-120.8 116.3 -131.8 81.3 -144.3 46.1C-156.9 10.8 -171.2 -24.7 -166.1 -58.2C-161.1 -91.7 -136.7 -123.1 -105.8 -149.9C-74.8 -176.7 -37.4 -198.8 6.9 -208.3C51.1 -217.7 102.3 -214.4 145.5 -191.7"
                :style="{ fill: selected }"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <!-- item img -->
      <div class="product__images">
        <div class="product__img">
          <img
            :src="image_link"
            @error="$event.target.src = api_featured_image"
          />
        </div>
      </div>
      <!-- item price & colors  -->
      <div class="product__info">
        <div class="product__info--price">
          <p class="body-text" v-if="price !== '0.0'">
            {{ price }} {{ price_sign }}
          </p>
          <p class="body-text-light" v-else>not available</p>
        </div>
        <div class="product__info--buttons">
          <button id="heart">
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
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path
                d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
              />
            </svg>
          </button>
        </div>
        <div class="product__info--colors" v-if="product_colors != ''">
          <select name="colors" id="selected-color" v-model="selected">
            <option value="">Select color</option>
            <option
              v-for="item in product_colors"
              :key="item.hex_value"
              :value="item.hex_value"
            >
              {{ item.colour_name }}
            </option>
          </select>
          <div class="color">
            <div
              class="color__wrapper"
              v-for="item in product_colors"
              :key="item.hex_value"
              :value="item.hex_value"
            >
              <div class="color__item" :style="{ background: item.hex_value }">
                <p class="color__text">{{ item.colour_name }}</p>
              </div>
            </div>
          </div>
        </div>
        <the-delivery />
      </div>
    </div>
    <!-- description & tags -->
    <div class="product__bottom">
      <p class="body-text">{{ description }}</p>
      <p
        class="small-text"
        v-for="(item, index) in tag_list"
        :index="index"
        :key="index"
      >
        #{{ item }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineOptions, defineProps, ref } from "vue";
//components

import TheDelivery from "@/components/sections/TheDelivery.vue";

defineOptions({
  name: "TheProduct",
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
  product_type: {
    type: String,
  },
  price: {
    type: Number,
  },
  price_sign: {
    type: String,
  },
  api_featured_image: {
    type: String,
  },
  brand: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  tag_list: {
    type: Array,
  },
  product_colors: {
    type: Object,
  },
});

const selected = ref("");
</script>