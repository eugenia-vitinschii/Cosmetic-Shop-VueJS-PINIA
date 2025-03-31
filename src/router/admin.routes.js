//admin routes
 const routes= [
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/admin/AdminView.vue"),
    },
    {
      path: "/update/:id",
      name: "update",
      component: () => import("../views/admin/UpdateView.vue"),
      props: true 
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../views/admin/AddProductView.vue"),
    },
    {
      path: "/all",
      name: "all",
      component: () => import("../views/admin/ShowProductsView.vue"),
    },
  ]

  export default routes