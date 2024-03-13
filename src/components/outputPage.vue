<script setup>
import {CopyDocument} from "@element-plus/icons-vue";

/**
 * 复制所选内容到剪贴板
 * @param content
 * @return {Promise<void>}
 */
const on_copy = async (content) => {
  try {
    await navigator.clipboard.writeText(content);
    console.log("copied");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }

};
</script>

<template>
  <div>
    <el-tabs stretch tab-position="left" type="card">
      <el-tab-pane>
        <template #label>CLI</template>
        <div id="cli_output_area">
          <!--todo 完成复制模块-->
          <span class="copy_button">
            <el-button round>
               <el-icon><CopyDocument /></el-icon>
            </el-button>
          </span>
          <div id="cli_output"></div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>JSON CONFIG</template>
        <div id="json_output_area">
            <span class="copy_button">
            <el-button round>
               <el-icon><CopyDocument /></el-icon>
            </el-button>
          </span>

        </div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>pyproject</template>
        <div id="pyproject_output"></div>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<style lang="scss" scoped>
.copy_button {
  position: absolute;
  top: 15px;
  right: 15px;
}

#cli_output_area {

  margin: 10px 5px;
  border-radius: 12px;
  background: #1f1e33;

  #cli_output {
    display: flex;
    flex-direction: column;
    padding: 25px 20px;
    gap: 20px;
  }

}

#json_output_area {
  min-height: 50px;
  margin: 10px 5px;
  border-radius: 12px;
  background: #1f1e33;
}

</style>