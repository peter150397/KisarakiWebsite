<template>
    <div class="columnCenterContainer">
        <h2 class="subTitle">公司沿革</h2>
        <div class="line"></div>
        <table>
            <tbody>
                <tr>
                    <td>
                        <h2>1982</h2>
                        <h3>起源</h3>
                        <span class="dot"></span>
                    </td>
                    <td>
                        <p>以家庭式製造米血糕至傳統市場販賣</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>
                            成立如記食品有限公司，
                            以工廠型態加工製造，
                            進口西德真空包中基，
                            包裝米血糕並後殺菌，
                            進軍各大賣場及超商。
                        </p>
                        <span class="dot"></span>
                    </td>
                    <td>
                        <h2>1998</h2>
                        <h3>發跡</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>2002</h2>
                        <h3>米血糕大事紀</h3>
                        <span class="dot"></span>
                    </td>
                    <td>
                        <p>全國第一家通過CAS優良食品標誌認證之米血糕製造廠</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>斥資擴廠增加冷凍食品類新廠房及新式自動化設備，開始與7-11合作</p>
                        <span class="dot"></span>
                    </td>
                    <td>
                        <h2>2004</h2>
                        <h3>跨類生產</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>2005~2007</h2>
                        <h3>產開</h3>
                        <span class="dot"></span>
                    </td>
                    <td>
                        <p>導入ISO-9001 : 2000年版國際品保制度及HACCP驗證；並陸續通過CAS優良食品標誌冷凍食品類冷藏調理食品類認證</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>投入研發並生產蔬果農產品，次年通過ISO-22000 : 2005年版國際認證</p>
                        <span class="dot"></span>
                    </td>
                    <td>
                        <h2>2008~2009</h2>
                        <h3>開始蔬菜加工</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>2013</h2>
                        <h3>重要里程碑</h3>
                        <span class="dot"></span>
                    </td>
                    <td>
                        <p>於屏東竹田擴建新廠</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>增設香蕉與生鮮蔬果生產線，開始提供給7-11和全聯</p>
                        <span class="dot"></span>
                    </td>
                    <td>
                        <h2>2014</h2>
                        <h3>重要里程碑</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>2015</h2>
                        <h3>冷藏長效期商品發展</h3>
                        <span class="dot"></span>
                    </td>
                    <td>
                        <p>增設高溫高壓拆袋即時(玉米/綠竹筍/地瓜等)生產線</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>增設香蕉催熟產線，並設立自動化清洗香蕉設備，讓每條香蕉都變成輸日等級</p>
                        <span class="dot"></span>
                    </td>
                    <td>
                        <h2>2018</h2>
                        <h3>香蕉催熟產線建置</h3>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '歷史腳步', index: 1, path: '/AboutUs/History' })
    }
}
</script>

<style scoped>
table{
    border-collapse: collapse;
    max-width: 990px;
}

td {
    padding: 1rem 2rem;
    position: relative;
}

td:first-child {
    border-right: solid 4px #FFD86F;
    text-align: right;
}
.dot {
    height: 16px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #FFD86F;

    position: absolute;
    top: calc(50% - 8px);
    right: -10px;
}

td > h2 {
    color: #71CC86;
    letter-spacing: 2px;
}

h3 {
    color: #71CC86;
    letter-spacing: 2px;
    font-weight: bold;
}
</style>