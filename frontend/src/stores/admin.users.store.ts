// admin user store

import { defineStore } from "pinia";
import {ref} from "vue";

import api from "@/api/api";

import type {UpdateUserPayload} from "@/types/updateUserPayload"
import type {User} from "@/models/user"

export const useAdminUserStore = defineStore("adminUser", () => {
   const users = ref<User[]>([]);
   const loading = ref(false);
   const error = ref<string | null>(null);

  /* === FFETCH USERS === */
   async function fetchUsers(){
      loading.value = true
      try{
         const {data} = await api.get("/admin/users");
         return users.value = data;
      } catch(e){
         error.value = "Failed to load users";
         return null
      } finally {
         loading.value = false
      }
   }

   /* === GET USER BY ID=== */
   async function getUserById(id: string){
      try{
         const {data} = await api.get(`/admin/users/${id}`);
         return data;
      }catch(err){
         console.error("Get user by id error:", err);
         return null
      }
   }

   /* === UPDATE USERS === */
   async function updateUser(id: string, payload: UpdateUserPayload) {
      try{
         const { data } = await api.put(`/admin/users/${id}`, payload);

         const index = users.value.findIndex(u => u.id ===id);
         if(index !== -1){
            users.value[index] = data
         }
      }catch(err){
         console.error("Update user error:", err)
      }
   }

   /* === DELETE USERS === */
   async function deleteUser(id: string){
      try{
         await api.delete(`/admin/users/${id}`)
         users.value = users.value.filter((user) => user.id !== id);
      }catch(err){
         console.error("Delete user error!", err)
      }
   }

   return {
      users,
      loading,
      error,
      fetchUsers,
      deleteUser,
      updateUser,
      getUserById,
   }
});