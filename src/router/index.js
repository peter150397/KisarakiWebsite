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
        component: () => import('../views/pages/AboutUs/Intro.vue'),
      },
      {
        path: '/AboutUs/Story',
        name: '品牌故事',
        component: () => import('../views/pages/AboutUs/Story.vue'),
      },
      {
        path: '/AboutUs/History',
        name: '歷史腳步',
        component: () => import('../views/pages/AboutUs/History.vue'),
      },
      {
        path: '/AboutUs/FactoryIntro',
        name: '工廠介紹',
        component: () => import('../views/pages/AboutUs/FactoryIntro.vue'),
      },
      {
        path: '/AboutUs/Philosophy',
        name: '經營理念',
        component: () => import('../views/pages/AboutUs/Philosophy.vue'),
      },
      {
        path: '/AboutUs/Certification',
        name: '認證標章',
        component: () => import('../views/pages/AboutUs/Certification.vue'),
      },
    ]
  },
  {
    path: '/NewInfo',
    name: '最新消息',
    component: () => import('../views/pages/NewInfo/NewInfo.vue'),
    children: [
      {
        path: '/',
        name: '',
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
    name: '強檔產品',
    component: () => import('../views/pages/Product/Product.vue'),
    children: [
      {
        path: '/',
        name: '',
        component: () => import('../views/pages/Product/Overview.vue'),
      },
      {
        path: '/Product/:MainPage',
        name: '',
        component: () => import('../views/pages/Product/Productview-MainPage.vue'),
        params:{
          Page:'123'
        }
      },
      {
        path: '/Product/:MainPage/:SubPage',
        name: '',
        component: () => import('../views/pages/Product/Productview-SubPage.vue'),
      },
      // {
      //   path: '/Product/RiceBloodCake',
      //   name: '米血製品',
      //   component: () => import('../views/pages/Product/RiceBloodCake/RiceBloodCake.vue'),
      // },
      // {
      //   path: '/Product/RiceBloodCake/FamilySize',
      //   name: '家庭包',
      //   component: () => import('../views/pages/Product/RiceBloodCake/FamilySize.vue'),
      // },
      // {
      //   path: '/Product/RiceBloodCake/Kanto',
      //   name: '米血關東煮',
      //   component: () => import('../views/pages/Product/RiceBloodCake/Kanto.vue'),
      // },
      // {
      //   path: '/Product/RiceBloodCake/BusinessSize',
      //   name: '業務包',
      //   component: () => import('../views/pages/Product/RiceBloodCake/BusinessSize.vue'),
      // },
      // {
      //   path: '/Product/FishPaste',
      //   name: '魚漿製品',
      //   component: () => import('../views/pages/Product/FishPaste/FishPaste.vue'),
      // },
      // {
      //   path: '/Product/FishPaste/Meatball',
      //   name: '丸子系列',
      //   component: () => import('../views/pages/Product/FishPaste/Meatball.vue'),
      // },
      // {
      //   path: '/Product/FishPaste/BBQ',
      //   name: '炭烤系列',
      //   component: () => import('../views/pages/Product/FishPaste/BBQ.vue'),
      // },
      // {
      //   path: '/Product/FishPaste/Kanto',
      //   name: '魚漿關東煮',
      //   component: () => import('../views/pages/Product/FishPaste/Kanto.vue'),
      // },
      // {
      //   path: '/Product/MicrowaveFood',
      //   name: '調理食品',
      //   component: () => import('../views/pages/Product/MicrowaveFood/MicrowaveFood.vue'),
      // },
      // {
      //   path: '/Product/MicrowaveFood/Conditioning',
      //   name: '調理包',
      //   component: () => import('../views/pages/Product/MicrowaveFood/Conditioning.vue'),
      // },
      // {
      //   path: '/Product/MicrowaveFood/Bowl',
      //   name: '碗裝食品',
      //   component: () => import('../views/pages/Product/MicrowaveFood/Bowl.vue'),
      // },
      // {
      //   path: '/Product/MicrowaveFood/Special',
      //   name: '特製系列',
      //   component: () => import('../views/pages/Product/MicrowaveFood/Special.vue'),
      // },
      // {
      //   path: '/Product/Vegetable',
      //   name: '蔬菜製品',
      //   component: () => import('../views/pages/Product/Vegetable/Vegetable.vue'),
      // },
      // {
      //   path: '/Product/Vegetable/Kanto',
      //   name: '蔬菜關東煮',
      //   component: () => import('../views/pages/Product/Vegetable/Kanto.vue'),
      // },
      // {
      //   path: '/Product/Vegetable/Instant',
      //   name: '即食蔬菜',
      //   component: () => import('../views/pages/Product/Vegetable/Instant.vue'),
      // },
      // {
      //   path: '/Product/Vegetable/Corn',
      //   name: '冷凍玉米',
      //   component: () => import('../views/pages/Product/Vegetable/Corn.vue'),
      // },
      // {
      //   path: '/Product/Banana',
      //   name: '香蕉',
      //   component: () => import('../views/pages/Product/Banana/Banana.vue'),
      // },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
