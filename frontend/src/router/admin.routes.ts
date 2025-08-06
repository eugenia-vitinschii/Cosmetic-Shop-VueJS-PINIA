//admin routes
import type { RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[]= [
  {
    path: "/admin",
    children: [
      {
        path: "",
        component: () => import("@/views/admin/AdminView.vue"),
      },
      {
        path: "all",
        component: () => import("@/views/admin/ProductDashboardView.vue"),
      },
      {
        path: "add",
        component: () => import("@/views/admin/AddProductView.vue"),
      },
      {
        path: "update/:id",
        component: () => import("@/views/admin/UpdateView.vue"),
        props: true,
      },
    ],
  },
];

export default routes;

