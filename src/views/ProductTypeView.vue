<template>
   <div class="brand">
      <div class="container">
         <div class="brand__title">
            <p class="heading">The {{ product_type }}</p>
            <p class="small-text">{{fileredByProductType(product_type).length }}</p>
         </div>
         <div class="brand__wrapper products-wrapper"  v-if="created">
        <the-item
          v-for="item in fileredByProductType(product_type)"
          :key="item.id"
          :id="item.id"
          :image_link="item.image_link"
          :api_featured_image="item.api_featured_image"
          :name="item.name"
          :product_type="item.product_type"
          :price="item.price"
          :price_sign="item.price_sign"
        />
        </div>
      </div>
   </div>

</template>


<script setup>
import { defineOptions, ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from "vue-router";

//componets
import TheItem from '@/components/TheItem.vue';

//pinia
import { useCosmeticStore } from '@/stores/cosmetic';
import { storeToRefs } from 'pinia';

defineOptions({
   name: "ProductTypeView"
})
const store = useCosmeticStore();
const { fetchCosmetics} = store;
const { fileredByProductType} = storeToRefs(store);



const route = useRoute();
const product_type= route.params.product_type

let created = ref(false);


onMounted(() => {
  created.value = true
  fetchCosmetics()
});

onUnmounted( ()=> {
   store.$reset
})

</script>