<template>
    <div>
        <div class="columnCenterContainer">
            <h2>國際驗證證書</h2>
            <div class="line"></div>
            <img src="@/assets/AboutUsImg/Certification.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '認證標章', index: 1, path: '/AboutUs/Certification' })
    }
}
</script>

<style scoped>
img {
    width: 90%;
}
</style>