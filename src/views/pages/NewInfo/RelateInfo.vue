<template>
    <div>
        <div class="AllInfoContainer">
            <div class="newInfoCardItem">
                <div class="newInfoCardImgContainer">
                    <img src="@/assets/NewInfoImg/info7.png" alt="" class="newInfoCardImg">
                </div>
                <h3 class="newInfoCardTitle">如記食品～官方LINE好友招募中</h3>
                <p class="newInfoCardcontent">
                    加入如記食品官方LINE可隨時掌握第一手好康資訊，消息不漏接</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('UPDATESECONDBREADCRUMB' , this.$router.currentRoute)
    }
}
</script>

<style scoped>
.AllInfoContainer{
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}
.newInfoCardItem {
    border-radius: 20px;
    padding: 1.5rem;

    box-shadow: 0px 5px 10px #A3A3A3;
}

.newInfoCardImgContainer {
    border-radius: 20px;
    overflow: hidden;
}

.newInfoCardImg {
    width: 100%;
    object-fit: cover;
    object-position: center;

    border-radius: 20px;
}

.newInfoCardImg:hover {
    transform: scale(1.2, 1.2);
    transition-duration: .5s;
}
.newInfoCardTitle {
    width: 100%;
    margin: 1rem 0;
}

.newInfoCardcontent {
    width: 100%;
    font-size: 15px;
}
</style>