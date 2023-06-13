<template>
  <div id="app">
    <Navbar></Navbar>
    <Breadcrumb></Breadcrumb>
    <router-view />
    <Footer></Footer>
  </div>
</template>


<script>
import Navbar from '@/views/Navbar.vue';
import Footer from "@/views/Footer.vue";
import Breadcrumb from "@/views/Breadcrumb.vue";

export default {
  components: {
    Navbar,
    Footer,
    Breadcrumb
  },
}

</script>
<style>
body {
  margin: 0;
  font-family: '微軟正黑體';
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
</style>
