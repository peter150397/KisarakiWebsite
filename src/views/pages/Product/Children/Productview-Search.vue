<template>
  <div>
    <p class="instruction">「{{ SearchPage }}」 搜尋結果如下</p>
    <div class="productCardsContainer">
      <div class="productCards" v-for="item in SearchProductData" :key="item.productName" @click="ProductDetailPage(item.category.mainCategory, item.category.subCategory, item.productName)">
        <img :src="item.productImg.CarouselImg[0]" alt="">
        <h3>{{ item.productName }}</h3>
        <div class="productCardsButtonGroup">
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
  width: 990px;
}

</style>