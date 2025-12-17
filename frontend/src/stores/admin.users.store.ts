// admin user store

import { defineStore } from "pinia";
import {ref} from "vue";
import api from "@/api/api";
import type {User} from "@/types/user"


export const useAdminUserStore = defineStore("adminUser", () => {
   const users = ref<User[]>([]);
   const loading = ref(false);
   const error = ref<string | null>(null);

   async function fetchUsers(){
      loading.value = true
      try{
         const {data} = await api.get("admin/users");
         users.value = data;
      } catch(e){
         error.value = "Failed to load users";
      } finally {
         loading.value = false
      }
   }

   return {
      users,
      loading,
      error,
      fetchUsers
   }
});