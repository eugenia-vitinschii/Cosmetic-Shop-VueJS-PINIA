<template>
   <div class="admin-form-item">
      <h3 class="admin-subheading">Description</h3>
         <div class="admin-form-item__wrapper">
            <textarea 
            class="admin-textarea"
            name="description" 
            id="description"
            v-model.trim="modelValue.description"
            placeholder="Enter product description"
            ></textarea>
         </div>
   </div>
</template>

<script setup lang="ts">

interface DescriptionTab{
   description?: string
}

const modelValue = defineModel<DescriptionTab>({default: () => ({description: ''})})

</script>