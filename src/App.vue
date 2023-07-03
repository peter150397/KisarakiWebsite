<template>
  <div id="app" class="columnCenterContainer">
    <Navbar></Navbar>
    <Breadcrumb></Breadcrumb>
    <router-view id="RouterViewContent"></router-view>
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
  beforeUpdate() {
    $('.RWDNavMenu').css('--menuIconRotate', '0deg');
    $('.RWDNavLinkGroup').css('top', 'calc(-100% + 104px)');

    setTimeout(function () {
      $('.nav').css('position', 'static');
      $('#RouterViewContent').css('margin-top', '0');
    }, 500)
  },
  updated() {
    if (this.$route.fullPath != '/') {
      $('#RouterViewContent').addClass('RouterViewContentWidth')
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

#app {
  overflow: hidden;
}

#RouterViewContent {
  display: flex;
  flex-direction: column;
}
.RouterViewContentWidth{
  width: 65vw;
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
  transition-duration: .3s;
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
  position: relative;
}

.pageTitle {
  margin-top: 4rem;
}

.CarouselArrow {
  position: absolute;
  z-index: 1;
  width: 5vw;
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
  height: 10px;
  width: 10px;
  border-radius: 50px;

  transition: width ease-in-out .5s 0s, background-color ease-in-out .5s 0s;

  cursor: pointer;
}

.linkGroup {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  margin: 2rem 0;

  height: 37px;
}

.linkGroupLine {
  height: 50%;
  width: 1px;
  background-color: black;
}

.link {
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}

.link:hover {
  background-color: #FFD86F;
  color: white;

  transition-duration: .3s;
}
.RWDSelectLinkGroup{
  display: none;
}

.mainContent {
  width: 100%;
  margin-bottom: 6rem;
}
.AboutUs .subTitle{
  color: #71CC86;
  letter-spacing: 2px;
  border-left: solid 2px #71CC86;
  border-right: solid 2px #71CC86;
  padding: 0 1.5rem;
  text-align: center;
}
.AboutUs p {
  color: gray;
  line-height: 1.5rem;
  font-size: 14px;
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
  text-align: justify;
}

.newInfoCardItem>p {
  line-height: 24px;
}

.productCardsContainer {
  display: grid;
  gap: 2vw;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.productCards {
  padding: 1rem;
  box-shadow: 0px 5px 10px #B4B4B4;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
}

.productCards>img {
  width: 100%;
  border-radius: 30px;
}

.productCards>h3 {
  margin: 1rem 0;
  width: 80%;
}

.productCardsButtonGroup {
  width: 90%;
  display: flex;
  gap: .5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

@media (max-width: 1022px) {
  .RouterViewContentWidth{
    width: 80vw;
  }
  .linkGroup{
    display: none;
  }
  .RWDSelectLinkGroup{
    display: block;
    margin: 2rem 0;
    padding: .5rem;
    width: 100%;
    font-size: 16px;
    border: solid 1px darkgray;
    border-radius: 10px;
    color: darkgray;
  }
  .RWDSelectLinkGroup:focus-visible{
    outline: none;
  }
  .newInfoCardItem {
    padding: 1rem;
  }

  .newInfoCardItem>h3 {
    font-size: 16px;
  }

  .newInfoCardItem>p {
    display: none;
  }
}




@media (max-width: 1233px){
  .productCardsContainer{
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 719px){
  .productCardsContainer{
    grid-template-columns: 1fr 1fr;
  }
}
</style>
