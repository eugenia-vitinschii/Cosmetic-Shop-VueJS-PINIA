//auth routes (login, register)

import type { RouteRecordRaw } from "vue-router";

export const authRoutes: RouteRecordRaw[] = [
  {
    path: "/sign-up",
    name: "signup",
    component: () => import("@/views/public/auth/SignUpView.vue"),
    meta: {guestOnly: true}
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/public/auth/LoginView.vue"),
    meta: {guestOnly: true},
  },
]

