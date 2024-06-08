import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/platform",
    name: "platform",
    component: () => import("../views/types/typePlatform.vue"),
  },
  {
    path: "/fps",
    name: "fps",
    component: () => import("../views/types/typeFps.vue"),
  },
  {
    path: "/action",
    name: "action",
    component: () => import("../views/types/typeAction.vue"),
  },
  {
    path: "/rpg",
    name: "rpg",
    component: () => import("../views/types/typeRpg.vue"),
  },
  {
    path: "/horror",
    name: "horror",
    component: () => import("../views/types/typeHorror.vue"),
  },
  {
    path: "/racing",
    name: "racing",
    component: () => import("../views/types/typeRacing.vue"),
  },
  {
    path: "/sports",
    name: "sports",
    component: () => import("../views/types/typeSports.vue"),
  },
  {
    path: "/online",
    name: "online",
    component: () => import("../views/types/typeOnline.vue"),
  },
  {
    path: "/playstation",
    name: "playstation",
    component: () => import("../views/platform/playStation.vue"),
  },
  {
    path: "/xbox",
    name: "xbox",
    component: () => import("../views/platform/xBox.vue"),
  },
  {
    path: "/nintendo",
    name: "nintendo",
    component: () => import("../views/platform/ninTendo.vue"),
  },
  {
    path: "/pc",
    name: "pc",
    component: () => import("../views/platform/personalComputer.vue"),
  },
  {
    path: "/goty",
    name: "goty",
    component: () => import("../views/goTy.vue"),
  },
  {
    path: "/anime",
    name: "anime",
    component: () => import("../views/aniMe.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
