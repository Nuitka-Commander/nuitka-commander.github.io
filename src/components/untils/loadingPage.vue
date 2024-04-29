<script lang="js" setup>
/**
 * @Description 加载页面(全屏)
 * @Author: erduotong
 * @Date: 2023-11-26 10:33:25
 */
import {is_loading} from "@/vals/stores/is_loading.js";
</script>
<template>
  <!--怪方法 但是好用-->
  <el-text
      v-loading.fullscreen.lock="is_loading"
      element-loading-background="var(--loading-page-bg-rgba)"
  >loading...
  </el-text>
</template>

<script>

</script>

<style lang="scss" scoped>
@use "sass:map";

.el-text {
  display: none;
}


</style>