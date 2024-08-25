<script lang="js" setup>
/**
 * 设置页面相关逻辑
 */
import {ref} from "vue";
import {Close, RefreshLeft, Setting} from "@element-plus/icons-vue";
import {reset_user_options, user_options} from "@/values/stores/user_options.js";
import {set_theme} from "@/modules/use_theme.js";
import {set_i18n_language} from "@/assets/languages/i18n.js";
import {supported_i18n} from "@/assets/languages/supported_i18n.js";
import {current_version_support_language, load_config_language} from "@/modules/use_nuitka_config.js";
import {ElMessage, ElMessageBox} from "element-plus";
import * as constants from "@/values/constants.json";
import {useI18n} from "vue-i18n";
import {local_nuitka_version_config} from "@/modules/use_local_forage.js";
import {tour_status} from "@/values/stores/tour_status.js";
//设置页面的显示与隐藏
const settings_page_show = ref(false);
//关闭设置页面 event:点击事件
const close_setting_page = (event) => {
  if (event.target.id === "setting_mask") { //不是点击在设置页上
    settings_page_show.value = false;
  }
};
const t = useI18n().t;

const reset_user = () => {
  //询问是否重置
  ElMessageBox.confirm(
      "该操作无法撤销",
      "是否重置用户设置",
      {
        confirmButtonText: t("message.OK"),
        cancelButtonText: t("message.cancel"),
        type: "warning",
      },
  ).then(() => {

    reset_user_options();

    ElMessage({
      type: "success",
      message: "删除成功",
      showClose: true,
      duration: constants.message_duration,
    });
  }).catch(() => {
    ElMessage({
      type: "info",
      message: "取消删除",
      showClose: true,
      duration: constants.message_duration,
    });
  });
};

const reset_current = () => {
  ElMessageBox.confirm(
      "该操作无法撤销",
      `是否重置${user_options.value.nuitka_version}版本的Nuitka配置?`,
      {
        confirmButtonText: t("message.OK"),
        cancelButtonText: t("message.cancel"),
        type: "warning",
      },
  ).then(() => {

    local_nuitka_version_config.remove_config(user_options.value.nuitka_version);
    location.reload();

    ElMessage({
      type: "success",
      message: "删除成功",
      showClose: true,
      duration: constants.message_duration,
    });
  }).catch(() => {
    ElMessage({
      type: "info",
      message: "取消删除",
      showClose: true,
      duration: constants.message_duration,
    });
  });
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
          <h1>(to i18n)教程</h1>
          <el-button @click="tour_status=true">
            (to-i18n)开始教程
          </el-button>
        </div>
        <div class="setting_page_selects_fa">
          <h1>
            <img v-show="user_options.theme==='auto'" alt="auto theme" class="setting-icon"
                 src="@/assets/images/auto_theme.svg">
            <img v-show="user_options.theme==='light'" alt="light theme" class="setting-icon"
                 src="@/assets/images/sun.svg">
            <img v-show="user_options.theme==='dark'" alt="dark theme" class="setting-icon"
                 src="@/assets/images/moon.svg">
            {{ $t("setting.theme.theme") }}
          </h1>
          <el-select v-model="user_options.theme" @change="set_theme(user_options.theme)">
            <el-option key="auto" :label="$t('setting.theme.auto')" value="auto">
             <span slot="label" class="theme_select_content">
                  <img alt="auto theme" class="setting-icon" src="@/assets/images/auto_theme.svg">
                  {{ $t("setting.theme.auto") }}
             </span>
            </el-option>
            <el-option key="light" :label="$t('setting.theme.light')" value="light">
                <span slot="label" class="theme_select_content">
                  <img alt="light theme" class="setting-icon" src="@/assets/images/sun.svg">
                  {{ $t("setting.theme.light") }}
                </span>
            </el-option>
            <el-option key="dark" :label="$t('setting.theme.dark')" value="dark">
                <span slot="label" class="theme_select_content">
                  <img alt="dark theme" class="setting-icon" src="@/assets/images/moon.svg">
                  {{ $t("setting.theme.dark") }}
                </span>
            </el-option>


          </el-select>
        </div>

        <div class="setting_page_selects_fa">

          <h1>
            <img alt="language icon" class="setting-icon" src="@/assets/images/language.svg">
            {{ $t("setting.language.title") }}
          </h1>
          <h3> {{ $t("setting.language.interface_language") }}</h3>
          <el-select v-model="user_options.language" filterable @change="set_i18n_language(user_options.language)">
            <el-option
                v-for="(value, key) in supported_i18n"
                :key="key"
                :label="value.name"
                :value="key">
            </el-option>
          </el-select>
          <h3>{{ $t("setting.language.command_language") }}</h3>
          <el-select v-model="user_options.nuitka_language" filterable
                     @change="load_config_language(user_options.nuitka_language)">
            <el-option
                v-for="(value,key ) in current_version_support_language"
                :key="key"
                :label="value.name"
                :value="key"
            ></el-option>
          </el-select>
        </div>
        <div class="setting_page_selects_fa">

          <h1>
            <img alt="language icon" class="setting-icon" src="@/assets/images/warehouse.svg">
            {{ $t("setting.storage.title") }}
          </h1>
          <h3> {{ $t("setting.storage.user") }}</h3>
          <div>
            <el-button @click="reset_user">
              <el-icon size="20">
                <refresh-left></refresh-left>
              </el-icon>
              {{ $t("setting.storage.reset_user") }}
            </el-button>

          </div>

          <h3> {{ $t("setting.storage.command") }}</h3>
          <div>
            <el-button @click="reset_current">
              <el-icon size="20">
                <refresh-left></refresh-left>
              </el-icon>
              {{ $t("setting.storage.reset_command") }}
            </el-button>

          </div>
        </div>

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
//设置的svg图标
.setting-icon {
  filter: drop-shadow(1000vw 0 var(--el-text-color-primary));
}

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
  background-color: var(--setting-card-background);
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
  box-shadow: -5px 5px 15px var(--setting-card-shadow);

  h1 {
    font-size: 1.5rem;

    display: flex;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      transform: translateX(-1000vw);
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
