import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/pages/Home.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
