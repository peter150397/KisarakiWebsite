<template>
  <div>
    <div class="SubPageContainer">
      <div class="SubPageItem" v-for="item in tempProductData" :key="item.productName" @click="ProductDetailPage(item.category.mainCategory, item.category.subCategory, item.productName)">
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
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>