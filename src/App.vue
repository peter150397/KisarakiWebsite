<template>
  <div id="app" class="columnCenterContainer">
    <Navbar></Navbar>
    <Breadcrumb></Breadcrumb>
    <router-view id="MainContent"></router-view>
    <Footer></Footer>
  </div>
</template>


<script>
import $ from "jquery";

import Navbar from '@/views/Navbar.vue';
import Footer from "@/views/Footer.vue";
import Breadcrumb from "@/views/Breadcrumb.vue";

export default {
  components: {
    Navbar,
    Footer,
    Breadcrumb
  },
  updated() {
    if (this.$route.fullPath != '/') {
      $('#MainContent').css('width', '990px')
    }
  }
}

</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  font-family: '微軟正黑體';
}

img {
  display: block;
}

button {
  background-color: #F4DB82;
  border: none;
  border-radius: 20px;
  padding: .2rem 1rem;

  cursor: pointer;
}

button:hover {
  transform: scale(1.2, 1.2);
  transition-duration: 300ms;
}

a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.columnCenterContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.CarouselArrow {
  position: absolute;
  z-index: 1;
  height: 70px;
  opacity: .5;
  cursor: pointer;
}

.CarouselArrowRight {
  transform: rotate(180deg);
}

.CarouselArrow:hover {
  opacity: 1;
}

.CarouselIndex {
  height: 15px;
  width: 15px;
  border-radius: 50px;

  transition-duration: .5s;
  transition-timing-function: ease-in-out;

  cursor: pointer;
}

.AboutUs p {
  color: gray;
  line-height: 1.5rem;
  font-size: 14px;
}

.AboutUs h2 {
  color: #71CC86;
  letter-spacing: 2px;
  border-left: solid 2px #71CC86;
  border-right: solid 2px #71CC86;
  padding: 0 1.5rem;
}

.AboutUs .line {
  width: 100%;
  height: 3px;
  background-color: #FFD86F;
  margin: 2rem 0;
}

.newInfoCardItem {
  background-color: white;
  border-radius: 20px;
  padding: 1.5rem;

  cursor: pointer;
}

.newInfoCardItem * {
  width: 100%;
}

.newInfoCardImgContainer {
  border-radius: 20px;

  overflow: hidden;
}

.newInfoCardImg {
  object-fit: cover;
  object-position: center;

  border-radius: 20px;
}

.newInfoCardImg:hover {
  transform: scale(1.2, 1.2);

  transition-duration: .5s;
}

.newInfoCardItem>h3 {
  margin: 1rem 0;
}

.newInfoCardItem>p {
  line-height: 24px;
}
</style>
