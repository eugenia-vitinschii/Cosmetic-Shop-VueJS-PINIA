<template>
  <!-- product-card -->
  <div class="product-card">
    <!-- product-card img + button -->
    <div class="product-card__image-wrapper">
      <router-link :to="`/product/${id}`">
        <app-image
        :src="image_link"
        :backup="api_featured_image"
        fallback="@/assets/img/no-img.jpg"
        alt="Img"
        />
      </router-link>
      <button 
        class="product-card__favorite"
        :class="{ active: isFavorite}"
        @click="$emit('toggleFavorite')" 
        aria-label="Add to favorite"
      > 
<svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="root___Z1kvz animated___FWX6h filled___PLueY"><mask id="animatedHeartCircleMask" maskUnits="userSpaceOnUse" x="-5" y="-5" width="34" height="34" style="mask-type: alpha;"><circle cx="12" cy="12" r="12" fill="white"></circle></mask><g mask="url(#animatedHeartCircleMask)"><g class="heartWrapper___nT_tl" x="12" y="12"><path class="heart___RwxGZ" d="M12.5383 19.7993C12.2329 20.0676 11.7679 20.0668 11.4635 19.7974L10.84 19.2455C6.72 15.6133 4 13.2178 4 10.2778C4 7.88222 5.936 6 8.4 6C9.792 6 11.128 6.63 12 7.62555C12.872 6.63 14.208 6 15.6 6C18.064 6 20 7.88222 20 10.2778C20 13.2178 17.28 15.6133 13.16 19.2533L12.5383 19.7993Z" fill="currentColor"></path></g><circle cx="12" cy="12" r="6.6" class="circle___sJ2hy"></circle><g class="splashesWrapper___fdtqJ"><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g></g></g></svg>
      </button>
    </div>
    <!-- product-card information -->
    <div class="product-card__info">
      <!-- product-card name -->
      <div class="product-card__info-name">
        <router-link :to="'/product/' + id" class="body-text link">
          {{ name }} 
        </router-link>
      </div>
      <!-- product-card rating stars -->
      <div class="product-card__info-star">
          <star-rating :ratingStar="rating"/>
      </div>
      <!-- product-card description  -->
      <div class="product-card__info-description">
          <router-link :to="'/brand/' + brand" class="small-text link">
            {{brand }}
          </router-link>
          <br>
          <router-link :to="'/product-type/' + product_type" class="small-text link">
            {{ product_type }}
          </router-link>
          <router-link :to="'/category/' + category" class="small-text link" v-if="category">
            /{{ category }}</router-link
          >
        </div>
        <div class="product-card__info-price">
          <p class="body-text" v-if="price">
            {{ price }} {{ price_sign }} ({{currency}})
          </p>
          <p class="body-text-light" v-else>not available</p>
        </div>
      </div>

  </div>
</template>

<script setup lang="ts">
//components
import StarRating from "../sections/StarRating.vue";
import AppImage from "../core/AppImage.vue";

//product model
import type {ProductData} from "@/models/product";

defineOptions({
  name: "ProductCard",
});



type props = Omit<ProductData, "product_link" | "tag_list" | 
"created_at" | "updated_at" | 
"product_colors"> & {isFavorite: boolean}

const props = defineProps<props>()
</script>

