<template>
    <div class="productContainer">
        <div>
            <h1 class="aboutUsTitle">強檔產品</h1>
        </div>
        <div class="linkGroup">
            <div class="linkItem" @mouseenter="getActive(index)" @mouseleave="getUnactive(index, mainPage.name)"
                v-for="(mainPage, index) in productNavbarData" :key="index" :class="{'removeAfter' : index == productNavbarData.length - 1}">
                <p class="link" @click="changeMainPage(mainPage.name , index)" :id="'link' + index">{{ mainPage.name }}</p>
                <div class="subLinkGroup" :id="'subLinkGroup' + index">
                    <p to="/Product/RiceBloodCake/FamilySize" class="subLink" v-for="(subPage, subPageindex) in mainPage.subName" :key="subPage"
                        @click="changeSubPage(mainPage.name , subPage )" :class="{'removeAfter' : subPageindex == mainPage.subName.length - 1}">{{ subPage }}</p>
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
            currentPage:'',
        }
    },
    computed: {
        productNavbarData() {
            return this.$store.state.productNavbarData;
        }
    },
    methods: {
        getActive(index) {
            $('#subLinkGroup' + index).addClass('subLinkGroupActive')
            $('#link' + index).addClass('linkActive')
            
        },
        getUnactive(index, item) {
            if (this.$store.state.currentPage[1].name != item) {
                $('#subLinkGroup' + index).removeClass('subLinkGroupActive')
                $('#link' + index).removeClass('linkActive')
            }
        },
        changeMainPage(MainPage , index) {
            this.$router.push(`/Product/${MainPage}`)

            $('.link').removeClass('linkActive')
            $('#link' + index).addClass('linkActive')
            $('.subLinkGroup').removeClass('subLinkGroupGetclick subLinkGroupActive')
            $('#subLinkGroup' + index).addClass('subLinkGroupGetclick subLinkGroupActive')
        },
        changeSubPage(MainPage , SubPage = '' ) {
            this.$router.push(`/Product/${MainPage}/${SubPage}`)
        }
    },
    mounted() {
        this.$store.commit('GETCURRENGPAGEROUTE', { name: '強檔產品', index: 0, path: '/Product' })
    }
}
</script>

<style scoped>
.productContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
}

.aboutUsTitle {
    padding-top: 4rem;
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
.linkActive {
    background-color: #FFD86F;
    color: white;

    transition-duration: 300ms;
}


.linkItem {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
}
.linkItem:after{
    content: "";
    width: 1px;
    height: 50%;
    background-color: black;
    position: absolute;
    right: 0;
    top: 25%;
}
.linkGroup > .removeAfter:after{
    content: none;
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

.subLinkGroupActive{
    opacity: 1;
    z-index: 2;

    transition-duration: .3s;
}

.subLinkGroupGetclick{
    z-index: 1;
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
.subLink:after{
    content: "";
    width: 1px;
    height: 80%;
    background-color: black;
    position: absolute;
    right: 0;
    top: 10%;
}
.subLinkGroup > .removeAfter:after{
    content: none;
}

.productRouterView {
    width: 62.5%;
    margin: calc(2rem + 41px) 0 6rem;
}
</style>