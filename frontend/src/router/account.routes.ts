//account  routes
import type { RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[]= [
      {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("@/views/ProductView.vue"),
    },
  {
    path: "/sign-up",
    name: "signup",
    component: () => import("@/views/SignUpView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/ShoppingView.vue"),
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("@/views/FavoriteView.vue"),
  },
];

export default routes;
