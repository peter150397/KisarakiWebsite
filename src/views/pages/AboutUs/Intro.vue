<template>
  <div>
    <p class="aboutUsContent">
      如記食品有限公司創立於1988年，工廠座落於屏東縣竹田鄉，主要產品為米血糕，目前也是國內唯一米血糕經CAS認證的廠商！<br>
      我們不斷追求進步，在創立後的三十年當中，發展多元多樣各式產品，包含冷藏調理食品、點心類食品、冷凍食品類及4℃鮮食類...多元多樣各式產品。<br>
      公司佔地21000平方公尺，擁有超過250名員工，我們的廠房、品質管理及人才發展，皆是我們能夠滿足客戶要求的基石！！
    </p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('GETCURRENGPAGEROUTE' , {name: '關於我們' , index: 0 , path:'/AboutUs'})
    this.$store.commit('GETCURRENGPAGEROUTE' , {name: '' , index: 1 , path:''})
  }
}
</script>

<style scoped>
.aboutUsContent {
  line-height: 2rem;
  font-size: 14px;
}
</style>