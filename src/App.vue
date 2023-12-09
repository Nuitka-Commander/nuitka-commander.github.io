<script setup>
import LoadingPage from "@/components/loadingPage.vue";
import WebsiteHeader from "@/components/websiteHeader.vue";
import WebsiteFooter from "@/components/websiteFooter.vue";
import NavBar from "@/components/navBar.vue";
</script>

<template>

  <loading-page></loading-page>   <!--先把加载页面挂上-->
  <website-header></website-header>  <!--头-->
  <nav-bar></nav-bar>  <!--导航栏-->
  <website-footer></website-footer>  <!--网页底部-->

</template>


<style lang="scss" scoped>


</style>