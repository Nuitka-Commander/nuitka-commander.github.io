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
const config = [
  {
    // target: "", 目标元素 可以不存在
    title: "使用教程", // 标题 必须存在
    desc: "欢迎使用Nuitka Commander，接下来，请点击右下角，让我们一步步学习如何使用", // 描述 必须存在
    //     no_mask: true, // 是否不使用遮罩层
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
  { //至少留一个页面缓冲
    title: "编辑页面",
    desc: "接下来，是编辑页面",
    callback: () => {
      user_options.value.settings_page_show = true;
    },
  },
  {
    target: "#command-edit-main-area",
    title: "编辑页面——介绍",
    desc: "这里是编辑页面，你可以在这里配置你的nuitka命令。你可以点击左侧来切换命令的分类，在中间进行命令的编辑",
    callback: () => {
      user_options.value.action_tab = "edit";
      user_options.value.settings_page_show = false;
    },
    no_mask: true,
  },
  {
    title: "编辑页面——编辑框",
    desc: "这里面具有很多编辑框，每个都代表了一个参数。若是让鼠标悬停在上面，会有详细的介绍。不妨现在试试",
    no_mask: true,
    callback: () => {
      user_options.value.action_tab = "edit";
      user_options.value.settings_page_show = false;
    },
  },
  {
    title: "输出页面——介绍",
    desc: "这里是输出页面，你可以在这里获得你刚刚编辑的命令的输出成果。你可以点击左侧来切换输出的种类，中间查看输出的命令。点击右上角可直接复制命令。当然，你也可以将鼠标悬停在每个元素上面，查看详细的介绍。",
    callback: () => {
      user_options.value.settings_page_show = false;
      user_options.value.action_tab = "output";
    },
    no_mask: true,
  },
  {
    title: "输入页面——介绍",
    desc: "这里是输入页面，你可以在这里输入命令，然后将其导入到nuitka commander中进行编辑。你可以点击左侧切换输入的种类，右上角开始导入。",
    callback: () => {
      user_options.value.settings_page_show = false;
      user_options.value.action_tab = "input";
    },
    no_mask: true,
  },
  {
    target: "#website-footer-area",
    title: "网页底部",
    desc: "这里是网页底部，你可以在这里找到一些有用的链接，例如Nuitka官网和项目主页。同时，也能找到项目的版本号，作者等信息",
  },
  {
    title: "结束",
    desc: "教程就到这里结束了，感谢你的使用。若是有任何问题或者建议，欢迎在github上提出Issue",
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