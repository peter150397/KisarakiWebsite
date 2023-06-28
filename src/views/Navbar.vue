<template>
    <nav>
        <div class="nav">
            <img src="@/assets/NavbarImg/logo.png" alt="" class="nav-logo" @click="backToHome">

            <div class="normal-nav-link-group">
                <div class="nav-link-group">
                    <router-link to="/AboutUs">關於我們</router-link>
                    <router-link to="/NewInfo">最新消息</router-link>
                    <router-link to="/Product">強檔產品</router-link>
                    <router-link to="/Q&A">常見問題</router-link>
                    <router-link to="/Contact">聯絡我們</router-link>
                </div>
            </div>

            <div class="nav-icon-group">
                <div class="nav-onlineStore">
                    <a href="#"><img src="@/assets/NavbarImg/shopping-bag.png">線上商城</a>
                </div>
                <img src="@/assets/NavbarImg/bell.png" alt="" class="nav-icon">
                <img src="@/assets/NavbarImg/menu.png" alt="" class="nav-icon nav-icon-menu" @click="linkGroupSlide" style="--menuIconRotate: 0deg;">
            </div>
        </div>


        <div class="slide-nav-link-group">
            <div class="nav-link-group">
                <router-link to="/AboutUs">關於我們</router-link>
                <router-link to="/NewInfo">最新消息</router-link>
                <router-link to="/Product">強檔產品</router-link>
                <router-link to="/Q&A">常見問題</router-link>
                <router-link to="/Contact">聯絡我們</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import $ from "jquery";

export default {
    data() {
        return {

        }
    },
    methods: {
        backToHome() {
            this.$router.push('/')
        },
        linkGroupSlide() {
            $('.slide-nav-link-group').css('top', '104px');
            
            if ($('.nav-icon-menu').css('--menuIconRotate') === '0deg') {
                $('.nav-icon-menu').css('--menuIconRotate', '90deg');
                $('.slide-nav-link-group').css('top', '104px');
            } else {
                $('.nav-icon-menu').css('--menuIconRotate', '0deg');
                $('.slide-nav-link-group').css('top', '-100%');
            }
        }
    },
}
</script>

<style scoped>
nav{
    width: 100%;
}
.nav {
    display: flex;
    padding: 2rem 0;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background: linear-gradient(96deg, #D5FECB 0%, #6CF6C0 100%) no-repeat;
}

.nav-logo {
    height: 40px;
    margin: 0 1rem;
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

.nav-link-group>*:last-child {
    border: none;
}

.nav-link-group>*:hover {
    color: #FDCE00;
    transition-duration: .3s;
}

.nav-icon-group {
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 0 1rem;
}

.nav-onlineStore {
    padding: 0.1rem 1rem;
    border-radius: 50px;
    background: linear-gradient(115deg, #E5985F 0%, #D32D2D 100%);
}

.nav-onlineStore>a {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    line-height: 22px;
    color: white;
}

.nav-onlineStore>a>img {
    height: 18px;
}

.nav-icon {
    height: 30px;
}

.nav-icon-menu {
    display: none;
    transform: rotate(var(--menuIconRotate));
    transition-duration: 500ms;
    cursor: pointer;
}

@media (max-width: 1025px) {
    nav {
        justify-content: space-between;
        position: fixed;
        z-index: 3;
    }

    .normal-nav-link-group,
    .nav-onlineStore {
        display: none;
    }

    .slide-nav-link-group {
        position: fixed;
        top: -100%;
        width: 100%;
        height: calc(100% - 104px);
        background-color: white;
        text-align: center;

        transition-duration: 500ms;
    }

    .nav-link-group {
        flex-direction: column;
        justify-content: space-evenly;
        align-items: stretch;
        height: 100%;
    }

    .nav-link-group>* {
        padding: 0;
        font-size: 24px;
        border-right: none;
    }

    .nav-link-group>*:hover {
        color: #FDCE00;
        transition-duration: .3s;
    }

    .nav-icon-menu {
        display: block;
    }
}</style>