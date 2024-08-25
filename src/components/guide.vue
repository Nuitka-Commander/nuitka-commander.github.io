<script setup>


import {tour_status} from "@/values/stores/tour_status.js";
import {ElTour} from "element-plus";
import {ElTourStep} from "element-plus";
import {ref} from "vue";

/**
 * 引导功能
 * @author erduotong
 */
// 介绍的配置文件
const config = [
  {
    target: "#top_nav_bar_right", // 目标元素 可以不存在
    title: "x1xx", // 标题 必须存在
    desc: "xxx", // 描述 必须存在
  },
  {
    target: "#top_nav_bar_left", // 目标元素 可以不存在
    title: "x2xx", // 标题 必须存在
    desc: "xxx", // 描述 必须存在
  },
  {
    target: "#nav_github_logo", // 目标元素 可以不存在
    title: "x23xx", // 标题 必须存在
    desc: "xxx123123", // 描述 必须存在
  },
];
const current_step = ref(0);

const handle_prev = () => {

};
const handle_next = () => {

};
const handle_change = (step) => {
  current_step.value = step;

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
            onClick: handle_next,
        }"
          :prev-button-props="{
            children: '(to i18n) 上一步',
            onClick:handle_prev
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