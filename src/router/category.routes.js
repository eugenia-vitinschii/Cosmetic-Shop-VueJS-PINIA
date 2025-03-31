//category routes
const routes = [
   {
     path: "/category",
     name: "category",
     children: [
       {
         path: '',
       component: () => import("../views/AllCategoryView"),
       },
       { path: '/category/:category',
         component: () => import("../views/CategoryView.vue"),
       }
     ]
   },
];

export default routes;
