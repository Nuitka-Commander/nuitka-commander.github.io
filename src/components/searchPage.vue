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
// 搜索框内容
const input = ref("");
</script>
<template>
  <!--搜索按钮-->
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
  <!--搜索页面-->
  <div v-if="is_searching" id="search-mask" @click="close_search($event)">
    <div id="search-area">

      <el-input
          v-model="input"
          placeholder="(to i18n) please input"
          size="large"

      >
        <template #prefix>
          <el-icon>
            <Search></Search>
          </el-icon>
        </template>
        <template></template>

      </el-input>
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

  position: fixed;
  z-index: 900;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 200px;
  padding: 20px;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: rgba(192, 168, 0, 1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}
</style>