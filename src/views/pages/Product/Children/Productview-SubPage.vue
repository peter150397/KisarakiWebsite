<template>
  <div>
    <div class="productCardsContainer">
      <div class="productCards" v-for="item in tempProductData" :key="item.productName" @click="ProductDetailPage(item.category.mainCategory, item.category.subCategory, item.productName)">
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
      tempProductData: [],
    }
  },
  computed: {
    currentMainPage() {
      return this.$route.params.MainPage;
    },
    currentSubPage() {
      return this.$route.params.SubPage;
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
    currentMainPage: {
      handler(MainPage) {
        this.$store.commit('GETCURRENTPAGEROUTE', { name: MainPage, index: 1, path: `/Product/${MainPage}` })
      },
      immediate: true
    },
    currentSubPage: {
      handler(SubPage) {
        const vm = this;
        
        vm.$store.commit('GETCURRENTPAGEROUTE', { name: SubPage, index: 2, path: `/Product/${vm.currentMainPage}/${SubPage}` })

        vm.tempProductData = [];
        vm.productData.forEach(item => {
          if (item.category.mainCategory == vm.currentMainPage && item.category.subCategory == SubPage) {
            vm.tempProductData.push(item)
          }
        });
      },
      immediate: true
    },
  },
  mounted() {
    this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 3, path: '' })
  }
}
</script>

<style scoped>

</style>