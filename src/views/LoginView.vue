<template>
<div class="login"> 
   <div class="container">
      <div class="login__wrapper">
         <p class="heading">Login</p>
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
</script>