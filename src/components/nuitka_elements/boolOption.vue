<script setup>
import {user_options} from "@/vals/stores/user_options.js";
import ElementCard from "@/components/untils/elementCard.vue";
import * as constants from "@/vals/constants.json";

/**
 * @Description bool选项
 * @Author: erduotong
 * @Date: 2023-12-08 22:16:35
 */
//传入的props
const props = defineProps({
  content: Object,

});
const content = props.content;

const show_after = constants.element_show_after_time;
</script>

<template>

  <el-tooltip :show-after="show_after" placement="top">
    <template #content>
      <div class="use_original_text">
        {{ $t(`nuitka_info.${content["show"]["i18n"]}.desc`) }}
      </div>

    </template>
    <element-card>
      <el-text size="large">{{ $t(`nuitka_info.${content["show"]["i18n"]}.name`) }}</el-text>

      <!--  original command-->
      <el-text size="large" v-if="user_options.show_original_command"> ({{ content["show"]["command"] }})</el-text>


      <el-switch v-model="content['val']" :disabled="!content['enabled']"></el-switch>
    </element-card>
  </el-tooltip>


</template>

<style lang="scss" scoped>
.use_original_text{
  white-space: pre-wrap;
}

</style>