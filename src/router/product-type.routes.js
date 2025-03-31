//product type routes
const routes = [
   {
     path: "/product-type",
     name: "/product-type",
     children: [
       {
         path: '',
       component: () =>  import("../views/AllProductTypeView"),
       },
       { path: '/product-type/:product_type',
         component: () => import("../views/ProductTypeView.vue"),
       }
     ]
   },
];

export default routes;
