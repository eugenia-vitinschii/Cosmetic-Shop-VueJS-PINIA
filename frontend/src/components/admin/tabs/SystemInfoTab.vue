<template>
   <div class="update__form-item">
      <p class="body-text">System information</p>
      <div class="update__form-item">
         <the-input 
         :label="'id'" 
         :placeholder="'id'" 
         v-model="modelValue.id"
        />
         <the-input 
         :label="'Сreated at'" 
         :placeholder="'2025-03-10T15:12:04.738Z'" 
         v-model="modelValue.created_at" />
         <the-input 
         :label="'updated_at'" 
         :placeholder="'2025-03-10T15:12:04.738Zt'" 
         v-model="modelValue.created_at" />
         <the-input 
         :label="'Product api url'" 
         :placeholder="'wwww.name.com/sd/e34'"
         v-model="modelValue.product_api_url" />
      </div>
   </div>
</template>

<script  setup lang="ts">
//components
import TheInput from '@/components/TheInput.vue';

defineOptions({
   name: "SystemInfoTab"
})
//inteface
interface SystemInfo {
   id?: string;
   created_at?: string;
   product_api_url?: string;
   updated_at?: string;

}
//model
const modelValue = defineModel<SystemInfo>({ default: () => ({})})

</script>