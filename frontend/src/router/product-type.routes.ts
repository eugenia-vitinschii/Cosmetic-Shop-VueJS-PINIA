//product type routes
import type { RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[]= [
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
];

export default routes;
