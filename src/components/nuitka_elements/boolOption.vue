<script setup>
import {user_options} from "@/vals/stores/user_options.js";
import ElementCard from "@/components/untils/elementCard.vue";
import * as constants from "@/vals/constants.json";

/**
 * @Description bool选项
 * @Author: erduotong
 * @Date: 2023-12-08 22:16:35
 */
/**
 * 传入的ModelRef
 * @type {ModelRef<
 * {
 *    val:boolean,
 *    enabled: boolean,
 *    i18n: string,
 *    command: {
 *      original: string,
 *    }
 *
 *
 * }>}
 */
const model = defineModel();
</script>

<template>

  <el-tooltip :show-after="constants.element_show_after_time" placement="top">
    <template #content>
      <div class="use_original_text">
        {{ $t(`nuitka_info.${model.i18n}.desc`) }}
      </div>
    </template>

    <element-card>
      <el-text size="large">{{ $t(`nuitka_info.${model.i18n}.name`) }}</el-text>
      <!--  original command-->
      <el-text v-if="user_options.show_original_command" size="large"> ({{ model.command.original }})</el-text>
      <el-switch v-model="model.val" :disabled="!model.enabled"></el-switch>
    </element-card>
  </el-tooltip>

</template>

<style lang="scss" scoped>
.use_original_text {
  white-space: pre-wrap;
}

</style>