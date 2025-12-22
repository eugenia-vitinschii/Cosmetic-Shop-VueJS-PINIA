//brand routes (brand list, products by brand)


import type { RouteRecordRaw } from "vue-router";

export const brandRoutes: RouteRecordRaw[] = [
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
]
