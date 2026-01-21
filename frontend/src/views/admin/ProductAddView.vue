<template>
  <div class="admin">
    <div class="container">
      <div class="admin__wrapper">
        <the-admin-header />
        <admin-title title="Create new product"/>
        <div class="admin-create">
          <admin-product-form
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
//route
import {  useRouter } from "vue-router";
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
import { Product, type ProductData} from "@/models/product";

//pinia variables
const admin = useAdminStore()

//variables
const product = ref<Product | null>(null)
const router = useRouter()
// //functions
const save =  async(values: ProductData) => {

  const now = new Date().toISOString();

  const productData: Product = {
    ...values,
    product_colors: values.product_colors ?? [],
    updated_at: now, 
    created_at: product.value?.created_at ?? now,
    id: product.value?.id
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
