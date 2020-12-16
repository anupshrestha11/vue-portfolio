import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Work from "@/views/Work.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/work",
    name: "My Work",
    component: Work,
    meta: {
      title: "My Work",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About Me",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = "Anup Shrestha | " + to.meta.title;
  }
  next();
});

export default router;
