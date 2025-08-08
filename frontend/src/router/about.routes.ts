//about routes
import type { RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[]= [
  {
    path: "/info",
    name: "info",
    component: () => import("@/views/public/info/InformationView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/public/info/AboutView.vue"),
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import("@/views/public/info/TermsView.vue"),
  },
];

export default routes;
