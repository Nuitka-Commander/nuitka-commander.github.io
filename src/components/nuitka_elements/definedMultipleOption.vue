<script setup>
/**
 * @Description 多选组件
 * @Author: erduotong
 * @Date: 2024-02-18 18:56:41
 */
import ElementCard from "@/components/untils/elementCard.vue";
import * as constants from "@/vals/constants.json";
import {user_options} from "@/vals/stores/user_options.js";
import {nuitka_element_status} from "@/vals/enums.js";

/**
 *
 * @type {ModelRef<{
 *  component: string,
 *  i18n: string,
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

/**
 * 使用的控件类型判断
 * @type {ComputedRef<boolean>}
 */
const is_use_select = computed(() => {
  if (model.value.component === nuitka_element_status.use_select) {
    return true;
  }
  if (model.value.component === nuitka_element_status.use_transfer) {
    return false;
  }
  //default 小于最小值时使用select 否则使用transfer
  return model.value.elements.length < constants.nuitka_multi_option.min_use_transfer_need;
});
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

      <template v-if="is_use_select===true">
        <!--select实现-->

        <el-select
            multiple
            collapse-tags
            collapse-tags-tooltip
            :max-collapse-tags="constants.nuitka_multi_option.max_collapse_tags"
            v-model="model.val"
        >
          <template v-for="(value,key) in model.elements">
            <el-tooltip :show-after=" constants.element_show_after_time" placement="left-start">
              <template #content>
                <div class="use_original_text">
                  {{
                    $t(`nuitka_info.${model.i18n}.elements.${model.elements[key].i18n}.desc`)
                  }}
                </div>
              </template>
              <el-option
                  :key="key"
                  :disabled="!model.enabled"
                  :label="$t(`nuitka_info.${model.i18n}.elements.${model.elements[key].i18n}.name`) +
                  (user_options.show_original_command ? ` (${model.elements[key].command.original})` : '') "
                  :value="key"
              >

              </el-option>
            </el-tooltip>
          </template>

        </el-select>
      </template>
      <template v-else>
        <!--穿梭框实现-->

      </template>

    </element-card>
  </el-tooltip>
</template>

<style lang="scss" scoped>
.use_original_text {
  white-space: pre-wrap;
}
</style>