<template>
   <div class="admin-form-item">
      <h3 class="admin-subheading">System information</h3>
      <div class="admin-form-item__wrapper">
         <admin-input 
            :disabled="true"
            :label="'Id'" 
            :placeholder="'rij584555'" 
            v-model="id"
        />
         <admin-input  
            :disabled="true"
            :label="'Сreated at'" 
            :placeholder="'2025-03-10T15:12:04.738Z'" 
            v-model="created_at" />
         <admin-input 
            :disabled="true"
            :label="'Updated at'" 
            :placeholder="'2025-03-10T15:12:04.738Zt'" 
            v-model="updated_at" />
         <admin-input  
            :label="'Product api url'" 
            :placeholder="'wwww.name.com/sd/e34'"
            v-model="product_api_url" />
      </div>
   </div>
</template>

<script  setup lang="ts">
//components
import AdminInput from '../ui/AdminInput.vue';

//vee-validate
import { useField } from 'vee-validate';

defineOptions({
   name: "SystemInfoTab"
})

//fields
const {value: id} = useField<string>("id")
const {value: created_at} = useField<string>("created_at")
const {value: updated_at} = useField<string>("updated_at")
const {value: product_api_url} = useField<string>("product_api_url")

</script>