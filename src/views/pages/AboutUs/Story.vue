<template>
    <div>
        <div class="container">
            <h2 class="title">老爸打主意 全家出力氣</h2>
            <div class="line"></div>
            <p class="content">
                1982年於鳳山開漳聖王廟附近市場展開鴨血糕的家庭式經營，五個兄弟和爸爸齊力打拼，並銷售到傳統市場。<br><br>
                1998年在大發工業區成立『如記食品有限公司』以工廠型態製造，引進西德連續真空包裝機，將米血販售至各大通路。<br><br>
                2004年開始與7-11合作，研發並生產冷凍包裝食品，包含魚漿及鮮食產品。<br><br>
                2008年響應照顧台灣在地農民政策，研發並生產蔬果農產品，包含菜頭、玉米、苦瓜等多項農產品於關東煮中，如此魚幫水、水幫魚達到雙贏的局面。<br><br>
                2013年為擴大營業項目，本公司於竹田建蓋新廠，並開始供應7-11與全聯的香蕉及玉米棒，我們致力於發展農產品，希望能成為國內數一數二的專業農業生產大廠．
                近年來，如記不斷的創新研究開發產品的多樣性以滿足各銷售通路需求，堅持用健康、安全和最優質的食材，讓消費者能夠遠離食安的疑慮，這些都是我們必須履行的義務和責任。
            </p>
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
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title{
    color: #71CC86;
    letter-spacing: 2px;
    border-left: solid 1px #71CC86;
    border-right: solid 1px #71CC86;
    padding: 0 1.5rem;
}
.line{
    width: 100%;
    height: 3px;
    background-color: #FFD86F;
    margin: 2rem 0;
}
.content{
    font-size: 14px;
    color: gray;
}
</style>