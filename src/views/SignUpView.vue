<template>
<div class="login"> 
   <div class="container">
      <div class="login__wrapper">
         <p class="heading">SignUp</p>
          <router-link to="/login">Login</router-link>
      </div>
   </div>
</div>
</template>

<script setup>
//vue
import {defineOptions} from "vue";

//component settings
defineOptions({
   name: "SignUp"
})
</script>