<template>
  <div class="login">
    <div class="container">
      <div class="login__wrapper">
        <div class="login__text">
          <p class="heading">SignUp</p>
          <p class="subheading">Join us!</p>
          <p class="body-text">Sign up now to become a member.</p>
        </div>
        <div class="login__container">
          <input type="text" name="name" placeholder="name"/>
          <input type="email" name="email"  placeholder="email"/>
          <input type="password" name="password"  placeholder="password"/>
          <button>SignUp</button>
          <p class="body-text">
            Already a member?
            <span><router-link to="/login">Login</router-link></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//vue
import { defineOptions } from "vue";

//component settings
defineOptions({
  name: "SignUp",
});
</script>