<template>
   <div class="update">
      <div class="container">
         <div class="update__wrapper">
            <the-admin-header/>
            <p class="heading">Update: {{cosmetics.name}}</p>
         </div>
      </div>
   </div>
</template>

<script setup>

//vue
import { defineOptions } from "vue";

//hooks
import { onMounted } from "vue";

//vue router
import {useRoute} from "vue-router"

//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue"

//component settings
defineOptions({
   name: "UpdateView",
    inheritAttrs: false,
})

//vue-router variables
const route = useRoute();
const id = route.params.id;

// pinia store imports
import {useCosmeticStore} from "@/stores/cosmetic";
import {storeToRefs} from "pinia";

//pinia store variables
const store = useCosmeticStore();
const {fetchCosmeticsById} = store;
const { cosmetics } = storeToRefs(store);


//use hooks
onMounted(() => {
   fetchCosmeticsById(id);
});
</script>
