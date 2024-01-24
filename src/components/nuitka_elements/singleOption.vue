<script setup>
import ElementCard from "@/components/elementCard.vue";
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
      {{ $t(`nuitka_info.${content["show"]["i18n"]}.desc`) }}
    </template>
    <element-card>

    </element-card>
  </el-tooltip>
</template>

<style lang="scss" scoped>

</style>