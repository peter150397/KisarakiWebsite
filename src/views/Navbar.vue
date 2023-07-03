<template>
    <nav>
        <div class="nav">
            <img src="@/assets/NavbarImg/logo.png" alt="" class="navLogo" @click="backToHome">

            <div class="normalNavLinkGroup">
                <div class="navLinkGroup">
                    <router-link to="/AboutUs">關於我們</router-link>
                    <router-link to="/NewInfo">最新消息</router-link>
                    <router-link to="/Product">強檔產品</router-link>
                    <router-link to="/Q&A">常見問題</router-link>
                    <router-link to="/Contact">聯絡我們</router-link>
                </div>
            </div>

            <div class="navIconGroup">
                <div class="navOnlineStore">
                    <a href="#"><img src="@/assets/NavbarImg/shopping-bag.png">線上商城</a>
                </div>
                <img src="@/assets/NavbarImg/bell.png" alt="" class="navIcon">
                <img src="@/assets/NavbarImg/menu.png" alt="" class="navIcon RWDNavMenu" @click="linkGroupSlide" style="--menuIconRotate: 0deg;">
            </div>
        </div>


        <div class="RWDNavLinkGroup">
            <div class="navLinkGroup">
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
            if ($('.RWDNavMenu').css('--menuIconRotate') === '0deg') {
                $('.RWDNavMenu').css('--menuIconRotate', '90deg');
                $('.RWDNavLinkGroup').css('top', '104px');
                $('.nav').css('position', 'fixed');
                $('#RouterViewContent').css('margin-top', '104px');
                
            } else {
                $('.RWDNavMenu').css('--menuIconRotate', '0deg');
                $('.RWDNavLinkGroup').css('top', 'calc(-100% + 104px)');
                
                setTimeout(function () {
                    $('.nav').css('position', 'static');
                    $('#RouterViewContent').css('margin-top', '0');
                },500)
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

.navLogo {
    height: 40px;
    margin: 0 1rem;
    cursor: pointer;
}

.navLinkGroup {
    display: flex;
    align-items: center;
}

.navLinkGroup>* {
    padding: 0 1.5rem;
    font-size: 18px;
    line-height: 22px;
    border-right: solid black 1px;
}

.navLinkGroup>*:last-child {
    border: none;
}

.navLinkGroup>*:hover {
    color: #FDCE00;
    transition-duration: .3s;
}

.navIconGroup {
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 0 1rem;
}

.navOnlineStore {
    padding: 0.1rem 1rem;
    border-radius: 50px;
    background: linear-gradient(115deg, #E5985F 0%, #D32D2D 100%);
}

.navOnlineStore>a {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    line-height: 22px;
    color: white;
}

.navOnlineStore>a>img {
    height: 18px;
}

.navIcon {
    height: 30px;
}
.RWDNavLinkGroup , .RWDNavMenu{
    display: none;
}

@media (max-width: 1022px) {
    .nav{
        justify-content: space-between;
        position: static;
        z-index: 4;
    }

    .normalNavLinkGroup,
    .navOnlineStore {
        display: none;
    }

    .RWDNavLinkGroup {
        display: block;

        position: fixed;
        top: -100%;
        z-index: 3;
        width: 100%;
        height: calc(100% - 104px);
        background-color: white;
        text-align: center;

        transition-duration: 500ms;
    }

    .navLinkGroup {
        flex-direction: column;
        justify-content: space-evenly;
        align-items: stretch;
        height: 100%;
    }

    .navLinkGroup>* {
        padding: 0;
        font-size: 24px;
        border-right: none;
    }

    .navLinkGroup>*:hover {
        color: #FDCE00;
        transition-duration: .3s;
    }

    .RWDNavMenu {
        display: block;
        transform: rotate(var(--menuIconRotate));
        transition-duration: 500ms;
        cursor: pointer;
    }
}</style>