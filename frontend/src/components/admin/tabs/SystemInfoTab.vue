<template>
   <div class="admin-form-item">
      <p class="admin-subheading">System information</p>
      <div class="admin-form-item__wrapper">
         <admin-input 
            :label="'Id'" 
            :placeholder="'rij584555'" 
            v-model="modelValue.id"
        />
         <admin-input  
            :label="'Сreated at'" 
            :placeholder="'2025-03-10T15:12:04.738Z'" 
            v-model="modelValue.created_at" />
         <admin-input 
            :label="'Updated at'" 
            :placeholder="'2025-03-10T15:12:04.738Zt'" 
            v-model="modelValue.created_at" />
         <admin-input  
            :label="'Product api url'" 
            :placeholder="'wwww.name.com/sd/e34'"
            v-model="modelValue.product_api_url" />
      </div>
   </div>
</template>

<script  setup lang="ts">
//components
import AdminInput from '../ui/AdminInput.vue';

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