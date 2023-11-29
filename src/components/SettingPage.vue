<script setup>
import {ref} from "vue";
import {Edit} from "@element-plus/icons-vue";
//设置页面的显示与隐藏
const settings_page_show = ref(false);

</script>

<template>
  <div id="setting_drawer" v-show="settings_page_show"></div>
  <el-button @click="settings_page_show = !settings_page_show">
    <el-icon>
      <Edit></Edit>
    </el-icon>
    click to open area
  </el-button>
</template>

<style scoped lang="scss">
#setting_drawer {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  min-width: 192px;
  width: min(350px, 30vw);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  backdrop-filter: blur(10px);
  z-index: 9999;
}
</style>