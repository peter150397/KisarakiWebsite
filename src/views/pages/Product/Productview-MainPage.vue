<template>
  <div>
    <div class="MainPageContainer">
      <div class="MainPageImgBigContainer">
        <p class="MainPageImgText">{{ tempMainPage.titleContent }}</p>
      </div>
      <div class="MainPageLinkContainer">
        <div class="MainPageLink" v-for="item in tempMainPage.item" :key="item.img" @click="changeSubPage(tempMainPage.name , item.name)">
          <div class="MainPageLinkImgContainer">
            <img :src="item.img" alt="" class="MainPageLinkImg">
          </div>
          <div class="MainPageLinkTextContainer">
            <p>{{ item.name }}</p>
            <button>More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      tempMainPage: {},
    }
  },
  computed: {
    currentMainPage() {
      return this.$route.params.MainPage
    },
    productMainPageData() {
      return this.$store.state.productMainPageData
    }
  },
  methods: {
    changeSubPage(MainPage, SubPage) {
      this.$router.push(`/Product/${MainPage}/${SubPage}`)
    }
  },
  watch: {
    currentMainPage: {
      handler(MainPage) {
        const vm = this;
        vm.$store.commit('GETCURRENTPAGEROUTE', { name: MainPage, index: 1, path: `/Product/${MainPage}` })

        vm.productMainPageData.forEach(item => {
          if (item.name === vm.currentMainPage) {
            vm.tempMainPage = item

          }
        });

        $('.MainPageImgBigContainer').css({ '--backgroundImg': `url('${vm.tempMainPage.titleBgImg}')` })
      },
      immediate: true
    },
  },
  mounted() {
    this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 2, path: '' })
    this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 3, path: '' })
    $('.MainPageImgBigContainer').css({ '--backgroundImg': `url('${this.tempMainPage.titleBgImg}')` })
  }
}
</script>

<style scoped>
.MainPageContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.MainPageImgBigContainer {
  width: 100%;
  height: 300px;
  --backgroundImg: ;

  border-radius: 30px;
  background: linear-gradient(180deg, #FFFFFF00 50%, #000000 100%), var(--backgroundImg);
  background-size: cover;
  background-position: center center;

  box-shadow: 0px 3px 10px #464646C9;

  position: relative;
}

.MainPageImgText {
  width: 50%;
  color: white;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
}

.MainPageLinkContainer {
  display: flex;
  gap: 4rem;
  justify-content: space-between;

  margin: 4rem 0 0;
}

.MainPageLink {
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;

  border-radius: 30px;
  box-shadow: 0px 5px 10px #B4B4B4;

  cursor: pointer;
}

.MainPageLinkImgContainer {
  width: 100%;
  aspect-ratio: 1.2 / 1;
  border-radius: 20px;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
}

.MainPageLinkImg {
  width: 100%;
}

.MainPageLinkImg:hover {
  transform: scale(1.1, 1.1);
  transition-duration: .3s;
}

.MainPageLinkTextContainer {
  display: flex;
  align-items: center;
  gap: .5rem;
}

.MainPageLinkTextContainer>p {
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
}

.MainPageLinkTextContainer>button {
  background-color: #F4DB82;
  border: none;
  border-radius: 50px;
  padding: .2rem .8rem;

  cursor: pointer;
}

.MainPageLinkTextContainer>button:hover {
  transform: scale(1.2, 1.2);
  transition-duration: .3s;
}
</style>