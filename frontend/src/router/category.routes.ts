//category routes
import type { RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[]= [
   {
     path: "/category",
     name: "category",
     children: [
       {
         path: '',
       component: () => import("@/views/AllCategoryView.vue"),
       },
       { path: '/category/:category',
         component: () => import("@/views/CategoryView.vue"),
       }
     ]
   },
];

export default routes;
