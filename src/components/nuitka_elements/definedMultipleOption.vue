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
import TransferRender from "@/components/nuitka_elements/package/transferRender.vue";
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
  ) {
    return model.value.component;
  }
  const elements_length = Object.keys(model.value.elements).length;

  if (elements_length < constants.nuitka_multi_option.min_use_transfer) {
    return nuitka_element_status.use_select;
  } else {
    return nuitka_element_status.use_transfer;
  }
});
/**
 * 生成穿梭框所需的渲染数据
 * @type {ComputedRef<*[]>}
 * @return {Object[]}
 */
const transfer_data = computed(() => {
  const data = [];
  Object.keys(model.value.elements).forEach((key) => {
    data.push({
      key: key,//无需label因为设置了渲染函数
      // i18n: model.value.elements[key].i18n,
      i18n: `nuitka_info.${model.value.i18n}.elements.${model.value.elements[key].i18n}`,
      command: model.value.elements[key].command.original,
      disabled: !model.value.elements[key].enabled,
    });
  });
  return data;
});
/**
 * 翻译函数
 */

/**
 * transfer内的渲染函数
 * @param h 用于创建虚拟节点
 * @param option el-transfer的配置项
 */
const render_function = (h, option) => {
  return h(
      "transfer-render",
      {
        props: {
          i18n: option.i18n,
          command: option.command,

        },
      },
  );
};
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
      <template v-else-if="chose_element === nuitka_element_status.use_transfer">
        <!--穿梭框实现-->
        <el-transfer
            filterable
            v-model="model.val"
            :titles="[$t('nuitka_elements.not_selected'), $t('nuitka_elements.selected')]"
            :data="transfer_data"
            :render-content="render_function"
        >

        </el-transfer>
      </template>


    </element-card>
  </el-tooltip>

</template>

<style lang="scss" scoped>
.use_original_text {
  white-space: pre-wrap;
}
</style>