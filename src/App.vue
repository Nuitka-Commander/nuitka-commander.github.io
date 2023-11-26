<script setup>


import {i18n, set_i18n_language} from "@/assets/languages/i18n.js";
import {set_theme} from "@/utils/use_theme.js";
import {set_loading} from "@/stores/is_loading.js";
import LoadingPage from "@/components/loadingPage.vue";


</script>

<template>
  <div id="app">
    <loading-page></loading-page>
    <p>{{ $t("hello") }}</p>
    <p>{{ $t("testFather.test") }}</p>
    <el-button @click="set_i18n_language('en')">to en</el-button>
    <el-button @click="set_i18n_language('zh-CN') ">to zh</el-button>
    <el-button @click="console.log(i18n.global.messages.value)">show value</el-button>
    <br>
    <el-button @click="set_theme('dark')">to dark</el-button>
    <el-button @click="set_theme('light')">to light</el-button>
    <el-button @click="set_theme('auto')">to auto</el-button>
    <br>
    <el-button @click="set_loading(true)"></el-button>

    <button>hello</button>
  </div>
</template>

<script>


</script>
<style lang="scss" scoped>


</style>