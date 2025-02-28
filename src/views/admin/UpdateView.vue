<template>
   <div class="update">
      <div class="container">
         <div class="update__wrapper">
            <the-admin-header/>
            <p class="heading">Update: {{cosmetics.name}}</p>
            <div class="update__content">
               <form class="update__form">
                  <div class="update__form-item">
                     <p class="body-text">General info</p>
                     <the-input
                     :label="'brand'"
                     :placeholder="'brand'"
                     v-model:value="cosmetics.brand"
                     />
                     <the-input
                     :label="'name'"
                     :placeholder="'name'"
                     v-model:value="cosmetics.name"
                     />
                     <the-input
                     :label="'price'"
                     :placeholder="'price'"
                     v-model:value="cosmetics.price"
                     />
                     <the-input
                     :label="'currency'"
                     :placeholder="'currency'"
                     v-model:value="cosmetics.currency"
                     />
                  </div>
                  <div class="update__form-item">
                     <p class="body-text">! Photo & Sources</p>
                     <the-input
                     :label="'img'"
                     :placeholder="'img'"
                     v-model:value="cosmetics.image_link"
                     />
                      <the-input
                     :label="'api_featured_image'"
                     :placeholder="'api_featured_image'"
                     v-model:value="cosmetics.api_featured_image"
                     />
                      <the-input
                     :label="'product_link'"
                     :placeholder="'product_link'"
                     v-model:value="cosmetics.product_link"
                     />
                      <the-input
                     :label="'website_link'"
                     :placeholder="'website_link'"
                     v-model:value="cosmetics.website_link"
                     />
                       <the-input
                     :label="'product_api_url'"
                     :placeholder="'product_api_url'"
                     v-model:value="cosmetics.product_api_url"
                     />
                  </div>
                  <div class="update__form-item">
                     <p class="body-text">Product Information</p>
                     <p class="body-text">prodcut colors hex_value & colour_name</p>
                     <the-input
                     :label="'description'"
                     :placeholder="'description'"
                     v-model:value="cosmetics.description"
                     />
                      <the-input
                     :label="'rating'"
                     :placeholder="'rating'"
                     v-model:value="cosmetics.rating"
                     />
                      <the-input
                     :label="'category'"
                     :placeholder="'category'"
                     v-model:value="cosmetics.category"
                     />
                     <the-input
                     :label="'product_type'"
                     :placeholder="'product_type'"
                     v-model:value="cosmetics.product_type"
                     />
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>

//vue
import { defineOptions } from "vue";

//hooks
import { onMounted } from "vue";

//vue router
import {useRoute} from "vue-router"

//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue"
import TheInput from "@/components/TheInput.vue"

//component settings
defineOptions({
   name: "UpdateView",
    inheritAttrs: false,
})

//vue-router variables
const route = useRoute();
const id = route.params.id;

// pinia store imports
import {useCosmeticStore} from "@/stores/cosmetic";
import {storeToRefs} from "pinia";

//pinia store variables
const store = useCosmeticStore();
const {fetchCosmeticsById} = store;
const { cosmetics } = storeToRefs(store);


//use hooks
onMounted(() => {
   fetchCosmeticsById(id);
});
</script>
