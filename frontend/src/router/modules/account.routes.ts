//account routes (account, favorites, cart)

import type { RouteRecordRaw } from "vue-router";

export const accountRoutes: RouteRecordRaw[] = [

    {
    path: "/account",
    name: "account",
    component: () => import("@/views/public/account/AccountView.vue"),
    meta: {requiresAuth: true},
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/public/common/ShoppingView.vue"),
    meta: {requiresAuth: true},
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("@/views/public/common/FavoriteView.vue"),
    meta: {requiresAuth: true},
  },
]

