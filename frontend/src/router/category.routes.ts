//category routes
import type { RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[]= [
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
];

export default routes;
