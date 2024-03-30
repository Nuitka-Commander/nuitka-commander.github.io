<script setup lang="js">
/**
 * @Description 多选组件
 * @Author: erduotong
 * @Date: 2024-02-18 18:56:41
 */
import ElementCard from "@/components/untils/elementCard.vue";
import * as constants from "@/vals/constants.json";
import {user_options} from "@/vals/stores/user_options.js";

/**
 *
 * @type {ModelRef<{
 *  component: string,
 *  i18n: string,
 *  default: string,
 *  id: number,
 *  command: {
 *    original: string,
 *  }
 *  elements: {
 *    [key:string]: {
 *      i18n: string,
 *      command: {
 *        original: string,
 *      }
 *      enabled: boolean,
 *    }
 *  }
 *  val: string[],
 *  enabled: boolean,
 *  default: string[],
 *
 * }>}
 */
const model = defineModel();


</script>

<template>

  <el-tooltip :show-after=" constants.element_show_after_time">
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
          v-model="model.val"
          filterable
      >
        <template v-for="(value,key) in model.elements" :key="key">
          <el-tooltip :show-after=" constants.element_show_after_time" placement="left-start">
            <template #content>
              <div class="use_original_text">
                {{
                  $t(`nuitka_info.${model.i18n}.elements.${value.i18n}.desc`)
                }}
              </div>
            </template>
            <!--todo 快捷全选(all_)-->
            <el-option
                :key="key"
                :disabled="!model.enabled"
                :label="$t(`nuitka_info.${model.i18n}.elements.${value.i18n}.name`) +
                  (user_options.show_original_command ? ` (${value.command.original})` : '') "
                :value="key"
            >

            </el-option>
          </el-tooltip>
        </template>

      </el-select>


    </element-card>
  </el-tooltip>

</template>

<style lang="scss" scoped>
.use_original_text {
  white-space: pre-wrap;
}
</style>