<script setup>
/**
 * 引导功能
 * @author erduotong
 */

import {tour_status} from "@/values/stores/tour_status.js";
import {ElTour, ElTourStep} from "element-plus";
import {ref} from "vue";


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
    target: "#top_nav_bar_left", // 目标元素 可以不存在
    title: "x2xx", // 标题 必须存在
    desc: "xxx", // 描述 必须存在
    callback: () => {
      console.log("callback");
    },
  },
  {
    target: "#nav_github_logo", // 目标元素 可以不存在
    title: "x23xx", // 标题 必须存在
    desc: "xxx123123", // 描述 必须存在

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
          :target="item.target"
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