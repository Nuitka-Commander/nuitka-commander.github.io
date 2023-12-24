<script setup>
/**
 * 设置页面相关逻辑
 */
import {ref} from "vue";
import {Close, Setting} from "@element-plus/icons-vue";
import {user_options} from "@/vals/stores/user_options.js";
import {set_theme} from "@/modules/use_theme.js";
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
  <div v-show="settings_page_show" id="setting_mask" @click="close_setting_page($event)">
    <transition name="setting_drawer">
      <div v-show="settings_page_show" id="setting_drawer">
        <el-button id="close_setting_button" @click="settings_page_show=false">
          <el-icon :size="30">
            <close></close>
          </el-icon>
        </el-button>

        <div class="setting_page_selects_fa">
          <h1>
            <img v-show="user_options.theme==='auto'" alt="auto theme" src="@/assets/images/auto_theme.svg">
            <img v-show="user_options.theme==='light'" alt="light theme" src="@/assets/images/sun.svg">
            <img v-show="user_options.theme==='dark'" alt="dark theme" src="@/assets/images/moon.svg">
            {{ $t("setting.theme.theme") }}
          </h1>
          <el-select v-model="user_options.theme" @change="set_theme(user_options.theme)">
            <el-option key="auto" :label="$t('setting.theme.auto')" value="auto">
             <span slot="label" class="theme_select_content">
                  <img alt="auto theme" src="@/assets/images/auto_theme.svg">
                  {{ $t("setting.theme.auto") }}
             </span>
            </el-option>
            <el-option key="light" :label="$t('setting.theme.light')" value="light">
                <span slot="label" class="theme_select_content">
                  <img alt="light theme" src="@/assets/images/sun.svg">
                  {{ $t("setting.theme.light") }}
                </span>
            </el-option>
            <el-option key="dark" :label="$t('setting.theme.dark')" value="dark">
                <span slot="label" class="theme_select_content">
                  <img alt="dark theme" src="@/assets/images/moon.svg">
                  {{ $t("setting.theme.dark") }}
                </span>
            </el-option>


          </el-select>
        </div>

        <div class="setting_page_selects_fa">
          <h1>
            <img alt="language icon" src="@/assets/images/language.svg">
            {{ $t("setting.language") }}
          </h1>
          <el-select v-model="user_options.language" filterable @change="set_i18n_language(user_options.language)">
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

  <!--这里内联禁用了padding等外边界元素 实在不想用那一坨选择器了-->
  <el-button style="border:none;padding: 0;margin: 0;"
             @click="settings_page_show = !settings_page_show"
  >
    <el-icon size="30">
      <setting></setting>
    </el-icon>
  </el-button>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/animations.scss";

#setting_drawer {
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  width: min(350px, 30vw);
  min-width: 192px;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgba(black, 0.5);
  backdrop-filter: blur(10px);


  #close_setting_button {
    height: 40px;
    margin-top: 10px;
    margin-right: 10px;
    margin-left: auto;
    padding: 8px;
    border: none;
    border-radius: 10px;
    background: none;
    //悬停的效果是一个小方块
    &:hover {
      color: white;
      background-color: #30363d;
    }
  }
}

//遮罩层
#setting_mask {
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);

}


//theme选择器内容
.theme_select_content {
  display: flex;

  align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    transform: translateX(-1000vw);
    filter: drop-shadow(1000vw 0 white);
  }
}

//设置页面的选择器的标题部分
.setting_page_selects_fa {

  width: min(330px, 15vw);
  min-width: 170px;
  margin-bottom: 12px;
  margin-left: 12px;
  padding: 10px 13px;

  border-radius: 12px;

  background: none;
  box-shadow: -5px 5px 15px rgba(white, 0.5);

  h1 {
    font-size: 1.5rem;

    display: flex;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      transform: translateX(-1000vw);
      filter: drop-shadow(1000vw 0 white);
    }
  }
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
