<template>
  <div class="cart">
    <div class="container">
      <div class="cart__wrapper">
        <div class="cart__heading">
          <p class="heading" v-if="user.cart.length >= 1">
            Shopping cart ({{ user.cart.length }})
          </p>
          <p class="heading" v-else>Cosul este gol {{ user.cart.length }}</p>
        </div>
        <div class="cart__items">
         <shopping-item
            v-for="item in user.cart"
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
            @deleteItem="removeItemFromCart(item.id)"
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
import ShoppingItem from "@/components/sections/ShoppingItem.vue";

//import store
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { storeToRefs } from "pinia";

//pinia const
const store = useCosmeticStore();
const { user } = storeToRefs(store);
const { removeItem, incrementQuantity} = store;

// delete item from cart
function removeItemFromCart(item){
  removeItem(item)
}

</script>