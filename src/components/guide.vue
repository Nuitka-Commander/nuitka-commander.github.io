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
    //第一个元素没有callback
  },
  {
    target: "#setting-page-enter-button",
    title: "设置页面入口",
    desc: "让我们先来看看设置页面 点击该按钮会打开设置页面，点击后，请按下一步",
    callback: () => {
      user_options.value.settings_page_show = false; //关闭设置页面
    },
  },
  {
    target: "#setting_drawer",
    title: "设置页面",
    desc: "这里是设置页面，你可以在这里配置Nuitka Commander中的各种设置",
    callback: () => {
      user_options.value.settings_page_show = true; //打开设置页面
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