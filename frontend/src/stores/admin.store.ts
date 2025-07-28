//stores/admin.store.ts

import { defineStore } from "pinia";
import { reactive } from "vue";


import type { CosmeticState } from "@/types/cosmetic"
import { Product } from "@/models/product"
import { api } from "@/utils/api"

export const adminStore = defineStore("admin", () => {
   const admin = reactive<CosmeticState>({
      products: [],
      limit: 30,
      page: 1,
      complected: true,
      count: 1
   })

   async function createProduct(payload: Product) {
      if (!payload.name || !payload.brand) return;
      try {
         const createdAt = new Date().toISOString()
         const { data } = await api.post("/cosmetics", {
            ...payload,
            created_at: createdAt,
            updated_at: createdAt,
         });
         admin.products.push(data);
      } catch (err) {
         console.log(err)
      }
   }

   async function updateProduct(id: string, payload: Product) {
      try {
         const { data } = await api.put(`/cosmetics/${id}`, payload);

         const index = admin.products.findIndex(p => p.id === id);
         if (index !== -1) {
            admin.products[index] = data;
         }
      } catch (err) {
         console.log(err)
      }
   }

   async function deleteProduct(id: string) {
      try {
         await api.delete(`/cosmetics/${id}`);
         admin.products= admin.products.filter((item) => item.id !== id);
      } catch (err) {
         console.error("Delete item ERROR!", err);
      }
   }


   return { createProduct, updateProduct, deleteProduct }
})


