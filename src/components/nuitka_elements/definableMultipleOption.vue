<script setup>
/**
 * @Description 可以让用户定义的多选
 * @Author: erduotong
 * @Date: 2024-02-29 19:58:39
 */
import * as constants from "@/vals/constants.json";
import {user_options} from "@/vals/stores/user_options.js";
import ElementCard from "@/components/untils/elementCard.vue";

/**
 * @type {ModelRef<{
 *  i18n: string,
 *  val: string[],
 *  command: {
 *    original:string,
 *  }
 *  enabled: boolean,
 *  elements: {
 *    [key: string]: {
 *      i18n: string, // 如果是用户定义的，那么该属性不存在
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
      <el-select
          multiple
          collapse-tags
          collapse-tags-tooltip
          :max-collapse-tags="constants.nuitka_multi_option.max_collapse_tags"
          :placeholder="$t('nuitka_elements.select_placeholder')"
          filterable
          v-model="model.val"
      >

      </el-select>
    </element-card>
  </el-tooltip>
</template>

<style lang="scss" scoped>

</style>