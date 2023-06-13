<template>
  <div>
    Sub
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentMainPage:'',
            currentSubPage:''
        }
    },
    created() {
        this.currentMainPage = this.$route.params.MainPage;
        this.currentSubPage = this.$route.params.SubPage;
    },
}
</script>

<style scoped>

</style>