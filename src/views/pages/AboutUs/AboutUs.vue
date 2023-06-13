<template>
  <div class="aboutUsContainer">
    <h1 class="aboutUsTitle">關於我們</h1>
    <div class="linkGroup">
        <router-link to="/AboutUs/Story" class="link">品牌故事</router-link>
        <div class="line"></div>
        <router-link to="/AboutUs/History" class="link">歷史腳步</router-link>
        <div class="line"></div>
        <router-link to="/AboutUs/FactoryIntro" class="link">工廠介紹</router-link>
        <div class="line"></div>
        <router-link to="/AboutUs/Philosophy" class="link">經營理念</router-link>
        <div class="line"></div>
        <router-link to="/AboutUs/Certification" class="link">認證標章</router-link>
    </div>
    <img src="@/assets/AboutUsImg/AboutUsImg.png" alt="" class="img">
    <router-view class="aboutUsRouterView"></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.aboutUsContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.aboutUsTitle{
  padding-top: 4rem;
}
.linkGroup{
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  margin: 2rem 0;

  height: 37px;
}
.line{
  height: 50%;
  width: 1px;
  background-color: black;
}
.link{
  padding: 0.5rem 1.5rem;
  border-radius: 10px;

  text-decoration: none;
  color: black;
}
.link:hover{
  background-color: #FFD86F;
  color: white;

  transition-duration: .3s;

  cursor: pointer;
}
.img{
  width: 62.5%;
  border-radius: 40px;
  margin-bottom: 3rem;

  box-shadow: 0px 3px 10px #464646C9;
}
.aboutUsRouterView{
  width: 62.5%;
  margin-bottom: 6rem;
}

</style>