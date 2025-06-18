<template>
   <div class="update__form-item">
      <p class="body-text">Description</p>
         <div class="input__wrapper">
            <textarea 
            name="description" 
            id="description"
            v-model.trim="modelValue"
            placeholder="Enter product description"
            ></textarea>
         </div>
   </div>
</template>

<script setup lang="ts">
const modelValue = defineModel<string>()

</script>