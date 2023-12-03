<script setup>
import LoadingPage from "@/components/loadingPage.vue";
import WebsiteHeader from "@/components/websiteHeader.vue";
import WebsiteFooter from "@/components/websiteFooter.vue";
import {set_theme} from "@/utils/use_theme.js";
import SettingPage from "@/components/SettingPage.vue";
</script>

<template>

  <loading-page></loading-page>
  <website-header></website-header>
  <setting-page></setting-page>
  <el-button @click="set_theme('light')">to light</el-button>
  <el-button @click="set_theme('dark')">to dark</el-button>
  <website-footer></website-footer>

</template>


<style lang="scss" scoped>


</style>