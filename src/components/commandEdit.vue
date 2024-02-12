<script setup>
/**
 * @Description 编辑命令的页面
 * @Author: erduotong
 * @Date: 2024-01-12 23:10:07
 */
import {use_command} from "@/modules/use_command.js";
import {nuitka_element_type} from "@/vals/enums.js";
import BoolOption from "@/components/nuitka_elements/boolOption.vue";
import SingleOption from "@/components/nuitka_elements/singleOption.vue";

const command = use_command;

</script>

<template>
  <div>

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
                  <bool-option :content="value1[key2]"></bool-option>
                </template>
              </div>
              <div>
                <!--单选-->
                <!--suppress JSUnusedLocalSymbols -->
                <template v-for="(_,key2) in value1[nuitka_element_type.Single_option]" :key="key2">
                  <single-option :content="value1[key2]"></single-option>
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
  width: 100%;
  display: flex;

  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
  margin-left: 10px;


  div {

    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;

  }

}
</style>