//product type routes
import type { RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[]= [
   {
     path: "/product-type",
     name: "productType",
     children: [
       {
         path: '',
       component: () =>  import("@/views/AllProductTypeView.vue"),
       },
       { path: ':product_type',
         component: () => import("@/views/ProductTypeView.vue"),
       }
     ]
   },
];

export default routes;
