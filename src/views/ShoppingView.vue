<template>
   <div class="cart">
      <div class="container">
         <div class="cart__wrapper" >
            <div class="cart__items" v-if="user.cart.lenght > 1">
      <shopping-item
            v-for="item in user.cart"
            :key="item.id"
            :id="item.id"
            :image_link="item.image_link"
            :api_featured_image="item.api_featured_image"
            :product_type="item.product_type"
            :category="item.category"
            :product_colors="item.product_colors"
            :price="item.price"
            :price_sign="item.price_sign"
            :currency="item.currency"
            />
            </div>
      
         </div>
      </div>
   </div>
</template>

<script setup>
//vue
import {defineOptions }from "vue"

//vue settings component
defineOptions({
   name: "ShoppingView"
})

//import components
import ShoppingItem from "@/components/sections/ShoppingItem.vue"


</script>