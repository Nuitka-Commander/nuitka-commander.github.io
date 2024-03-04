<script setup>

</script>

<template>
  <div>
    <el-tabs stretch tab-position="left" type="card">
      <el-tab-pane>
        <template #label>CLI</template>
        <div id="cli_output"></div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>JSON CONFIG</template>
        <div id="json_output"></div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>pyproject</template>
        <div id="pyproject_output"></div>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<style lang="scss" scoped>
#cli_output {

  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  background: #1f1e33;
  gap: 20px;


}
</style>