<template>
  <div class="update">
    <div class="container">
      <div class="update__wrapper">
        <the-admin-header />
        <p class="admin-heading" >
          Edit: <span class="bold" v-if="product"> {{ product.name }}</span>
        </p>
        <div class="update__content" >
          <product-form v-if="product"  v-model="product" @submit="update()" />
  <p v-else>Error</p>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//hooks
import { ref, onMounted, computed } from "vue";

//vue router
import { useRoute } from "vue-router";

//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue";
import ProductForm from "@/components/admin/ProductForm.vue";

// pinia store imports
import { useAdminStore } from "@/stores/admin.store";

// product
import type { Product } from "@/models/product";

//component settings
defineOptions({
  name: "ProductEditView",
  inheritAttrs: false,
});

//pinia
const admin = useAdminStore()

//vue-router variables
const route = useRoute();
const id = computed(() => String(route.params.id));

const product = ref<Product | null>(null);

//updateProduct
const update = () => {
  if (!product.value) return;

const now = new Date().toISOString();
  admin.updateProduct(id.value, {
    ...product.value,
    updated_at: now,
  });
}


//use hooks
onMounted( async() => {
  const result =  await admin.fetchProductById(id.value);
  product.value = result ? structuredClone(result) : null;
});


</script>
