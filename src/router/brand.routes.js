//brand routes
const routes = [
    {
      path: "/brand",
      name: "brand",
      children: [
        {
          path: '',
        component: () => import("../views/AllBrandView.vue"),  
        },
        { path: '/brand/:brand',
          component: () => import("../views/BrandView.vue"),
        }
      ]
    },
 ];
 
 export default routes;
 