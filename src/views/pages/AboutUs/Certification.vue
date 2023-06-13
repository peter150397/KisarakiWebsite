<template>
    <div>
        <div class="container">
            <h2 class="title">國際驗證證書</h2>
            <div class="line"></div>
            <img src="@/assets/AboutUsImg/Certification.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('GETCURRENGPAGEROUTE', { name: '認證標章', index: 1, path: '/AboutUs/Certification' })
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    color: #71CC86;
    letter-spacing: 2px;
    border-left: solid 1px #71CC86;
    border-right: solid 1px #71CC86;
    padding: 0 1.5rem;
}

.line {
    width: 100%;
    height: 3px;
    background-color: #FFD86F;
    margin: 2rem 0;
}

img {
    width: 90%;
}
</style>