<template>
   <div class="admin-form-item">
      <h3 class="admin-subheading">Media</h3>
      <div class="admin-form-item__wrapper">
         <admin-input
            :label="'Image Link'"
            :placeholder="'Enter image link'"
            v-model.trim="modelValue.image_link"
         />
         <admin-input
            :label="'API featured image'"
            :placeholder="'Enter API featured image'"
            v-model.trim="modelValue.api_featured_image"
         />
         <admin-input
            :label="'Product link'"
            :placeholder="'Enter product link'"
            v-model.trim="modelValue.product_link"
         />
         <admin-input
            :label="'Website link'"
            :placeholder="'Enter Website link'"
            v-model.trim="modelValue.website_link"
         />         
      </div>
   </div>
</template>

<script setup lang="ts">

//components
import AdminInput from '../ui/AdminInput.vue';

interface ProductMedia {
   image_link?: string;
   api_featured_image?: string;
   product_link?: string;
   website_link?: string;
}

const modelValue = defineModel<ProductMedia>({default: () => ({})})
</script>