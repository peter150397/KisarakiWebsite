<template>
    <div>
        <div class="productDetailContainer">
            <div class="productDetailContentContainer">
                <img :src="currentProductDetail.productImg.CarouselImg[0]" alt="" class="productDetailTitleImg">
                <div class="productDetailContentTextContainer">
                    <h3 class="productDetailTitle">{{ currentProductDetail.productName }}</h3>
                    <h4 class="productDetailSubtitle">{{ currentProductDetail.subTitle }}</h4>
                    <p class="productDetailContent">{{ currentProductDetail.content }}</p>
                    <button class="buyNowButton">前往購買</button>
                </div>
                <div class="CarouselContainer">
                    <div class="arrowContainer">
                        <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="" class="CarouselArrow CarouselArrowLeft">
                    </div>
                    <img :src="currentProductDetail.productImg.CarouselImg[0]" alt="" class="CarouselImg">
                    <img :src="currentProductDetail.productImg.CarouselImg[0]" alt="" class="CarouselImg">
                    <img :src="currentProductDetail.productImg.CarouselImg[0]" alt="" class="CarouselImg">
                    <div class="arrowContainer">
                        <img src="@/assets/ProductImg/ProductDataImg/arrow.png" alt="" class="CarouselArrow">
                    </div>
                </div>
            </div>
            <div class="productDetailSpecificationContainer">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentProductDetail:{},
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

                this.productData.filter((item)=>{
                    if(item.productName === ProductPage) {
                        this.currentProductDetail = item
                    }
                })
            },
            immediate: true
        },
    }
}
</script>

<style scoped>
.productDetailContainer{
    display: flex;
    gap: 6rem;
    flex-direction: column;
}
.productDetailContentContainer{
    display: grid;
    gap: 20px 0;
    grid-template-columns: 37.5% 62.5%;
    grid-template-rows: auto 90px;

}
.productDetailTitleImg{
    width: 100%;
    box-shadow: 0px 3px 6px #222222B3;
    border-radius: 20px;
}
.productDetailContentTextContainer{
    margin-left: 3rem;
    position: relative;
}
.productDetailTitle{
    font-size: 24px;

}
.productDetailSubtitle{
    color: #969696;
    margin: .8rem 0 1.5rem;
}
.productDetailContent{
    width: 70%;
    line-height: 1.5rem;
    letter-spacing: .5px;
}
.buyNowButton{
    background-color: #F4DB82;
    border: none;
    border-radius: 30px;
    padding: 1rem 1.5rem;

    font-family: '微軟正黑體';
    font-size: 18px;
    font-weight: bold;

    position: absolute;
    bottom: 0;
}

.CarouselContainer{
    display: flex;
    justify-content: space-between;
}
.arrowContainer{
    background-color: #F5F5F5;
    box-shadow: 0px 3px 6px #222222B3;
    border-radius: 8px;
    padding: 0 .4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
}
.CarouselArrow{
    height: 20px;
}
.CarouselArrowLeft{
    transform: rotate(180deg);
}
.CarouselImg{
    height: 100%;
    border-radius: 12px;
    box-shadow: 0px 3px 6px #222222B3;
}

.productDetailSpecificationContainer{
    
}
</style>