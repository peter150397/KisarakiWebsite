<template>
  <div>
    <div class="container">
      <div class="item bottomLeft">
        <h2 class="title">使命</h2>
        <p class="content">落實原物料源頭品質管理，加強製程衛生控管，確保品質穩定。</p>
      </div>
      <div class="item">
        <h2 class="title">核心價值</h2>
        <p class="content">發揚傳統美食、穩健踏實、積極創新、誠信正直；品質是公司的根本，服務是公司的生命。</p>
      </div>
      <div class="item bottomRight">
        <h2 class="title">願景</h2>
        <p class="content">提高生產效率與品質，增強研發內容，建立標準且有效之品保制度，符合顧客與消費者的要求。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('GETCURRENTPAGEROUTE' , {name: '經營理念' , index: 1 , path:'/AboutUs/Philosophy'})
  }
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin: 0 auto;
  position: relative;

  width: 60%;
  aspect-ratio: 1 / 0.8;
}

.item{
  width: 30%;
  min-width: 148px;
  aspect-ratio: 1;
  border: dashed 5px #FFD86F;
  border-radius: 50%;

  position: absolute;

  padding: 1rem;
  text-align: center;
}

.bottomLeft{
  left: 0;
  bottom: 0;
}

.bottomRight{
  right: 0;
  bottom: 0;
}
.title{
  margin-bottom: 1rem;
  color: #71CC86;
}
.content{
  color: gray;
  font-size: 15px;
}
</style>