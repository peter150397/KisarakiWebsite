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
      },
      {
        name: '',
        path: ''
      },
      {
        name: '',
        path: ''
      }
    ],
    homeCarouselImg: [
      require("@/assets/HomePageImg/Carousel-img/Carousel 1.png"),
      require("@/assets/HomePageImg/Carousel-img/Carousel 2.png"),
      require("@/assets/HomePageImg/Carousel-img/Carousel 3.png"),
      require("@/assets/HomePageImg/Carousel-img/Carousel 4.png"),
      require("@/assets/HomePageImg/Carousel-img/Carousel 5.png")
    ],
    newInfo: [
      {
        img: require('@/assets/NewInfoImg/info1.png'),
        title: '特製沙茶醬汁 | 香滷米血黑輪 | 7-Eleven全國上架',
        content: '各位還在等什麼~趕快到小七買起來~香滷米血黑輪在滷製過程添加特製的沙茶醬料，以提升香氣和風味，您可以期待著吸飽醬汁的米血柔軟口感和黑輪的彈牙口感的完美結合。',
        category: 'NewProduct'
      },
      {
        img: require('@/assets/NewInfoImg/info2.png'),
        title: '全新口味!麻辣煮霸氣登場!!!',
        content: '對於麻辣控我們帶來了一個令人興奮的消息!經過長時間的研發和精心調配我們推出了最新的創新產品『麻辣煮』。麻辣煮的獨特之處在於它融合了麻和辣的完美平衡選用了特級花椒和多種辛香料經過精心爆炒和煉製，無論你是喜歡辣的還是麻的都能滿足你的味蕾。',
        category: 'NewProduct'
      },
      {
        img: require('@/assets/NewInfoImg/info3.png'),
        title: '7-11超商的關東煮御用米血糕品牌「如記米血糕」上市囉!',
        content: '你知道平常在7-11超商買的關東煮米血糕是哪個品牌的嗎?將將將將~就是「如記米血糕」啦!如記米血糕不僅用料實在、製程嚴謹。而且口感非常Q彈軟嫩、耐煮性十足，古早好滋味讓你吃過一次就再也停不下來!',
        category: 'ProductRelate'
      },
      {
        img: require('@/assets/NewInfoImg/info4.png'),
        title: '如記350g米血糕｜第二件五折｜',
        content: '如記350g米血糕，第二件5折，真的超~划算!!還不快去買',
        category: 'ProductRelate'
      },
      {
        img: require('@/assets/NewInfoImg/info5.png'),
        title: '｜經典美味台灣小吃｜#大腸肉羹麵線 升級大容量 在7-Evelen全新上架',
        content: '｜經典美味台灣小吃｜#大腸肉羹麵線升級大容量，在7-Evelen全新上架，如記食品的大腸肉羹麵線深受消費者喜愛',
        category: 'NewProduct'
      },
      {
        img: require('@/assets/NewInfoImg/info6.png'),
        title: '小七吃得到現蒸點心！【蒸系列】麻油米血、筒仔米糕、芋頭排骨酥湯!!7-ELEVEN溫暖上市',
        content: '【麻油米血】香醇的麻油香氣，佐淡淡的米酒香味，搭配吸飽湯汁口感Q彈的米血糕，和湯頭的辛香薑片，使每一口都溫暖您的心！！',
        category: 'NewProduct'
      },
      {
        img: require('@/assets/NewInfoImg/info7.png'),
        title: '如記食品～官方LINE好友招募中',
        content: '加入如記食品官方LINE可隨時掌握第一手好康資訊，消息不漏接',
        category: 'RelateInfo'
      },
      {
        img: require('@/assets/NewInfoImg/info8.png'),
        title: '如記米血糕 換新包裝！！配方全新升級',
        content: '＃如記米血糕，換新包裝啦!!全新包裝，升級新配方口感吃起來更軟Q!!',
        category: 'NewProduct'
      },
    ],
    productNavbarData: [
      {
        name: '米血製品',
        index: 0,
        subName: [
          {
            name: '家庭包',
            index: 0
          },
          {
            name: '關東煮',
            index: 1
          },
          {
            name: '業務包',
            index: 2
          }
        ]
      },
      {
        name: '魚漿製品',
        index: 1,
        subName: [
          {
            name: '丸子系列',
            index: 0
          },
          {
            name: '炭烤系列',
            index: 1
          },
          {
            name: '關東煮',
            index: 2
          },
        ]
      },
      {
        name: '調理食品',
        index: 2,
        subName: [
          {
            name: '調理包',
            index: 0
          },
          {
            name: '碗裝食品',
            index: 1
          },
          {
            name: '特製系列',
            index: 2
          },
        ]
      },
      {
        name: '蔬菜製品',
        index: 3,
        subName: [
          {
            name: '關東煮',
            index: 0
          },
          {
            name: '即食蔬菜',
            index: 1
          },
          {
            name: '冷凍玉米',
            index: 2
          },
        ]
      },
      {
        name: '香蕉',
        index: 4,
        subName: [
          {
            name: '香蕉',
            index: 0
          },
        ]
      }
    ],
    productMainPageData: [
      {
        name: '米血製品',
        titleContent: '『米血糕』可說是最具台灣代表性的特色小吃，以台灣在地的傳統滋味，現在創新製程，成功讓米血糕更安全及美味，甚至外銷國際，伴隨著其他各式鍋物料理，讓火鍋料理更具特色！也傳達出對台灣土地深刻的情感。',
        titleBgImg: require('@/assets/ProductImg/RiceBloodCakeImg/RiceBloodCakeBg.png'),
        item: [
          {
            name: '家庭包',
            img: require('@/assets/ProductImg/RiceBloodCakeImg/RiceBloodCake1.png'),
            path: '/Product/米血製品/家庭包'
          },
          {
            name: '關東煮',
            img: require('@/assets/ProductImg/RiceBloodCakeImg/RiceBloodCake2.png'),
            path: '/Product/米血製品/關東煮'
          },
          {
            name: '業務包',
            img: require('@/assets/ProductImg/RiceBloodCakeImg/RiceBloodCake3.png'),
            path: '/Product/米血製品/業務包'
          },
        ]
      },
      {
        name: '魚漿製品',
        titleContent: '於2004年開始致力於研發魚漿類產品，提供給各大通路及學校團體等，希望提供更健康、安全及美味的產品給國人食用。',
        titleBgImg: require('@/assets/ProductImg/FishPasteImg/FishPasteBg.png'),
        item: [
          {
            name: '丸子系列',
            img: require('@/assets/ProductImg/FishPasteImg/FishPaste1.png'),
            path: '/Product/魚漿製品/丸子系列'
          },
          {
            name: '炭烤系列',
            img: require('@/assets/ProductImg/FishPasteImg/FishPaste2.png'),
            path: '/Product/魚漿製品/炭烤系列'
          },
          {
            name: '關東煮',
            img: require('@/assets/ProductImg/FishPasteImg/FishPaste3.png'),
            path: '/Product/魚漿製品/關東煮'
          },
        ]
      },
      {
        name: '調理食品',
        titleContent: '時常忙於工作的您是否希望回家後就能吃到一頓熱騰騰媽媽的味道呢？我們堅持用料實在、餡料豐富，使用高溫殺菌包裝，不添加防腐劑、靠製程延長保存期限及增加風味。簡單加熱即可上桌，吃美食很簡單！我們可客製化大眾口味的調理包以及其他調理製品，擁有優秀研發團隊可供客戶選擇商品口味。',
        titleBgImg: require('@/assets/ProductImg/MicrowaveFoodImg/MicrowaveFoodBg.png'),
        item: [
          {
            name: '調理包',
            img: require('@/assets/ProductImg/MicrowaveFoodImg/MicrowaveFood1.png'),
            path: '/Product/調理食品/調理包'
          },
          {
            name: '碗裝食品',
            img: require('@/assets/ProductImg/MicrowaveFoodImg/MicrowaveFood2.png'),
            path: '/Product/調理食品/碗裝食品'
          },
          {
            name: '特製系列',
            img: require('@/assets/ProductImg/MicrowaveFoodImg/MicrowaveFood3.png'),
            path: '/Product/調理食品/特製系列'
          },
        ]
      },
      {
        name: '蔬菜製品',
        titleContent: '常說要多吃蔬果，蔬菜所含的營養素對人體健康的優點很多，像是含豐富的維生素、礦物質和微量元素等。我們與台灣在地的農夫契作，透過各農場專業田間管理，希望呈現給消費者更優質的品質及穩定量；每批進貨農藥快篩及每季委外送檢農藥殘留，如此頻繁的把關品質是我們對消費者的承諾。',
        titleBgImg: require('@/assets/ProductImg/VegetableImg/VegetableBg.png'),
        item: [
          {
            name: '關東煮',
            img: require('@/assets/ProductImg/VegetableImg/Vegetable1.png'),
            path: '/Product/蔬菜製品/關東煮'
          },
          {
            name: '即食蔬菜',
            img: require('@/assets/ProductImg/VegetableImg/Vegetable2.png'),
            path: '/Product/蔬菜製品/即食蔬菜'
          },
          {
            name: '冷凍玉米',
            img: require('@/assets/ProductImg/VegetableImg/Vegetable3.png'),
            path: '/Product/蔬菜製品/冷凍玉米'
          },
        ]
      },
      {
        name: '香蕉',
        titleContent: '台灣地處亞熱帶地區，所產出的香蕉不管在糖度/風味/口感等品質算是數一數二的，除了供應國內市場消費(我們在與知名連鎖超市合作的期間曾經達到一日十萬蕉的目標)，每年皆有外銷市場。本公司於2018年底建設完整的香蕉冷鏈生產設備，期望能將香蕉市場擴及全世界。',
        titleBgImg: require('@/assets/ProductImg/BananaImg/BananaBg.png'),
        item: [
          {
            name: '7-11裸蕉',
            img: require('@/assets/ProductImg/BananaImg/Banana1.png'),
            path: '/Product/香蕉/香蕉/7-11裸蕉'
          },
          {
            name: '7-11雙蕉',
            img: require('@/assets/ProductImg/BananaImg/Banana2.png'),
            path: '/Product/香蕉/香蕉/7-11雙蕉'
          },
          {
            name: '全聯袋蕉(600g)',
            img: require('@/assets/ProductImg/BananaImg/Banana3.png'),
            path: '/Product/香蕉/香蕉/全聯袋蕉(600g)'
          },
        ]
      },
    ],
    productData: [
      {
        productName: '米血糕(小)',
        subTitle: '本產品使用真空包裝高溫殺菌，品質安全衛生',
        productImg: {
          CarouselImg: [
            require('@/assets/ProductImg/ProductDataImg/(small)RiceBloodCakeCarousel1.png'),
            require('@/assets/ProductImg/ProductDataImg/(small)RiceBloodCakeCarousel2.png'),
            require('@/assets/ProductImg/ProductDataImg/(small)RiceBloodCakeCarousel3.png'),
            require('@/assets/ProductImg/ProductDataImg/(small)RiceBloodCakeCarousel1.png'),
          ],
          contentImg: require('@/assets/ProductImg/ProductDataImg/RiceBloodCake-content.png'),
        },
        category: {
          mainCategory: '米血製品',
          subCategory: '家庭包'
        },
        content: '本產品使用真空包裝高溫殺菌，品質安全衛生，香軟Q彈的口感，耐煮性十足，選用CAS驗證的豬隻豬血來源、以及國家認證農糧署的白米，以現代創新製程，讓米血糕更美味，是台灣唯一不添加防腐劑的米血糕，讓您吃的放心吃的安心。',
        netWeight: '300g/份',
        shelfLife: '10個月',
        storageConditions: '冷藏於0-7℃',
        productionPlace: '台灣'
      },
      {
        productName: '米血糕(大)',
        subTitle: '本產品使用真空包裝高溫殺菌，品質安全衛生',
        productImg: {
          CarouselImg: [
            require('@/assets/ProductImg/ProductDataImg/RiceBloodCake(big).png'),
          ],
          contentImg: require('@/assets/ProductImg/ProductDataImg/RiceBloodCake-content.png'),
        },
        category: {
          mainCategory: '米血製品',
          subCategory: '家庭包'
        },
        content: '本產品使用真空包裝高溫殺菌，品質安全衛生，香軟Q彈的口感，耐煮性十足，選用CAS驗證的豬隻豬血來源、以及國家認證農糧署的白米，以現代創新製程，讓米血糕更美味，是台灣唯一不添加防腐劑的米血糕，讓您吃的放心吃的安心。',
        netWeight: '600g/份',
        shelfLife: '10個月',
        storageConditions: '冷藏於0-7℃',
        productionPlace: '台灣'
      },
      {
        productName: '米血糕關東煮',
        subTitle: '使用優良檢驗合格豬血和優質白米製作，安心美味',
        productImg: {
          CarouselImg: [
            require('@/assets/ProductImg/ProductDataImg/RiceBloodCake(kanto).png'),
          ],
          contentImg: require('@/assets/ProductImg/ProductDataImg/RiceBloodCake(kanto)-content.png'),
        },
        category: {
          mainCategory: '米血製品',
          subCategory: '關東煮'
        },
        content: '客製化生產插串、小包裝的關東煮產品，方便顧客直接下鍋煮，取自嚴選得自然素材，佐以嚴格的作業環境與低溫凍藏物流作業，讓您吃到最新鮮的鍋物食材，感受有關食材及品嘗上的生活美學!',
        netWeight: '300g/份',
        shelfLife: '12個月',
        storageConditions: '保存於-18℃以下(本產品凍結前已加熱)',
        productionPlace: '台灣'
      },
      {
        productName: '火鍋米血丁-麻丁',
        subTitle: '使用優良檢驗合格豬血和優質白米製作，安心美味',
        productImg: {
          CarouselImg: [
            require('@/assets/ProductImg/ProductDataImg/RiceBloodCake(Business).png'),
          ],
          contentImg: require('@/assets/ProductImg/ProductDataImg/RiceBloodCake(Business)-content.png'),
        },
        category: {
          mainCategory: '米血製品',
          subCategory: '業務包'
        },
        content: '本產品冷凍前已加熱，食用前放入滾水中加熱即可食用，可以加入火鍋、鍋燒麵、滷味，或是氣炸、油炸也很好吃。',
        netWeight: '5台斤/包',
        shelfLife: '12個月',
        storageConditions: '保存於-18℃以下(本產品凍結前已加熱)',
        productionPlace: '台灣'
      },
      {
        productName: '虱目魚丸',
        subTitle: '挑選加入富油脂的虱目魚，口感Q彈，Q嫩彈牙',
        productImg: {
          CarouselImg: [
            require('@/assets/ProductImg/ProductDataImg/FishBall.png'),
          ],
          contentImg: require('@/assets/ProductImg/ProductDataImg/FishBall(content).png'),
        },
        category: {
          mainCategory: '魚漿製品',
          subCategory: '丸子系列'
        },
        content: '挑選加入富油脂的虱目魚，口感Q彈，Q嫩彈牙，不添加漂白劑或硼砂，呈現食材原色，給您最安心的美味，水滾煮湯配料，是簡單方便的佳餚。適合油炸、串燒、煮湯、火鍋',
        netWeight: '5台斤/包',
        shelfLife: '12個月',
        storageConditions: '保存於-18℃以下(本產品凍結前已加熱)',
        productionPlace: '台灣'
      },
      {
        productName: '黃金魚蛋',
        subTitle: '嚴選上等魚漿製作，口感Ｑ彈脆口、咬勁十足',
        productImg: {
          CarouselImg: [
            require('@/assets/ProductImg/ProductDataImg/FishEgg.png'),
          ],
          contentImg: require('@/assets/ProductImg/ProductDataImg/FishEgg(content).png'),
        },
        category: {
          mainCategory: '魚漿製品',
          subCategory: '炭烤系列'
        },
        content: '嚴選上等魚漿製作，口感Ｑ彈脆口、咬勁十足，香味鮮明，適合關東煮、油炸、香滷、燒烤、麻辣燙、煮火鍋等各式料理皆十分美味喔！客製化生產插串、小包裝的關東煮產品，方便顧客直接下鍋煮，取自嚴選得自然素材，佐以嚴格的作業環境與低溫凍藏物流作業，讓您吃到最新鮮的鍋物食材，感受有關食材及品嘗上的生活美學!',
        netWeight: '8支/包',
        shelfLife: '12個月',
        storageConditions: '保存於-18℃以下(本產品凍結前已加熱)',
        productionPlace: '台灣'
      },
      {
        productName: '麻婆豆腐',
        subTitle: '滑嫩口感加上麻～辣～鮮～香的風味，滿足您的味蕾',
        productImg: {
          CarouselImg: [
            require('@/assets/ProductImg/ProductDataImg/Tofu.png'),
          ],
          contentImg: require('@/assets/ProductImg/ProductDataImg/Tofu(content).png'),
        },
        category: {
          mainCategory: '調理食品',
          subCategory: '調理包'
        },
        content: '特選花椒爆香提煉花椒油，再以花椒油炒豬肉，多道工序只為呈現美味，加入豆腐燉煮熟後，滑嫩口感加上麻～辣～鮮～香的風味，滿足您的味蕾！配飯、拌麵都適合',
        netWeight: '400g/包',
        shelfLife: '45天',
        storageConditions: '冷藏於0-7℃',
        productionPlace: '台灣'
      },
      {
        productName: '香菇雞湯',
        subTitle: '香菇輕甜雞肉鮮嫩 湯頭入口濃郁回甘',
        productImg: {
          CarouselImg: [
            require('@/assets/ProductImg/ProductDataImg/ChickenSoup.png'),
          ],
          contentImg: require('@/assets/ProductImg/ProductDataImg/ChickenSoup(content).png'),
        },
        category: {
          mainCategory: '調理食品',
          subCategory: '碗裝食品'
        },
        content: '嚴選香氣迷人的上等台灣香菇和肉質鮮嫩台灣雞肉 ，湯頭清甜、甘甜入味，令人回味無窮，香菇富含多醣體，可以增強免疫力，護肝、抗癌、健脾益胃，好處多多。',
        netWeight: '300g/包',
        shelfLife: '20天',
        storageConditions: '冷藏於0-7℃',
        productionPlace: '台灣'
      },
      {
        productName: '黃金玉米棒',
        subTitle: '新鮮封存 美味即食',
        productImg: {
          CarouselImg: [
            require('@/assets/ProductImg/ProductDataImg/Corn.png'),
          ],
          contentImg: require('@/assets/ProductImg/ProductDataImg/Corn(content).png'),
        },
        category: {
          mainCategory: '蔬菜製品',
          subCategory: '即食蔬菜'
        },
        content: '生長於美麗寶島，使用非基改品種，一株只留一穗，讓每穗玉米都能吸收滿滿的大地精華，當然好吃，台灣農民栽種，原料使用非基因改造玉米檢驗合格，安心食用，高溫.高壓滅菌技術，以真空包裝將玉米的鮮甜及營養封存，絕對無防腐劑，加入淡淡的海鹽，更能凸顯玉米鮮甜美味。',
        netWeight: '150g/支',
        shelfLife: '4個月',
        storageConditions: '冷藏於0-7°C',
        productionPlace: '台灣'
      },
      {
        productName: '7-11裸蕉',
        subTitle: '香氣濃郁、營養健康',
        productImg: {
          CarouselImg: [
            require('@/assets/ProductImg/ProductDataImg/Banana1.png'),
          ],
          contentImg: require('@/assets/ProductImg/ProductDataImg/Banana(content).png'),
        },
        category: {
          mainCategory: '香蕉',
          subCategory: '香蕉'
        },
        content: '屏東是香蕉的主要產區，因為土壤天候適宜，出產的香蕉品質穩定、產量豐富、香氣濃郁、口感Q彈。香蕉是維他命B6的來源也是良好的鉀源、纖維、維他命C等營養分，可以幫助提升心臟健康!',
        netWeight: '平均150g/包',
        shelfLife: '14天',
        storageConditions: '存放於室內陰涼處',
        productionPlace: '台灣屏東'
      },
      {
        productName: '7-11雙蕉',
        subTitle: '香氣濃郁、營養健康',
        productImg: {
          CarouselImg: [
            require('@/assets/ProductImg/ProductDataImg/Banana2.png'),
          ],
          contentImg: require('@/assets/ProductImg/ProductDataImg/Banana(content).png'),
        },
        category: {
          mainCategory: '香蕉',
          subCategory: '香蕉'
        },
        content: '屏東是香蕉的主要產區，因為土壤天候適宜，出產的香蕉品質穩定、產量豐富、香氣濃郁、口感Q彈。香蕉是維他命B6的來源也是良好的鉀源、纖維、維他命C等營養分，可以幫助提升心臟健康!',
        netWeight: '平均250g/包',
        shelfLife: '14天',
        storageConditions: '存放於室內陰涼處',
        productionPlace: '台灣屏東'
      },
      {
        productName: '全聯袋蕉',
        subTitle: '香氣濃郁、營養健康',
        productImg: {
          CarouselImg: [
            require('@/assets/ProductImg/ProductDataImg/Banana3.png'),
          ],
          contentImg: require('@/assets/ProductImg/ProductDataImg/Banana(content).png'),
        },
        category: {
          mainCategory: '香蕉',
          subCategory: '香蕉'
        },
        content: '屏東是香蕉的主要產區，因為土壤天候適宜，出產的香蕉品質穩定、產量豐富、香氣濃郁、口感Q彈。香蕉是維他命B6的來源也是良好的鉀源、纖維、維他命C等營養分，可以幫助提升心臟健康!',
        netWeight: '平均600g/包',
        shelfLife: '14天',
        storageConditions: '存放於室內陰涼處',
        productionPlace: '台灣屏東'
      },
    ],
    QA: [
      {
        category: 'contact',
        title: '客服與聯絡資訊',
        content: '聯絡電話：08-771-0088\n客服信箱：rja@flno1.com.tw\nLINE ID：＠405jczdl'
      },
      {
        category: 'contact',
        title: '營業時間',
        content: '營業時間：週一至週五08:00-12:00 \ 13:00-17:00'
      },
      {
        category: 'purchase',
        title: '可以直接向如記食品訂購產品嗎？',
        content: '如記食品產品皆於一般通路販售(如量販店、全聯、超商等)，或是您可以透過線上商城訂購\n來電諮詢: 08-771-0088#225'
      },
      {
        category: 'purchase',
        title: '配送方式有哪些?',
        content: '目前皆以低溫車冷藏、冷凍宅配為主'
      },
      {
        category: 'purchase',
        title: '目前提供哪些付款方式？',
        content: '1、刷卡\n2、貨到付款\n3、ATM轉帳'
      },
      {
        category: 'purchase',
        title: '出貨配送時間',
        content: '週一至週五，客服人員在確認訂單後，會盡速處理商品配送，配合宅急便作業時間調整，周日、及國定例假日，宅急便公休無配送。'
      },
      {
        category: 'purchase',
        title: '離島是否無法配送呢?',
        content: '離島運費因與本島運費不同，請來電(08)771-0088詢問運費方可下訂。'
      }
    ]
  },
  getters: {
  },
  mutations: {
    GETCURRENTPAGEROUTE(state, payload) {
      state.currentPage[payload.index].name = payload.name
      state.currentPage[payload.index].path = payload.path
    },
  },
  actions: {
  },
  modules: {
  }
})
