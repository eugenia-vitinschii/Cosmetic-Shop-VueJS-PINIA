//account  routes
const routes = [
  {
    path: "/sign-up",
    name: "signup",
    component: () => import("../views/SignUpView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/ShoppingView.vue"),
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("../views/FavoriteView.vue"),
  },
];

export default routes;
