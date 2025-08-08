//account  routes
import type { RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[]= [
      {
      path: "/",
      name: "home",
      component: () => import("@/views/public/common/HomeView.vue"),
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("@/views/public/catalog/ProductView.vue"),
    },
  {
    path: "/sign-up",
    name: "signup",
    component: () => import("@/views/public/auth/SignUpView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/public/auth/LoginView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/public/common/ShoppingView.vue"),
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("@/views/public/common/FavoriteView.vue"),
  },
];

export default routes;
