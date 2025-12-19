//admin routes
import type { RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[]= [
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

];

export default routes;

