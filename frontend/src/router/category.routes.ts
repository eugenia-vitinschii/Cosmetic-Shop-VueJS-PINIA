//category routes
import type { RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[]= [
   {
     path: "/category",
     children: [
       {
         path: '',
         name: 'category',
       component: () => import("@/views/AllCategoryView.vue"),
       },
       { path: ':category',
        name: 'categoryItems',
         component: () => import("@/views/CategoryView.vue"),
       }
     ]
   },
];

export default routes;
