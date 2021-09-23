import { createRouter, createWebHistory } from "@ionic/vue-router";
import MemoriesPage from "../pages/MemoriesPage.vue";
import CreaturesPage from "../pages/CreaturesPage.vue";
import Login from "../components/auth/Login.vue";
import SignUp from "../components/auth/SignUp.vue";
import Tabs from "../views/Tabs.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    redirect: "/tabs/tab1"
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  },
  {
    path: "/tabs/",
    component: Tabs,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "",
        redirect: "/tabs/tab1"
      },
      {
        path: "tab1",
        component: () => import("@/views/Tab1.vue")
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2.vue")
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3.vue")
      }
    ]
  },
  {
    path: "/memories",
    component: MemoriesPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/creatures",
    component: CreaturesPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/memories/:id",
    component: () => import("../pages/MemoryDetailsPage.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/creatures/:id",
    component: () => import("../pages/CreatureDetailsPage.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/memories/add",
    component: () => import("../pages/AddMemoryPage.vue"),
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

const waitForStorageToBeReady = async (to, from, next) => {
  await store.restored;
  next();
};
router.beforeEach(waitForStorageToBeReady);

export default router;
