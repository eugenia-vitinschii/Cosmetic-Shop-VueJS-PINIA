//brand routes
import type { RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[]= [
  {
    path: "/brand",
    name: "brand",
    children: [
      {
        path:'',
        name: "AllBrands",
        component: () => import("@/views/AllBrandView.vue"),
      },
      {
        path: ":brand",
        name: "BrandProducts",
        component: () => import("@/views/BrandView.vue"),
        props: true,
      },
    ],
  },
];

export default routes;
