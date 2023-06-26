<template>
    <div>
        <div class="productDetailContainer">
            <div class="productDetailContentContainer">
                <img :src="TitleImg" alt="" class="productDetailTitleImg">
                <div class="productDetailContentTextContainer">
                    <h2 class="productDetailTitle">{{ currentProductDetail.productName }}</h2>
                    <h4 class="productDetailSubtitle">{{ currentProductDetail.subTitle }}</h4>
                    <p class="productDetailContent">{{ currentProductDetail.content }}</p>
                    <button class="buyNowButton">前往購買</button>
                </div>
                <div class="CarouselContainer">
                    <div class="arrowContainer" @click="CarouselSlide(1)">
                        <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt=""
                            class="arrow CarouselArrowLeft">
                    </div>
                    <div class="CarouselImgContainer">
                        <img :src="img" alt="" class="CarouselImg"
                            v-for="(img, index) in currentProductDetail.productImg.CarouselImg" :key="index"
                            @click="changeTitleImg(img)">
                    </div>

                    <div class="arrowContainer" @click="CarouselSlide(-1)">
                        <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="" class="arrow">
                    </div>
                </div>
            </div>

            <div class="productDetailSpecificationContainer">
                <div class="productDetailSpecification">
                    <div class="productDetailSpecificationItem" id="productDetailSpecificationItem0">
                        <div @click="openProductDetail(0)">
                            <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="">
                            <h3>淨重</h3>
                        </div>
                        <p>{{ currentProductDetail.netWeight }}</p>
                    </div>
                    <div class="productDetailSpecificationItem" id="productDetailSpecificationItem1">
                        <div @click="openProductDetail(1)">
                            <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="">
                            <h3>保存期限</h3>
                        </div>
                        <p>{{ currentProductDetail.shelfLife }}</p>
                    </div>
                    <div class="productDetailSpecificationItem" id="productDetailSpecificationItem2">
                        <div @click="openProductDetail(2)">
                            <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="">
                            <h3>保存條件</h3>
                        </div>
                        <p>{{ currentProductDetail.storageConditions }}</p>
                    </div>
                    <div class="productDetailSpecificationItem lastItem"  id="productDetailSpecificationItem3">
                        <div @click="openProductDetail(3)">
                            <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="">
                            <h3>原產地</h3>
                        </div>
                        <p>{{ currentProductDetail.productionPlace }}</p>
                    </div>
                </div>
                <img :src="currentProductDetail.productImg.contentImg" alt="" class="productDetailSpecificationImg">
            </div>

            <div>
                <h2 class="RelatedProductsTitle">相關產品</h2>
                <div class="RelatedProductsCarouselContainer">
                    <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="" class="CarouselArrow CarouselArrowLeft">
                    <div>
                        <div v-for="(item,index) in RelatedProducts" :key="index" class="RelatedProductsCarouselItem" @click="RelatedProductPush(item.category.mainCategory, item.category.subCategory, item.productName)">
                            <div>
                                <img :src="item.productImg.CarouselImg[0]" alt="">
                            </div>
                            <p>{{ item.productName }}</p>
                        </div>
                    </div>
                    <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="" class="CarouselArrow">
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
            currentProductDetail: {},
            TitleImg: '',
            RelatedProducts: [],
        }
    },
    computed: {
        currentMainPage() {
            return this.$route.params.MainPage;
        },
        currentSubPage() {
            return this.$route.params.SubPage;
        },
        currentProductPage() {
            return this.$route.params.Product;
        },
        productData() {
            return this.$store.state.productData;
        }
    },
    methods: {
        CarouselSlide(way) {
            if (this.currentProductDetail.productImg.CarouselImg.length > 3) {
                if (way == 1) {
                    $('.CarouselImg').css('--CarouselSlide', '0%')
                } else {
                    $('.CarouselImg').css('--CarouselSlide', 'calc(-100% - 3px)')
                }
            }
        },
        changeTitleImg(img) {
            this.TitleImg = img
        },
        openProductDetail(index) {
            $(`#productDetailSpecificationItem${index} > p`).slideToggle(300)

            if( $(`#productDetailSpecificationItem${index} > div > img`).css('--rotateDeg') == '90deg') {
                $(`#productDetailSpecificationItem${index} > div > img`).css('--rotateDeg', '0deg')
            }else{
                $(`#productDetailSpecificationItem${index} > div > img`).css('--rotateDeg', '90deg')
            }
        },
        RelatedProductPush(MainPage, SubPage, ProductPage) {
            this.$router.push(`/Product/${MainPage}/${SubPage}/${ProductPage}`);
        }
    },
    watch: {
        currentMainPage: {
            handler(MainPage) {
                this.$store.commit('GETCURRENTPAGEROUTE', { name: MainPage, index: 1, path: `/Product/${MainPage}` })
            },
            immediate: true
        },
        currentSubPage: {
            handler(SubPage) {
                this.$store.commit('GETCURRENTPAGEROUTE', { name: SubPage, index: 2, path: `/Product/${this.currentMainPage}/${SubPage}` })
            },
            immediate: true
        },
        currentProductPage: {
            handler(ProductPage) {
                this.$store.commit('GETCURRENTPAGEROUTE', { name: ProductPage, index: 3, path: `/Product/${this.currentMainPage}/${this.currentSubPage}/${ProductPage}` })

                $("html").scrollTop(0);

                this.productData.filter((item) => {
                    if (item.productName === ProductPage) {
                        this.currentProductDetail = item
                    }
                })

                this.RelatedProducts = [];
                this.productData.forEach(item => {
                    if(item.category.mainCategory == this.currentMainPage && item.productName != ProductPage) {
                        this.RelatedProducts.push(item)
                    }
                });
            },
            immediate: true
        },
    },
    mounted() {
        this.TitleImg = this.currentProductDetail.productImg.CarouselImg[0]
    }
}
</script>

<style scoped>
.productDetailContainer {
    display: flex;
    gap: 6rem;
    flex-direction: column;
}

.productDetailContentContainer {
    display: grid;
    gap: 20px 0;
    grid-template-columns: 37.5% 62.5%;
    grid-template-rows: auto 90px;

}

.productDetailTitleImg {
    width: 100%;
    box-shadow: 0px 3px 6px #222222B3;
    border-radius: 20px;
}

.productDetailContentTextContainer {
    margin-left: 3rem;
    position: relative;
}



.productDetailSubtitle {
    color: #969696;
    margin: .8rem 0 1.5rem;
}

.productDetailContent {
    width: 70%;
    line-height: 1.5rem;
    letter-spacing: .5px;
}

.buyNowButton {
    padding: .6rem 1.5rem;

    font-size: 18px;
    font-weight: bold;

    position: absolute;
    bottom: 0;
}

.CarouselContainer {
    display: flex;
    gap: 10px;
    justify-content: space-between;
}

.arrowContainer {
    background-color: #F5F5F5;
    box-shadow: 0px 3px 6px #222222B3;
    border-radius: 8px;
    padding: 0 .4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
}

.arrow {
    height: 20px;
}

.CarouselArrowLeft {
    transform: rotate(180deg);
}

.CarouselImgContainer {
    display: flex;
    gap: 10px;
    justify-content: flex-start;

    width: 100%;
    overflow-x: clip;
}

.CarouselImg {
    height: 100%;
    border-radius: 12px;
    box-shadow: 3px 3px 3px #222222B3;
    cursor: pointer;

    --CarouselSlide: 0;

    transform: translateX(var(--CarouselSlide));
    transition-duration: 300ms;
}

.productDetailSpecificationContainer {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
}

.productDetailSpecification {
    display: flex;
    flex-direction: column;
}

.productDetailSpecificationItem {
    border-top: solid 1px black;
    padding: .5rem 0;
}

.lastItem {
    border-bottom: solid 1px black;
}

.productDetailSpecificationItem>div {
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;

    cursor: pointer;
}

.productDetailSpecificationItem>div>img {
    height: 16px;
    --rotateDeg: 0deg;

    transform: rotate(var(--rotateDeg));
    transition-duration: 300ms;
}

.productDetailSpecificationItem>div>h3 {
    font-size: 18px;
}

.productDetailSpecificationItem>p {
    font-size: 14px;
    display: none;
    letter-spacing: 1px;
}

.productDetailSpecificationImg {
    width: 100%;
    box-shadow: 0px 3px 6px #000000B3;
    border-radius: 10px;
}
.RelatedProductsTitle{
    margin-left: 70px;
    margin-bottom: 2rem;
}

.RelatedProductsCarouselContainer{
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
}
.RelatedProductsCarouselContainer > .CarouselArrow {
    width: 30px;
    cursor: pointer;
}
.RelatedProductsCarouselContainer > div {
    display: flex;
    gap: 40px;
    width: 100%;
}
.RelatedProductsCarouselItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}
.RelatedProductsCarouselItem > p {
    margin-top: 1.5rem;
}
.RelatedProductsCarouselItem > div{
    padding: .5rem;
    box-shadow: 0px 5px 10px #AFAFAF;
    border-radius: 15px;
}
.RelatedProductsCarouselItem > div > img{
    height: 120px;
    border-radius: inherit;
}
</style>