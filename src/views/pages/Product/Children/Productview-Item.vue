<template>
    <div>
        <div class="productDetailContainer">
            <div class="contentContainer">
                <img :src="TitleImg" alt="">
                <div class="contentTextContainer">
                    <div>
                        <h2>{{ currentProductDetail.productName }}</h2>
                        <h4>{{ currentProductDetail.subTitle }}</h4>
                        <p>{{ currentProductDetail.content }}</p>
                    </div>
                    <button>前往購買</button>
                </div>
                <div class="CarouselContainer">
                    <div class="arrowContainer" @click="CarouselSlide(true,0)">
                        <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="">
                    </div>

                    <div class="CarouselImgContainer">
                        <img :src="img" alt="" class="CarouselImg" style="--CarouselSlide: 0;"
                            v-for="(img, index) in currentProductDetail.productImg.CarouselImg" :key="index"
                            @click="changeTitleImg(img)">
                    </div>

                    <div class="arrowContainer" @click="CarouselSlide(true,10000)">
                        <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="" class="CarouselArrowRight">
                    </div>
                </div>
            </div>

            <div class="specificationContainer">
                <div class="specification">
                    <div class="specificationItem" id="specificationItem0">
                        <div @click="openProductDetail(0)">
                            <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="" style="--rotateDeg: 180deg;">
                            <h3>淨重</h3>
                        </div>
                        <p>{{ currentProductDetail.netWeight }}</p>
                    </div>
                    <div class="specificationItem" id="specificationItem1">
                        <div @click="openProductDetail(1)">
                            <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="" style="--rotateDeg: 180deg;">
                            <h3>保存期限</h3>
                        </div>
                        <p>{{ currentProductDetail.shelfLife }}</p>
                    </div>
                    <div class="specificationItem" id="specificationItem2">
                        <div @click="openProductDetail(2)">
                            <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="" style="--rotateDeg: 180deg;">
                            <h3>保存條件</h3>
                        </div>
                        <p>{{ currentProductDetail.storageConditions }}</p>
                    </div>
                    <div class="specificationItem" id="specificationItem3">
                        <div @click="openProductDetail(3)">
                            <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="" style="--rotateDeg: 180deg;">
                            <h3>原產地</h3>
                        </div>
                        <p>{{ currentProductDetail.productionPlace }}</p>
                    </div>
                </div>
                <img :src="currentProductDetail.productImg.contentImg" alt="" class="specificationImg">
            </div>
            <div>
                <h2>相關產品</h2>
                <div class="RelatedProductsCarouselContainer">
                    <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="" class="CarouselArrow"
                        @click="CarouselSlide(false,0)">
                    <div class="RelatedProductsCarouselImgContainer">
                        <div v-for="(item, index) in RelatedProducts" :key="index" class="RelatedProductsCarouselItem"
                            @click="RelatedProductPush(item.category.mainCategory, item.category.subCategory, item.productName)"
                            style="--RelatedProductsCarouselSlide: 0; ">
                            <div>
                                <img :src="item.productImg.CarouselImg[0]" alt="">
                            </div>
                            <p>{{ item.productName }}</p>
                        </div>
                    </div>
                    <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="" class="CarouselArrow CarouselArrowRight"
                        @click="CarouselSlide(false,10000)">
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
        CarouselSlide(isfirstCarousel, scroll) {
            if(isfirstCarousel) {
                const Carousel = document.querySelector('.CarouselImgContainer');
                Carousel.scrollLeft = scroll;
            }else{
                const Carousel = document.querySelector('.RelatedProductsCarouselImgContainer');
                Carousel.scrollLeft = scroll;
            }
        },
        changeTitleImg(img) {
            this.TitleImg = img
        },
        openProductDetail(index) {
            $(`#specificationItem${index} > p`).slideToggle(150)

            if ($(`#specificationItem${index} > div > img`).css('--rotateDeg') == '270deg') {
                $(`#specificationItem${index} > div > img`).css('--rotateDeg', '180deg')
            } else {
                $(`#specificationItem${index} > div > img`).css('--rotateDeg', '270deg')
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
                    if (item.category.mainCategory == this.currentMainPage && item.productName != ProductPage) {
                        this.RelatedProducts.push(item)
                    }
                });
            },
            immediate: true
        },
    },
    mounted() {
        this.TitleImg = this.currentProductDetail.productImg.CarouselImg[0]

        const firstCarousel = document.querySelector('.CarouselImgContainer');
        firstCarousel.addEventListener('wheel', (event) => {
            event.preventDefault();
            firstCarousel.scrollLeft += event.deltaY * 3;
        });

        const RelatedProductsCarousel = document.querySelector('.RelatedProductsCarouselImgContainer');
        RelatedProductsCarousel.addEventListener('wheel', (event) => {
            event.preventDefault();
            RelatedProductsCarousel.scrollLeft += event.deltaY * 3;
        });
    }
}
</script>

<style scoped>
.productDetailContainer {
    display: flex;
    gap: 6rem;
    flex-direction: column;
}

.contentContainer {
    display: grid;
    gap: 1.5rem 0;
    grid-template-columns: 37.5% 62.5%;
    grid-template-rows: auto 90px;

}

.contentContainer>img {
    width: 100%;
    box-shadow: 0px 3px 6px #222222B3;
    border-radius: 20px;
}

.contentTextContainer {
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}



.contentTextContainer>div>h4 {
    color: #969696;
    margin: .8rem 0 1.5rem;
}

.contentTextContainer>div>p {
    width: 70%;
    line-height: 1.5rem;
    letter-spacing: .5px;
}

.contentTextContainer>button {
    padding: .6rem 2rem;

    font-size: 18px;
    font-weight: bold;
}

.CarouselContainer {
    display: flex;
    gap: 10px;
    justify-content: space-between;
}

.arrowContainer {
    background-color: #F5F5F5;
    box-shadow: 0px 3px 6px #222222B3;
    border-radius: 5px;
    padding: 0 .4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
}

.arrowContainer>img {
    height: 20px;
}

.CarouselImgContainer {
    display: flex;
    gap: 10px;
    justify-content: flex-start;

    width: 100%;
    overflow-x: scroll;
    overscroll-behavior: contain;
    scroll-behavior: smooth;
}

.CarouselImgContainer::-webkit-scrollbar {
    display: none;
}

.CarouselImg {
    height: 100%;
    border-radius: 12px;
    cursor: pointer;

    transform: translateX(var(--CarouselSlide));
    transition-duration: 300ms;
}

.specificationContainer {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
}

.specification {
    display: flex;
    flex-direction: column;
}

.specificationItem {
    border-top: solid 1px black;
    padding: .5rem 0;
}

.specificationItem:last-child {
    border-bottom: solid 1px black;
}

.specificationItem>div {
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: .2rem;

    cursor: pointer;
}

.specificationItem>div>img {
    height: 16px;

    transform: rotate(var(--rotateDeg));
    transition-duration: 150ms;
}

.specificationItem>div>h3 {
    font-size: 18px;
}

.specificationItem>p {
    font-size: 14px;
    letter-spacing: 1px;
    display: none;
}

.specificationImg {
    width: 100%;
    box-shadow: 0px 3px 6px #000000B3;
    border-radius: 10px;
}

.RelatedProductsCarouselContainer {
    margin-top: 2rem;

    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
}

.RelatedProductsCarouselContainer>.CarouselArrow {
    position: static;
}

.RelatedProductsCarouselImgContainer {
    display: flex;
    gap: 40px;
    width: 100%;
    overflow-x: scroll;
    overscroll-behavior: contain;
    scroll-behavior: smooth;
}
.RelatedProductsCarouselImgContainer::-webkit-scrollbar {
    display: none;
}

.RelatedProductsCarouselItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    transform: translateX(var(--RelatedProductsCarouselSlide));
    transition-duration: 300ms;
}


.RelatedProductsCarouselItem>div {
    padding: .5rem;
    margin-bottom: 1rem;
    box-shadow: 5px 5px 10px #AFAFAF;
    border-radius: 15px;
}

.RelatedProductsCarouselItem>div>img {
    height: 120px;
    border-radius: inherit;
}

@media (max-width: 1022px) {
    .productDetailContainer{
        gap: 4rem;
    }
    .contentContainer {
        display: grid;
        gap: 1rem;
        grid-template-columns: 100%;
        grid-template-rows: auto 90px auto;
    }

    .contentContainer>img {
        width: 80%;
        margin: 0 auto;
    }

    .contentTextContainer {
        margin: 0;
        text-align: center;
        align-items: center;
        gap: 2rem;
    }

    .contentTextContainer>div>p {
        margin: 0 auto;
    }

    .CarouselContainer {
        grid-area: 2;
        width: 50%;
        margin: 0 auto;
    }


    .specificationContainer {
        grid-template-columns: 100%;
        gap: 2.5rem;
    }

    .specificationImg {
        grid-area: 1;
        border-radius: 35px;
    }
    .specificationItem>p {
        margin: .5rem 0;
    }


    .RelatedProductsCarouselContainer , .RelatedProductsCarouselImgContainer{
        gap: 1rem;
    }
}</style>