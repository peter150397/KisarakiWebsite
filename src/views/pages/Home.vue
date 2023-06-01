<template>
    <div>
        <!-- Carousel -->
        <div class="CarouselContainer">
            <img src="@/assets/HomePageImg/arrow.png" alt="" class="prev arrowImg" @click="prevCarouselImg">
            <img src="@/assets/HomePageImg/arrow.png" alt="" class="next arrowImg" @click="nextCarouselImg">

            <div class="CarouselImgGroup">
                <img :src="img" alt="" class="CarouselImg" :id="'CarouselImg' + index" v-for="(img, index) in Carousel"
                    :key="img">

                <!-- <img src="@/assets/img/Carousel-img/Carousel 1.png" alt="" class="CarouselImg">
                <img src="@/assets/img/Carousel-img/Carousel 2.png" alt="" class="CarouselImg">
                <img src="@/assets/img/Carousel-img/Carousel 3.png" alt="" class="CarouselImg">
                <img src="@/assets/img/Carousel-img/Carousel 4.png" alt="" class="CarouselImg">
                <img src="@/assets/img/Carousel-img/Carousel 5.png" alt="" class="CarouselImg"> -->
            </div>
        </div>
        <div class="CarouselIndexGroup">
            <div class="CarouselIndexitem" :id="'CarouselIndexitem' + index" v-for="(circle, index) in Carousel.length"
                :key="circle" @click="CarouselByCircle(index)"></div>
        </div>

        <!-- aboutUs -->
        <div class="aboutUs">
            <h1 class="aboutUsTitle">關於我們</h1>
            <div class="aboutUsContent">
                <img src="@/assets/HomePageImg/aboutUsLogo.jpg" alt="" class="aboutUsLogo">

                <div class="aboutUsVideoContainer">
                    <iframe src="https://www.youtube.com/embed/Fuku5fH6VDI" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen class="aboutUsVideo"></iframe>
                    <iframe src="https://www.youtube.com/embed/tc61Y7okrVI" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen class="aboutUsVideo"></iframe>
                    <iframe src="https://www.youtube.com/embed/A0QY97rN-jc" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen class="aboutUsVideo"></iframe>
                </div>
                <div class="aboutUstextContainer">
                    <p class="aboutUstext">
                        如記食品有限公司創立於1988年，工廠座落於屏東縣竹田鄉，主要產品為米血糕，目前也是國內唯一米血糕經CAS認證的廠商！<br>
                        <br>
                        我們不斷追求進步，在創立後的三十年當中，發展多元多樣各式產品，包含冷藏調理食品、點心類食品、冷凍食品類及4℃鮮食類...多元多樣各式產品。
                    </p>
                </div>
                <div class="aboutUsVideoIndexGroup">
                    <div class="aboutUsVideoIndexItem" id="aboutUsVideoIndexItem0" @click="aboutUsVideoCarouselByCircle(0)">
                    </div>
                    <div class="aboutUsVideoIndexItem" id="aboutUsVideoIndexItem1" @click="aboutUsVideoCarouselByCircle(1)">
                    </div>
                    <div class="aboutUsVideoIndexItem" id="aboutUsVideoIndexItem2" @click="aboutUsVideoCarouselByCircle(2)">
                    </div>
                </div>
            </div>
        </div>
        <!-- product -->
        <div class="product">
            <h2 class="productTitle">強檔產品</h2>
            <img src="@/assets/HomePageImg/arrow-orange.png" alt="" class="orangeArrowImg" @click="prevProductCarouselImg">

            <div class="productCover">
                <div class="productContainer">
                    <div class="productItem" v-for="item in Product" :key="item.name">
                        <img :src="item.img" alt="" class="productImg">
                        <p class="producttext">{{ item.name }}</p>
                    </div>
                </div>
            </div>
            <img src="@/assets/HomePageImg/arrow-orange.png" alt="" class="orangeArrowImg orangeArrowNext"
                @click="nextProductCarouselImg">
        </div>
        <!-- new Infomation -->
        <div class="newInfo">
            <h1 class="newInfoTitle">最新消息</h1>
            <div class="newInfoCardGroup">
                <div class="newInfoCardItem">
                    <div class="newInfoCardImgContainer">
                        <img src="@/assets/HomePageImg/newInfo-img/info1.png" alt="" class="newInfoCardImg">
                    </div>
                    <h3 class="newInfoCardTitle">特製沙茶醬汁 | 香滷米血黑輪 | 7-Eleven全國上架</h3>
                    <p class="newInfoCardcontent">
                        各位還在等什麼~趕快到小七買起來~香滷米血黑輪在滷製過程添加特製的沙茶醬料，以提升香氣和風味，您可以期待著吸飽醬汁的米血柔軟口感和黑輪的彈牙口感的完美結合。</p>
                </div>
                <div class="newInfoCardItem">
                    <div class="newInfoCardImgContainer">
                        <img src="@/assets/HomePageImg/newInfo-img/info2.png" alt="" class="newInfoCardImg">
                    </div>
                    <h3 class="newInfoCardTitle">全新口味!麻辣煮霸氣登場!!!</h3>
                    <p class="newInfoCardcontent">
                        對於麻辣控我們帶來了一個令人興奮的消息!經過長時間的研發和精心調配我們推出了最新的創新產品『麻辣煮』。麻辣煮的獨特之處在於它融合了麻和辣的完美平衡選用了特級花椒和多種辛香料經過精心爆炒和煉製，無論你是喜歡辣的還是麻的都能滿足你的味蕾。
                    </p>
                </div>
                <div class="newInfoCardItem">
                    <div class="newInfoCardImgContainer">
                        <img src="@/assets/HomePageImg/newInfo-img/info3.png" alt="" class="newInfoCardImg">
                    </div>
                    <h3 class="newInfoCardTitle">7-11超商的關東煮御用米血糕品牌「如記米血糕」上市囉!</h3>
                    <p class="newInfoCardcontent">
                        你知道平常在7-11超商買的關東煮米血糕是哪個品牌的嗎?將將將將~就是「如記米血糕」啦!如記米血糕不僅用料實在、製程嚴謹。而且口感非常Q彈軟嫩、耐煮性十足，古早好滋味讓你吃過一次就再也停不下來!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";

import Carousel1 from "@/assets/HomePageImg/Carousel-img/Carousel 1.png";
import Carousel2 from "@/assets/HomePageImg/Carousel-img/Carousel 2.png";
import Carousel3 from "@/assets/HomePageImg/Carousel-img/Carousel 3.png";
import Carousel4 from "@/assets/HomePageImg/Carousel-img/Carousel 4.png";
import Carousel5 from "@/assets/HomePageImg/Carousel-img/Carousel 5.png";

import product1 from "@/assets/HomePageImg/Product-img/1.png"
import product2 from "@/assets/HomePageImg/Product-img/2.png"
import product3 from "@/assets/HomePageImg/Product-img/3.png"
import product4 from "@/assets/HomePageImg/Product-img/4.png"
import product5 from "@/assets/HomePageImg/Product-img/5.png"
import product6 from "@/assets/HomePageImg/Product-img/6.png"
import product7 from "@/assets/HomePageImg/Product-img/7.png"
import product8 from "@/assets/HomePageImg/Product-img/8.png"
import product9 from "@/assets/HomePageImg/Product-img/9.png"
import product10 from "@/assets/HomePageImg/Product-img/10.png"


export default {
    data() {
        return {
            Carousel: [
                Carousel1,
                Carousel2,
                Carousel3,
                Carousel4,
                Carousel5
            ],
            Product: [
                {
                    img: product1,
                    name: "米血糕"
                },
                {
                    img: product2,
                    name: "丸子系列"
                },
                {
                    img: product3,
                    name: "炭烤系列"
                },
                {
                    img: product4,
                    name: "關東煮"
                },
                {
                    img: product5,
                    name: "料理包"
                },
                {
                    img: product6,
                    name: "碗裝食品"
                },
                {
                    img: product7,
                    name: "特製食品"
                },
                {
                    img: product8,
                    name: "冷凍玉米"
                },
                {
                    img: product9,
                    name: "即食蔬菜"
                },
                {
                    img: product10,
                    name: "香蕉"
                },
            ],
            currentCarouselIndex: 0,
        }
    },
    methods: {
        prevCarouselImg() {
            const vm = this;
            if (vm.currentCarouselIndex === 0) {
                vm.currentCarouselIndex = vm.Carousel.length - 1;
            } else {
                vm.currentCarouselIndex -= 1;
            }
        },
        nextCarouselImg() {
            const vm = this;
            if (vm.currentCarouselIndex === vm.Carousel.length - 1) {
                vm.currentCarouselIndex = 0;
            } else {
                vm.currentCarouselIndex += 1;
            }
        },
        CarouselByCircle(index) {
            $('.CarouselImgGroup').css('--Carouselslide', `-${index * 52}%`)
            this.currentCarouselIndex = index
        },
        aboutUsVideoCarouselByCircle(index) {
            $('.aboutUsVideo').css('--aboutUsVideoSlide', `calc(-100% - 1.6rem) * ${index}`)

            $('.aboutUsVideoIndexGroup > *').css({ 'width': '15px', 'background-color': '#FDE4B4' })
            $(`#aboutUsVideoIndexItem${index}`).css({ 'width': '40px', 'background-color': '#F5D18C' })
        },
        prevProductCarouselImg() {
            $('.productContainer').css('--productCarouselslide', '0%')
        },
        nextProductCarouselImg() {
            $('.productContainer').css('--productCarouselslide', '106%')
        }
    },
    watch: {
        currentCarouselIndex() {
            const vm = this;

            $('.CarouselImgGroup').css('--Carouselslide', `-${vm.currentCarouselIndex * 52}%`)


            $('.CarouselImgGroup > *').css('width', '50%')
            $(`#CarouselImg${vm.currentCarouselIndex}`).css('width', '64%')

            $('.CarouselIndexGroup > *').css({ 'width': '15px', 'background-color': '#34D687' })
            $(`#CarouselIndexitem${vm.currentCarouselIndex}`).css({ 'width': '40px', 'background-color': '#00A353' })
        }
    },
    mounted() {
        $('#CarouselImg0').css('width', '64%')
        $(`#CarouselIndexitem0`).css({ 'width': '40px', 'background-color': '#00A353' })

        $(`#aboutUsVideoIndexItem0`).css({ 'width': '40px', 'background-color': '#F5D18C' })
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.CarouselContainer {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem 0 0;
    background: linear-gradient(96deg, #D5FECB 0%, #6CF6C0 100%);

    overflow: hidden;
}

.arrowImg {
    position: absolute;
    z-index: 1;
    height: 70px;
    opacity: .5;
}

.arrowImg:hover {
    cursor: pointer;
    opacity: 1;
}

.prev {
    left: 18%;
}

.next {
    transform: rotate(180deg);
    right: 18%;
}



.CarouselImgGroup {
    --Carouselslide: 0%;
    height: 500px;
    position: relative;
    left: 18%;

    display: flex;
    align-items: center;
    gap: 2%;
    transform: translateX(var(--Carouselslide));

    transition-duration: .5s;
    transition-timing-function: ease-in-out;
}

.CarouselImg {
    border-radius: 50px;
    width: 50%;
    box-shadow: 0px 3px 8px #000000CC;

    transition-duration: .5s;
    transition-timing-function: ease-in-out;
}

.CarouselIndexGroup {
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;

    background: linear-gradient(96deg, #D5FECB 0%, #6CF6C0 100%);

    padding-bottom: 4rem;
}

.CarouselIndexitem {
    height: 15px;
    width: 15px;
    background-color: #34D687;
    border-radius: 50px;

    transition-duration: .5s;
    transition-timing-function: ease-in-out;

    cursor: pointer;
}

.aboutUs {
    background: url('@/assets/HomePageImg/aboutUsbg.png') top center;
    padding: 3rem 20% 6rem;
}

.aboutUsTitle {
    text-align: center;
    margin-bottom: 3rem;
}

.aboutUsContent {
    display: grid;
    grid-template-columns: 1fr 1.26fr;
    grid-template-rows: 15px auto auto;

    position: relative;
}


.aboutUstextContainer {
    position: relative;
    background-color: white;
    border-radius: 20px;
    padding: 1.5rem;

    box-shadow: 0px 3px 6px #808080;
}

.aboutUsLogo {
    position: relative;
    z-index: 1;
    top: 0;
    left: -15px;
    height: 70px;
    border-radius: 50%;
}

.aboutUstext {
    width: 85%;
    margin-left: auto;
    font-size: 18px;
    font-weight: bold;
}

.aboutUsVideoContainer {
    grid-row: span 2;
    background-color: white;
    border-radius: 15px;
    padding: 0.8rem;
    margin-left: 30px;

    box-shadow: 0px 3px 6px #808080;

    display: flex;
    gap: 1.6rem;
    justify-content: flex-start;
    overflow: hidden;


}

.aboutUsVideo {
    border-radius: 15px;
    min-width: 100%;

    --aboutUsVideoSlide: 0;

    transform: translateX(calc(var(--aboutUsVideoSlide)));

    transition-duration: .5s;
    transition-timing-function: ease-in-out;
}

.aboutUsVideoIndexGroup {
    grid-area: 3/2/4/3;
    margin-top: 30px;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
}

.aboutUsVideoIndexItem {
    height: 15px;
    width: 15px;
    border-radius: 50px;

    background-color: #FDE4B4;

    cursor: pointer;

    transition-duration: .5s;
    transition-timing-function: ease-in-out;
}

.product {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    position: relative;

    padding: 4rem 0;
}

.productTitle {
    position: absolute;
    top: calc(-1.8rem);
    background-color: #FFD86F;
    border-radius: 50px;

    padding: 0.8rem 2rem;
}

.productCover {
    width: 62.5%;
    overflow: hidden;
}

.productContainer {
    --productCarouselslide: 0%;

    display: flex;
    gap: 6%;
    align-items: center;

    position: relative;
    right: var(--productCarouselslide);

    transition-duration: 1s;
    transition-timing-function: ease-in-out;
}

.productItem {
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.orangeArrowImg {
    height: 70px;
    cursor: pointer;
    opacity: .5;
}

.orangeArrowImg:hover {
    opacity: 1;
}

.orangeArrowNext {
    transform: rotate(180deg);
}

.productImg {
    height: 150px;
    border-radius: 50%;

    box-shadow: 3px 3px 6px #000000B3;
}

.producttext {
    font-size: 18px;
    font-weight: bold;
}

.newInfo {
    background: linear-gradient(144deg, #F7E492 0%, #EDC761 100%);
}

.newInfoTitle {
    padding: 2rem 0;
    text-align: center;
}

.newInfoCardGroup {
    display: flex;
    gap: 2rem;
    justify-content: center;

    padding-bottom: 4rem;
}

.newInfoCardItem {
    background-color: #FDF1DA;
    border-radius: 20px;
    padding: 1.5rem;
}

.newInfoCardImgContainer {
    height: 250px;
    width: 300px;
    border-radius: 20px;

    overflow: hidden;
}

.newInfoCardImg {
    height: 250px;
    width: 300px;
    object-fit: cover;
    object-position: center;

    border-radius: 20px;
}

.newInfoCardImg:hover {
    transform: scale(1.2, 1.2);

    transition-duration: .5s;
}

.newInfoCardTitle {
    width: 300px;
    margin: 1rem 0;
}

.newInfoCardcontent {
    width: 300px;
    font-size: 16px;
    line-height: 24px;
}</style>