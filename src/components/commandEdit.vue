<script setup>
/**
 * @Description 编辑命令的页面
 * @Author: erduotong
 * @Date: 2024-01-12 23:10:07
 */
import {use_command} from "@/modules/use_command.js";
import {nuitka_element_type} from "@/vals/enums.js";
import BoolOption from "@/components/nuitka_elements/boolOption.vue";

const command = use_command;

</script>

<template>
  <div>

    <el-tabs stretch tab-position="left" type="card">
      <template v-for="(value1,key1) in command.status.value">
        <!--做出分页-->
        <el-tab-pane>
          <template #label>
            {{ key1 }}
            <!--  todo 翻译如何解决-->
          </template>
          <template #default>

            <template v-for="value2 in value1[nuitka_element_type.Bool]">
              <bool-option :content="value2"></bool-option>
            </template>
          </template>
        </el-tab-pane>
      </template>

    </el-tabs>

  </div>
</template>

<style scoped lang="scss">

</style>