<script setup>
/**
 * @fileOverview 搜索页面
 */
import {Right, Search} from "@element-plus/icons-vue";
import {computed, nextTick, ref, watch} from "vue";
import Mousetrap from "mousetrap";
import Fuse from "fuse.js";
import {search_index} from "@/modules/use_search.js";
import {throttle_func} from "@/modules/untils.js";
import {user_options} from "@/values/stores/user_options.js";

const is_searching = ref(false);
// 当前高亮的index
const active_index = ref(0);

// 监听搜索状态，在适当的时候清空输入
watch(is_searching, (value) => {
  if (value) { // 打开搜索时清空
    input.value = "";
    throttled_input.value = "";
    active_index.value = 0;
  }
});

// mask点击关闭搜索
const close_search = (event) => {
  if (event.target.id === "search-mask") {
    is_searching.value = false;
  }
};

// 快捷键
// 允许在 input, textarea 和 select 元素中触发快捷键
// noinspection JSUnusedGlobalSymbols
Mousetrap.prototype.stopCallback = function () {
  return false;
};
// 打开搜索
Mousetrap.bind(["ctrl+k", "command+k"], (event) => {
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
  is_searching.value = !is_searching.value;
});
// 上下移动键
Mousetrap.bind(["up"], () => {
  if (is_searching.value) {
    active_index.value = Math.max(0, active_index.value - 1);
  }
});
Mousetrap.bind(["down"], () => {
  if (is_searching.value) {
    active_index.value = Math.min(search_result.value.length - 1, active_index.value + 1);
  }
});
// 回车键跳转
Mousetrap.bind(["enter"], () => {
  if (is_searching.value) {
    jump_to_search_result();
  }
});
// esc键退出
Mousetrap.bind(["esc"], () => {
  if (is_searching.value) {
    is_searching.value = false;
  } //关闭搜索的另一种方式
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
const jump_to_search_result = () => {
  if (search_result.value.length < 1) { //没有搜索结果返回
    return;
  }
  const item = search_result.value[active_index.value].item;
  is_searching.value = false;
  //跳转到command页面并且设置目标页面
  user_options.value.action_tab = "edit";
  user_options.value.action_command_tab = item.target_page;
  //高亮
  item.is_focusing = true;
  setTimeout(() => {
    item.is_focusing = false;
  }, 4000);
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
// 监听搜索结果，防止溢出
watch(search_result, () => {
  active_index.value = Math.min(search_result.value.length - 1, active_index.value);
});

// auto focus
const input_ref = ref(null);
watch(is_searching, async (value) => {
  if (value) {
    await nextTick();
    // noinspection JSUnresolvedReference
    input_ref.value.focus();
  }
});
</script>
<template>
  <!--搜索按钮-->
  <div id="search-button" @click="is_searching=true">
    <el-icon>
      <Search></Search>
    </el-icon>
    <el-text size="large">{{ $t("search.search_placeholder") }}</el-text>

    <el-text id="shortcut-tip">
      Ctrl K
    </el-text>

  </div>
  <!--搜索页面-->
  <div v-if="is_searching" id="search-mask" @click="close_search($event)">
    <div id="search-area">

      <el-input
          v-model="input"
          :placeholder="$t('search.please_input')"
          size="large"
          @input.native="input_handler"
          ref="input_ref"
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
            v-for="(item,index) in search_result"
            class="search-output-element"
            :class="{output_active: index === active_index}"
            @click="jump_to_search_result"
            @mouseover="active_index = index"
        >
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
          <img alt="empty " src="@/assets/images/empty.svg">
          <el-text size="large" style="word-wrap: break-word;">
            {{ $t("search.no_result") }} :&nbsp;<span style="font-weight: bold">"{{ throttled_input }}"</span>
          </el-text>
          <el-text size="large">
            {{ $t("search.try_keyword") }}
          </el-text>
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
  min-width: 160px;
  padding: 4px 8px;
  border-radius: 16px;
  background-color: var(--search-background);
  gap: 10px;

  & *:last-child {
    margin-left: auto;
  }

  #shortcut-tip {
    padding: 6px;
    border-radius: 16px;
    background-color: var(--search-sub-background);
  }


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
  box-shadow: 0 1px 3px var(--search-shadow);

  &.output_active {
    background-color: var(--search-hoving-background);
    //将所有子元素都拥有高对比度一些的颜色
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
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;


  img {
    height: 50px;
    transform: translateX(-1000vw);
    filter: drop-shadow(1000vw 0 var(--el-text-color-primary));
  }
}
</style>