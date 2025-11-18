//stores/auth.store.ts

import { defineStore } from "pinia";
import {ref} from 'vue'

interface UserData{
   username:string;
   role: "admin" | "user"
}

export const useAuthStore = defineStore("auth", ()=>{
   const user = ref(null as UserData | null);
   const loading = ref(false);
   const error = ref(null as string | null);

   /* === LOGIN === */
   async function login(username: string, password: string) {
      loading.value=  true;
      error.value = null;

      try{
         const res = await fetch("http://localhost:4000/api/auth/login",{
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify({username, password})
         });

         const data = await res.json()

         if(!res.ok){
            error.value = data.message || "error loign";
            loading.value = false;
            return false;
         }

         user.value = {
            username: data.username,
            role: data.role
         };

         loading.value = false;
         return true;

      } catch(err) {
         error.value = "server error!"
         loading.value = false
         return false
      }
   }

   /* === LOGOUT=== */
   function logout(){ 
      user.value = null
   }

   return { login, logout, user, loading, error}
})
