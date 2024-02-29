<script setup lang="js">
/**
 * @Description 用于存储编辑界面内每一个设置选项的卡片 保证格式统一
 * @Author: erduotong
 * @Date: 2024-01-23 23:13:41
 */
</script>

<template>
  <div class="edit_content_card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.edit_content_card {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  min-width: 60px;
  margin: 10px;
  padding: 5px 10px;
  transition: all 0.3s;
  border: 1px solid #3b3c3d;
  border-radius: 6px;
  background-color: #1f1e33; //掺点怪东西
  box-shadow: 0 0 10px #3b3c3d;

  &:hover {
    box-shadow: 0 0 3px #3b3c3d;
  }

  gap: 5px;

}
</style>