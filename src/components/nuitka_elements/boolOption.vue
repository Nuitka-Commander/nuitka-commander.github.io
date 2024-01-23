<script setup>
import {user_options} from "@/vals/stores/user_options.js";
import ElementCard from "@/components/elementCard.vue";

/**
 * @Description bool选项
 * @Author: erduotong
 * @Date: 2023-12-08 22:16:35
 */
//传入的props
const props = defineProps({
  content: Object,

});
const content = props.content;


</script>

<template>

    <el-tooltip show-after="400">
      <template #content>
        {{ $t(`nuitka_info.${content["show"]["i18n"]}.desc`) }}
      </template>
      <element-card>
        <el-text size="large">{{ $t(`nuitka_info.${content["show"]["i18n"]}.name`) }}</el-text>

        <!--  original command-->
        <el-text size="large" v-if="user_options.show_original_command"> ({{ content["show"]["command"] }})</el-text>


        <el-switch v-model="content['val']"></el-switch>
      </element-card>
    </el-tooltip>



</template>

<style lang="scss" scoped>


</style>