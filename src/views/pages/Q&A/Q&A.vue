<template>
    <div class="newInfoContainer">
        <h1 class="aboutUsTitle">最新消息</h1>
        <div class="linkGroup">
            <router-link to="/NewInfo/NewProduct" class="link">新品上市</router-link>
            <div class="line"></div>
            <router-link to="/NewInfo/RelateInfo" class="link">如記消息</router-link>
            <div class="line"></div>
            <router-link to="/NewInfo/ProductRelate" class="link">產品相關</router-link>
        </div>
        <router-view class="newInfoRouterView"></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.newInfoContainer {
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
    margin: 2rem 0;
    height: 37px;
}

.line {
    height: 50%;
    width: 1px;
    background-color: black;
}

.link {
    padding: 0.5rem 1.5rem;
    border-radius: 10px;

    text-decoration: none;
    color: black;
}

.link:hover {
    background-color: #FFD86F;
    color: white;

    transition-duration: .3s;

    cursor: pointer;
}

.newInfoRouterView {
    width: 62.5%;
    margin-bottom: 6rem;
}</style>