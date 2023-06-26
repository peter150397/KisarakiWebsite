<template>
    <div>
        <div class="columnCenterContainer">
            <h2>通過政府CAS優良食品認證之食品加工廠</h2>
            <div class="line"></div>
            <p>
                如記食品有限公司創立於1982年，工廠座落於屏東縣竹田鄉，主要產品為米血糕，在創立後的三十年當中，發展多元多樣各式產品，包含冷藏調理食品、點心類食品、冷凍食品類及4℃鮮食類...多元多樣各式產品。
                本公司與各大通路合作，包含7-11、全聯、好市多、家樂福及知名連鎖餐廳等，擁有超過230名員工，我們的廠房、品質管理及人才發展，皆是我們能夠滿足客戶要求的基石。
                <br>
                <br>
                <br>
                隨著時代的快速變遷，我們不斷鞭策自己努力進步，通過ISO22000&HACCP國際品質系統驗證，榮獲國際品質系統認證的肯定；重金投資設備符合標準化的食品工廠，設備以滿足不同客戶的軟硬體要求，並提升公司整體組織系統及產品對外的競爭力，以最低的成本達成滿足客戶或產品之要求。為了讓消費者能享有更好的產品品質，建構系統化的工廠管理以及現代化的設備等，並在製造過程中，依作業標準與衛生管理標準進行管制，以確保產品品質與衛生安全。
            </p>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('GETCURRENTPAGEROUTE', { name: '工廠介紹', index: 1, path: '/AboutUs/FactoryIntro' })
    }
}
</script>

<style scoped>
p {
    text-indent: 1cm;
}
</style>