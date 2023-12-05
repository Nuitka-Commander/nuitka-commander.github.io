<script setup>
/**
 * @Description 导航栏
 * @Author: erduotong
 * @Date: 2023-12-03 22:40:21
 */
import SettingPage from "@/components/SettingPage.vue";
import {user_options} from "@/stores/user_options.js";
import supported_nuitka_version from "@/command_config_files/supported_nuitka_version.js";
import {ref} from "vue";

const a1 = ref("1.9.*");
</script>

<template>
  <div id="nav_bar">
    <!--left-->
    <div class="top_nav_bar">

      <el-tooltip show-after="120">
        <el-switch
            v-model="user_options.is_full_mode"
            size="large"
            :active-text="$t('nav_bar.mode.full_mode')"
            :inactive-text="$t('nav_bar.mode.easy_mode')"
        ></el-switch>
        <template #content>
          <span v-html="$t('nav_bar.mode.info')"></span>
        </template>
      </el-tooltip>
      <!--todo 这里看不出来是什么-->
      <el-select filterable v-model="a1">
        <template #header>
          {{ $t("nav_bar.select_nuitka_version") }}
        </template>
        <el-option

            v-for="item in supported_nuitka_version"
            :key="item.version"
            :label="item.version"
            :value="item.version"
        >
          <!--  todo ref切换逻辑-->
        </el-option>

      </el-select>


    </div>

    <!--right-->
    <div class="top_nav_bar">

      <setting-page></setting-page>
      <a href="https://github.com/Nuitka-Commander/nuitka-commander.github.io">
        <img id="nav_github_logo" src="@/assets/images/github.svg" alt="github logo">
      </a>

    </div>

  </div>

</template>

<style scoped lang="scss">
#nav_bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 10vw;
  margin-left: 10vw;
  padding: 8px 0;
  align-items: center;
  border-bottom: 1px solid grey; //底部来一条线

  .top_nav_bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 0 10px;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

}

#nav_github_logo {
  width: 30px;
  height: 30px;
  transform: translateX(-1000vw);
  filter: drop-shadow(1000vw 0 white);
}
</style>