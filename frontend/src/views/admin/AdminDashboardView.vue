<template>
   <div class="admin">
      <div class="container">
         <div class="admin__wrapper">
            <h1 class="admin-heading">Admin Page</h1>
            <h4 class="admin-subheading">Lorem ipsum dolor sit amet.</h4>
            <p class="admin-body-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste pariatur cumque laborum repellendus natus! Hic.</p>
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
   name: "AdminDashboardView"
})

</script>
