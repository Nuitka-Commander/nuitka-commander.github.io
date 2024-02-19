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
import {computed} from "vue";

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
 * 判断使用的控件
 * @type {ComputedRef<string>}
 */
const chose_element = computed(() => {
  if (model.value.component === nuitka_element_status.use_select
      || model.value.component === nuitka_element_status.use_transfer
      || model.value.component === nuitka_element_status.use_checkbox
  ) {
    return model.value.component;
  }
  const elements_length = Object.keys(model.value.elements).length;
  const {
    start,
    end,
  } = constants.nuitka_multi_option.use_checkbox_interval;
  if (elements_length < start) {
    return nuitka_element_status.use_select;
  } else if (elements_length > end) {
    return nuitka_element_status.use_transfer;
  } else {
    return nuitka_element_status.use_checkbox;
  }
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

      <template v-if="chose_element === nuitka_element_status.use_select">
        <!--select实现-->

        <el-select
            multiple
            collapse-tags
            collapse-tags-tooltip
            :max-collapse-tags="constants.nuitka_multi_option.max_collapse_tags"
            :placeholder="$t('nuitka_elements.select_placeholder')"
            v-model="model.val"
            filterable
        >
          <template v-for="(value,key) in model.elements">
            <el-tooltip :show-after=" constants.element_show_after_time" placement="left-start">
              <template #content>
                <div class="use_original_text">
                  {{
                    $t(`nuitka_info.${model.i18n}.elements.${value.i18n}.desc`)
                  }}
                </div>
              </template>
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
      </template>
      <template v-else-if="chose_element===nuitka_element_status.use_checkbox">
        <!--多选框实现-->
        <!--todo-->
      </template>
      <template v-else-if="chose_element === nuitka_element_status.use_transfer">
        <!--穿梭框实现-->
        <!--todo-->
      </template>


    </element-card>
  </el-tooltip>
</template>

<style lang="scss" scoped>
.use_original_text {
  white-space: pre-wrap;
}
</style>