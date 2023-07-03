<template>
  <div class="columnCenterContainer">
    <h2 class="subTitle">經營理念</h2>
    <div class="line"></div>

    <div class="container">
      <div class="imgContainer">
        <img src="@/assets/AboutUsImg/mission.png" alt="">
      </div>

      <div class="item">
        <h2>使命</h2>
        <p>落實原物料源頭品質管理，加強製程衛生控管，確保品質穩定。</p>
      </div>

      <div class="imgContainer">
        <img src="@/assets/AboutUsImg/value.png" alt="">
      </div>

      <div class="item">
        <h2>核心價值</h2>
        <p>發揚傳統美食、穩健踏實、積極創新、誠信正直；品質是公司的根本，服務是公司的生命。</p>
      </div>

      <div class="imgContainer">
        <img src="@/assets/AboutUsImg/action.png" alt="">
      </div>

      <div class="item">
        <h2>願景</h2>
        <p>提高生產效率與品質，增強研發內容，建立標準且有效之品保制度，符合顧客與消費者的要求。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('GETCURRENTPAGEROUTE', { name: '經營理念', index: 1, path: '/AboutUs/Philosophy' })
  }
}
</script>

<style scoped>
.container {
  width: 60%;
  min-width: 400px;
  margin: 0 auto;

  display: grid;
  gap: 2rem 0;
  grid-template-columns: 20% 80%;
  grid-template-rows: 1fr 1fr 1fr;
}

.imgContainer {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #FFD86F;
  border-radius: 20px 0 0 20px;

  box-shadow: 8px 8px 0 #E29D19;
}

.imgContainer>img {
  width: 50%;
}

.item {
  border: solid 5px #FFD86F;
  border-left: none;
  padding: 1rem;
  border-radius: 0 20px 20px 0;

  box-shadow: 8px 8px 0 #E29D19;

  background-color: white;
}


.item>h2 {
  border: none;
  padding: 0;
  margin-bottom: 1rem;
}

@media (max-width: 850px) {
  .container {
    grid-template-columns: 25% 75%;
  }
}</style>