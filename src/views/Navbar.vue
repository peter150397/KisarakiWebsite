<template>
    <nav>
        <img src="@/assets/NavbarImg/logo.png" alt="" class="nav-logo" @click="backToHome">
        <div class="nav-link-group">
            <router-link to="/AboutUs">關於我們</router-link>
            <router-link to="/NewInfo">最新消息</router-link>
            <router-link to="/Product">強檔產品</router-link>
            <router-link to="/Q&A">常見問題</router-link>
            <router-link to="/Contact">聯絡我們</router-link>
        </div>
        <div class="nav-icon-group">
            <div class="nav-onlineStore">
                <a href="#"><img src="@/assets/NavbarImg/shopping-bag.png">線上商城</a>
            </div>
            <img src="@/assets/NavbarImg/bell.png" alt="" class="nav-icon">
            <img src="@/assets/NavbarImg/user.png" alt="" class="nav-icon">
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        backToHome() {
            this.$router.push('/')
        }
    },
}
</script>

<style scoped>
nav {
    display: flex;
    padding: 2rem 0rem;
    justify-content: center;
    align-items: center;

    width: 100%;

    position: sticky;
    top: 0;
    z-index: 3;

    background: linear-gradient(96deg, #D5FECB 0%, #6CF6C0 100%) no-repeat;
}

.nav-logo {
    height: 40px;
    position: absolute;
    left: 10rem;

    cursor: pointer;
}

.nav-link-group {
    display: flex;
    align-items: center;
}

.nav-link-group>* {
    padding: 0 1.5rem;
    font-size: 18px;
    line-height: 22px;
    border-right: solid black 1px;
}
.nav-link-group>*:last-child{
    border: none;
}

.nav-link-group >*:hover {
    color: #FDCE00;
    transition-duration: .3s;
}

.nav-icon-group {
    display: flex;
    gap: 20px;
    align-items: center;

    position: absolute;
    right: 10rem;
}

.nav-onlineStore {
    padding: 0.1rem 1rem;
    border-radius: 50px;
    background: linear-gradient(115deg, #E5985F 0%, #D32D2D 100%);
}
.nav-onlineStore > a{
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    line-height: 22px;
    color: white;
}
.nav-onlineStore > a > img {
    height: 18px;
}

.nav-icon {
    height: 30px;
}
</style>