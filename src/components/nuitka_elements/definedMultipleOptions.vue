<script setup>
import {user_options} from "@/vals/stores/user_options.js";
import ElementCard from "@/components/untils/elementCard.vue";
import * as constants from "@/vals/constants.json";

const props = defineProps({
  content: Object,
});
const content = props.content;
const show_after = constants.element_show_after_time;
</script>

<template>
  <el-tooltip :show-after="show_after">

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

        <el-select
            v-model="content['val']">
          <el-option
              v-for="(value,key) in content['elements']"
              :key="key+value"
              :label="$t(`nuitka_info.${content['show']['i18n']}.elements.${content['elements'][key]['show']['i18n']}`)"
              :value="content['elements'][key]['show']['command']">
          </el-option>
        </el-select>
      </div>


    </element-card>
  </el-tooltip>
</template>

<style lang="scss" scoped>

</style>