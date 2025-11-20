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
          <form  class="auth__form" @submit.prevent="onLogin">
            <div class="custom-input__wrapper">
              <label class="body-text">Name</label>
              <input
                class="custom-input-text"
                type="text"
                placeholder="enter name"
                v-model="username"
              />
            </div>
            <div class="custom-input__wrapper">
              <label class="body-text">Password</label>
              <div class="custom-input-password">
               <input
                  class="custom-input-text"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="••••••••••"
                  v-model="password"
              />
              <button 
                class="custom-input-password__button"
                @click="showPassword = !showPassword"
                >
               <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
               <svg v-else xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="M240-640h360v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85h-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640Zm0 480h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM240-160v-400 400Z"/></svg>
              </button>
              </div>
            </div>
            <div class="auth__buttons">
              <button  
                v-if="auth.user"
                class="custom-button auth__button"  
                @click="logoutUser"
              >
                Logout
              </button>
              <button 
                v-else
                class="custom-button auth__button"
                @click="onLogin"
                :disabled="auth.loading"
              >
              {{ auth.loading ? "login..." : "Login" }}
            </button>
            </div>
            <div class="auth__messages">
              <p class="body-text red" v-if="auth.error">
                {{ auth.error }}
              </p>
              <p class="body-text" v-if="auth.user">
              Hi {{ auth.user?.username }}, role: <span class="bold">{{ auth.user?.role }} </span>    
             </p>

            </div>
          </form>
         <p class="body-text" v-if="!auth.user">
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
//vue
import {ref} from 'vue'

//store
import { useAuthStore } from '@/stores/auth.store';

//component settings
defineOptions({
   name: "LoginView"
})

//variables
const showPassword = ref(false)

const auth = useAuthStore();

const username = ref("");
const password= ref("");


const onLogin = async () => {
  const ok = await auth.login(username.value, password.value);

  if(ok){
    console.log(`Hello, ${auth.user?.username}! Role: ${auth.user?.role}`)
  }
  username.value = ''
  password.value = ''

}


const logoutUser  = () =>{
  username.value = ''
  password.value = ''

  auth.logout()
}
</script>