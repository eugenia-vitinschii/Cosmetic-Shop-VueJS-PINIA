//about routes
import type { RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[]= [
  {
    path: "/info",
    name: "info",
    component: () => import("@/views/InformationView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import("@/views/TermsView.vue"),
  },
];

export default routes;
