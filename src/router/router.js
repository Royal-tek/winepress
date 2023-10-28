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
    {
      path: "/beliefs",
      name: "Beliefs",
      component: ()=> import("../views/Beliefs.vue")
    },
    {
      path: "/mission",
      name: "Mission",
      component: ()=> import("../views/Mission.vue")
    },
    {
      path: "/ministries",
      name: "Ministries",
      children: [
        {
          path: "",
          name: "Moi",
          component: ()=> import("../views/Ministries.vue")
        },
        {
          path: "men-of-integrity",
          name: "Moi",
          component: ()=> import("../views/Moi.vue")
        },
        {
          path: "gracious-women",
          name: "Gw",
          component: ()=> import("../views/Gw.vue")
        },
        {
          path: "royalties",
          name: "Royalties",
          component: ()=> import("../views/Royalties.vue")
        },
        {
          path: "youths",
          name: "Youths",
          component: ()=> import("../views/Youths.vue")
        },
      ]
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