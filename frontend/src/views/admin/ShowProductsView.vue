<template>
  <div class="admin">
    <div class="container">
      <div class="admin__wrapper">
         <the-admin-header /> 
        <p class="heading">All products {{cosmetics.length}} </p>
       
        <div class="admin-content">
          <table class="admin__table">
            <thead>
                 <tr>
              <th>Brand</th>
              <th>Name</th>
              <th>Category / Product Type</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
         <tbody>
                     <tr v-for="product in cosmetics" :key="product.id">
              <td>{{ product.brand }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.category }}/ {{ product.product_type }}</td>
              <td>
                <button  @click="deleteItem(product.id)" class="delete tooltip">
      <span class="tooltip-text small-text">delete</span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
                </button>
              </td>
              <td>
                <router-link  :to="'/update/' + product.id" class="edit  tooltip">
      <span class="tooltip-text small-text">edit</span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
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
import { useCosmeticStore } from "@/stores";
import { storeToRefs } from "pinia";

//pinia variables
const store = useCosmeticStore();
const { cosmetics } = storeToRefs(store);
const { fetchCosmetics, deleteProduct } = store;

//delete item
const deleteItem = (id) => {
  const confirm = window.confirm("delete item?");
  if (confirm){
    deleteProduct(id);

  }
}

// use hooks
onMounted(() => {
  fetchCosmetics();
});
</script>
