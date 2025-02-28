<template>
  <div class="admin">
    <div class="container">
      <div class="admin__wrapper">
         <the-admin-header /> 
        <p class="heading">All products {{cosmetics.length}} (produse)</p>
       
        <div class="admin-content">
          <table class="admin__table">
            <thead>
                 <tr>
              <th>Brand</th>
              <th>Name</th>
              <th>Category / Product Type</th>
              <th>Șterge</th>
              <th>Redactează</th>
            </tr>
            </thead>
         <tbody>
                     <tr v-for="product in cosmetics" :key="product.id">
              <td>{{ product.brand }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.category }}/ {{ product.product_type }}</td>
              <td>
                <button class="red-button">
                  Șterge @click="deleteItem(product.id)"
                </button>
              </td>
              <td>
                <router-link class="green-button" :to="'/update/' + product.id">
                  Redactează
                </router-link>
              </td>
            </tr>
         </tbody>
 
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//vue
import { defineOptions } from "vue";

// import vue hooks
import { onMounted } from "vue";

//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue";

//component settings
defineOptions({
  name: "ShowProductsView",
});

//pinia store imports
import { useCosmeticStore } from "@/stores/cosmetic";
import { storeToRefs } from "pinia";

//pinia variables
const store = useCosmeticStore();
const { cosmetics } = storeToRefs(store);
const { fetchCosmetics } = store;

// use hooks
onMounted(() => {
  fetchCosmetics();
});
</script>
