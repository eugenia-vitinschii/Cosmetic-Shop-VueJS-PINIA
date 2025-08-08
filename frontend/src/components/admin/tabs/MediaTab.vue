<template>
   <div class="update__form-item">
      <p class="body-text">Media</p>
      <div class="update__form-item">
         <the-input
         :label="'Image Link'"
         :placeholder="'Enter image link'"
         v-model.trim="modelValue.image_link"
         />
         <the-input
            :label="'API featured image'"
            :placeholder="'Enter API featured image'"
            v-model.trim="modelValue.api_featured_image"
         />
         <the-input
            :label="'Product link'"
            :placeholder="'Enter product link'"
            v-model.trim="modelValue.product_link"
         />
         <the-input
            :label="'Website link'"
            :placeholder="'Enter Website link'"
            v-model.trim="modelValue.website_link"
         />         
      </div>
   </div>
</template>

<script setup lang="ts">
//components
import TheInput from '@/components/ui/TheInput.vue';

interface ProductMedia {
   image_link?: string;
   api_featured_image?: string;
   product_link?: string;
   website_link?: string;
}

const modelValue = defineModel<ProductMedia>({default: () => ({})})
</script>