//stores/auth.store.ts

import { defineStore } from "pinia";
import {ref} from 'vue'

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

   /* === AUTO LOGIN === */
   const savedUser = localStorage.getItem("user");
   if(savedUser){
      user.value = JSON.parse(savedUser)
   }

   /* === REGISTER=== */
   async function register(creadentials: {username: string, email: string, password: string}){
      loading.value = true;
      error.value = null;

      try{
         const res = await fetch("http://localhost:4000/api/auth/register",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(creadentials)
         });
         
         const data  = await res.json()

         if(!res.ok){
            error.value = typeof data.message === "string" ? data.message : "Registration failed!";
            console.error("Registration FAILED", error.value)
            return false;
         }
       
         user.value = data.user;

         localStorage.setItem("user", JSON.stringify(data.user));
         console.log("Registration: SUCCESS: ", data.user)
         return true

      }catch(err){
         console.error("Network error:", err)
         error.value = "Network error"
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
         const res = await fetch("http://localhost:4000/api/auth/login",{
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify({username, password})
         });

         const data = await res.json()

         if(!res.ok){
            error.value = typeof data.message === "string" ? data.message : "error loign";
            loading.value = false;
            return false;
         }
         user.value = data.user

         localStorage.setItem("user", JSON.stringify(data.user))

         
         return true;

      } catch(err) {
         error.value = "server error!"
         return false
      } finally{
         loading.value = false;
      }
   }

   /* === LOGOUT=== */
   function logout(){ 
      user.value = null
      localStorage.removeItem("user")
   }

   return { login, register,logout, user, loading, error}
})
