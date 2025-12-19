<template>
<div class="admin">
   <div class="container">
      <div class="admin__wrapper">
         <the-admin-header/>
         <admin-title>
            Edit: <span>: {{ form.username }}</span>
         </admin-title>
         <div class="admin-update">
            <div class="admin-product-form">
               <form 
                  class="admin-product-form__form" 
                  v-if="!loading"
                  @submit.prevent="save"
               >
                  <div class="admin-form-item" >
                  <h3 class="admin-subheading">Edit user</h3>
                     <div class="admin-form-item__wrapper">
                        <admin-input 
                           :label="'Name'" 
                           :placeholder="'User name'" 
                           v-model.trim="form.username"
                        />
                        <admin-input 
                           :label="'Email'" 
                           :placeholder="'user@email.com'" 
                            v-model.trim="form.email"
                        />
                        <div class="admin-input__wrapper">
                           <label 
                              for="category" 
                              class="admin-body-text"
                           >
                              Role
                           </label>
                           <select 
                              class="admin-select"
                              name="category" 
                              id="category" 
                              v-model="form.role">
                                 <option 
                                 v-for="option in rolesOptions"
                                 :key="option"
                                 :value="option"
                                 >
                                    {{ option }}
                                 </option>
                           </select>
                        </div>
                     </div>
                  </div>
                     <div class="admin-product-form__actions">
                        <button class="admin-svg-button" @click="$router.go(-1)" type="button">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
                        </button>
                        <button class="admin-svg-button" type="submit">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                        </button>
                     </div>
               </form>
               <p class="admin-heading" v-else>loading...</p>
            </div>
         </div>
      </div>
   </div>
</div>
</template>

<script setup lang="ts">
//vue 
import {ref,  onMounted} from "vue"

//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue";
import AdminTitle from "@/components/admin/ui/AdminTitle.vue";
import AdminInput from "@/components/admin/ui/AdminInput.vue";

//route
import { useRoute, useRouter } from "vue-router";

//pinia
import { useAdminUserStore } from "@/stores/admin.users.store"

//type
import type { UpdateUserPayload } from "@/types/updateUserPayload";

//Component settings
defineOptions({
  name: 'UserEditView'
})

//variables
const adminUser = useAdminUserStore();

const route = useRoute();
const router = useRouter();

const loading = ref(false);

const id =  String(route.params.id);

const rolesOptions = [
   "admin", "user"
];

const form = ref<UpdateUserPayload>({
   username: "",
   email: "",
   role: "user"
})

const save = async () =>{
  await adminUser.updateUser(id, form.value)

   router.push("/admin/users")
}

onMounted(async () => {
   loading.value = true;
   const data = await adminUser.getUserById(id);
  
   if(!data){
      loading.value = false;
      return;
   }

   form.value = {
      username: data.username,
      email: data.email,
      role: data.role
   }

   loading.value = false
})

</script>
