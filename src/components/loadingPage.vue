<script setup>
/**
 * @Description 加载页面(全屏)
 * @Author: erduotong
 * @Date: 2023-11-26 10:33:25
 */
import {is_loading} from "@/stores/is_loading.js";
</script>
<template>
  <!--怪方法 但是好用-->
  <el-text
      v-loading.fullscreen.lock="is_loading"
      element-loading-background=""
  >loading...
  </el-text>
</template>

<script>


export default {
  name: "loadingPage",
};

</script>
<style lang="scss" scoped>
@use "sass:map";
.el-text {
  display: none;
}




</style>