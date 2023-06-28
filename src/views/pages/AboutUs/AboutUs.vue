<template>
  <div class="columnCenterContainer AboutUs">
    <h1 class="pageTitle">關於我們</h1>
    <div class="linkGroup">
        <router-link to="/AboutUs/Story" class="link">品牌故事</router-link>
        <div class="linkGroupLine"></div>
        <router-link to="/AboutUs/History" class="link">歷史腳步</router-link>
        <div class="linkGroupLine"></div>
        <router-link to="/AboutUs/FactoryIntro" class="link">工廠介紹</router-link>
        <div class="linkGroupLine"></div>
        <router-link to="/AboutUs/Philosophy" class="link">經營理念</router-link>
        <div class="linkGroupLine"></div>
        <router-link to="/AboutUs/Certification" class="link">認證標章</router-link>
    </div>
    <img src="@/assets/AboutUsImg/AboutUsImg.png" alt="" class="img">
    <router-view class="mainContent"></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('GETCURRENTPAGEROUTE' , {name: '關於我們' , index: 0 , path:'/AboutUs'})
  }
}
</script>

<style scoped>
.img{
  width: 100%;
  border-radius: 40px;
  margin-bottom: 3rem;

  box-shadow: 0px 3px 10px #464646C9;
}
/* .aboutUsRouterView{
  width: 100%;
  margin-bottom: 6rem;
} */
</style>