<script setup>
import {CopyDocument} from "@element-plus/icons-vue";
import {use_command} from "@/modules/use_command.js";
import {computed} from "vue";

/**
 * 复制所选内容到剪贴板
 * @param type {string} 要复制的类型
 * @return {Promise<void>}
 */
const on_copy = async (type) => {
  try {
    await navigator.clipboard.writeText(output.value[type]);
    console.log("copied");
  } catch (err) {
    console.error(`Failed to copy\nType:${type}\nError:\n`, err);
  }

};
const output = computed(() => {
  const result = {
    cli: "",
    json: "",
    pyproject: "",
  };
  Object.keys(use_command.output.value).forEach((key) => {
    const value = use_command.output.value[key];
    result.cli += value.cli + " ";
  });
  console.log("result:\n", result);
  return result;
});
</script>

<template>
  <div>
    <el-tabs stretch tab-position="left" type="card">
      <el-tab-pane>
        <template #label>CLI</template>
        <div id="cli_output_area">
          <!--todo 完成复制模块-->
          <span class="copy_button">
            <el-button round @click="on_copy('cli')">
               <el-icon><CopyDocument /></el-icon>
            </el-button>
          </span>
          <div id="cli_output"></div>
        </div>
      </el-tab-pane>

      <el-tab-pane>
        <template #label>pyproject</template>
        <div id="pyproject_output"></div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>JSON</template>
        <div id="json_output_area">
            <span class="copy_button">
            <el-button round>
               <el-icon><CopyDocument /></el-icon>
            </el-button>
          </span>

          <pre><code>{{ use_command.storage_config }}</code></pre>

        </div>
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
    flex-direction: row;
    padding: 25px 20px;
    gap: 0;
  }

}

#json_output_area {
  min-height: 50px;
  margin: 10px 5px;
  border-radius: 12px;
  background: #1f1e33;
}

</style>