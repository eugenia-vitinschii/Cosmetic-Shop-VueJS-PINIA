// product types routes (product-type list, products by types)

import type { RouteRecordRaw } from "vue-router";

export const typesRoutes: RouteRecordRaw[] = [
   {
     path: "/product-type",
     children: [
       {
         path: '',
       component: () =>  import("@/views/public/catalog/ProductTypeListView.vue"),
       },
       { path: ':product_type',
         component: () => import("@/views/public/catalog/ProductTypeDetails.vue"),
       }
     ]
   },
]
