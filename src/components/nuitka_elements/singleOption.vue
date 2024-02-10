<script setup>
/**
 * @Description 单选
 * @Author: erduotong
 * @Date: 2024-01-29 17:21:48
 */
import ElementCard from "@/components/untils/elementCard.vue";
import * as constants from "@/vals/constants.json";
import {user_options} from "@/vals/stores/user_options.js";

const props = defineProps({
  content: Object,

});
const content = props.content;
//鼠标需要在tooltip上停留的时间
const show_after = constants.element_show_after_time;
</script>

<template>
  <el-tooltip :show-after="show_after" placement="top">

    <template #content>
      <div class="use_original_text">
        {{ $t(`nuitka_info.${content["show"]["i18n"]}.desc`) }}
      </div>
    </template>

    <element-card>
      <div class="single_option_card">
        <div>
          <el-text size="large">{{ $t(`nuitka_info.${content["show"]["i18n"]}.name`) }}</el-text>
          <el-text size="large" v-if="user_options.show_original_command"> ({{ content["show"]["command"] }})</el-text>
        </div>

        <el-select v-model="content['val']" filterable :disabled="!content['enabled']">

          <template v-for="(value,key) in content['elements']" :key="key">

            <el-tooltip placement="left-start" :show-after="show_after">

              <template #content>
                <div class="use_original_text">
                  {{
                    $t(`nuitka_info.${content["show"]["i18n"]}.elements.${content["elements"][key]["show"]["i18n"]}.desc`)
                  }}
                </div>
              </template>
              <!--如果该选项可能为disabled,那么就需要一个监听函数。如果当前选择的情况正好还是disabled的，那么就切换一个选项。-->
              <el-option
                  :key="key"
                  :label="$t(`nuitka_info.${content['show']['i18n']}.elements.${content['elements'][key]['show']['i18n']}.name`)"
                  :value="value['show']['command']"
                  :disabled="!value['enabled']">
              </el-option>

            </el-tooltip>
          </template>

        </el-select>
      </div>


    </element-card>
  </el-tooltip>
</template>

<style lang="scss" scoped>
.use_original_text {
  white-space: pre-wrap;
}

.single_option_card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-width: 100px;
  margin: 5px 5px;
}
</style>