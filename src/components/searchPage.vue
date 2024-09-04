<script setup>
/**
 * @fileOverview 搜索页面
 */
import {Search} from "@element-plus/icons-vue";
import {ref} from "vue";
import Mousetrap from "mousetrap";

const is_searching = ref(false);
// mask点击关闭搜索
const close_search = (event) => {
  if (event.target.id === "search-mask") {
    is_searching.value = false;
  }
};
// 快捷键
Mousetrap.bind(["ctrl+k", "command+k"], (event) => {
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
  is_searching.value = !is_searching.value;
});
</script>
<template>

  <div id="search-button" @click="is_searching=true">
    <el-icon size="large">
      <Search></Search>
    </el-icon>
    <el-text>Search content</el-text>
    <div>
      <el-text>
        Ctrl K
      </el-text>
    </div>
  </div>

  <div v-if="is_searching" id="search-mask" @click="close_search($event)">
    <div id="search-area">
      <el-autocomplete></el-autocomplete>
    </div>
  </div>


</template>

<style lang="scss" scoped>
#search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

#search-mask {
  position: fixed;
  z-index: 800;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(69, 71, 73, 0.68);
}

#search-area {

}
</style>