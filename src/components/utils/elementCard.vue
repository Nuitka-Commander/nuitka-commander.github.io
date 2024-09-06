<script lang="js" setup>
/**
 * @Description 用于存储编辑界面内每一个设置选项的卡片 保证格式统一
 * @Author: erduotong
 * @Date: 2024-01-23 23:13:41
 */
const props = defineProps(
    {
      focusing: {
        type: Boolean,
        default: false,
      },
    },
);
</script>

<template>
  <div :class="{focusing:props.focusing}" class="edit_content_card">
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
  transition: all 0.3s ease-in-out;
  border-radius: 6px;
  outline: 4px solid transparent;
  background-color: var(--card-background);
  box-shadow: 0 5px 10px var(--card-shadow);
  gap: 5px;

}

.edit_content_card:hover {
  transform: translateY(-2px) scale(1.01, 1.01);
  box-shadow: var(--card-shadow-hover) 0 10px 15px;
}

.focusing {
  animation: focusInAnimation 3s forwards;
}

@keyframes focusInAnimation {
  0% {
    outline: 4px solid transparent;
    transform: translateY(0);
  }
  20% {
    outline: 4px solid var(--el-color-primary);

    transform: translateY(-10px);
  }
  80% {
    outline: 4px solid var(--el-color-primary);
    transform: translateY(-10px);
  }
  100% {
    outline: 4px solid transparent;
    transform: translateY(0);
  }
}


</style>