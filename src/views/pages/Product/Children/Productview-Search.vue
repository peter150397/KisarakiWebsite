<template>
  <div>
    <p class="instruction">「{{ SearchPage }}」 搜尋結果如下</p>
    <div class="SubPageContainer">
      <div class="SubPageItem" v-for="item in SearchProductData" :key="item.productName" @click="ProductDetailPage(item.category.mainCategory, item.category.subCategory, item.productName)">
        <img :src="item.productImg.CarouselImg[0]" alt="" class="SubPageItemImg">
        <h3 class="SubPageItemTitle">{{ item.productName }}</h3>
        <div class="buttonGroup">
          <button>前往購買</button>
          <button>More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SearchProductData: [],
    }
  },
  computed: {
    SearchPage() {
      return this.$route.params.SearchPage;
    },
    productData() {
      return this.$store.state.productData;
    }
  },
  methods: {
    ProductDetailPage(MainPage, SubPage, ProductPage) {
      this.$router.push(`/Product/${MainPage}/${SubPage}/${ProductPage}`);
    }
  },
  watch: {
    // currentMainPage: {
    //   handler(MainPage) {
    //     this.$store.commit('GETCURRENTPAGEROUTE', { name: MainPage, index: 1, path: `/Product/${MainPage}` })
    //   },
    //   immediate: true
    // },
    SearchPage: {
      handler(SearchPage) {
        const vm = this;

        vm.$store.commit('GETCURRENTPAGEROUTE', { name: `搜尋 : ${SearchPage}`, index: 1, path: `/Product/Search/${SearchPage}`})

        vm.SearchProductData = [];

        vm.productData.forEach(item => {
          if (item.productName.match(SearchPage) != null) {
            vm.SearchProductData.push(item)
          }
        });
      },
      immediate: true
    },
  },
  mounted() {
    this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 2, path: '' })
    this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 3, path: '' })
  }
}
</script>

<style scoped>
.instruction{
  margin-bottom: 2rem;
}
.SubPageContainer {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.SubPageItem{
  padding: 1rem;
  box-shadow: 0px 5px 10px #B4B4B4;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
}
.SubPageItemImg{
  height: 190px;
  border-radius: 30px;
}
.SubPageItemTitle{
  margin: 1rem 0;
  width: 80%;
}
.buttonGroup{
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buttonGroup > * {
  background-color: #F4DB82;
  border: none;
  border-radius: 50px;
  padding: .2rem 0;
  letter-spacing: -.5px;
  font-family: '微軟正黑體';
  width: 70px;

  cursor: pointer;
}
.buttonGroup > *:hover{
  transform: scale(1.2, 1.2);
  transition-duration: 300ms;
}
</style>