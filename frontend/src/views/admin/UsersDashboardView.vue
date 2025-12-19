<template>
  <div class="admin">
   <div class="container">
      <div class="admin__wrapper">
         <the-admin-header/>
         <admin-title title="Users Dashboard"/>
         <section class="admin-users admin-products">
            <table class="admin-table">
               <thead>
                  <tr>
                     <th class="admin-body-text">User Name</th>
                     <th class="admin-body-text">Email</th>
                     <th class="admin-body-text">Role</th>
                     <th></th>
                     <th></th>
                  </tr>
               </thead>
               <tbody v-if="adminUser.users.length">
                  <tr 
                     v-for="user in adminUser.users ?? []"
                     :key="user.id"
                  >
                     <td class="admin-body-text">{{ user.username }}</td>
                     <td class="admin-body-text">{{ user.email }}</td>
                     <td class="admin-body-text">{{user.role}}</td>
                     <td>
                        <button 
                           @click="deleteUser(user.id)"
                           class="admin-svg-button"
                           >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" /></svg>
                        </button>
                     </td>
                     <td>
                        <router-link :to="'/admin/user/' + user.id" class="admin-svg-button">
                           <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /> </svg>
                        </router-link>
                     </td>
                  </tr>
               </tbody>
               <p class="admin-heading" v-else>
                  No users!
               </p>
            </table>
         </section>
      </div>
   </div>
  </div>
</template>

<script setup lang="ts">
//vue 

//components
import TheAdminHeader from '@/components/layout/TheAdminHeader.vue';
import AdminTitle from '@/components/admin/ui/AdminTitle.vue';

//pinia
import { useAdminUserStore } from '@/stores/admin.users.store';
import { onMounted } from 'vue';

//Component settings
defineOptions({
  name: 'UsersDashboardView'
})


//variables
const adminUser = useAdminUserStore();

//functions

const deleteUser = (id?: string) => {
  if (!id) return;
  const confirm = window.confirm("delete User?");
  if (confirm) {
    adminUser.deleteUser(id);
  }
}

//hooks
onMounted(() => {
   adminUser.fetchUsers();
})
</script>
