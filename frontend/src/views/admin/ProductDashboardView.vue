<template>
  <div class="admin">
    <div class="container">
      <div class="admin__wrapper">
        <admin-toast ref="toast"/>
        <the-admin-header />
        <admin-title title="Product Dashboard"/>
        <product-filters
          v-model="filters"
          :brands="admin.brands"
          :categories="admin.categories"
          :productTypes="admin.productTypes"
          :sliderTags="admin.sliderTags"
        />
        <section class="admin-products">
          <table class="admin-table" v-if="admin.products">
            <thead>
              <tr>
                <th class="admin-body-text">Img </th>
                <th class="admin-body-text">Id</th>
                <th class="admin-body-text">Brand</th>
                <th class="admin-body-text">Name</th>
                <th class="admin-body-text">Category / Product Type</th>
                <th class="admin-body-text">Sliders Tags</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in filteredProducts" :key="product.id">
                <td>
                  <div class="admin-table__img">
                    <app-image :src="product.image_link" :backup="product.api_featured_image"
                      fallback="@/assets/img/no-img.jpg" alt="Img" />
                  </div>
                </td>
                <td class="admin-body-text">
                  {{ product.id }}
                </td>
                <td>{{ product.brand }}</td>
                <td class="admin-body-text">{{ product.name }}</td>
                <td class="admin-body-text">{{ product.category }} <span v-if="product.category && product.product_type">/ </span>{{ product.product_type }}</td>
                <td>
                  <div class="admin-table__options">
                    <label 
                      class="admin-custom-checkbox"
                      v-for="option in admin.sliderTags"
                      :key="option"
                    >
                      <input 
                        type="checkbox"
                        :value="option"
                        :checked="product.sliderTags?.includes(option)"
                        @change="onCheckboxChange(product, option, $event)"
                      >
                      <span class="checkmark"></span>
                      <span>{{ option }}</span>
                      </input>
                    </label>
                  </div>
                </td>
                <td>
                  <button @click="deleteItem(product.id)" class="admin-svg-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                      <path
                        d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
                    </svg>
                  </button>
                </td>
                <td>
                  <router-link :to="'/admin/update/' + product.id" class="admin-svg-button">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" >
                      <path
                        d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                    </svg>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
// import vue hooks
import { onMounted, ref, computed } from "vue";

//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue";
import AdminTitle from "@/components/admin/ui/AdminTitle.vue";
import AdminToast from "@/components/admin/ui/AdminToast.vue";

   
import AppImage from "@/components/core/AppImage.vue";
import ProductFilters from "@/components/admin/ProductFilters.vue";
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

const toast = ref<InstanceType<typeof AdminToast>>()

//context
const {save: autoSave} = 
useAutoSave((id: string, payload: Product) => admin.updateProduct(id, payload), 800)


//helper: copy object
function clonePlain<T>(obj: T): T{
  try{
    return typeof structuredClone === 'function' ? structuredClone(obj) : JSON.parse(JSON.stringify(obj))
  } catch {
    return JSON.parse(JSON.stringify(obj))
  }
}


function onCheckboxChange(product: Product, option: string, event: Event){
  const checked = (event.target as HTMLInputElement).checked

  if(!Array.isArray(product.sliderTags)) {
    product.sliderTags = []
  }

  if(checked) {
    if(!product.sliderTags.includes(option)){
      product.sliderTags.push(option)
    
  } 
  }else{
    product.sliderTags = product.sliderTags.filter( o => o !== option)}
  if(!product.id){
    toast.value?.showToast('Error: misssing id')
    return
  }

  const payload = clonePlain(product)
  autoSave(product.id, payload)
  toast.value?.showToast('Sliter tags updated')
}


// use hooks
onMounted(async() => {
  await admin.fetchAllProducts();
  admin.products.forEach( p => {
    if(!Array.isArray(p.sliderTags)){
      p.sliderTags = []
    }
  })
});

const filters = ref({ brand: '', category: '', type: '', query: '', tag: ''})

//filter function
const filteredProducts = computed(() => {
  const q = filters.value.query.trim().toLowerCase();

  return admin.products.filter( p => {
    const conditions = [
      !filters.value.brand || p.brand === filters.value.brand,
      !filters.value.category || p.category === filters.value.category,
      !filters.value.type || p.product_type === filters.value.type,
      !filters.value.tag || p.sliderTags?.some(
        tag => tag.toLocaleLowerCase() === filters.value.tag.toLocaleLowerCase()),
      !q || p.name?.toLowerCase().includes(q) || String(p.id).toLowerCase().includes(q)
    ];
    return conditions.every(Boolean);

})
})

</script>
