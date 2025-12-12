//stores/auth.store.ts

import { defineStore } from "pinia";
import {ref} from 'vue'
import api from "@/api/api";

interface UserData{
   username:string;
   email: string;
   password: string;
   role: "admin" | "user"
}

export const useAuthStore = defineStore("auth", ()=>{
   const user = ref <UserData | null>(null);
   const loading = ref(false);
   const error = ref<string | null>(null);
   const token = ref<string |null>(null)

   /* === AUTO LOGIN === */
   const savedUser = localStorage.getItem("user");
   const savedToken = localStorage.getItem("token");

   if(savedUser) user.value = JSON.parse(savedUser)
   if(savedToken) token.value = savedToken;


   /* === REGISTER=== */
   async function register(credentials: {username: string, email: string, password: string}){
      loading.value = true;
      error.value = null;

      try{
         const res = await api.post("/auth/register", credentials);

         user.value = res.data.user;
         token.value = res.data.token;

         localStorage.setItem("user", JSON.stringify(res.data.user));
         localStorage.setItem("token", res.data.token);

         return true

      }catch(err: any){
         error.value = err.response?.data?.message || "Registration failed";
         return false
      }finally{
         loading.value = false
      }
   }

   /* === LOGIN === */
   async function login(username: string, password: string) {
      loading.value=  true;
      error.value = null;

      try{
         const res = await api.post("/auth/login", {username, password});

         user.value = res.data.user;
         token.value = res.data.token;

         localStorage.setItem("user", JSON.stringify(res.data.user))
         localStorage.setItem("token", res.data.token)
         return true;

      } catch(err:any) {
         error.value =  err.response?.data?.message || "Login failed"
         return false
      } finally{
         loading.value = false;
      }
   }

   /* === LOGOUT=== */
   function logout(){ 
      user.value = null;
      token.value = null;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
   }

   return { login, register,logout, user, loading, error, token}
})
