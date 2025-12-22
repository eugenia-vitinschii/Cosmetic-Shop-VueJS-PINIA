/* === vue router === */
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

/* === modules=== */
import {accountRoutes} from "./modules/account.routes"
import { adminRoutes } from "./modules/admin.routes";
import { authRoutes } from "./modules/auth.routes";

/* === modules/public === */
import {publicRoutes} from './modules/public/public.routes'; 
import { infoRoutes } from "./modules/public/info.routes";
import { categoryRoutes } from "./modules/public/category.routes";
import { typesRoutes } from "./modules/public/type.routes";
import { brandRoutes } from "./modules/public/brand.routes";


//routes
const routes: RouteRecordRaw[] = [
  ...accountRoutes,
  ...adminRoutes,
  ...authRoutes,
  ...publicRoutes,
  ...infoRoutes,
  ...categoryRoutes,
  ...typesRoutes,
  ...brandRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from,  next) =>{
  const user = JSON.parse(localStorage.getItem("user") ||"null" );

  /* ADMIN ONLY */
  if(to.meta.requiresAdmin){
    if(!user || user.role !== "admin"){
      return next("/")
    }
  }

  /* AUTH ONLY */
   if(to.meta.requiresAuth){
    if(!user){
      return next("/login")
    }
   }

   /* GUEST ONLY  */
   if(to.meta.guestOnly){
    if(user) {
      return next("/account")
    }
   }
  next()
})

export default router;
