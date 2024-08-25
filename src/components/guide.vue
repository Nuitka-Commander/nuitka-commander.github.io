<script setup>
/**
 * 引导功能
 * @author erduotong
 */

import {tour_status} from "@/values/stores/tour_status.js";
import {ElTour, ElTourStep} from "element-plus";
import {ref} from "vue";
import {user_options} from "@/values/stores/user_options.js";


// 介绍的配置文件
// 注:第一个元素的callback方法不会被调用
const config = [
  {
    // target: "", 目标元素 可以不存在
    title: "使用教程", // 标题 必须存在
    desc: "欢迎使用Nuitka Commander，接下来，请点击右下角，让我们一步步学习如何使用", // 描述 必须存在
    // notModal: true, // 是否不用模态框
    //第一个元素没有callback
  },
  {
    target: "#nav_bar",
    title: "导航栏",
    desc: "这里是导航栏，一些全局的功能都在这里设置",
    callback: () => {
      user_options.value.settings_page_show = false;
    },
  },
  {
    target: "#show_original_command",
    title: "导航栏——原始命令切换",
    desc: "这里可以切换是否展示原始的nuitka命令，方便查看。你可以尝试切换一下",
  },
  {
    target: "#top_nav_bar_left",
    title: "导航栏——版本选择",
    desc: "在右侧的选择框可以选择不同的Nuitka版本，你可以找到适合自己版本的配置文件。如果你想要一个精简一点的命令，你可以选择最下方的'简单模式'",
  },
  {
    target: "#setting-page-enter-button",
    title: "导航栏——设置按钮",
    desc: "点击这个按钮，就可以进入到设置页面中",
  },
  {
    title: "设置页面",
    desc: "接下来，是设置页面",
    callback: () => {
      user_options.value.settings_page_show = true;
    },
  },
  {
    target: "#setting-selects-area",
    title: "设置页面——介绍",
    desc: "这里是设置界面，你可以在这里调整你心怡的设置",
    callback: () => {
      user_options.value.settings_page_show = true;
    },
  },
  {
    target: "#setting-tour",
    title: "设置页面——引导",
    desc: "若要在将来重新查看教程，可以点击这里",
    callback: () => {
      user_options.value.settings_page_show = true;
    },
  },
  {
    title: "编辑页面",
    desc: "接下来，是编辑页面",
    callback: () => {
      user_options.value.settings_page_show = true;
    },
  },

];
const current_step = ref(0);

const handle_change = (step) => {
  current_step.value = step;
  config[step].callback?.();
};

</script>

<template>
  <div>
    <el-tour
        v-model="tour_status"
        @change="handle_change"
    >
      <el-tour-step
          v-for="(item,index) in config"
          :key="index"
          :description="item.desc"
          :next-button-props="{
            children: '(to i18n) 下一步',
        }"
          :prev-button-props="{
            children: '(to i18n) 上一步',
          }"
          :target="config[index].target"
          :title="item.title"

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