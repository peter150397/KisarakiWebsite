<template>
  <div>
    <table style="border-collapse: collapse;">
        <tbody>
            <tr>
                <td style="width: 50%;">
                    <h2 class="title">1982</h2>
                    <p class="subtitle">起源</p>
                    <span class="dot"></span>
                </td>
                <td style="width: 50%;">
                    <p class="content">以家庭式製造米血糕至傳統市場販賣</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="content">
                        成立如記食品有限公司，
                        以工廠型態加工製造，
                        進口西德真空包中基，
                        包裝米血糕並後殺菌，
                        進軍各大賣場及超商。
                    </p>
                    <span class="dot"></span>
                </td>
                <td>
                    <h2 class="title">1998</h2>
                    <p class="subtitle">發跡</p>
                </td>
            </tr>
            <tr>
                <td>
                    <h2 class="title">2002</h2>
                    <p class="subtitle">米血糕大事紀</p>
                    <span class="dot"></span>
                </td>
                <td>
                    <p class="content">全國第一家通過CAS優良食品標誌認證之米血糕製造廠</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="content">斥資擴廠增加冷凍食品類新廠房及新式自動化設備，開始與7-11合作</p>
                    <span class="dot"></span>
                </td>
                <td>
                    <h2 class="title">2004</h2>
                    <p class="subtitle">跨類生產</p>
                </td>
            </tr>
            <tr>
                <td>
                    <h2 class="title">2005~2007</h2>
                    <p class="subtitle">產開</p>
                    <span class="dot"></span>
                </td>
                <td>
                    <p class="content">導入ISO-9001 : 2000年版國際品保制度及HACCP驗證；並陸續通過CAS優良食品標誌冷凍食品類冷藏調理食品類認證</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="content">投入研發並生產蔬果農產品，次年通過ISO-22000 : 2005年版國際認證</p>
                    <span class="dot"></span>
                </td>
                <td>
                    <h2 class="title">2008~2009</h2>
                    <p class="subtitle">開始蔬菜加工</p>
                </td>
            </tr>
            <tr>
                <td>
                    <h2 class="title">2013</h2>
                    <p class="subtitle">重要里程碑</p>
                    <span class="dot"></span>
                </td>
                <td>
                    <p class="content">於屏東竹田擴建新廠</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="content">增設香蕉與生鮮蔬果生產線，開始提供給7-11和全聯</p>
                    <span class="dot"></span>
                </td>
                <td>
                    <h2 class="title">2014</h2>
                    <p class="subtitle">重要里程碑</p>
                </td>
            </tr>
            <tr>
                <td>
                    <h2 class="title">2015</h2>
                    <p class="subtitle">冷藏長效期商品發展</p>
                    <span class="dot"></span>
                </td>
                <td>
                    <p class="content">增設高溫高壓拆袋即時(玉米/綠竹筍/地瓜等)生產線</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="content">增設香蕉催熟產線，並設立自動化清洗香蕉設備，讓每條香蕉都變成輸日等級</p>
                    <span class="dot"></span>
                </td>
                <td>
                    <h2 class="title">2018</h2>
                    <p class="subtitle">香蕉催熟產線建置</p>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

td{
    padding: 1rem 2rem;
    position: relative;
}
.dot{
    height: 16px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #FFD86F;

    position: absolute;
    top: calc(50% - 8px);
    right: -10px;
}

.title{
    color: #71CC86;
    letter-spacing: 2px;
}
.subtitle{
    color: #71CC86;
    letter-spacing: 2px;
    font-weight: bold;
}
.content{
    font-size: 14px;
    color: gray;
}

tr > td:first-child{
    text-align: right;
    border-right: solid 4px #FFD86F;
}

</style>