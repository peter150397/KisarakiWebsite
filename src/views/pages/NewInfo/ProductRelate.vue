<template>
    <div>
        <div class="AllInfoContainer">
            <div class="newInfoCardItem">
                <div class="newInfoCardImgContainer">
                    <img src="@/assets/NewInfoImg/info3.png" alt="" class="newInfoCardImg">
                </div>
                <h3 class="newInfoCardTitle">7-11超商的關東煮御用米血糕品牌「如記米血糕」上市囉!</h3>
                <p class="newInfoCardcontent">
                    你知道平常在7-11超商買的關東煮米血糕是哪個品牌的嗎?將將將將~就是「如記米血糕」啦!如記米血糕不僅用料實在、製程嚴謹。而且口感非常Q彈軟嫩、耐煮性十足，古早好滋味讓你吃過一次就再也停不下來!
                </p>
            </div>
            <div class="newInfoCardItem">
                <div class="newInfoCardImgContainer">
                    <img src="@/assets/NewInfoImg/info4.png" alt="" class="newInfoCardImg">
                </div>
                <h3 class="newInfoCardTitle">如記350g米血糕｜第二件五折｜</h3>
                <p class="newInfoCardcontent">
                    如記350g米血糕，第二件5折，真的超~划算!!還不快去買</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('GETCURRENGPAGEROUTE', { name: '產品相關', index: 1, path: '/NewInfo/ProductRelate' })
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