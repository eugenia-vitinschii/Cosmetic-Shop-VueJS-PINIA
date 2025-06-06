//brand routes
import type { RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[]= [
  {
    path: "/brand",
    name: "brand",
    children: [
      {
        path:'',
        component: () => import("@/views/AllBrandView.vue"),
      },
      {
        path: "/brand/:brand",
        component: () => import("@/views/BrandView.vue"),
      },
    ],
  },
];

export default routes;
