<template>
  <div class="admin">
    <div class="container">
      <div class="admin__wrapper">
        <the-admin-header />
        <admin-title>
          Edit: <span>{{ product?.name }}</span>
        </admin-title>
        <div class="admin-update">
          <admin-product-form v-if="product" :initial-values="product" @submit="update" />
          <div class="admin-title" v-else >
            <p class="admin-subheading">==== Error ====</p>
          </div>
          
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
import AdminTitle from "@/components/admin/ui/AdminTitle.vue";
import AdminProductForm from "@/components/admin/AdminProductForm.vue";

// pinia store imports
import { useAdminStore } from "@/stores/admin.store";

// product
import type { ProductData } from "@/models/product";

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

const product = ref<ProductData | null>(null);

//updateProduct
const update = (values: ProductData) => {
  const now = new Date().toISOString();

  admin.updateProduct(id.value, {
    ...values,
    product_colors: values.product_colors ?? [],
    updated_at: now
  });
}


//use hooks
onMounted( async() => {
  const result =  await admin.fetchProductById(id.value);
  product.value = result ? structuredClone(result) : null;
});


</script>
