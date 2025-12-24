<template>
<div class="account">
   <div class="container">
      <div class="account__wrapper">
         <div class="page-header">
          <back-button/>
          <the-breadcrumbs
            :items="[
              {label: 'home', to: '/'},
            ]"
             :current="'account'"
          />
        </div>
         <p class="heading">Hi, {{ auth.user?.username }}!</p>
         <div class="account__nav">
            <div class="account__nav--img">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"   fill="#e3e3e3"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
            </div>
            <div class="account__nav--buttons">
               <router-link 
                  class="button-svg"
                  to="/account/edit"
               >
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
               </router-link>
               <button
                  class="button-svg"
                  @click="onLogout"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
               </button>               
            </div>
         </div>
      </div>
   </div>
</div>
<div class="swiper">
   <div class="container">
   <div class="swiper__wrapper">
      <p class="heading">Top products</p>
        <top-sliders/>
      </div>
   </div>
</div>
</template>

<script setup lang="ts">
//vue 
import {useRouter} from "vue-router"
//components
import BackButton from '@/components/core/BackButton.vue';
import TheBreadcrumbs from "@/components/core/Breadcrumbs.vue"
import TopSliders from '@/components/sliders/TopSliders.vue';
//pinia
import { useAuthStore } from '@/stores/auth.store'

//Component settings
defineOptions({
  name: 'AccountView'
})

//pinia variables
const auth = useAuthStore()

const router = useRouter()

function onLogout(){
   auth.logout();
   router.push("/login")
}

</script>
