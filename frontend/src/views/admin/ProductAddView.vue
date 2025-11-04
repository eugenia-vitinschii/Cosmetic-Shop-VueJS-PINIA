<template>
  <div class="admin">
    <div class="container">
      <div class="admin__wrapper">
        <the-admin-header />
        <admin-title title="Add new product"/>
          <admin-product-form
          v-model="product"
          @submit="save"
          />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//vue
import { ref } from "vue";

//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue";
import AdminTitle from "@/components/admin/ui/AdminTitle.vue";
import AdminProductForm from "@/components/admin/AdminProductForm.vue";

//component settings
defineOptions({
  name: "ProductAddView",
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
