<template>
    <div class="BreadcrumbContainer BreadcrumbMain" v-if="currentPage[0].name">
        <img src="@/assets/NavbarImg/home-img.png" alt="" class="BreadcrumbHomeIcon" @click="backToHome">
        <div v-for="item in currentPage" :key="item.name">
            <div class="BreadcrumbContainer" v-if="item.name">
                <img src="@/assets/NavbarImg/arrow.png" alt="" class="BreadcrumbArrowIcon">
                <router-link :to="item.path" class="BreadcrumbLink">{{ item.name }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        backToHome() {
            this.$router.push('/')
        }
    },
    computed: {
        currentPage() {
            return this.$store.state.currentPage
        },
    }
}
</script>

<style scoped>
.BreadcrumbMain {
    margin: 1rem 0;
    position: relative;
    left: calc((100% - 990px)/2);
    align-self: flex-start;
}

.BreadcrumbContainer {
    display: flex;
    gap: 10px;
    align-items: center;
}

.BreadcrumbHomeIcon {
    height: 20px;
    cursor: pointer;
}

.BreadcrumbArrowIcon {
    height: 15px;
}

.BreadcrumbLink {
    font-size: 14px;
}
@media (max-width: 1022px) {
    .BreadcrumbMain{
        left: 1rem;
    }
}
</style>