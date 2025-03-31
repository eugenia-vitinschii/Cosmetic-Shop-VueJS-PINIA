import { createRouter, createWebHistory } from "vue-router";

// import routes
import adminRoutes from "./admin.routes";
import accountRoutes from "./account.routes";
import aboutRoutes from "./about.routes";
import brandRoutes from "./brand.routes";
import categoryRoutes from "./category.routes";
import producttypeRoutes from "./product-type.routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../views/ProductView.vue"),
      props: true,
    },
    ...adminRoutes,
    ...accountRoutes,
    ...aboutRoutes,
    ...brandRoutes,
    ...categoryRoutes,
    ...producttypeRoutes,
  ],
});

export default router;
