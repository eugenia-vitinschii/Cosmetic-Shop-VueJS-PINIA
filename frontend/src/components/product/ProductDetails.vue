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
          <app-image
        :src="image_link"
        :backup="api_featured_image"
        fallback="@/assets/img/no-img.jpg"
        alt="Img"
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
                <button 
        :class="{ active: isFavorite}"
        @click="$emit('toggleFavorite')" 
        aria-label="Add to favorite"
      > 
<svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="root___Z1kvz animated___FWX6h filled___PLueY"><mask id="animatedHeartCircleMask" maskUnits="userSpaceOnUse" x="-5" y="-5" width="34" height="34" style="mask-type: alpha;"><circle cx="12" cy="12" r="12" fill="white"></circle></mask><g mask="url(#animatedHeartCircleMask)"><g class="heartWrapper___nT_tl" x="12" y="12"><path class="heart___RwxGZ" d="M12.5383 19.7993C12.2329 20.0676 11.7679 20.0668 11.4635 19.7974L10.84 19.2455C6.72 15.6133 4 13.2178 4 10.2778C4 7.88222 5.936 6 8.4 6C9.792 6 11.128 6.63 12 7.62555C12.872 6.63 14.208 6 15.6 6C18.064 6 20 7.88222 20 10.2778C20 13.2178 17.28 15.6133 13.16 19.2533L12.5383 19.7993Z" fill="currentColor"></path></g><circle cx="12" cy="12" r="6.6" class="circle___sJ2hy"></circle><g class="splashesWrapper___fdtqJ"><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g><g class="splash___yEdST"><rect x="11.5" y="10" height="3" width="1" fill="currentColor" rx="1" ry="0.5" class="splashRect___fO39Z"></rect></g></g></g></svg>
      </button>
          <!-- add to card button -->
          <button 
          @click="handleAddToCart" 
          :disabled="hasColors && !selectedColor"
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
import { ref, computed } from "vue";

//product model
import type {ProductData,  ProductColor } from "@/models/product";

// //components
import StarRating from "../sections/StarRating.vue";
import DeliveryInfo from "../sections/DeliveryInfo.vue";
import AppImage from "../core/AppImage.vue";

//import store
import { useUserStore } from '@/stores/user.store'



import type { CartItem} from "@/types/cart";


defineOptions({
  name: "ProductDetails",
});

//store
const user = useUserStore()

//props
type ProductProps = Omit<ProductData, 'product_link' | "updated_at">
const props = defineProps<ProductProps>()

//selected color
const selectedColor = ref<ProductColor | null>(null)

//select color
const hasColors = computed(() => (props.product_colors?.length ?? 0) > 0)

// emit cart, favorite actions
const emit = defineEmits<{
  (e: 'addItemToCart', payload: CartItem): void
  (e: 'toggleFavorite'):void
}>()

function handleAddToCart() {
  console.log("hasColors:", hasColors.value, "selectedColor:", selectedColor.value)

  if (hasColors.value && !selectedColor.value) {
    alert("Please select a color before adding to cart")
    return
  }

  const cartItem: CartItem = {
    id: props.id  ?? '',
    name: props.name ?? '',
    price: props.price ?? 0,
    price_sign: props.price_sign ?? '$',
    image_link: props.image_link ?? "",
    product_type: props.product_type ?? "",
    api_featured_image: props.api_featured_image ?? "",
    category: props.category ?? "",
    selectedColor: selectedColor.value ?? undefined,
    currency: props.currency ?? "",
    quantity: 1,
    colorKey: `${props.id}-${selectedColor.value?.hex_value ?? 'default'}`
  }

  emit("addItemToCart", cartItem)
}

// heart color toggle
const isFavorite = computed(() => 
  props.id ? user.isFavorite(String(props.id)): false
)

</script>