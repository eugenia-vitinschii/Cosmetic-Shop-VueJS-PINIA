<template>
  <div class="auth">
    <div class="container">
      <div class="auth__wrapper">
        <div class="auth__title">
          <div class="auth__title--img">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
          </div>
          <p class="subheading">Login</p>
        </div>
        <div class="auth__container">
          <form  class="auth__form">
            <div class="custom-input__wrapper">
              <label class="body-text">Name</label>
              <input
                class="custom-input-text"
                type="text"
                placeholder="enter name"
              />
            </div>
            <div class="custom-input__wrapper">
              <label class="body-text">Password</label>
              <div class="custom-input-password">
               <input
                  class="custom-input-text"
                  type="password"
                  placeholder="••••••••••"
              />
              <button class="custom-input-password__button">
               <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
               <svg v-else xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="M240-640h360v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85h-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640Zm0 480h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM240-160v-400 400Z"/></svg>
              </button>
              </div>
            </div>
            <button class=" custom-button auth__button">login</button>
          </form>
         <p class="body-text">
            Don’t have an account?
            <span>
               <router-link to="/sign-up"class="body-text bold" >Create an account</router-link>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from 'vue'

//component settings
defineOptions({
   name: "LoginView"
})

const showPassword = ref(true)


</script>