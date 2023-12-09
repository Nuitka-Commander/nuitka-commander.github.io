<script setup>
/**
 * @Description bool选项
 * @Author: erduotong
 * @Date: 2023-12-08 22:16:35
 */
//传入的props
const props = defineProps({
  //作为一个顶级选项，当开启后，其他选项将被禁用
  disable_other: {
    type: Boolean,
    default: false,
  },
  //国际化相关的props
  i18n: {
    type: Object,
    default: () => ({
      name: "",
      desc: "",
      origin: "",
    }),
  },
  //命令相关的props
  bind_options: {
    type: String,
  },
});
</script>

<template>

</template>

<style scoped lang="scss">

</style>