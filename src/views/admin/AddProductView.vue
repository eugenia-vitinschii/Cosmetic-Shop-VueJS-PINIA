<template>
   <div class="admin">
      <div class="container">
         <div class="admin__wrapper">
            <p class="heading">Add product page</p>
            <the-admin-header/>
         </div>
      </div>
   </div>
</template>

<script setup>

//vue
import {defineOptions} from "vue";

//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue"

//component settings
defineOptions({
   name: "AddProductView"
})

</script>
