//stores/admin.store.ts

import { defineStore } from "pinia";
import { ref, computed } from "vue";

import { useCosmeticStore } from "./cosmetic.store";


// import type { CosmeticState } from "@/types/cosmetic"
import { Product } from "@/models/product"
import { api } from "@/utils/api"

export const useAdminStore = defineStore("admin", () => {
   const products = ref<Product[]>([]);
   const limit = ref(30);
   const page = ref(1)
   const complected = ref(true);
   const count = ref(1)

   const cosmetics = useCosmeticStore();
   
   /* === DASHBOARD STATISTICS=== */
   const totalProducts = computed(() => cosmetics.products.length) 
   const totalBrands = computed(() => new Set(cosmetics.products.map(p => p.brand)).size)
   const totalCategories = computed(() => new Set(cosmetics.products.map(p => p.category)).size)
   const totalTypes = computed(() => new Set(cosmetics.products.map(p => p.product_type)).size)

   /* === DASHBOARD ANALYTICS=== */
   const brandLabels = computed(() => 
      [...new Set(cosmetics.products.map(p => p.brand).filter((b): b is string => Boolean(b)))])
   const brandData = computed(() => 
      brandLabels.value.map(b => cosmetics.products.filter(p => p.brand === b).length))

   const categoryLabels = computed(() =>
      [...new Set(cosmetics.products.map(p => p.category).filter((b): b is string => Boolean(b) ))]
   )
   const categoryData = computed(() =>
      categoryLabels.value.map(c => cosmetics.products.filter(p => p.category === c).length)
   )

   const typesLabels = computed(() =>
      [...new Set(cosmetics.products.map(p => p.product_type).filter((b): b is string => Boolean(b) ))]
   )
   const typesData = computed(() =>
      typesLabels.value.map(c => cosmetics.products.filter(p => p.product_type === c).length)
   )
   /* === FETCH PRODUCTS === */

   const fetchAllProducts = async () => {
      await cosmetics.fetchCosmetics();

      if (cosmetics.products.length) {
         products.value = cosmetics.products.slice();
      }
      console.warn('Products not loaded yet!')
   }

   async function fetchProductById(id: string): Promise<Product | null> {
    try {
      const response = await api.get(`/cosmetics/${id}`);
      return response.data;
    } catch (error) {
      console.log("Admin: fetchProductById(id) error:", error);
      return null
    }
  }

   /* === FILTER PRODUCTS === */

   const brands = computed (() => {
      const set = new Set<string>();
      for ( const p of products.value) if( p.brand) set.add(p.brand);
      return [...set].sort()
   })
   const categories = computed (() => {
      const set = new Set<string>();
      for ( const p of products.value) if( p.category) set.add(p.category);
      return [...set].sort()
   })
   const productTypes = computed (() => {
      const set = new Set<string>();
      for ( const p of products.value) if( p.product_type) set.add(p.product_type);
      return [...set].sort()
   })

   const sliderTags = computed(() =>{
      const tags = new Set<string>()
      cosmetics.products.forEach(p => {
         p.sliderTags?.forEach(tag => tags.add(tag))
      })
      return Array.from(tags)
      })
    
   /* === CREATE & UDDATE & DELETE PRODUCTS === */

   async function createProduct(payload: Product) {
      if (!payload.name || !payload.brand) return;
      try {
         const createdAt = new Date().toISOString()
         const { data } = await api.post("/cosmetics", {
            ...payload,
            created_at: createdAt,
            updated_at: createdAt,
         });
         products.value.push(data);
         return data;
      } catch (err) {
         console.log('Create Product Error', err)
      }
   }

   async function updateProduct(id: string, payload: Product) {
      try {
         const { data } = await api.put(`/cosmetics/${id}`, payload);

         const index = products.value.findIndex(p => p.id === id);
         if (index !== -1) {
            products.value[index] = data;
         }
      } catch (err) {
         console.log(err) 
      }
   }

   async function deleteProduct(id: string) {
      try {
         await api.delete(`/cosmetics/${id}`);
         products.value = products.value.filter((item) => item.id !== id);
      } catch (err) {
         console.error("Delete item ERROR!", err);
      }
   }

   return { products,brandLabels, sliderTags, brandData,categoryLabels, categoryData,typesData, typesLabels,  totalProducts, totalBrands, totalCategories, totalTypes,limit, page, complected, count, fetchAllProducts,fetchProductById, brands, categories, productTypes, createProduct, updateProduct, deleteProduct }
})


