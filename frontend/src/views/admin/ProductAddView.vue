<template>
  <div class="admin">
    <div class="container">
      <div class="admin__wrapper">
        <the-admin-header />
        <admin-title title="Create new product"/>
        <div class="admin-create">
          <admin-product-form
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
import router from "@/router";
//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue";
import AdminTitle from "@/components/admin/ui/AdminTitle.vue";

import AdminProductForm from "@/components/admin/AdminProductForm.vue";

//component settings
defineOptions({
  name: "ProductAddView",
});

// import pinia store
import { useAdminStore } from "@/stores/admin.store";
import { Product} from "@/models/product";

//pinia variables
const admin = useAdminStore()

//variables
const product = ref<Partial<Product>>({})

// //functions
const save =  async() => {

  const now = new Date().toISOString();

  const productData: Product = {
    ...(product.value as Product),
    id: String(product.value?.id ?? Math.random().toString(36).substring(2,6)) ,
    product_colors: product.value?.product_colors ?? [],
    updated_at: now, 
    created_at: product.value?.created_at ?? now
  } 

  if(!product.value?.id){
   const created =  await admin.createProduct(productData);

    product.value = created;

    router.push(`/admin/update/${created.id}`)
  } else{
    await admin.updateProduct(productData.id ?? '', productData);
    product.value = productData
  }
};  

</script>
