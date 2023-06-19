import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首頁',
    component: () => import('../views/pages/Home.vue'),
  },
  {
    path: '/AboutUs',
    name: '關於我們',
    component: () => import('../views/pages/AboutUs/AboutUs.vue'),
    children: [
      {
        path: '/',
        name: '',
        component: () => import('../views/pages/AboutUs/Children/Intro.vue'),
      },
      {
        path: '/AboutUs/Story',
        name: '品牌故事',
        component: () => import('../views/pages/AboutUs/Children/Story.vue'),
      },
      {
        path: '/AboutUs/History',
        name: '歷史腳步',
        component: () => import('../views/pages/AboutUs/Children/History.vue'),
      },
      {
        path: '/AboutUs/FactoryIntro',
        name: '工廠介紹',
        component: () => import('../views/pages/AboutUs/Children/FactoryIntro.vue'),
      },
      {
        path: '/AboutUs/Philosophy',
        name: '經營理念',
        component: () => import('../views/pages/AboutUs/Children/Philosophy.vue'),
      },
      {
        path: '/AboutUs/Certification',
        name: '認證標章',
        component: () => import('../views/pages/AboutUs/Children/Certification.vue'),
      },
    ]
  },
  {
    path: '/NewInfo',
    name: '最新消息',
    component: () => import('../views/pages/NewInfo.vue'),
  },
  {
    path: '/Product',
    name: '強檔產品',
    component: () => import('../views/pages/Product/Product.vue'),
    children: [
      {
        path: '/',
        name: '',
        component: () => import('../views/pages/Product/Children/Overview.vue'),
      },
      {
        path: '/Search/:SearchPage',
        name: '',
        component: () => import('../views/pages/Product/Children/Productview-Search.vue'),
      },
      {
        path: '/Product/:MainPage',
        name: '',
        component: () => import('../views/pages/Product/Children/Productview-MainPage.vue'),
      },
      {
        path: '/Product/:MainPage/:SubPage',
        name: '',
        component: () => import('../views/pages/Product/Children/Productview-SubPage.vue'),
      },
      {
        path: '/Product/:MainPage/:SubPage/:Product',
        name: '',
        component: () => import('../views/pages/Product/Children/Productview-Item.vue'),
      },
    ]
  },
  {
    path: '/Q&A',
    name: '常見問題',
    component: () => import('../views/pages/Q&A.vue'),
  },
  {
    path: '/Contact',
    name: '聯絡我們',
    component: () => import('../views/pages/Contact.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
