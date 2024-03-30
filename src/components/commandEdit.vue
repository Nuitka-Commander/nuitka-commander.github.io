<script lang="js" setup>
/**
 * @Description 编辑命令的页面
 * @Author: erduotong
 * @Date: 2024-01-12 23:10:07
 */
import {use_command} from "@/modules/use_command.js";
import {nuitka_element_type} from "@/vals/enums.js";
import BoolOption from "@/components/nuitka_elements/boolOption.vue";
import SingleOption from "@/components/nuitka_elements/singleOption.vue";
import DefinedMultipleOption from "@/components/nuitka_elements/definedMultipleOption.vue";
import DefinableSingleOption from "@/components/nuitka_elements/definableSingleOption.vue";
import DefinableMultipleOption from "@/components/nuitka_elements/definableMultipleOption.vue";

const command = use_command;

</script>

<template>
  <div>
    <el-button @click="console.log(use_command.output.value)">debug</el-button>
    <el-tabs stretch tab-position="left" type="card">

      <template v-for="(value1,key1) in command.status.value" :key="key1">
        <!--做出分页-->
        <el-tab-pane>
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
                  <bool-option v-model="value1[nuitka_element_type.Bool][key2]"></bool-option>
                </template>
              </div>
              <div>
                <!--单选-->
                <!--suppress JSUnusedLocalSymbols -->
                <template v-for="(_,key2) in value1[nuitka_element_type.Single_option]" :key="key2">
                  <single-option v-model="value1[nuitka_element_type.Single_option][key2]"></single-option>
                </template>
              </div>
              <div>
                <!--已定义多选-->
                <!--suppress JSUnusedLocalSymbols -->
                <template v-for="(_,key2) in value1[nuitka_element_type.Defined_multiple]" :key="key2">
                  <defined-multiple-option
                      v-model="value1[nuitka_element_type.Defined_multiple][key2]"></defined-multiple-option>
                </template>
              </div>
              <div>
                <!--可定义的单选-->
                <!--suppress JSUnusedLocalSymbols -->
                <template v-for="(_,key2) in value1[nuitka_element_type.Definable_single]" :key="key2">
                  <definable-single-option
                      v-model="value1[nuitka_element_type.Definable_single][key2]"></definable-single-option>
                </template>
              </div>
              <div>
                <!--可定义的多选-->
                <!--suppress JSUnusedLocalSymbols -->
                <template v-for="(_,key2) in value1[nuitka_element_type.Definable_multiple_option]" :key="key2">
                  <definable-multiple-option
                      v-model="value1[nuitka_element_type.Definable_multiple_option][key2]"></definable-multiple-option>
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
</style>