<template>
    <div class="productContainer">
        <div>
            <h1 class="aboutUsTitle">強檔產品</h1>
        </div>
        <div class="linkGroup">
            <div class="linkItem" @mouseenter="getActive(0)" @mouseleave="getUnactive(0, '米血製品')">
                <router-link to="/Product/RiceBloodCake" class="link">米血製品</router-link>
                <div class="subLinkGroup">
                    <router-link to="/Product/RiceBloodCake/FamilySize" class="subLink" noBorder>家庭包</router-link>
                    <router-link to="/Product/RiceBloodCake/Kanto" class="subLink">關東煮</router-link>
                    <router-link to="/Product/RiceBloodCake/BusinessSize" class="subLink">業務包</router-link>
                </div>
            </div>
            <div class="line"></div>
            <div class="linkItem" @mouseenter="getActive(1)" @mouseleave="getUnactive(1, '魚漿製品')">
                <router-link to="/Product/FishPaste" class="link">魚漿製品</router-link>
                <div class="subLinkGroup">
                    <router-link to="/Product/FishPaste/Meatball" class="subLink" noBorder>丸子系列</router-link>
                    <router-link to="/Product/FishPaste/BBQ" class="subLink">炭烤系列</router-link>
                    <router-link to="/Product/FishPaste/Kanto" class="subLink">關東煮</router-link>
                </div>
            </div>

            <div class="line"></div>
            <div class="linkItem" @mouseenter="getActive(2)" @mouseleave="getUnactive(2, '調理食品')">
                <router-link to="/Product/MicrowaveFood" class="link">調理食品</router-link>
                <div class="subLinkGroup">
                    <router-link to="/Product/MicrowaveFood/Conditioning" class="subLink" noBorder>調理包</router-link>
                    <router-link to="/Product/MicrowaveFood/Bowl" class="subLink">碗裝食品</router-link>
                    <router-link to="/Product/MicrowaveFood/Special" class="subLink">特製系列</router-link>
                </div>
            </div>

            <div class="line"></div>
            <div class="linkItem" @mouseenter="getActive(3)" @mouseleave="getUnactive(3, '蔬菜製品')">
                <router-link to="/Product/Vegetable" class="link">蔬菜製品</router-link>
                <div class="subLinkGroup">
                    <router-link to="/Product/Vegetable/Kanto" class="subLink" noBorder>關東煮</router-link>
                    <router-link to="/Product/Vegetable/Instant" class="subLink">即食蔬菜</router-link>
                    <router-link to="/Product/Vegetable/Corn" class="subLink">冷凍玉米</router-link>
                </div>
            </div>

            <div class="line"></div>
            <div class="linkItem" @mouseenter="getActive(4)" @mouseleave="getUnactive(4, '香蕉')">
                <router-link to="/Product/Banana" class="link">香蕉</router-link>
                <div class="subLinkGroup">
                    <router-link to="/Product/Banana" class="subLink" noBorder>香蕉</router-link>
                </div>
            </div>
        </div>

        <router-view class="productRouterView"></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        currentSecondBreadcrumbName() {
            return this.$store.state.currentSecondBreadcrumb.name;
        }
    },
    methods: {
        getActive(index) {
            const subLinkGroup = document.querySelectorAll('.subLinkGroup');
            const link = document.querySelectorAll('.link');

            subLinkGroup[index].dataset.hoverActive = true;
            link[index].dataset.hoverActive = true;
        },
        getUnactive(index, item) {
            const subLinkGroup = document.querySelectorAll('.subLinkGroup');
            const link = document.querySelectorAll('.link');

            if (this.currentSecondBreadcrumbName != item) {
                subLinkGroup[index].dataset.hoverActive = false;
                link[index].dataset.hoverActive = false;
            }

        }
    },
    mounted() {
        this.$store.commit('UPDATEFIRSTBREADCRUMB', this.$router.currentRoute);
    },
    // beforeUpdate() {
    //     const subLinkGroup = document.querySelectorAll('.subLinkGroup');
    //     const link = document.querySelectorAll('.link');

    //     subLinkGroup.forEach((item) => {
    //         item.dataset.hoverActive = false;
    //     })
    //     link.forEach((item) => {
    //         item.dataset.hoverActive = false;
    //     })
    // }
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

.subLinkGroup {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    width: 200vw;

    background-color: #FFD86F;

    position: absolute;
    bottom: -41px;

    opacity: 0;
}

.subLinkGroup[data-hover-active="true"] {
    opacity: 1;
    z-index: 2;

    transition-duration: .3s;
}

.subLinkGroup[data-click-active="true"] {
    opacity: 1;
    z-index: 1;

    transition-duration: .3s;
}

.link[data-hover-active="true"] {
    background-color: #FFD86F;
    color: white;

    transition-duration: 300ms;
}
.link[data-click-active="true"] {
    background-color: #FFD86F;
    color: white;

    transition-duration: 300ms;
}


.subLink {
    border-left: solid 1px black;
    padding: 0 10px;
    text-decoration: none;
    color: black;
}

.subLink:hover {
    color: white;
    transition-duration: .3s;
}

.subLink[noBorder] {
    border: none;
}

.productRouterView {
    width: 62.5%;
    margin: calc(2rem + 41px) 0 6rem;
}
</style>