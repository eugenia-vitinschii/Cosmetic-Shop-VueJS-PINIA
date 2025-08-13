<template>
  <div class="admin">
    <div class="container">
      <div class="admin__wrapper">
        <the-admin-header />
        <p class="heading">All products {{ admin.products.length }} </p>
        <div class="admin-content">
          <table class="admin__table" v-if="admin.products">
            <thead>
              <tr>
                <th>Img </th>
                <th>Brand</th>
                <th>Name</th>
                <th>Category / Product Type</th>
                <th>Sliders Tags</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in admin.products" :key="product.id">
                <td>
                  <div class="admin__img">
                    <app-image :src="product.image_link" :backup="product.api_featured_image"
                      fallback="@/assets/img/no-img.jpg" alt="Img" />
                  </div>
                </td>
                <td>{{ product.brand }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.category }}/ {{ product.product_type }}</td>
                <td>
                  <div class="input__wrapper">
                    <select 
                    multiple 
                    v-model="product.sliderTags"
                    @change="onSliderChange(product)"
                    >
                      <option v-for="option in sliderOptions" :key="option" :value="option">
                        {{ option }}
                      </option>
                    </select>
                    <span v-if="status.isSaving" >Saving...!!!!</span>
                    <span v-else-if="status.isSaved">Saved!</span>
                  </div>
                </td>
                <td>
                  <button @click="deleteItem(product.id)" class="delete tooltip">
                    <span class="tooltip-text small-text">delete</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                      fill="#e8eaed">
                      <path
                        d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
                    </svg>
                  </button>
                </td>
                <td>
                  <router-link :to="'/admin/update/' + product.id" class="edit  tooltip">
                    <span class="tooltip-text small-text">edit</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                      fill="#e8eaed">
                      <path
                        d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                    </svg>
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

<script setup lang="ts">
// import vue hooks
import { onMounted } from "vue";

//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue";
import AppImage from "@/components/core/AppImage.vue";

//pinia store imports
import { useAdminStore } from "@/stores/admin.store"
import { useAutoSave } from "@/composables/useAutoSave";

import type{ Product } from "@/models/product";

//component settings
defineOptions({
  name: "ProductDashboardView",
});
//pinia variables
const admin = useAdminStore();

//delete item
const deleteItem = (id?: string) => {
  if (!id) return;
  const confirm = window.confirm("delete item?");
  if (confirm) {
    admin.deleteProduct(id);
  }
}

const sliderOptions = [
  "top", "brand", "category"
];


//context
const {save: autoSave, isSaving, isSaved} = 
useAutoSave((id: string, payload: Product) => admin.updateProduct(id, payload), 800)

//statuses
const status = {isSaving, isSaved}

//helper: copy object
function clonePlain<T>(obj: T): T{
  try{
    return typeof structuredClone === 'function' ? structuredClone(obj) : JSON.parse(JSON.stringify(obj))
  } catch {
    return JSON.parse(JSON.stringify(obj))
  }
}

function onSliderChange(product: Product){
  if(!product?.id) return
  const payload = clonePlain(product)
  autoSave(product.id, payload) 
}

// use hooks
onMounted(() => {
  admin.fetchAllProducts();
  admin.products.forEach( p => {
    if(!Array.isArray(p.sliderTags)){
      p.sliderTags = []
    }
  })
});


</script>
