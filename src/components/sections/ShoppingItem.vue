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
           <router-link :to="'/product/' + id" class="body-text">
          {{ name }}
        </router-link>
                   <router-link :to="'/product-type/' + product_type" class="small-text">
            {{ product_type }}
          </router-link>
           <router-link :to="'/category/' + category" class="small-text" v-if="category">
            /{{ category }}</router-link
          >
         <p class="body-text">{{color}}</p>
      </div>
      <div class="cart__counter">
         <p class="body-text">{{product_colors}}</p>
      </div>
      <div class="cart__price">
         <p class="body-text">{{price}} {{ price_sign }} ({{currency}})</p> 
         </div>
      <div class="cart__delete">
         <button>
            delete
         </button>
      </div>
   </div>
</template>

<script setup>
import {defineOptions, defineProps} from "vue";

defineOptions({
   name: "ShoppingItem"
})
//props
defineProps({
   id: {
      type: Number,
   },
   image_link: {
      type: String,
   },
   api_featured_image: {
      type: String,
   },
   product_type:{
       type: String,
   },
   category:{
       type: String,
   },
   product_colors:{
       type: String,
   },
   price:{
      type: Number,
   },
   price_sign:{
       type: String,
   },
   currency:{
       type: String,
   },
})
</script>