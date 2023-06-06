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
    name: '',
    component: () => import('../views/pages/AboutUs/AboutUs.vue'),
    children: [
      {
        path: '/',
        name: '關於我們',
        component: () => import('../views/pages/AboutUs/Intro.vue'),
      },
      {
        path: '/AboutUs/Story',
        // name: 'Story',
        name: '品牌故事',
        component: () => import('../views/pages/AboutUs/Story.vue'),
      },
      {
        path: '/AboutUs/History',
        // name: 'History',
        name: '歷史腳步',
        component: () => import('../views/pages/AboutUs/History.vue'),
      },
      {
        path: '/AboutUs/FactoryIntro',
        // name: 'FactoryIntro',
        name: '工廠介紹',
        component: () => import('../views/pages/AboutUs/FactoryIntro.vue'),
      },
      {
        path: '/AboutUs/Philosophy',
        // name: 'Philosophy',
        name: '經營理念',
        component: () => import('../views/pages/AboutUs/Philosophy.vue'),
      },
      {
        path: '/AboutUs/Certification',
        // name: 'Certification',
        name: '認證標章',
        component: () => import('../views/pages/AboutUs/Certification.vue'),
      },
    ]
  },
  {
    path: '/NewInfo',
    name: '',
    component: () => import('../views/pages/NewInfo/NewInfo.vue'),
    children:[
      {
        path: '/',
        name: '最新消息',
        component: () => import('../views/pages/NewInfo/AllInfo.vue'),
      },
      {
        path: '/NewInfo/NewProduct',
        name: '新品上市',
        component: () => import('../views/pages/NewInfo/NewProduct.vue'),
      },
      {
        path: '/NewInfo/RelateInfo',
        name: '如記消息',
        component: () => import('../views/pages/NewInfo/RelateInfo.vue'),
      },
      {
        path: '/NewInfo/ProductRelate',
        name: '產品相關',
        component: () => import('../views/pages/NewInfo/ProductRelate.vue'),
      },
    ]
  },
  {
    path: '/Product',
    name: '',
    component: () => import('../views/pages/Product/Product.vue'),
    children:[
      {
        path: '/',
        name: '強檔產品',
        component: () => import('../views/pages/Product/Overview.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
