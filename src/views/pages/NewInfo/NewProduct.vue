<template>
    <div>
        <div class="AllInfoContainer">
            <div class="newInfoCardItem">
                <div class="newInfoCardImgContainer">
                    <img src="@/assets/NewInfoImg/info1.png" alt="" class="newInfoCardImg">
                </div>
                <h3 class="newInfoCardTitle">特製沙茶醬汁 | 香滷米血黑輪 | 7-Eleven全國上架</h3>
                <p class="newInfoCardcontent">
                    各位還在等什麼~趕快到小七買起來~香滷米血黑輪在滷製過程添加特製的沙茶醬料，以提升香氣和風味，您可以期待著吸飽醬汁的米血柔軟口感和黑輪的彈牙口感的完美結合。</p>
            </div>
            <div class="newInfoCardItem">
                <div class="newInfoCardImgContainer">
                    <img src="@/assets/NewInfoImg/info2.png" alt="" class="newInfoCardImg">
                </div>
                <h3 class="newInfoCardTitle">全新口味!麻辣煮霸氣登場!!!</h3>
                <p class="newInfoCardcontent">
                    對於麻辣控我們帶來了一個令人興奮的消息!經過長時間的研發和精心調配我們推出了最新的創新產品『麻辣煮』。麻辣煮的獨特之處在於它融合了麻和辣的完美平衡選用了特級花椒和多種辛香料經過精心爆炒和煉製，無論你是喜歡辣的還是麻的都能滿足你的味蕾。
                </p>
            </div>
            <div class="newInfoCardItem">
                <div class="newInfoCardImgContainer">
                    <img src="@/assets/NewInfoImg/info5.png" alt="" class="newInfoCardImg">
                </div>
                <h3 class="newInfoCardTitle">｜經典美味台灣小吃｜#大腸肉羹麵線 升級大容量 在7-Evelen全新上架</h3>
                <p class="newInfoCardcontent">
                    ｜經典美味台灣小吃｜#大腸肉羹麵線升級大容量，在7-Evelen全新上架，如記食品的大腸肉羹麵線深受消費者喜愛</p>
            </div>
            <div class="newInfoCardItem">
                <div class="newInfoCardImgContainer">
                    <img src="@/assets/NewInfoImg/info6.png" alt="" class="newInfoCardImg">
                </div>
                <h3 class="newInfoCardTitle">小七吃得到現蒸點心！【蒸系列】麻油米血、筒仔米糕、芋頭排骨酥湯!!7-ELEVEN溫暖上市</h3>
                <p class="newInfoCardcontent">
                    【麻油米血】香醇的麻油香氣，佐淡淡的米酒香味，搭配吸飽湯汁口感Q彈的米血糕，和湯頭的辛香薑片，使每一口都溫暖您的心！！</p>
            </div>
            <div class="newInfoCardItem">
                <div class="newInfoCardImgContainer">
                    <img src="@/assets/NewInfoImg/info8.png" alt="" class="newInfoCardImg">
                </div>
                <h3 class="newInfoCardTitle">如記米血糕 換新包裝！！配方全新升級</h3>
                <p class="newInfoCardcontent">
                    ＃如記米血糕，換新包裝啦!!全新包裝，升級新配方口感吃起來更軟Q!!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '新品上市', index: 1, path: '/NewInfo/NewProduct' })
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