<script setup>
/**
 * 引导功能
 * @author erduotong
 */

import {tour_status} from "@/values/stores/tour_status.js";
import {ElTour, ElTourStep} from "element-plus";
import {computed, ref} from "vue";
import {user_options} from "@/values/stores/user_options.js";


// 介绍的配置文件
// 注:第一个元素的callback方法不会被调用
// 只填写i18n，剩下的前往i18n文件中进行填写
// 要求必须有title和desc
const config = [
  {
    // target: "", 目标元素 可以不存在
    i18n: "start", // 使用教程
    // 第一个元素没有callback
  },
  {
    target: "#nav_bar",
    i18n: "navbar", // 导航栏
    callback: () => {
      user_options.value.settings_page_show = false;
    },
  },
  {
    target: "#show_original_command",
    i18n: "navbar_original_command", // 导航栏——原始命令切换
  },
  {
    target: "#top_nav_bar_left",
    i18n: "navbar_version_select", // 导航栏——版本选择
  },
  {
    target: "#setting-page-enter-button",
    i18n: "navbar_settings_button", // 导航栏——设置按钮
  },
  {
    i18n: "settings_page", // 设置页面
    callback: () => {
      user_options.value.settings_page_show = true;
    },
  },
  {
    target: "#setting-selects-area",
    i18n: "settings_page_intro", // 设置页面——介绍
    callback: () => {
      user_options.value.settings_page_show = true;
    },
  },
  {
    target: "#setting-tour",
    i18n: "settings_page_tour", // 设置页面——引导
    callback: () => {
      user_options.value.settings_page_show = true;
    },
  },
  { //至少留一个页面缓冲
    i18n: "edit_page_buffer", // 编辑页面
    callback: () => {
      user_options.value.settings_page_show = true;
    },
  },
  {
    target: "#command-edit-main-area",
    i18n: "edit_page_intro", // 编辑页面——介绍
    callback: () => {
      user_options.value.action_tab = "edit";
      user_options.value.settings_page_show = false;
    },
    no_mask: true,
  },
  {
    i18n: "edit_page_edit_box", // 编辑页面——编辑框
    no_mask: true,
    callback: () => {
      user_options.value.action_tab = "edit";
      user_options.value.settings_page_show = false;
    },
  },
  {
    i18n: "output_page_intro", // 输出页面——介绍
    callback: () => {
      user_options.value.settings_page_show = false;
      user_options.value.action_tab = "output";
    },
    no_mask: true,
  },
  {
    i18n: "input_page_intro", // 输入页面——介绍
    callback: () => {
      user_options.value.settings_page_show = false;
      user_options.value.action_tab = "input";
    },
    no_mask: true,
  },
  {
    target: "#website-footer-area",
    i18n: "website_footer", // 网页底部
  },
  {
    i18n: "end", // 结束
  },
];
const current_step = ref(0);

const handle_change = (step) => {
  current_step.value = step;
  config[step].callback?.();
};

const is_mask = computed(() => {
  return !(config[current_step.value].no_mask !== undefined && config[current_step.value].no_mask === true);
});
</script>

<template>
  <div>
    <el-tour
        v-model="tour_status"
        @change="handle_change"
        :mask="is_mask"
        :type="is_mask ? 'default' : 'primary'"
    >
      <el-tour-step
          v-for="(item,index) in config"
          :key="index"
          :description="$t(`website_guide.${item.i18n}.desc`)"
          :title="$t(`website_guide.${item.i18n}.title`)"
          :next-button-props="{
            children: $t('message.next_step'),
        }"
          :prev-button-props="{
            children: $t('message.prev_step'),
          }"
          :target="config[index].target"


      >

      </el-tour-step>
      <template #indicators="{ current, total }">
        <span>{{ current + 1 }} / {{ total }}</span>
      </template>
    </el-tour>
  </div>
</template>

<style lang="scss" scoped>

</style>