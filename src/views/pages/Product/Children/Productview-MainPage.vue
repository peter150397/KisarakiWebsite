<template>
  <div>
    <div class="columnCenterContainer">
      <div class="MainPageImgBigContainer" style="--backgroundImg: ;">
        <p>{{ tempMainPage.titleContent }}</p>
      </div>
      <div class="MainPageLinkContainer">
        <div v-for="item in tempMainPage.item" :key="item.img" @click="changeSubPage(item.path)">
          <div class="ImgContainer">
            <img :src="item.img" alt="">
          </div>
          <div class="TextContainer">
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
    changeSubPage(Page) {
      this.$router.push(Page)
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
.MainPageImgBigContainer {
  width: 100%;
  height: 300px;

  border-radius: 30px;
  background: linear-gradient(180deg, #FFFFFF00 50%, #000000 100%), var(--backgroundImg);
  background-size: cover;
  background-position: center center;

  box-shadow: 0px 3px 10px #464646C9;

  position: relative;
}

.MainPageImgBigContainer > p {
  width: 50%;
  color: white;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
}

.MainPageLinkContainer {
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin: 4rem 0 0;
}

.MainPageLinkContainer > div {
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;

  border-radius: 30px;
  box-shadow: 0px 5px 10px #B4B4B4;

  cursor: pointer;
}

.ImgContainer {
  width: 16vw;
  aspect-ratio: 1.2 / 1;
  border-radius: 20px;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
}

.ImgContainer > img {
  width: 100%;
}

.ImgContainer > img:hover {
  transform: scale(1.1, 1.1);
  transition-duration: .3s;
}

.TextContainer {
  display: flex;
  align-items: center;
  gap: .5rem;
}

.TextContainer>p {
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
}

@media (max-width: 1022px){
  .ImgContainer{
    width: 19vw;
  }
  .MainPageLinkContainer > div{
    padding: 1rem;
  }
  .TextContainer{
    flex-direction: column;
  }
}
</style>