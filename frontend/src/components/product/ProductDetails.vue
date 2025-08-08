<template>
  <div class="product__item">
    <!-- top block  type/ img / price-->
    <div class="product__layout">
      <!-- Left column - brand,  name, rating -->
      <div class="product__details">
        <!-- brand /category -->
        <div class="product__brand">
          <router-link :to="'/brand/' + brand" class="body-text">
            {{ brand }}
          </router-link>
          <router-link :to="'/category/' + category" class="body-text-light">
            /{{ category }}
          </router-link>
        </div>
        <div class="product__name">
          <h1 class="heading">{{ name }}</h1>
        </div>
        <div class="product__type">
          <!-- product_type -->
          <router-link :to="'/product-type/' + product_type" class="small-text">
            {{ product_type }}
          </router-link>
        </div>
        <div class="product__stars">
          <star-rating :ratingStar="rating"/>
        </div>
      </div>
      <!-- Middle column - img-->
      <div class="product__media">
        <div class="product__img">
          <img
            :src="image_link"
            @error="$event.target.src = api_featured_image"
          />
        </div>
      </div>
      <!-- Right column - prices, colors, actions  -->
      <div class="product__info">
        <div class="product__price">
          <p class="body-text" v-if="price">
            {{ price }} {{ price_sign }}({{ currency }})
          </p>
          <p class="body-text-light" v-else>not available</p>
        </div>
        <div class="product__hex">
          <p class="small-text" v-if="selectedColor">
            color: {{ selectedColor.colour_name }}
          </p>
        </div>
        <div class="product__actions">
          <!-- wish list button -->
          <button @click="$emit('addItemFavorite', selectedColor.value)"  class="tooltip">
               <span class="tooltip-text small-text">favorite</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#EFA15D"
            >
              <path
                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"
              />
            </svg>
          </button>
          <!-- add to card button -->
          <button 
          @click="$emit('addItemCart',{ item: props, color: selectedColor})" 
          :disabled="!selectedColor"
           class="tooltip"
           >
      <span class="tooltip-text small-text">cart</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M221-120q-27 0-48-16.5T144-179L42-549q-5-19 6.5-35T80-600h190l176-262q5-8 14-13t19-5q10 0 19 5t14 13l176 262h192q20 0 31.5 16t6.5 35L816-179q-8 26-29 42.5T739-120H221Zm-1-80h520l88-320H132l88 320Zm260-80q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM367-600h225L479-768 367-600Zm113 240Z"/></svg>
          </button>
          <!-- souce -->
          <a :href="website_link" target="_blank" class="tooltip">
      <span class="tooltip-text small-text">show source</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q41-45 62.5-100.5T800-480q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"/></svg>
          </a>
        </div>
        <div class="product__color-list" v-if="product_colors?.length">
          <button 
            class="product__color-option"
            v-for="item in product_colors"
            :key="item.hex_value"
            @click="selectedColor = item"
            :class="{selected: selectedColor?.hex_value === item.hex_value}"
            :aria-label="`Choose color: ${item.colour_name}`"
            :style="{
              background: item.hex_value,
              borderColor: selectedColor && 
              selectedColor.hex_value === item.hex_value ? '#463C30' : '#FDFCFA',
              }"
          >
            <span class="bod-text">{{ item.colour_name }}</span>
            
          </button>
        </div>
        <delivery-info />
      </div>
    </div>


    <!-- description & tags -->
    <div class="product__description">
      <p class="body-text">{{ description }}</p>
      <ul>
        <li class="small-text"
        v-for="(item, index) in tag_list"
        :index="index"
        :key="index">
           #{{ item }}
        </li>
      </ul>
    </div>
  </div>

</template>

<script setup lang="ts">
//vue
import { ref } from "vue";
//product model
import type {ProductData} from "@/models/product";
//components
import StarRating from "../sections/StarRating.vue";
import DeliveryInfo from "../sections/DeliveryInfo.vue";

defineOptions({
  name: "ProductDetails",
});


const props = defineProps<Omit<ProductData, "quantity" | 
"product_link" |"created_at" | "updated_at">>();



const selectedColor = ref<ProductColor | null>(null)

</script>