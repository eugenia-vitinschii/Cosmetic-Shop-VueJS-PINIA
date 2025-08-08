//admin routes
import type { RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[]= [
  {
    path: "/admin",
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

