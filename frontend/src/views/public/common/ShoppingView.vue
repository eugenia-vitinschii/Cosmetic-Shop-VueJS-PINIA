<template>
  <div class="cart">
    <div class="container">
      <div class="cart__wrapper">
        <div class="cart__heading">
          <p class="heading" v-if="cart.length > 0" >
            Shopping cart ({{ cart.length }})
          </p>
          <p class="heading" v-else>Cosul este gol</p>
        </div>
        <div class="cart__items" >
         <cart-item
            v-for="item in cart"
            :key="item.id"
            :id="item.id"
            :name="item.name"
            :image_link="item.image_link"
            :api_featured_image="item.api_featured_image"
            :product_type="item.product_type"
            :category="item.category"
            :selectedColor = "item.selectedColor"
            :price="item.price"
            :price_sign="item.price_sign"
            :currency="item.currency"
            :quantity="item.quantity"
            :colorKey="item.colorKey"

         />

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//vue settings component
defineOptions({
  name: "ShoppingView",
});

//import components
import CartItem from "@/components/sections/CartItem.vue";

//import store
import { useUserStore } from "@/stores/user.store";
import { storeToRefs } from "pinia";


//pinia const
const user = useUserStore();
const {cart} = storeToRefs(user)
</script>