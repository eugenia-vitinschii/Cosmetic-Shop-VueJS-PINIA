//vue router
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
// import routes
import adminRoutes from './admin.routes';
import accountRoutes from "./account.routes";
import aboutRoutes from "./about.routes";
import brandRoutes from "./brand.routes";
import categoryRoutes from "./category.routes";
import productTypeRoutes from "./product-type.routes";

//routes
const routes: RouteRecordRaw[] = [
      ...adminRoutes,
    ...accountRoutes,
    ...aboutRoutes,
    ...brandRoutes,
    ...categoryRoutes,
    ...productTypeRoutes,
]

//creste router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from,  next) =>{
  const user = JSON.parse(localStorage.getItem("user") ||"null" );

  if(to.meta.requiresAdmin){
    if(!user || user.role !== "admin"){
      return next("/")
    }
  }
  next()
})

export default router;
