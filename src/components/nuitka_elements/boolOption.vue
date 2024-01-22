<script setup>
/**
 * @Description bool选项
 * @Author: erduotong
 * @Date: 2023-12-08 22:16:35
 */
//传入的props
const props = defineProps({
  content:Object

});
//将content解包

</script>

<template>
  <div>
    <el-tooltip>
      <template #content> {{ content["show"]["desc_i18n"] }}</template>
      <el-card>
        {{ $t(`nuitka_info.${content["show"]["command_i18n"]}`) }}
        <el-switch v-model="content['val']"></el-switch>
      </el-card>


    </el-tooltip>


  </div>
</template>

<style lang="scss" scoped>

</style>