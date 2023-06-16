<template>
    <div class="productContainer">
        <div class="aboutUsTitleContainer">
            <h1 class="aboutUsTitle">強檔產品</h1>
            <button class="searchButton">
                <img src="@/assets/ProductImg/OverviewImg/search.png" alt="" class="searchImg">
            </button>
            <input type="text" placeholder="Search" class="aboutUsSearch">
        </div>
        <div class="linkGroup">
            <div class="linkItem" v-for="mainPage in productNavbarData" @mouseenter="hoverIn(mainPage.index)"
                :key="mainPage.index" :class="{ 'removeAfter': mainPage.index == productNavbarData.length - 1 }">
                <p class="link" @click="changeMainPage(mainPage.name)" :id="'link' + mainPage.index">{{
                    mainPage.name }}</p>
                <div class="subLinkGroup" :id="'subLinkGroup' + mainPage.index">
                    <p to="/Product/RiceBloodCake/FamilySize" class="subLink"
                        :id="mainPage.index + 'subLink' + subPage.index" v-for="subPage in mainPage.subName"
                        :key="subPage.index"
                        @click="changeSubPage(mainPage.name, subPage.name)"
                        :class="{ 'removeAfter': subPage.index == mainPage.subName.length - 1 }">{{ subPage.name }}</p>
                </div>
            </div>
        </div>
        <router-view class="productRouterView"></router-view>
    </div>
</template>

<script>
import $ from "jquery";

export default {
    data() {
        return {

        }
    },
    computed: {
        productNavbarData() {
            return this.$store.state.productNavbarData;
        },
        currentPage() {
            return this.$store.state.currentPage
        }
    },
    methods: {
        hoverIn(index) {
            $('.subLinkGroup').removeClass('subLinkGroupGetHover')
            $(`#subLinkGroup${index}`).addClass('subLinkGroupGetHover')
        },
        clickActive(MainPageIndex , SubPageIndex) {
            $('.link').removeClass('linkActive');
            $('.subLinkGroup').removeClass('subLinkGroupGetclick subLinkGroupActive');
            $('.subLink').removeClass('subLinkActive')

            $(`#link${MainPageIndex}`).addClass('linkActive');
            $(`#subLinkGroup${MainPageIndex}`).addClass('subLinkGroupGetclick subLinkGroupActive');
            $(`#${MainPageIndex}subLink${SubPageIndex}`).addClass('subLinkActive');
        },
        changeMainPage(MainPage) {
            this.$router.push(`/Product/${MainPage}`);
        },
        changeSubPage(MainPage, SubPage) {
            this.$router.push(`/Product/${MainPage}/${SubPage}`)
        }
    },
    watch: {
        currentPage: {
            handler(value) {
                let currentMainPageIndex = NaN;
                let currentSubPageIndex = NaN;

                this.$store.state.productNavbarData.forEach(item => {
                    if(item.name === value[1].name) {
                        currentMainPageIndex = item.index

                        if(value[2].name) {
                            item.subName.forEach( subItem =>{
                                if(subItem.name === value[2].name) {
                                    currentSubPageIndex = subItem.index
                                }
                            })
                        }
                    }
                });

                this.clickActive(currentMainPageIndex , currentSubPageIndex)
            },
            deep: true,
            immediate: true
        }
    },
    // created() {
    //     this.currentPage = this.$store.state.currentPage
    // },
    mounted() {
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '強檔產品', index: 0, path: '/Product' })
    },
}
</script>

<style scoped>
.productContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
}
.aboutUsTitleContainer{
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 4rem;
}
.searchButton{
    border: solid 1px black;
    border-radius: 25px;
    padding: 8px 138px 8px 12px;
    background-color: transparent;

    position: absolute;
    right: 18.75%;

    cursor: pointer;
}
.searchImg{
    height: 20px;
}
.aboutUsSearch{
    position: absolute;
    right: 18.75%;
    height: 36px;
    width: 130px;
    border: none;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 0;

    font-size: 16px;

    background-color: transparent;
}
.aboutUsSearch:focus{
    outline: none;
}

.linkGroup {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    height: 38px;
}

.link {
    padding: 0.5rem 1.5rem;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    color: black;

    text-decoration: none;

    cursor: pointer;
}

.linkItem {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
}

.linkItem:after {
    content: "";
    width: 1px;
    height: 50%;
    background-color: black;
    position: absolute;
    right: 0;
    top: 25%;
}


.linkGroup>.removeAfter:after {
    content: none;
}

.linkItem:hover .link {
    background-color: #FFD86F;
    color: white;

    transition-duration: 300ms;
}

.linkItem:hover .subLinkGroup {
    opacity: 1;

    transition-duration: 300ms;
}

.subLinkGroup {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    width: 200vw;

    background-color: #FFD86F;

    position: absolute;
    bottom: -41px;

    opacity: 0;
}

.subLink {
    padding: 0 10px;
    text-decoration: none;

    cursor: pointer;

    position: relative;
}

.subLink:hover {
    color: white;
    transition-duration: .3s;
}

.subLink:after {
    content: "";
    width: 1px;
    height: 80%;
    background-color: black;
    position: absolute;
    right: 0;
    top: 10%;
}

.subLinkGroup>.removeAfter:after {
    content: none;
}

.productRouterView {
    width: 62.5%;
    margin: calc(2rem + 41px) 0 6rem;
}

.subLinkGroupActive {
    opacity: 1;
}

.linkActive {
    background-color: #FFD86F;
    color: white;
}

.subLinkGroupGetclick {
    z-index: 1;
}

.subLinkGroupGetHover {
    z-index: 2;
}

.subLinkActive {
    color: white;
}</style>