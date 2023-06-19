<template>
  <div>
    <div class="container">
      <div class="CarouselContainer" @mouseenter="removeInterval" @mouseleave="startInterval">
        <img src="@/assets/ProductImg/OverviewImg/arrow.png" alt="" class="CarouselArrow leftArrow" @click="prevImg">
        <img src="@/assets/ProductImg/OverviewImg/Carousel0.png" alt="" class="CarouselImg" style="--CarouselSlide: 0%;">
        <img src="@/assets/ProductImg/OverviewImg/Carousel1.png" alt="" class="CarouselImg" style="--CarouselSlide: 0%;">
        <img src="@/assets/ProductImg/OverviewImg/Carousel2.png" alt="" class="CarouselImg" style="--CarouselSlide: 0%;">
        <img src="@/assets/ProductImg/OverviewImg/arrow.png" alt="" class="CarouselArrow rightArrow" @click="nextImg">
      </div>
      <div class="CarouselIndexContainer">
        <div class="CarouselIndexItem" id="CarouselIndexItem0" @click="indexImg(0)"></div>
        <div class="CarouselIndexItem" id="CarouselIndexItem1" @click="indexImg(1)"></div>
        <div class="CarouselIndexItem" id="CarouselIndexItem2" @click="indexImg(2)"></div>
      </div>
      <div class="productContainer">
        <div class="productItem" @click="changePage('米血製品')">
          <img src="@/assets/ProductImg/OverviewImg/1.png" alt="" class="productImg">
          <p>米血製品</p>
        </div>
        <div class="productItem" @click="changePage('魚漿製品')">
          <img src="@/assets/ProductImg/OverviewImg/2.png" alt="" class="productImg">
          <p>魚漿製品</p>
        </div>
        <div class="productItem" @click="changePage('調理食品')">
          <img src="@/assets/ProductImg/OverviewImg/3.png" alt="" class="productImg">
          <p>調理食品</p>
        </div>
        <div class="productItem" @click="changePage('蔬菜製品')">
          <img src="@/assets/ProductImg/OverviewImg/4.png" alt="" class="productImg">
          <p>蔬菜製品</p>
        </div>
        <div class="productItem" @click="changePage('香蕉')">
          <img src="@/assets/ProductImg/OverviewImg/5.png" alt="" class="productImg">
          <p>香蕉</p>
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
      CarouselIntervalId: '',
      currentCarouselImgIndex: 0,
    }
  },
  methods: {
    prevImg() {
      this.currentCarouselImgIndex -= 1;
    },

    nextImg() {
      this.currentCarouselImgIndex += 1;
    },
    indexImg(index) {
      this.currentCarouselImgIndex = index;
    },
    removeInterval() {
      clearInterval(this.CarouselIntervalId)
    },
    startInterval() {
      const vm = this;

      vm.CarouselIntervalId = setInterval(function () {
        vm.currentCarouselImgIndex += 1
      }, 5000)
    },
    changePage(page) {
      this.$router.push(`/Product/${page}`);
      $("html").scrollTop(0);
    }
  },
  watch: {
    currentCarouselImgIndex() {
      const vm = this;

      if (vm.currentCarouselImgIndex > 2) {
        vm.currentCarouselImgIndex = 0
      } else if (vm.currentCarouselImgIndex < 0) {
        vm.currentCarouselImgIndex = 2
      }

      $('.CarouselImg').css('--CarouselSlide', `${vm.currentCarouselImgIndex * -100}%`)

      $('.CarouselIndexItem').css({
        'width': '12px',
        'background-color': '#34D687'
      })

      $(`#CarouselIndexItem${vm.currentCarouselImgIndex}`).css({
        'width': '35px',
        'background-color': '#00A353'
      })
    }
  },
  mounted() {
    this.startInterval()

    $('#CarouselIndexItem0').css({
      'width': '35px',
      'background-color': '#00A353'
    })


    this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 1, path: '' })
    this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 2, path: '' })
    this.$store.commit('GETCURRENTPAGEROUTE', { name: '', index: 3, path: '' })
  },
  beforeDestroy() {
    this.removeInterval()
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.CarouselContainer {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: relative;
  height: 320px;

  border-radius: 60px;

  overflow: hidden;
}

.CarouselImg {
  width: 100%;
  transform: translateX(var(--CarouselSlide));

  transition-duration: 500ms;
}

.CarouselArrow {
  height: 60px;
  position: absolute;
  z-index: 1;
  cursor: pointer;
}

.leftArrow {
  left: 0;
}

.rightArrow {
  right: 0;
  transform: rotate(180deg);
}

.CarouselIndexContainer {
  display: flex;
  gap: 15px;
  margin: 1.5rem 0;
}

.CarouselIndexItem {
  height: 12px;
  width: 12px;
  border-radius: 50px;
  background-color: #34D687;

  transition-duration: 500ms;

  cursor: pointer;
}

.productContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: 4rem;
}

.productItem {
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
}

.productImg {
  height: 153px;
  border-radius: 50%;
  box-shadow: 3px 3px 6px #000000B3;
}

.productItem>p {
  font-weight: bold;
  letter-spacing: 2px;
}
</style>