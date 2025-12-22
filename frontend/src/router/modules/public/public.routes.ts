//public routes (home, product)

import type { RouteRecordRaw } from "vue-router";

export const publicRoutes: RouteRecordRaw[] = [
   {
      path: "/",
      name: "home",
      component: () => import("@/views/public/common/HomeView.vue"),
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("@/views/public/catalog/ProductView.vue"),
    },
]
