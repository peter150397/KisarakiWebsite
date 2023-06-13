import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: [
      {
        name: '',
        path: ''
      },
      {
        name: '',
        path: ''
      }
    ],
    productNavbarData: [
      {
        name: '米血製品',
        subName: [
          '家庭包',
          '關東煮',
          '業務包'
        ]
      },
      {
        name: '魚漿製品',
        subName: [
          '丸子系列',
          '炭烤系列',
          '關東煮'
        ]
      },
      {
        name: '調理食品',
        subName: [
          '調理包',
          '碗裝食品',
          '特製系列'
        ]
      },
      {
        name: '蔬菜製品',
        subName: [
          '關東煮',
          '即食蔬菜',
          '冷凍玉米'
        ]
      },
      {
        name: '香蕉',
        subName: [
          '香蕉',
        ]
      }
    ],
    productMainPageData: [
      {
        name: '米血製品',
        titleContent: '『米血糕』可說是最具台灣代表性的特色小吃，以台灣在地的傳統滋味，現在創新製程，成功讓米血糕更安全及美味，甚至外銷國際，伴隨著其他各式鍋物料理，讓火鍋料理更具特色！也傳達出對台灣土地深刻的情感。',
        titleBgImg: require('@/assets/ProductImg/RiceBloodCakeImg/RiceBloodCakeBg.png'),
        item:[
          {
            name:'家庭包',
            img: require('@/assets/ProductImg/RiceBloodCakeImg/RiceBloodCake1.png'),
            path:'/Product/米血製品/家庭包'
          },
          {
            name:'關東煮',
            img: require('@/assets/ProductImg/RiceBloodCakeImg/RiceBloodCake2.png'),
            path:'/Product/米血製品/關東煮'
          },
          {
            name:'業務包',
            img: require('@/assets/ProductImg/RiceBloodCakeImg/RiceBloodCake3.png'),
            path:'/Product/米血製品/業務包'
          },
        ]
      },
      {
        name: '魚漿製品',
        titleContent: '於2004年開始致力於研發魚漿類產品，提供給各大通路及學校團體等，希望提供更健康、安全及美味的產品給國人食用。',
        titleBgImg: require('@/assets/ProductImg/FishPasteImg/FishPasteBg.png'),
        item:[
          {
            name:'丸子系列',
            img: require('@/assets/ProductImg/FishPasteImg/FishPaste1.png'),
            path:'/Product/魚漿製品/丸子系列'
          },
          {
            name:'炭烤系列',
            img: require('@/assets/ProductImg/FishPasteImg/FishPaste2.png'),
            path:'/Product/魚漿製品/炭烤系列'
          },
          {
            name:'關東煮',
            img: require('@/assets/ProductImg/FishPasteImg/FishPaste3.png'),
            path:'/Product/魚漿製品/關東煮'
          },
        ]
      },
      {
        name: '調理食品',
        titleContent: '時常忙於工作的您是否希望回家後就能吃到一頓熱騰騰媽媽的味道呢？我們堅持用料實在、餡料豐富，使用高溫殺菌包裝，不添加防腐劑、靠製程延長保存期限及增加風味。簡單加熱即可上桌，吃美食很簡單！我們可客製化大眾口味的調理包以及其他調理製品，擁有優秀研發團隊可供客戶選擇商品口味。',
        titleBgImg: require('@/assets/ProductImg/MicrowaveFoodImg/MicrowaveFoodBg.png'),
        item:[
          {
            name:'調理包',
            img: require('@/assets/ProductImg/MicrowaveFoodImg/MicrowaveFood1.png'),
            path:'/Product/調理食品/調理包'
          },
          {
            name:'碗裝食品',
            img: require('@/assets/ProductImg/MicrowaveFoodImg/MicrowaveFood2.png'),
            path:'/Product/調理食品/碗裝食品'
          },
          {
            name:'特製系列',
            img: require('@/assets/ProductImg/MicrowaveFoodImg/MicrowaveFood3.png'),
            path:'/Product/調理食品/特製系列'
          },
        ]
      },
      {
        name: '蔬菜製品',
        titleContent: '常說要多吃蔬果，蔬菜所含的營養素對人體健康的優點很多，像是含豐富的維生素、礦物質和微量元素等。我們與台灣在地的農夫契作，透過各農場專業田間管理，希望呈現給消費者更優質的品質及穩定量；每批進貨農藥快篩及每季委外送檢農藥殘留，如此頻繁的把關品質是我們對消費者的承諾。',
        titleBgImg: require('@/assets/ProductImg/VegetableImg/VegetableBg.png'),
        item:[
          {
            name:'關東煮',
            img: require('@/assets/ProductImg/VegetableImg/Vegetable1.png'),
            path:'/Product/蔬菜製品/關東煮'
          },
          {
            name:'即食蔬菜',
            img: require('@/assets/ProductImg/VegetableImg/Vegetable2.png'),
            path:'/Product/蔬菜製品/即食蔬菜'
          },
          {
            name:'冷凍玉米',
            img: require('@/assets/ProductImg/VegetableImg/Vegetable3.png'),
            path:'/Product/蔬菜製品/冷凍玉米'
          },
        ]
      },
      {
        name: '香蕉',
        titleContent: '台灣地處亞熱帶地區，所產出的香蕉不管在糖度/風味/口感等品質算是數一數二的，除了供應國內市場消費(我們在與知名連鎖超市合作的期間曾經達到一日十萬蕉的目標)，每年皆有外銷市場。本公司於2018年底建設完整的香蕉冷鏈生產設備，期望能將香蕉市場擴及全世界。',
        titleBgImg: require('@/assets/ProductImg/BananaImg/BananaBg.png'),
        item:[
          {
            name:'7-11裸蕉',
            img: require('@/assets/ProductImg/BananaImg/Banana1.png'),
            path:'/Product/香蕉/7-11裸蕉'
          },
          {
            name:'7-11雙蕉',
            img: require('@/assets/ProductImg/BananaImg/Banana2.png'),
            path:'/Product/香蕉/7-11雙蕉'
          },
          {
            name:'全聯袋蕉(600g)',
            img: require('@/assets/ProductImg/BananaImg/Banana3.png'),
            path:'/Product/香蕉/全聯袋蕉(600g)'
          },
        ]
      },
    ]
  },
  getters: {
  },
  mutations: {
    GETCURRENGPAGEROUTE(state, payload) {
      state.currentPage[payload.index].name = payload.name
      state.currentPage[payload.index].path = payload.path
    },
    // CHANGEPAGENAME(state , payload) {
    //   state.currentPage.matched[1].name = payload
    // }
  },
  actions: {
  },
  modules: {
  }
})
