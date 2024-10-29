<template>
   <div class="item__item">
      <div class="item__img">
         <router-link :to="'/product/'+id">
            <img 
            :src="image_link"
            @error="$event.target.src=api_featured_image"
            />
         </router-link>
         
      </div>
      <div class="item__txt">
         <p class="body-text">
            {{ name }}
         </p>
         <p pclass="body-text">
            {{ item_type }}
         </p>
      </div>
      <div class="item__info">
         <p class="body-text" v-if="price">
           {{ price}} {{ price_sign }}
         </p>
          <p class="body-text-light" v-else>not available</p>
      </div>
   </div>
</template>

<script setup>

import { defineOptions, defineProps } from 'vue';

defineOptions({
   name: "TheItem"
})

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
   item_type : {
      type: String,
   },
   price: {
      type: String,
      required: false,
      default: '0',
      validator: function(value){
         if( value > '0')
			return true
		}
   },
   price_sign: {
      type: String,
   },
   api_featured_image: {
      type: String,
   },

})



</script>