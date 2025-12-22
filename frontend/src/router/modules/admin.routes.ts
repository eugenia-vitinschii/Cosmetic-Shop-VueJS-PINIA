// admin routes admin, all users, manage users, all products, manage products()

import type { RouteRecordRaw } from "vue-router";

export const adminRoutes: RouteRecordRaw[] = [
   {
    path: "/admin",
    meta: {requiresAdmin: true},
    children: [
      {
        path: "",
        component: () => import("@/views/admin/AdminDashboardView.vue"),
      },
      {
        path: "all",
        component: () => import("@/views/admin/ProductDashboardView.vue"),
      },
      {
        path: "users",
        component: () => import("@/views/admin/UsersDashboardView.vue")
      },
      {
        path: "user/:id",
        component: () => import("@/views/admin/UserEditView.vue"),
        props: true,
      },
      {
        path: "add",
        component: () => import("@/views/admin/ProductAddView.vue"),
      },
      {
        path: "update/:id",
        component: () => import("@/views/admin/ProductEditView.vue"),
        props: true,
      },
    ],
  },
]
