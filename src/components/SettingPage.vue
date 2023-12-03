<script setup>
import {ref} from "vue";
import {Close, Edit} from "@element-plus/icons-vue";
import {user_options} from "@/stores/user_options.js";
import {set_theme} from "@/utils/use_theme.js";
import {set_i18n_language} from "@/assets/languages/i18n.js";
import {supported_i18n} from "@/assets/languages/supported_i18n.js";
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
    <transition name="setting_drawer">
      <div id="setting_drawer" v-show="settings_page_show">
        <el-button id="close_setting_button" @click="settings_page_show=false">
          <el-icon :size="30">
            <close></close>
          </el-icon>
        </el-button>

        <div class="setting_page_selects_fa">
          <h1>
            <img src="@/assets/images/auto_theme.svg" alt="auto theme" v-show="user_options.theme==='auto'">
            <img src="@/assets/images/sun.svg" alt="light theme" v-show="user_options.theme==='light'">
            <img src="@/assets/images/moon.svg" alt="dark theme" v-show="user_options.theme==='dark'">
            {{ $t("setting.theme.theme") }}
          </h1>
          <el-select v-model="user_options.theme" @change="set_theme(user_options.theme)">
            <el-option key="auto" :label="$t('setting.theme.auto')" value="auto">
             <span slot="label" class="theme_select_content">
                  <img src="@/assets/images/auto_theme.svg" alt="auto theme">
                  {{ $t("setting.theme.auto") }}
             </span>
            </el-option>
            <el-option key="light" :label="$t('setting.theme.light')" value="light">
                <span slot="label" class="theme_select_content">
                  <img src="@/assets/images/sun.svg" alt="light theme">
                  {{ $t("setting.theme.light") }}
                </span>
            </el-option>
            <el-option key="dark" :label="$t('setting.theme.dark')" value="dark">
                <span slot="label" class="theme_select_content">
                  <img src="@/assets/images/moon.svg" alt="dark theme">
                  {{ $t("setting.theme.dark") }}
                </span>
            </el-option>


          </el-select>
        </div>

        <div class="setting_page_selects_fa">
          <h1>
            <img src="@/assets/images/language.svg" alt="language icon">
            {{ $t("setting.language") }}
          </h1>
          <el-select v-model="user_options.language" @change="set_i18n_language(user_options.language)">
            <el-option
                v-for="(value, key) in supported_i18n"
                :key="key"
                :label="value.name"
                :value="key">
            </el-option>
          </el-select>
        </div>
      <!--todo localstorage-->
      </div>

    </transition>


  </div>


  <el-button @click="settings_page_show = !settings_page_show">
    <el-icon>
      <Edit></Edit>
    </el-icon>
    click to open area
  </el-button>
</template>

<style scoped lang="scss">
@import "@/assets/styles/animations.scss";

#setting_drawer {
  background-color: rgba(black, 0.5);
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
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}


//theme选择器内容
.theme_select_content {
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    filter: drop-shadow(1000vw 0 white);
    transform: translateX(-1000vw)
  }

  display: flex;
  align-items: center;
}

//设置页面的选择器的标题部分
.setting_page_selects_fa {

  background: none;
  border-radius: 12px;
  min-width: 170px;
  width: min(330px, 15vw);
  box-shadow: -5px 5px 15px rgba(white, 0.5);

  h1 {
    img {
      filter: drop-shadow(1000vw 0 white);
      transform: translateX(-1000vw);
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }

    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }

  padding: 10px 13px;
  margin-bottom: 12px;
  margin-left: 12px
}

//动画
.setting_drawer-enter-active, .setting_drawer-leave-active {
  transition: transform 0.3s;
}

.setting_drawer-enter-from, .setting_drawer-leave-to {
  transform: translateX(100%);
}

.setting_drawer-enter-to, .setting_drawer-leave-from {
  transform: translateX(0);
}

</style>
