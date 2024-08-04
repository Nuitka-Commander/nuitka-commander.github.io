<script setup>
/**
 * @Description bool选项
 * @Author: erduotong
 * @Date: 2023-12-08 22:16:35
 */
import {user_options} from "@/values/stores/user_options.js";
import ElementCard from "@/components/untils/elementCard.vue";
import * as constants from "@/values/constants.json";
import CliCommandCard from "@/components/command_cards/cliCommandCard.vue";
import {useI18n} from "vue-i18n";
import {computed, defineModel, onBeforeUnmount, watch} from "vue";
import {use_command} from "@/modules/use_command.js";

/**
 * 传入的ModelRef
 * @type {ModelRef<
 * {
 *    val:boolean,
 *    default: boolean
 *    enabled: boolean,
 *    i18n: string,
 *    command: {
 *      original: string,
 *    },
 *    id: number,
 * }>}
 */
const model = defineModel();
/**
 * 额外的一些信息
 */
const props = defineProps({
  key_name: { //key_name因为javascript本身的限制，所以保证不会重复
    type: String,
    required: true,
  },
});
const t = useI18n().t;
///////////////////////////
const is_equal = computed(() => model.value.val === model.value.default);
const result = computed(() => {
  return {
    cli: model.value.command.original,
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

  <Teleport to="#cli_output">
    <cli-command-card
        :command="result.cli"
        :desc="t(`nuitka_info.${model.i18n}.desc`)"
        :name="t(`nuitka_info.${model.i18n}.name`)"
        :show="!is_equal"
    ></cli-command-card>
  </Teleport>

</template>

<style lang="scss" scoped>

</style>