<script setup>
/**
 * @Description 可以让用户定义的单选
 * @Author: erduotong
 * @Date: 2024-02-25 19:34:22
 */
import * as constants from "@/vals/constants.json";
import ElementCard from "@/components/untils/elementCard.vue";
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
 *        enabled:boolean,
 *      }
 *    }
 *  }
 * }>}
 */
const model = defineModel();
</script>
<!--todo 完成多个可用控件-->
<template>
  <el-tooltip :show-after="constants.element_show_after_time" placement="top">
    <template #content>
      <div class="use_original_text">

      </div>
    </template>
    <element-card>

    </element-card>

  </el-tooltip>

</template>

<style lang="scss" scoped>
.use_original_text {
  white-space: pre-wrap;
}
</style>