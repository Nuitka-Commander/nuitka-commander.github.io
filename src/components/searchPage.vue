<script setup>
/**
 * @fileOverview 搜索页面
 */
import {Search} from "@element-plus/icons-vue";
import {computed, ref} from "vue";
import Mousetrap from "mousetrap";
import Fuse from "fuse.js";
import {search_index} from "@/modules/use_search.js";
import {throttle_func} from "@/modules/untils.js";
import {user_options} from "@/values/stores/user_options.js";

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


const input = ref("");
const throttled_input = ref("");

// 获得fuse搜索对象
const search_object = computed(() => {
  const options = {
    keys: ["index.name", "index.command"], //要搜索的字段
    shouldSort: true,
    threshold: 0.25, //匹配的阈值

  };
  return new Fuse(search_index.value, options);
});

// 对输入进行带节流的搜索
const input_handler = throttle_func((value) => {
  throttled_input.value = value;
}, 500);

//最终的搜索结果
const search_result = computed(() => {
  return search_object.value.search(throttled_input.value);
});

//跳转到搜索结果
const jump_to_search_result = (target_page) => {
  is_searching.value = false;
  //跳转到command页面并且设置目标页面
  user_options.value.action_tab = "edit";
  user_options.value.action_command_tab = target_page;
};
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
          @input.native="input_handler"
      >
        <template #prefix>
          <el-icon>
            <Search></Search>
          </el-icon>
        </template>
        <template></template>

      </el-input>
      <div id="search-output">
        <div
            v-for="item in search_result"
            class="search-output-element"
            @click="jump_to_search_result(item.item.target_page)">
          <!--todo icon-->

          <div>
            <el-text>{{ item.item.index.name }}</el-text>
          </div>
          <img alt="" src="@/assets/images/continue.svg">
        </div>
      </div>

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
  background-color: rgb(40, 44, 52);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}

#search-output {
  display: flex;
  flex-direction: column;
}

.search-output-element {
  display: flex;
  align-items: center;

  & img:last-child { //最后的前往按钮
    margin-left: auto;
  }
}


</style>