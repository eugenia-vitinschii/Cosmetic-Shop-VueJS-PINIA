//product type routes
import type { RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[]= [
   {
     path: "/product-type",
     name: "/product-type",
     children: [
       {
         path: '',
       component: () =>  import("@/views/AllProductTypeView.vue"),
       },
       { path: '/product-type/:product_type',
         component: () => import("@/views/ProductTypeView.vue"),
       }
     ]
   },
];

export default routes;
