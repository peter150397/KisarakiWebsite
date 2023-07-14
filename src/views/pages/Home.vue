<template>
    <div>
        <!-- Carousel -->
        <div class="CarouselBg">
            <div class="CarouselContainer">
                <img src="@/assets/HomePageImg/arrow.png" alt="" class="titleArrowPrev CarouselArrow"
                    @click="prevCarouselImg">
                <img src="@/assets/HomePageImg/arrow.png" alt="" class="titleArrowNext CarouselArrow CarouselArrowRight"
                    @click="nextCarouselImg">

                <div class="CarouselImgGroup" style="--Carouselslide: 0%;">
                    <img :src="img" alt="" class="CarouselImg" :id="'CarouselImg' + index" v-for="(img, index) in Carousel"
                        :key="img">
                </div>
            </div>
            <div class="CarouselIndexGroup">
                <div class="titleCarouselIndex CarouselIndex" :id="'CarouselIndexitem' + index"
                    v-for="(circle, index) in Carousel.length" :key="circle" @click="CarouselByIndex(index)"></div>
            </div>
        </div>


        <!-- aboutUs -->
        <div class="aboutUsBg columnCenterContainer">
            <div class="aboutUsContainer">
                <h1>關於我們</h1>
                <div>
                    <img src="@/assets/HomePageImg/aboutUsLogo.jpg" alt="">

                    <div class="aboutUsVideoContainer">
                        <iframe src="https://www.youtube.com/embed/Fuku5fH6VDI" title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen class="aboutUsVideo" style="--aboutUsVideoCarouselSlide: 0;"></iframe>
                        <iframe src="https://www.youtube.com/embed/tc61Y7okrVI" title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen class="aboutUsVideo" style="--aboutUsVideoCarouselSlide: 0;"></iframe>
                        <iframe src="https://www.youtube.com/embed/A0QY97rN-jc" title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen class="aboutUsVideo" style="--aboutUsVideoCarouselSlide: 0;"></iframe>
                    </div>
                    <div class="aboutUsTextContainer columnCenterContainer">
                        <p>
                            如記食品有限公司創立於1988年，工廠座落於屏東縣竹田鄉，主要產品為米血糕，目前也是國內唯一米血糕經CAS認證的廠商！<br>
                            <br>
                            我們不斷追求進步，在創立後的三十年當中，發展多元多樣各式產品，包含冷藏調理食品、點心類食品、冷凍食品類及4℃鮮食類...多元多樣各式產品。
                        </p>
                        <button @click="changePage('/AboutUs')">More</button>
                    </div>
                    <div class="aboutUsVideoIndexGroup">
                        <div class="aboutUsCarouselIndex CarouselIndex" id="aboutUsVideoIndexItem0"
                            @click="aboutUsVideoCarouselByIndex(0)">
                        </div>
                        <div class="aboutUsCarouselIndex CarouselIndex" id="aboutUsVideoIndexItem1"
                            @click="aboutUsVideoCarouselByIndex(1)">
                        </div>
                        <div class="aboutUsCarouselIndex CarouselIndex" id="aboutUsVideoIndexItem2"
                            @click="aboutUsVideoCarouselByIndex(2)">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- product -->
        <div class="product">
            <h2>強檔產品</h2>
            <img src="@/assets/HomePageImg/arrow-orange.png" alt="" class="CarouselArrow productArrow"
                @click="arrowScrollProductCarousel(0)">

            <div class="productCover">
                <div class="productItem" v-for="(item, index) in Product" :key="index"
                    @click="changePage('/Product', '/' + item.category.mainCategory, '/' + item.category.subCategory, '/' + item.productName)">
                    <img :src="item.productImg.CarouselImg[0]" alt="">
                    <p>{{ item.productName }}</p>
                </div>
            </div>
            <img src="@/assets/HomePageImg/arrow-orange.png" alt="" class="CarouselArrow CarouselArrowRight productArrow"
                @click="arrowScrollProductCarousel(1006)">
        </div>
        <!-- new Infomation -->
        <div class="newInfo columnCenterContainer">
            <h1 class="newInfoTitle">最新消息</h1>
            <div class="newInfoCardGroup">
                <div class="newInfoCardItem" @click="changePage('/NewInfo')">
                    <div class="newInfoCardImgContainer">
                        <img src="@/assets/HomePageImg/newInfo-img/info1.png" alt="" class="newInfoCardImg">
                    </div>
                    <h3>特製沙茶醬汁 | 香滷米血黑輪 | 7-Eleven全國上架</h3>
                    <p>
                        各位還在等什麼~趕快到小七買起來~香滷米血黑輪在滷製過程添加特製的沙茶醬料，以提升香氣和風味，您可以期待著吸飽醬汁的米血柔軟口感和黑輪的彈牙口感的完美結合。</p>
                </div>
                <div class="newInfoCardItem" @click="changePage('/NewInfo')">
                    <div class="newInfoCardImgContainer">
                        <img src="@/assets/HomePageImg/newInfo-img/info2.png" alt="" class="newInfoCardImg">
                    </div>
                    <h3>全新口味!麻辣煮霸氣登場!!!</h3>
                    <p>
                        對於麻辣控我們帶來了一個令人興奮的消息!經過長時間的研發和精心調配我們推出了最新的創新產品『麻辣煮』。麻辣煮的獨特之處在於它融合了麻和辣的完美平衡選用了特級花椒和多種辛香料經過精心爆炒和煉製，無論你是喜歡辣的還是麻的都能滿足你的味蕾。
                    </p>
                </div>
                <div class="newInfoCardItem" @click="changePage('/NewInfo')">
                    <div class="newInfoCardImgContainer">
                        <img src="@/assets/HomePageImg/newInfo-img/info3.png" alt="" class="newInfoCardImg">
                    </div>
                    <h3>7-11超商的關東煮御用米血糕品牌「如記米血糕」上市囉!</h3>
                    <p>
                        你知道平常在7-11超商買的關東煮米血糕是哪個品牌的嗎?將將將將~就是「如記米血糕」啦!如記米血糕不僅用料實在、製程嚴謹。而且口感非常Q彈軟嫩、耐煮性十足，古早好滋味讓你吃過一次就再也停不下來!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";


export default {
    data() {
        return {
            currentTitleCarouselIndex: 0,
        }
    },
    computed: {
        Carousel() {
            return this.$store.state.homeCarouselImg
        },
        Product() {
            return this.$store.state.productData
        }
    },
    methods: {
        prevCarouselImg() {
            const vm = this;
            if (vm.currentTitleCarouselIndex === 0) {
                vm.currentTitleCarouselIndex = vm.Carousel.length - 1;
            } else {
                vm.currentTitleCarouselIndex -= 1;
            }
        },
        nextCarouselImg() {
            const vm = this;
            if (vm.currentTitleCarouselIndex === vm.Carousel.length - 1) {
                vm.currentTitleCarouselIndex = 0;
            } else {
                vm.currentTitleCarouselIndex += 1;
            }
        },
        CarouselByIndex(index) {
            $('.CarouselImgGroup').css('--Carouselslide', `-${index * 52}%`)
            this.currentTitleCarouselIndex = index
        },
        aboutUsVideoCarouselByIndex(index) {
            $('.aboutUsVideo').css('--aboutUsVideoCarouselSlide', `(-100% - 1.6rem) * ${index}`)

            $('.aboutUsVideoIndexGroup > div').css({ 'width': '10px', 'background-color': '#FDE4B4' })
            $(`#aboutUsVideoIndexItem${index}`).css({ 'width': '30px', 'background-color': '#F5D18C' })
        },
        arrowScrollProductCarousel(scroll) {
            const productCover = document.querySelector('.productCover');
            productCover.scrollLeft = scroll;
        },
        changePage(page1, page2 = '', page3 = '', page4 = '') {
            this.$router.push(page1 + page2 + page3 + page4);

            $("html").scrollTop(0);
        },
    },
    watch: {
        currentTitleCarouselIndex() {
            const vm = this;

            $('.CarouselImgGroup').css('--Carouselslide', `-${vm.currentTitleCarouselIndex * 52}%`)

            $('.CarouselImgGroup > *').css('width', '50%')
            $(`#CarouselImg${vm.currentTitleCarouselIndex}`).css('width', '64%')

            $('.CarouselIndexGroup > *').css({ 'width': '10px', 'background-color': '#34D687' })
            $(`#CarouselIndexitem${vm.currentTitleCarouselIndex}`).css({ 'width': '30px', 'background-color': '#00A353' })
        },
    },
    mounted() {
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 0, path: '' })

        const productCover = document.querySelector('.productCover');
        productCover.addEventListener('wheel', (event) => {
            event.preventDefault();
            productCover.scrollLeft += event.deltaY * 3;
        });
    }
}
</script>

<style scoped>
.CarouselBg {
    background: linear-gradient(96deg, #D5FECB 0%, #6CF6C0 100%);
    align-self: center;
    width: 100vw;
}

.CarouselContainer {
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 2rem;
}

.titleArrowPrev {
    left: 18%;
}

.titleArrowNext {
    right: 18%;
}

.CarouselImgGroup {
    height: 30vw;
    position: relative;
    left: 18%;

    display: flex;
    align-items: center;
    gap: 2%;
    transform: translateX(var(--Carouselslide));

    transition: transform ease-in-out .5s 0s;
}

.CarouselImg {
    border-radius: 5vw;
    width: 50%;
    box-shadow: 0px 3px 8px #000000CC;

    transition: width ease-in-out .5s 0s;
}

.CarouselImg:first-child {
    width: 64%;
}

.CarouselIndexGroup {
    display: flex;
    gap: 10px;
    justify-content: center;

    padding: 2rem 0 3rem;
}

.titleCarouselIndex {
    background-color: #34D687;
}

.titleCarouselIndex:first-child {
    width: 30px;
    background-color: #00A353;
}

.aboutUsBg {
    background: url('@/assets/HomePageImg/aboutUsbg.png') top center;
    padding: 3rem 0 6rem;
}

.aboutUsContainer {
    width: 990px;
}

.aboutUsContainer>h1 {
    text-align: center;
    margin-bottom: 3rem;
}

.aboutUsContainer>div {
    display: grid;
    grid-template-columns: 1fr 1.26fr;
    grid-template-rows: 15px;

    position: relative;
}

.aboutUsContainer>div>img {
    position: relative;
    z-index: 1;
    top: 0;
    left: -15px;
    height: 70px;
    border-radius: 50%;
}

.aboutUsTextContainer {
    background-color: white;
    border-radius: 20px;
    padding: 1.5rem 1.5rem 2rem;

    box-shadow: 0px 3px 6px #808080;

    align-items: flex-end;
}

.aboutUsTextContainer>p {
    width: 88%;
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

    transform: translateX(calc(var(--aboutUsVideoCarouselSlide)));

    transition: transform ease-in-out .5s 0s;
}

.aboutUsVideoIndexGroup {
    grid-area: 3/2/4/3;
    margin-top: 30px;
    display: flex;
    gap: 10px;
    justify-content: center;
}

.aboutUsCarouselIndex {
    background-color: #FDE4B4;
}

.aboutUsCarouselIndex:first-child {
    width: 30px;
    background-color: #F5D18C;
}

.product {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    position: relative;

    padding: 4rem 0;
}

.product>h2 {
    position: absolute;
    top: calc(-1.8rem);
    background-color: #FFD86F;
    border-radius: 50px;

    padding: 0.8rem 2rem;
}

.productArrow {
    position: static;
}

.productCover {
    width: 62vw;
    overflow-x: scroll;
    overscroll-behavior: contain;
    scroll-behavior: smooth;

    display: flex;
    gap: 18px;
    justify-content: flex-start;
}

.productCover::-webkit-scrollbar {
    display: none;
}

.productItem {
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    cursor: pointer;
}

.productItem>img {
    width: 150px;
    border-radius: 50%;
}

.productItem>p {
    font-size: 18px;
    font-weight: bold;
}

.newInfo {
    background: linear-gradient(144deg, #F7E492 0%, #EDC761 100%);
}

.newInfoTitle {
    padding: 2rem 0;
}

.newInfoCardGroup {
    display: flex;
    gap: 2vw;
    justify-content: center;

    width: 990px;

    padding-bottom: 4rem;
}

.newInfoCardItem {
    box-shadow: 0px 5px 10px #E29D19;
}

@media (max-width: 1022px) {
    .aboutUsBg {
        padding: 3rem 0;
    }

    .aboutUsContainer {
        width: 80vw;
    }

    .aboutUsContainer>div {
        display: flex;
        flex-direction: column;
    }

    .aboutUsContainer>div>img {
        display: none;
    }

    .aboutUsTextContainer {
        order: -1;
        align-items: center;
        margin-bottom: 2rem;
        padding: 1rem;
    }

    .aboutUsTextContainer>button {
        margin-top: 1.5rem;
    }

    .aboutUsVideoContainer {
        margin: 0;
        padding: 1.5rem;
        aspect-ratio: 1.6 / 1;
    }

    .productItem>img {
        width: 100px;
    }

    .productItem>p {
        font-size: 15px;
    }

    .newInfoCardGroup {
        width: 80vw;
    }
}

@media (max-width: 500px){
    .newInfoCardGroup{
        flex-direction: column;
        width: 60vw;
        gap: 2rem;
    }
}

</style>