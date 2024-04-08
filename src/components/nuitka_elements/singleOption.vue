<script lang="js" setup>
/**
 * @Description 单选
 * @Author: erduotong
 * @Date: 2024-01-29 17:21:48
 */
import ElementCard from "@/components/untils/elementCard.vue";
import * as constants from "@/vals/constants.json";
import {user_options} from "@/vals/stores/user_options.js";
import {computed, defineModel, onBeforeUnmount, watch} from "vue";
import {use_command} from "@/modules/use_command.js";
import CliCommandCard from "@/components/command_cards/cliCommandCard.vue";
import {useI18n} from "vue-i18n";

/**
 * @type {ModelRef<{
 *  i18n: string,
 *  val:string,
 *  id:number,
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
 *    }
 *  }
 *  default:string,
 * }>}
 */
const model = defineModel();
const t = useI18n().t;
const output_desc = computed(() => {

  return `${t(`nuitka_info.${model.value.i18n}.desc`)}\n\n` +
      `${t(`nuitka_elements.option_desc`)}:\n\n` +
      `${model.value.elements[model.value.val].command.original}:  ` +
      `${t(`nuitka_info.${model.value.i18n}.elements.${model.value.val}.desc`)}`;

});
///////////////////////////
const is_equal = computed(() => model.value.val === model.value.default);
const result = computed(() => {
  return {
    cli: `${model.value.command.original}="${model.value.elements[model.value.val].command.original}"`,
    pyproject: null,
  };
});
watch(() => [result, is_equal], ([new_result, new_is_equal]) => {
  if (new_is_equal.value) {
    delete use_command.output.value[model.value.id];
    delete use_command.storage_config.value[model.value.command.original];
  } else {
    use_command.output.value[model.value.id] = new_result.value;
    use_command.storage_config.value[model.value.command.original] = model.value.val;
  }
}, {
  immediate: true,
  deep: true,
});
// 组件销毁则必须移除
onBeforeUnmount(() => {
  delete use_command.output.value[model.value.id];
});
///////////////////////////
//在禁用时，将值设置为默认值
watch(() => model.value.enabled, (new_enabled) => {
  if (!new_enabled) {
    model.value.val = model.value.default;
  }
});
//todo 可空考虑
</script>

<template>
  <el-tooltip :show-after=" constants.element_show_after_time" placement="top">

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

        <template v-for="(value,key) in model.elements" :key="key">

          <el-tooltip :show-after=" constants.element_show_after_time" placement="left-start">

            <template #content>
              <div class="use_original_text">
                {{
                  $t(`nuitka_info.${model.i18n}.elements.${model.elements[key].i18n}.desc`)
                }}
              </div>
            </template>
            <!--如果该选项可能为disabled,那么就需要一个监听函数。如果当前选择的情况正好还是disabled的，那么就切换一个选项。-->
            <el-option
                :key="key"
                :disabled="!value.enabled"
                :label="$t(`nuitka_info.${model.i18n}.elements.${model.elements[key].i18n}.name`) +
                  (user_options.show_original_command ? ` (${model.elements[key].command.original})` : '') "
                :value="key">

            </el-option>

          </el-tooltip>
        </template>

      </el-select>


    </element-card>
  </el-tooltip>

  <Teleport to="#cli_output">
    <cli-command-card
        :command="result.cli"
        :desc="output_desc"
        :name="t(`nuitka_info.${model.i18n}.name`)"
        :show="!is_equal"
    ></cli-command-card>
  </Teleport>
</template>

<style lang="scss" scoped>
.use_original_text {
  white-space: pre-wrap;
}


</style>