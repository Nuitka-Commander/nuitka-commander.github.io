<script setup>
import {ref} from "vue";
import {Close, Edit} from "@element-plus/icons-vue";
import {user_options} from "@/stores/user_options.js";
import {set_theme} from "@/utils/use_theme.js";
//设置页面的显示与隐藏
const settings_page_show = ref(false);
//关闭设置页面 event:点击事件
const close_setting_page = (event) => {
  if (event.target.id === "setting_mask") { //不是点击在设置页上
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
      <div>
        <h1>设置主题</h1>
        <el-select v-model="user_options.theme" @change="set_theme(user_options.theme)">
          <el-option key="auto" :label="$t('setting.theme.auto')" value="auto">
                <span slot="label" class="theme_chooser_content">
                  <img src="@/assets/images/auto_theme.svg" alt="auto theme">
                  {{ $t("setting.theme.auto") }}
                </span>
          </el-option>
          <el-option key="light" :label="$t('setting.theme.light')" value="light">
                <span slot="label" class="theme_chooser_content">
                  <img src="@/assets/images/sun.svg" alt="light theme">
                  {{ $t("setting.theme.light") }}
                </span>
          </el-option>
          <el-option key="dark" :label="$t('setting.theme.dark')" value="dark">
                <span slot="label" class="theme_chooser_content">
                  <img src="@/assets/images/moon.svg" alt="dark theme">
                  {{ $t("setting.theme.dark") }}
                </span>
          </el-option>


        </el-select>

      </div>

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
  flex-direction: column;
  overflow-y: auto;

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
}

//遮罩层
#setting_mask {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}

.theme_chooser_content {
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  //设置文字上下居中
  display: flex;
  align-items: center;
}
</style>
