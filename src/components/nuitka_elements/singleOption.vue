<script setup lang="js">
/**
 * @Description 单选
 * @Author: erduotong
 * @Date: 2024-01-29 17:21:48
 */
import ElementCard from "@/components/untils/elementCard.vue";
import * as constants from "@/vals/constants.json";
import {user_options} from "@/vals/stores/user_options.js";

/**
 * @type {ModelRef<{
 *  i18n: string,
 *  val:string,
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
 * }>}
 */
const model = defineModel();

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
</template>

<style lang="scss" scoped>
.use_original_text {
  white-space: pre-wrap;
}


</style>