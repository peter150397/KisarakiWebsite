import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/pages/Home.vue'),
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: () => import('../views/pages/AboutUs/AboutUs.vue'),
    children: [
      {
        path: '/',
        name: 'Intro',
        component: () => import('../views/pages/AboutUs/Intro.vue'),
      },
      {
        path: '/AboutUs/Story',
        name: 'Story',
        component: () => import('../views/pages/AboutUs/Story.vue'),
      },
      {
        path: '/AboutUs/History',
        name: 'History',
        component: () => import('../views/pages/AboutUs/History.vue'),
      },
      {
        path: '/AboutUs/FactoryIntro',
        name: 'FactoryIntro',
        component: () => import('../views/pages/AboutUs/FactoryIntro.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
