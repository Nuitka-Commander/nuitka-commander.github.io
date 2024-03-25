<script setup>
import {user_options} from "@/vals/stores/user_options.js";
import ElementCard from "@/components/untils/elementCard.vue";
import * as constants from "@/vals/constants.json";
import CliCommandCard from "@/components/command_cards/cliCommandCard.vue";
import {useI18n} from "vue-i18n";
import {computed, defineModel, onBeforeUnmount, watch} from "vue";
import {use_command} from "@/modules/use_command.js";
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
const t = useI18n().t;
///////////////////////////
const is_equal = computed(() => model.value.val === model.value.default);
const result = computed(() => {
  return {
    cli: model.value.command.original,
    json: null,
    pyproject: null,
  };
});
watch(() => [result, is_equal], ([new_result, new_is_equal]) => {
  if (new_is_equal.value) {
    delete use_command.output.value[model.value.id];
  } else {
    use_command.output.value[model.value.id] = new_result.value;
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
    <cli-command-card :command="model.command.original" :desc="t(`nuitka_info.${model.i18n}.desc`)"></cli-command-card>
  </Teleport>

</template>

<style lang="scss" scoped>
.use_original_text {
  white-space: pre-wrap;
}

</style>