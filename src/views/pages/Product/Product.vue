<template>
    <div class="columnCenterContainer">
            <h1 class="pageTitle">強檔產品</h1>
            <button class="searchButton">
                <img src="@/assets/ProductImg/OverviewImg/search.png" alt="" class="searchImg">
                <input type="text" placeholder="Search" class="aboutUsSearch" v-model="search" @keyup.enter="searchPage(search)">
            </button>
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

        <select class="RWDSelectLinkGroup" v-model="currentProductPage">
            <option value="">請選擇分類</option>
            <optgroup v-for="mainPage in productNavbarData" :key="mainPage.index" label="-------------------------------">
                <option :value="mainPage.name">類別 : {{ mainPage.name }}</option>
                <option :value="mainPage.name + '/' + subPage.name" v-for="subPage in mainPage.subName" :key="subPage.index">
                    {{ subPage.index + 1 }} : {{ subPage.name }}
                </option>
            </optgroup>
            
        </select>

        <router-view class="mainContent"></router-view>
    </div>
</template>

<script>
import $ from "jquery";

export default {
    data() {
        return {
            search:'',
            currentProductPage:''
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
            this.currentProductPage = MainPage
        },
        changeSubPage(MainPage, SubPage) {
            this.currentProductPage = `${MainPage}/${SubPage}`
        },
        searchPage(search) {
            this.$router.push(`/Search/${search}`);
            this.search = '';
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
        },
        currentProductPage(value) {
            let mainPage = value.split('/')[0];
            let subPage = '';

            if(value.split('/')[1]) {
                subPage = `/${value.split('/')[1]}`;
            }
            
            this.$router.push(`/Product/${mainPage}${subPage}`);
        }
    },
    mounted() {
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '強檔產品', index: 0, path: '/Product' })
    },
}
</script>

<style scoped>
.searchButton{
    border: solid 1px black;
    border-radius: 25px;
    padding: .5rem;
    background-color: white;

    position: absolute;
    right: 0;
    top: 4rem;

    display: flex;
    gap: .5rem;
    align-items: center;
}
.searchButton:hover{
    transform: scale(1, 1);
    transition-duration: 0ms;
}
.searchImg{
    height: 20px;
}
.aboutUsSearch{
    border: none;
    padding: 0;
    font-size: 16px;
    width: 12vw;
}
.aboutUsSearch:focus{
    outline: none;
}

.link {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
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

.mainContent {
    margin: calc(2rem + 9px) 0 6rem;
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
}
@media (max-width: 1022px){
    .mainContent{
        margin: 0 0 6rem;
    }
}
</style>