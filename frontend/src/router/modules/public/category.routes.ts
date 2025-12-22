//category routes (category list, products by category)

import type { RouteRecordRaw } from "vue-router";

export const categoryRoutes: RouteRecordRaw[] = [
   {
     path: "/category",
     children: [
       {
         path: '',
         name: 'category',
       component: () => import("@/views/public/catalog/CategoryListView.vue"),
       },
       { path: ':category',
        name: 'categoryItems',
         component: () => import("@/views/public/catalog/CategoryDetails.vue"),
       }
     ]
   },
]
