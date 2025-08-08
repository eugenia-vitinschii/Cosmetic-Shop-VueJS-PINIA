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
        component: () => import("@/views/public/catalog/BrandListView.vue"),
      },
      {
        path: ":brand",
        name: "BrandProducts",
        component: () => import("@/views/public/catalog/BrandDetails.vue"),
        props: true,
      },
    ],
  },
];

export default routes;
