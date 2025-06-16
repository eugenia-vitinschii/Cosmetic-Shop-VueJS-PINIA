<template>
   <div class="admin">
      <div class="container">
         <div class="admin__wrapper">
            <p class="heading">Admin page</p>
            <the-admin-header/>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts"> 
//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue"

//component settings
defineOptions({
   name: "AdminView"
})

</script>
