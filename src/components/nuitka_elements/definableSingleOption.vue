<script setup>
/**
 * @Description 可以让用户定义的单选
 * @Author: erduotong
 * @Date: 2024-02-25 19:34:22
 */
import * as constants from "@/vals/constants.json";
import ElementCard from "@/components/untils/elementCard.vue";
import {user_options} from "@/vals/stores/user_options.js";

/**
 * @type {ModelRef<{
 *  i18n: string,
 *  val:string,
 *  command: {
 *    original:string,
 *  }
 *  enabled: boolean,
 *  elements: {
 *    [key: string]: {
 *      i18n: string,
 *      command:{
 *        original:string,
 *      }
 *      enabled:boolean,
 *      user_provide: boolean,
 *    }
 *  }
 * }>}
 */
const model = defineModel();
</script>
<!--todo 完成多个可用控件-->
<template>
  <el-tooltip :show-after="constants.element_show_after_time" placement="top">
    <template #content>
      <div class="use_original_text">
        {{ $t(`nuitka_info.${model.i18n}.desc`) }}
      </div>
    </template>
    <element-card>
      <div>
        <el-text size="large">{{ $t(`nuitka_info.${model.i18n}.name`) }}</el-text>
        <el-text v-if="user_options.show_original_command" size="large"> ({{ model.command.original }})</el-text>
      </div>
      <el-select v-model="model.val" :disabled="!model.enabled" filterable>

      </el-select>
    </element-card>

  </el-tooltip>

</template>

<style lang="scss" scoped>
.use_original_text {
  white-space: pre-wrap;
}
</style>