<script lang="js" setup>
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
  border-radius: 6px;
  background-color: var(--card-background);
  box-shadow: var(--card-shadow) 0 3px 8px;


  gap: 5px;

}

.edit_content_card:hover {
  box-shadow: var(--card-shadow) 0 1px 4px;
}

</style>