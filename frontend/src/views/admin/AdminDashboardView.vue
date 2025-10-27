<template>
   <div class="admin">
      <div class="container">
         <div class="admin__wrapper">
            <the-admin-header/>
            <section class="admin-top">
               <div class="admin-todos">
                  <admin-todo/>
               </div>
               <div class="admin-stats">
                  <admin-stat-card
                  :value="admin.totalProducts"
                  label="Total Products"
               >
                  <template #icon>
                     <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                  </template>
               </admin-stat-card>
                <admin-stat-card
                  label="Total Brands"
                  :value="admin.totalBrands"
               >
                  <template #icon>
                     <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  ><path d="M342-160h276l40-160H302l40 160Zm0 80q-28 0-49-17t-28-44l-45-179h520l-45 179q-7 27-28 44t-49 17H342ZM200-400h560v-80H200v80Zm280-240q0-100 70-170t170-70q0 90-57 156t-143 80v84h320v160q0 33-23.5 56.5T760-320H200q-33 0-56.5-23.5T120-400v-160h320v-84q-86-14-143-80t-57-156q100 0 170 70t70 170Z"/></svg>               </template>
               </admin-stat-card>
               <admin-stat-card
                  label="Categories"
                  :value="admin.totalCategories"
               >
                  <template #icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z"/></svg></template>
               </admin-stat-card>
                 <admin-stat-card
                  label="Types"
                  :value="admin.totalTypes"
               >
                  <template #icon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M280-80v-160H0l154-240H80l280-400 120 172 120-172 280 400h-74l154 240H680v160H520v-160h-80v160H280Zm389-240h145L659-560h67L600-740l-71 101 111 159h-74l103 160Zm-523 0h428L419-560h67L360-740 234-560h67L146-320Zm0 0h155-67 252-67 155-428Zm523 0H566h74-111 197-67 155-145Zm-149 80h160-160Zm201 0Z"/></svg>                  </template>
               </admin-stat-card>
               </div>
            </section>
            <section class="admin-analytics">
               <admin-chart
                  title="Products by Category"
                  type="pie"
                  :labels="admin.categoryLabels"
                  :data="admin.categoryData"
               />
               <admin-chart
                  title="Products by Brand"
                  type="bar"
                  :labels="admin.brandLabels"
                  :data="admin.brandData"
               />
               <admin-chart
                  title="Products by Types"
                  type="line"
                  :labels="admin.typesLabels"
                  :data="admin.typesData"
               />
            </section>
            <section>
               <admin-recent-products/>
            </section>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts"> 

//import components
import TheAdminHeader from "@/components/layout/TheAdminHeader.vue"
import AdminTodo from "@/components/admin/ui/AdminTodo.vue";
import AdminStatCard from "@/components/admin/ui/AdminStatCard.vue";
import AdminChart from "@/components/admin/ui/AdminChart.vue";
import AdminRecentProducts from "@/components/admin/ui/AdminRecentProducts.vue";
//pinia store imports
import { useAdminStore } from "@/stores/admin.store"

//component settings
defineOptions({
   name: "AdminDashboardView"
})

const admin = useAdminStore()
</script>
