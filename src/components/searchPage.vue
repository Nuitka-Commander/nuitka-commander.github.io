<script setup>
/**
 * @fileOverview 搜索页面
 */
import {Right, Search} from "@element-plus/icons-vue";
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
}, 300);

//最终的搜索结果
const search_result = computed(() => {
  return search_object.value.search(throttled_input.value);
});

//跳转到搜索结果
const jump_to_search_result = (item) => {
  is_searching.value = false;
  //跳转到command页面并且设置目标页面
  user_options.value.action_tab = "edit";
  user_options.value.action_command_tab = item.target_page;
  //高亮
  item.is_focusing = true;
  setTimeout(() => {
    item.is_focusing = false;
  }, 2000);
};
// 处理高亮显示的匹配
const highlight_match = (text, match) => {
  if (!match) {
    return text;
  }
  const parts = text.split(new RegExp(`(${match})`, "gi"));
  return parts.map((part) => {
    if (part.toLowerCase() === match.toLowerCase()) {
      return {
        value: part,
      };
    } else {
      return part;
    }
  });
};
</script>
<template>
  <!--搜索按钮-->
  <div id="search-button" @click="is_searching=true">
    <el-icon>
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
            @click="jump_to_search_result(item.item)">
          <!--todo 这边可以来个icon-->

          <div>
            <span class="index-area">
              <!--名称高亮显示-->
              <template
                  v-for="(part,index) in highlight_match(item.item.index.name,throttled_input)" :key="index">
                <span v-if="typeof part === 'object'" class="highlight_elements">
                  {{ part.value }}
                </span>
                <span v-else>
                  {{ part }}
                </span>
              </template>
              <!--代码显示-->

              (
              <template
                  v-for="(part,index) in highlight_match(item.item.index.command,throttled_input)" :key="index">
                <span v-if="typeof part === 'object'" class="highlight_elements">
                  {{ part.value }}
                </span>
                <span v-else>
                  {{ part }}
                </span>
              </template>
              )


            </span>
            <br>
            <el-icon size="12">
              <right></right>
            </el-icon>
            <span class="path-area">{{ $t(`nuitka_info.title.${item.item.target_page}`) }}</span>
          </div>
          <img alt="continue" src="@/assets/images/continue.svg">

        </div>
        <div v-if="search_result.length < 1 && throttled_input !== ''" id="search-no-result">
          (to i18n) 貌似没东西呢！换个关键词？
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
  background-color: rgba(0, 0, 0, 0.2);
}

#search-area {

  position: fixed;
  z-index: 900;
  top: 15%;

  left: calc(50% - 280px);
  width: 560px;
  padding: 20px;
  border-radius: 1em;

  background-color: var(--search-background);
  box-shadow: 0 0 10px var(--shadow-color);


}

#search-output {
  display: flex;
  overflow: auto;
  flex-direction: column;
  max-height: 60vh;
  margin-top: 5px;
}

.search-output-element {
  display: flex;

  align-items: center;
  margin: 3px 0;
  padding: 12px;
  border-radius: 10px;
  background-color: var(--search-sub-background);
  &:hover {
    background-color: var(--search-hoving-background);
    //将
    & * {
      color: var(--text-color-pure);
    }

    .path-area {
      color: var(--text-color-pure);
    }
  }

  div {
    margin-left: 12px;

    .index-area {
      font-size: 16px;
    }

    .path-area {
      font-size: 12px;
      margin-left: 5px;
      color: grey;
    }


  }

  img {
    transform: translateX(-1000vw);
    filter: drop-shadow(1000vw 0 var(--el-text-color-primary));
  }

  & img:last-child { //最后的前往按钮
    margin-left: auto;
  }

}

.highlight_elements {
  color: var(--el-color-primary)
}

#search-no-result {

}
</style>