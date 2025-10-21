<template>
   <div class="admin-recent">
      <p class="admin-subheading">Recent added</p>
      <table class="admin-recent__table" v-if="recentProducts.length">
         <thead>
            <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Brand</th>
               <th>Category/Type</th>
               <th>Date</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="p in recentProducts">
               <td>{{ p.id }}</td>
               <td>{{ p.name }}</td>
               <td>{{ p.brand }}</td>
               <td>{{ p.category }} <span v-if="p.category && p.product_type">/</span>{{ p.product_type }}</td>
               <td>{{ p.created_at ? new Date(p.created_at).toLocaleDateString() : ''}}</td>
            </tr>
         </tbody>
      </table>
      <p class="admin-subheading" v-else>No products yet</p>
   </div>
</template>

<script setup lang="ts">
//vue 
import { computed } from 'vue';
//pinia
import { useCosmeticStore } from '@/stores/cosmetic.store';

//Component settings
defineOptions({
  name: 'AdminRecentProducts'
})

//variable
const cosmetics = useCosmeticStore()

//fetch last 5 products

const recentProducts = computed(() => {
   return cosmetics.products.slice().sort(( a, b) =>{
      const dateA = new Date(a.created_at || '').getTime()
      const dateB = new Date(b.created_at || '').getTime()
      return dateB - dateA
   })
   .slice(0, 5)
})

</script>
