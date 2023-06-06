<template>
    <div class="productContainer">
        <h1 class="aboutUsTitle">強檔產品</h1>
        <div class="linkGroup">
            <router-link to="/AboutUs/Story" class="link">米血製品</router-link>
            <div class="line"></div>
            <router-link to="/AboutUs/History" class="link">魚漿製品</router-link>
            <div class="line"></div>
            <router-link to="/AboutUs/FactoryIntro" class="link">調理食品</router-link>
            <div class="line"></div>
            <router-link to="/AboutUs/Philosophy" class="link">蔬菜製品</router-link>
            <div class="line"></div>
            <router-link to="/AboutUs/Certification" class="link">香蕉</router-link>
        </div>
        <div class="subLinkGroup">
            <p>123123123</p>
        </div>
        <router-view class="productRouterView"></router-view>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('UPDATEFIRSTBREADCRUMB', this.$router.currentRoute);
    }
}
</script>

<style scoped>
.productContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.aboutUsTitle {
    padding-top: 4rem;
}

.linkGroup {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    height: 37px;
}

.line {
    height: 50%;
    width: 1px;
    background-color: black;
}

.link {
    padding: 0.5rem 1.5rem;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    text-decoration: none;
    color: black;
}

.link:hover {
    background-color: #FFD86F;
    color: white;

    transition-duration: .3s;
    cursor: pointer;
}
.subLinkGroup{
    width: 100vw;
    margin-bottom: 2rem;

    background-color: #FFD86F;
    opacity: 0;
}

.linkGroup:hover + .subLinkGroup , .subLinkGroup:hover{  
    opacity: 1;
    transition-duration: .3s;
}

.productRouterView {
    width: 62.5%;
    margin-bottom: 6rem;
}
</style>