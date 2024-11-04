<template>
   <!-- product page  -->
  <div class="product">
    <div class="container">
      <div class="product__wrapper" >
         <traverse-history />
         <div class="product__items"  v-if="created">
          <!-- product item -->
            <the-product
          :id="cosmetics.id"
          :image_link="cosmetics.image_link"
          :name="cosmetics.name"
          :product_type="cosmetics.product_type"
          :price="cosmetics.price"
          :price_sign="cosmetics.price_sign"
          :api_featured_image="cosmetics.api_featured_image"
          :brand="cosmetics.brand"
          :description="cosmetics.description"
          :category="cosmetics.category"
          :tag_list="cosmetics.tag_list"
          :product_colors="cosmetics.product_colors"
        />
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//vue
import { defineOptions, ref,  onMounted, onUnmounted } from "vue";
// components
import TraverseHistory from "@/components/sections/TraverseHistory.vue";
import TheProduct from "@/components/TheProduct.vue";
//pinia & router
import { useCosmeticStore } from "@/stores/cosmetic";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

defineOptions({
  name: "ProductView",
});

const store = useCosmeticStore();
const route = useRoute();
const id = route.params.id;
const { cosmetics } = storeToRefs(store);
const { fetchCosmeticsById } = store;

let created = ref(false);



onMounted(() => {
  created.value = true
  fetchCosmeticsById(id);
});

onUnmounted(() => {
  store.$reset();
});
</script>