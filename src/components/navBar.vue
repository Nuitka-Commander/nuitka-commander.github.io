<script setup>
/**
 * @Description 导航栏
 * @Author: erduotong
 * @Date: 2023-12-03 22:40:21
 */
import SettingPage from "@/components/SettingPage.vue";
import {user_options} from "@/vals/stores/user_options.js";
import {load_new_config} from "@/modules/use_nuitka_config.js";
import supported_nuitka_version from "@/nuitka_config_files/supported_nuitka_version.js";
</script>

<template>
  <div id="nav_bar">


    <!--left-->
    <div class="top_nav_bar">
      <el-tooltip>
        <el-switch
            v-model="user_options.is_full_mode"
            :active-text="$t('nav_bar.mode.full_mode')"
            :inactive-text="$t('nav_bar.mode.easy_mode')"
        ></el-switch>
        <template #content>
          {{ $t("nav_bar.mode.info.l1") }} <br>
          {{ $t("nav_bar.mode.info.l2") }} <br>
          {{ $t("nav_bar.mode.info.l3") }}
        </template>
      </el-tooltip>

      <el-tooltip>
        <el-switch
            v-model="user_options.show_original_command"
            :active-text="$t('nav_bar.mode.show_raw_command')"
            :inactive-text="$t('nav_bar.mode.no_show_raw_command')"
        ></el-switch>
        <template #content>
          {{ $t("nav_bar.mode.show_raw_command_info") }}
        </template>
      </el-tooltip>
      <el-select
          v-model="user_options.nuitka_version"
          filterable
          @change="load_new_config()"

      >
        <template #header>
          {{ $t("nav_bar.select_nuitka_version") }}
        </template>
        <template #prefix>
          {{ $t("nav_bar.now_nuitka_version") }}
        </template>
        <el-option
            v-for="(val,key) in supported_nuitka_version.versions"
            :key="val"
            :label="key"
            :value="key"

        >

        </el-option>

      </el-select>


    </div>

    <!--right-->
    <div class="top_nav_bar">


      <setting-page></setting-page>
      <a href="https://github.com/Nuitka-Commander/nuitka-commander.github.io">
        <img id="nav_github_logo" alt="github logo" src="@/assets/images/github.svg">
      </a>

    </div>

  </div>

</template>

<style lang="scss" scoped>
#nav_bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 10vw;
  margin-left: 10vw;
  padding: 8px 0;
  border-bottom: 1px solid grey; //底部来一条线

  .top_nav_bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3px;

    gap: 15px;

  }


}


#nav_github_logo {
  width: 30px;
  height: 30px;
  transform: translateX(-1000vw);
  filter: drop-shadow(1000vw 0 white);
}
</style>