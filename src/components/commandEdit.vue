<script lang="js" setup>
/**
 * @Description 编辑命令的页面
 * @Author: erduotong
 * @Date: 2024-01-12 23:10:07
 */
import {use_command} from "@/modules/use_command.js";
import {nuitka_element_type} from "@/values/enums.js";
import BoolOption from "@/components/nuitka_elements/boolOption.vue";
import SingleOption from "@/components/nuitka_elements/singleOption.vue";
import DefinedMultipleOption from "@/components/nuitka_elements/definedMultipleOption.vue";
import DefinableSingleOption from "@/components/nuitka_elements/definableSingleOption.vue";
import DefinableMultipleOption from "@/components/nuitka_elements/definableMultipleOption.vue";
import {user_options} from "@/values/stores/user_options.js";
import {watch} from "vue";

const command = use_command;
watch(() => command.status.value, (new_status) => {
  const keys = Object.keys(new_status);
  if (keys.length < 1) {
    return;
  }
  if (!keys.includes(user_options.value.action_command_tab)) {
    user_options.value.action_command_tab = keys[0];
  }
}, {
  immediate: true,
});
</script>

<template>
  <div>

    <el-tabs v-model="user_options.action_command_tab" stretch tab-position="left" type="card">

      <template v-for="(value1,key1) in command.status.value" :key="key1">
        <!--做出分页-->
        <el-tab-pane :name="key1">
          <template #label>
            <el-text>
              {{ $t(`nuitka_info.title.${key1}`) }}
            </el-text>
          </template>
          <template #default>

            <div class="edit_content_area">
              <!--内容实际所在地-->
              <!--允许未使用变量用于v-for占位-->

              <div>
                <!--Bool-->
                <!--suppress JSUnusedLocalSymbols -->
                <template v-for="(_,key2) in value1[nuitka_element_type.Bool]" :key="key2">
                  <bool-option v-model="value1[nuitka_element_type.Bool][key2]" :key_name="key2"></bool-option>
                </template>
              </div>
              <div>
                <!--单选-->
                <!--suppress JSUnusedLocalSymbols -->
                <template v-for="(_,key2) in value1[nuitka_element_type.Single_option]" :key="key2">
                  <single-option v-model="value1[nuitka_element_type.Single_option][key2]"
                                 :key_name="key2"></single-option>
                </template>
              </div>
              <div>
                <!--已定义多选-->
                <!--suppress JSUnusedLocalSymbols -->
                <template v-for="(_,key2) in value1[nuitka_element_type.Defined_multiple]" :key="key2">
                  <defined-multiple-option
                      v-model="value1[nuitka_element_type.Defined_multiple][key2]"
                      :key_name="key2"></defined-multiple-option>
                </template>
              </div>
              <div>
                <!--可定义的单选-->
                <!--suppress JSUnusedLocalSymbols -->
                <template v-for="(_,key2) in value1[nuitka_element_type.Definable_single]" :key="key2">
                  <definable-single-option v-model="value1[nuitka_element_type.Definable_single][key2]"
                                           :key_name="key2"></definable-single-option>
                </template>
              </div>
              <div>
                <!--可定义的多选-->
                <!--suppress JSUnusedLocalSymbols -->
                <template v-for="(_,key2) in value1[nuitka_element_type.Definable_multiple_option]" :key="key2">
                  <definable-multiple-option v-model="value1[nuitka_element_type.Definable_multiple_option][key2]"
                                             :key_name="key2"></definable-multiple-option>
                </template>
              </div>
            </div>


          </template>
        </el-tab-pane>
      </template>

    </el-tabs>

  </div>
</template>

<style lang="scss" scoped>
.edit_content_area {
  display: flex;
  align-items: start;

  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin-left: 10px;


  div {

    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 10px;

  }

}

//对左侧的tab做点样式调整
:deep(.el-tabs__nav.is-left) {
  overflow-y: auto;
  max-height: 80vh;

  .el-tabs__item.is-left {
    min-height: 40px;
    padding-right: 2em;
  }

}
</style>