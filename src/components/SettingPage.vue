<script setup>
import {ref} from "vue";
import {Close, Edit} from "@element-plus/icons-vue";
//设置页面的显示与隐藏
const settings_page_show = ref(false);
//关闭设置页面 event:点击事件
const close_setting_page = (event) => {
  if (event.target.id === "setting_mask") {
    settings_page_show.value = false;
  }
};
</script>

<template>
  <div id="setting_mask" v-show="settings_page_show" @click="close_setting_page($event)">
    <div id="setting_drawer">

      <el-button id="close_setting_button" @click="settings_page_show=false">
        <el-icon :size="30">
          <close></close>
        </el-icon>
      </el-button>
    </div>
  </div>


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
  display: flex;
}

#close_setting_button {
  border: none;
  padding: 8px;
  height: 40px;
  background: none;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: auto;
  //悬停的效果是一个小方块
  &:hover {
    color: white;
    background-color: #30363d;
  }
}

//遮罩层
#setting_mask {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}
</style>