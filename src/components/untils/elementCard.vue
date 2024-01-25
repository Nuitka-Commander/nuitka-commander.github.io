<script setup>
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

<style scoped lang="scss">
.edit_content_card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  border: 1px solid #3b3c3d;
  background-color: #1f1e33; //掺点怪东西
  border-radius: 6px;
  padding: 5px 10px;
  min-width: 60px;
  box-shadow: 0 0 10px #3b3c3d;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 3px #3b3c3d;
  }

  > * { //每个元素都要有自己的边距 不然会挤在一起的
    margin: 3px;
  }

}
</style>