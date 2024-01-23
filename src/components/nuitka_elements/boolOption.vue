<script setup>
import {user_options} from "@/vals/stores/user_options.js";

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
  <div class="edit_content_card">
    <el-tooltip show-after="400">
      <template #content>
        {{ $t(`nuitka_info.${content["show"]["i18n"]}.desc`) }}
      </template>
      <div class="edit_content_card_inside">
        <el-text size="large">{{ $t(`nuitka_info.${content["show"]["i18n"]}.name`) }}</el-text>

        <!--  original command-->
        <el-text size="large" v-if="user_options.show_original_command"> ({{ content["show"]["command"] }})</el-text>


        <el-switch v-model="content['val']"></el-switch>
      </div>


    </el-tooltip>


  </div>
</template>

<style lang="scss" scoped>
.edit_content_card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  border: 1px solid #3b3c3d;
  background-color: #1f1e33; //掺点怪东西
  border-radius: 6px;
  padding: 5px 10px;
  min-width: 60px;
  box-shadow: 0 0 10px #3b3c3d;
 transition: all 0.3s
 ;
  &:hover {
    box-shadow: 0 0 3px  #3b3c3d;

  }

  .edit_content_card_inside {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;


    > * {

      margin: 3px;
    }
  }


}
</style>