<template>
   <div class="admin-form-item">
      <h3 class="admin-subheading">Media</h3>
      <div class="admin-form-item__wrapper">
         <admin-input
            :label="'Image Link'"
            :placeholder="'Enter image link'"
            v-model.trim="image_link"
         />
         <admin-input
            :label="'API featured image'"
            :placeholder="'Enter API featured image'"
            v-model.trim="api_featured_image"
         />
         <admin-input
            :label="'Product link'"
            :placeholder="'Enter product link'"
            v-model.trim="product_link"
         />
         <admin-input
            :label="'Website link'"
            :placeholder="'Enter Website link'"
            v-model.trim="website_link"
         />         
      </div>
   </div>
</template>

<script setup lang="ts">

//components
import AdminInput from '../ui/AdminInput.vue';

//vee-validate
import { useField } from 'vee-validate';

//fields
const {value: image_link} = useField<string>("image_link");
const {value: api_featured_image} = useField<string>("api_featured_image");
const {value: product_link} = useField<string>("product_link");
const {value: website_link} = useField<string>("website_link");
</script>