<template>
  <div class="update">
    <div class="container">
      <div class="update__wrapper">
        <the-admin-header />
        <p class="heading" v-if="product">
          Edit: <span class="bold">{{ product.name }}</span>
        </p>
        <div class="update__content" >
                    <ProductForm
                    v-if="product"
          v-model="product"
          @submit="update()"
          />
          <p v-else>nu este</p>
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


// pinia store imports
import { useCosmeticStore } from "@/stores/cosmetic.store";
import { storeToRefs } from "pinia";

// product
import type { Product } from "@/models/product";

//component settings
defineOptions({
  name: "UpdateView",
  inheritAttrs: false,
});

//vue-router variables
const route = useRoute();
const id = computed(() =>String(route.params.id));


const product = ref<Product | null>(null);

//pinia store variables
const store = useCosmeticStore();
const { fetchProductById, updateProduct } = store;
const { cosmetics} = storeToRefs(store);

//updateProduct
const update = () => {
  if(!product.value) return;

  const now = new Date().toISOString();
  updateProduct(id.value ,{
    ...product.value, 
    updated_at: now,
  });
}
 

//use hooks
onMounted(() => {
  fetchProductById(id.value);
  const found = cosmetics.value.find(p => p.id == id.value);
  product.value = found ? structuredClone(found): null;
});


</script>
