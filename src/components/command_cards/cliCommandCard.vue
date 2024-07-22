<script setup>
import * as constants from "@/values/constants.json";

/**
 * @Description 一个元素卡片，用于渲染其中的一段命令
 * @Author: erduotong
 * @Date: 2024-03-07 23:26:17
 */
const props = defineProps({
  command: String,
  desc: String,
  name: String,
  show: Boolean,
});
</script>

<template>
  <el-tooltip :show-after="constants.element_show_after_time" effect="light" placement="top">
    <template #content>
      <div class="cli_tooltip">
        {{ props.name }}
        <div class="use_original_text cli_tooltip_desc"> {{ props.desc }}</div>
      </div>
    </template>
    <div v-show="show" class="cli_command">
      {{ props.command }}
    </div>
  </el-tooltip>
</template>

<style lang="scss" scoped>
.use_original_text {
  white-space: pre-wrap;
}

.cli_tooltip_desc {
  margin-top: 10px;
  padding-top: 10px;
  border-top: lightblue 1px solid;
}

.cli_tooltip {
  font-size: 14px;
}

.cli_command {
  max-width: max-content;
  margin: 2px 2px;
  padding: 4px;
  border-radius: 8px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}
</style>