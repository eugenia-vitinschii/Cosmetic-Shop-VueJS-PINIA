//vue router
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
// import routes
import adminRoutes from './admin.routes';
import accountRoutes from "./account.routes";
import aboutRoutes from "./about.routes";
import brandRoutes from "./brand.routes";
import categoryRoutes from "./category.routes";
import producttypeRoutes from "./product-type.routes";

//routes
const routes: RouteRecordRaw[] = [
      ...adminRoutes,
    ...accountRoutes,
    ...aboutRoutes,
    ...brandRoutes,
    ...categoryRoutes,
    ...producttypeRoutes,
]

//creste router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
