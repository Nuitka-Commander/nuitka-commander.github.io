<script setup>
import {i18n, set_i18n_language} from "@/languages/i18n.js";
</script>

<template>
  <div id="app">
    <p>{{ $t("hello") }}</p>
    <p>{{ $t("testFather.test") }}</p>
    <el-button @click="set_i18n_language('en')">to en</el-button>
    <el-button @click="set_i18n_language('zh-CN')">to zh</el-button>
    <el-button @click="console.log(i18n.global.messages.value)">show value</el-button>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
el-button {
  background-color: red;
}
</style>