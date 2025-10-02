<template>
  <div class="cart">
    <div class="container">
      <div class="cart__wrapper">
        <!-- page header -->
        <div class="page-header">
          <back-button/>
          <the-breadcrumbs
            :items="[
              {label: 'home', to: '/'},
            ]"
             :current="'cart'"
          />
        </div>
         <!--- entity header -->
         <div class="entity-header" v-if="cart.length > 0">
          <div class="entity-header__info">
            <p class="heading"> Shopping cart ({{ cart.length }})</p>
          </div>
         </div>
          <empty-state
            v-else
            :entity="'cart'"
            :link="'/'"
          />
        <div class="cart-controls" v-show="cart.length > 0">
          <div class="cart-controls__select custom-checkbox">
              <input type="checkbox"  id="select-all">
              <label class="subheading" for="select-all">Select all</label>
          </div>
          <div class="cart-controls__delete">
            <button class="delete">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  fill="#e3e3e3"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
            </button>
          </div>
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
import TheBreadcrumbs from "@/components/core/Breadcrumbs.vue"
import BackButton from "@/components/core/BackButton.vue";
import CartItem from "@/components/sections/CartItem.vue";
import EmptyState from "@/components/ui/EmptyState.vue";

//import store
import { useUserStore } from "@/stores/user.store";
import { storeToRefs } from "pinia";


//pinia const
const user = useUserStore();
const {cart} = storeToRefs(user)
</script>