<script setup>
import ElementCard from "@/components/untils/elementCard.vue";
import * as constants from "@/vals/constants.json";
import {user_options} from "@/vals/stores/user_options.js";
import {nuitka_element_status} from "@/vals/enums.js";

const props = defineProps({
  content: Object,
});
const content = props.content;
//鼠标需要在tooltip上停留的时间
const show_after = constants.element_show_after_time;
/**
 * 使用的控件类型判断
 * @type {ComputedRef<boolean>}
 */
const is_use_select = computed(() => {
  if (content["component"] === nuitka_element_status.use_select) {
    return true;
  }
  if (content["component"] === nuitka_element_status.use_transfer) {
    return false;
  }
  //default 小于最小值时使用select 否则使用transfer
  return content["elements"].length < constants.nuitka_multi_option.min_use_transfer_need;
});
</script>

<template>
  <el-tooltip :show-after="show_after">
    <template #content>
      <div class="use_original_text">
        {{ $t(`nuitka_info.${content["show"]["i18n"]}.desc`) }}
      </div>
    </template>
    <element-card>
      <div>
        <el-text size="large">{{ $t(`nuitka_info.${content["show"]["i18n"]}.name`) }}</el-text>
        <el-text v-if="user_options.show_original_command" size="large"> ({{ content["show"]["command"] }})</el-text>
      </div>
      <template v-if="is_use_select===true">

      </template>

    </element-card>
  </el-tooltip>
</template>

<style lang="scss" scoped>
.use_original_text {
  white-space: pre-wrap;
}
</style>