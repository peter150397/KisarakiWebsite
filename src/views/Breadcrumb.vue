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
a {
    text-decoration: none;
    color: black;

    font-weight: bold;
}
.BreadcrumbMain {
    margin: 1rem 0 0 10rem;
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
</style>