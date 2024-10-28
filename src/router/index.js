import { createRouter, createWebHistory } from "vue-router";

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
      props: true
    },
    {
      path: "/all-brand",
      name: "all-brand",
      component: () => import("../views/AllBrandView.vue"),
    },
    {
      path: "/brand/:brand",
      name: "brand",
      component: () => import("../views/BrandView.vue"),
    },
    {
      path: "/all-product-type",
      name: "all-product-type",
      component: () => import("../views/AllProductTypeView"),
    },
    {
      path: "/product-type/:product_type",
      name: "product-type",
      component: () => import("../views/ProductTypeView.vue"),
    },
    {
      path: "/all-category",
      name: "all-category",
      component: () => import("../views/AllCategoryView"),
    },
    {
      path: "/category/:category",
      name: "category",
      component: () => import("../views/CategoryView.vue"),
    },
  ],
});

export default router;
