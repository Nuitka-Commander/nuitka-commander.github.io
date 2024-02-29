<script setup>
import {user_options} from "@/vals/stores/user_options.js";

const props = defineProps({
  i18n: {
    type: String,
    required: true,
  },
  command: {
    type: String,
    required: true,
  },

});
</script>

<template>
  <!--<el-tooltip :show-after="constants.element_show_after_time" placement="left-start">-->
  <!--  <template #content>-->
  <!--<div class="use_original_text">-->
  <!--  {{-->
  <!--    $t(`${props.i18n}.desc`)-->
  <!--  }}-->
  <!--</div>-->
  <!--</template>-->
  {{
    $t(`${props.i18n}.name`)
  }}
  <span v-if="user_options.value.show_original_command === true">
     {{ props.command }}
   </span>
  <!--</el-tooltip>-->
</template>

<style scoped lang="scss">
.use_original_text {
  white-space: pre-wrap;
}
</style>