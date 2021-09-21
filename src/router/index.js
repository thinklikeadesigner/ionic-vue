import { createRouter, createWebHistory } from "@ionic/vue-router";
import MemoriesPage from "../pages/MemoriesPage.vue";
import CreaturesPage from "../pages/CreaturesPage.vue";
import Login from "../components/auth/Login.vue";
import SignUp from "../components/auth/SignUp.vue";
import Secure from "../components/auth/Secure.vue";
import Tabs from "../views/Tabs.vue";
import toast from "../views/toast.vue";
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
    path: "/toast",
    name: "toast",
    component: toast
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  },
  {
    path: "/secure",
    name: "secure",
    component: Secure,
    meta: {
      requiresAuth: true
    }
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
    component: MemoriesPage
  },
  {
    path: "/creatures",
    component: CreaturesPage
  },
  {
    path: "/memories/:id",
    component: () => import("../pages/MemoryDetailsPage.vue")
  },
  {
    path: "/creatures/:id",
    component: () => import("../pages/CreatureDetailsPage.vue")
  },
  {
    path: "/memories/add",
    component: () => import("../pages/AddMemoryPage.vue")
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

export default router;
