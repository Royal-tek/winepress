import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Home",
        component: ()=> import("../views/Home.vue")
    },
    {
      path: "/events",
      name: "Events",
      component: ()=> import("../views/Events.vue")
  },
]




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  router.beforeEach((to, from, next) => {
    // Scroll to top before each route navigation
    window.scrollTo(0, 0);
    next();
  });
  
  export default router