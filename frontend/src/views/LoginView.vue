<template>
<div class="login"> 
   <div class="container">
      <div class="login__wrapper">
         <p class="heading">Login</p>
         <div class="login__container">
            <input type="text" name="name" v-model="name">
            <input type="password" name="password" v-model="password">
            <button @click="login">Login</button>
         </div>
         <router-link to="/sign-up">SignUp</router-link>
      </div>
   </div>
</div>
</template>

<script setup>
//vue
import {defineOptions} from "vue";

//component settings
defineOptions({
   name: "LoginView"
})

//pinia
import { useCosmeticStore } from "@/stores";
// import { storeToRefs } from "pinia";
 
const store = useCosmeticStore();

// pinia store

const {  login} = store;
</script>