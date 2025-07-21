<template>
  <div class="add">
    <div class="container">
      <div class="add__wrapper">
        <the-admin-header />
        <p class="heading bold">Add new product</p>
        <div class="add__contaner">
          <ProductForm
          v-model="product"
          @submit="save"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//vue
import { ref } from "vue";

//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue";
import ProductForm from "@/components/admin/ProductForm.vue";

//component settings
defineOptions({
  name: "AddProductView",
});

// import pinia store
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { Product} from "@/models/product";

//pinia variables
const store = useCosmeticStore();
const { createProduct } = store;

//variables
const product = ref<Partial<Product>>({})

// //functions
const save = () => {
  const now = new Date().toISOString();
  createProduct({
    ...product.value,
       product_colors: [],
    created_at: now,
    updated_at: now
  });
  //clean form
  product.value = {}
};


</script>
