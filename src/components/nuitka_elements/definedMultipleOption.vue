<script lang="js" setup>
/**
 * @Description 多选组件
 * @Author: erduotong
 * @Date: 2024-02-18 18:56:41
 */
import ElementCard from "@/components/untils/elementCard.vue";
import * as constants from "@/vals/constants.json";
import {user_options} from "@/vals/stores/user_options.js";
import {is_array_equivalent} from "@/modules/untils.js";
import {use_command} from "@/modules/use_command.js";
import {computed, onBeforeUnmount, watch} from "vue";
import CliCommandCard from "@/components/command_cards/cliCommandCard.vue";
import {useI18n} from "vue-i18n";

/**
 *
 * @type {ModelRef<{
 *  component: string,
 *  i18n: string,
 *  default: string[],
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
/**
 * 额外的一些信息
 */
const props = defineProps({
  key_name: {
    type: String,
    required: true,
  },
});
const t = useI18n().t;
const output_desc = computed(() => {

  let result = `${t(`nuitka_info.${model.value.i18n}.desc`)}\n\n` +
      `${t(`nuitka_elements.option_desc`)}:\n\n`;
  model.value.val.forEach((item) => {
    result += `${model.value.elements[item].command.original}:  `;
    result += `${t(`nuitka_info.${model.value.i18n}.elements.${item}.desc`)}`;
    result += "\n";
  });

  return result;

});
///////////////////////////
const is_equal = computed(() => is_array_equivalent(model.value.val, model.value.default));
const result = computed(() => {
  //cli输出
  let cli = `${model.value.command.original}=`;
  model.value.val.forEach((item, index) => {
    cli += `"${model.value.elements[item].command.original}"`;
    if (index !== model.value.val.length - 1) {
      cli += ",";
    }
  });
  //
  return {
    cli,
    pyproject: null,
  };
});
watch(() => [result, is_equal], ([new_result, new_is_equal]) => {
  if (new_is_equal.value) {
    delete use_command.output.value[props.key_name];
    delete use_command.storage_config.value[props.key_name];
  } else {
    use_command.output.value[props.key_name] = new_result.value;
    use_command.storage_config.value[props.key_name] = model.value.val;
  }
}, {
  immediate: true,
  deep: true,
});
// 组件销毁则必须移除
onBeforeUnmount(() => {
  delete use_command.output.value[props.key_name];
});
///////////////////////////
//在禁用时，将值设置为默认值
watch(() => model.value.enabled, (new_enabled) => {
  if (!new_enabled) {
    model.value.val = model.value.default;
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


      <el-select
          v-model="model.val"
          :max-collapse-tags="constants.nuitka_multi_option.max_collapse_tags"
          :placeholder="$t('nuitka_elements.select_placeholder')"
          collapse-tags
          collapse-tags-tooltip
          filterable
          multiple
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