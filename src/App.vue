<script setup>
import LoadingPage from "@/components/utils/loadingPage.vue";
import WebsiteHeader from "@/components/websiteHeader.vue";
import WebsiteFooter from "@/components/websiteFooter.vue";
import NavBar from "@/components/navBar.vue";
import {Edit, Share, Upload} from "@element-plus/icons-vue";
import CommandEdit from "@/components/commandEdit.vue";
import {user_options} from "@/values/stores/user_options.js";
import OutputPage from "@/components/outputPage.vue";
import InputPage from "@/components/inputPage.vue";
import { onMounted } from 'vue';

// 预渲染准备标记
onMounted(() => {
  // 等待一段时间确保所有组件都已加载
  setTimeout(() => {
    // 直接在body上添加预渲染准备标记
    document.body.setAttribute('data-prerender-ready', 'true');
    
    // 在控制台输出调试信息
    console.log('🎭 Page ready for prerendering');
  }, 2000); // 2秒延迟确保所有内容加载完成
});
</script>

<template>

  <loading-page></loading-page>
  <guide></guide>
  <header>
    <website-header></website-header>
  </header>

  <nav>
    <nav-bar></nav-bar>
  </nav>


  <main>

    <el-tabs v-model="user_options.action_tab" stretch tab-position="right">
      <el-tab-pane name="input">
        <template #default>
          <input-page></input-page>
        </template>
        <template #label>
          <el-icon size="25" style="margin-right: 10px">
            <upload></upload>
          </el-icon>
          {{ $t(`tabs.input`) }}
        </template>

      </el-tab-pane>

      <el-tab-pane name="output">
        <template #default>
          <output-page></output-page>
        </template>
        <template #label>
          <el-icon size="25" style="margin-right: 10px">
            <share></share>
          </el-icon>
          {{ $t(`tabs.output`) }}
        </template>

      </el-tab-pane>


      <el-tab-pane name="edit">
        <template #default>
          <command-edit></command-edit>
        </template>
        <template #label>
          <el-icon size="25" style="margin-right: 10px">
            <edit></edit>
          </el-icon>
          {{ $t("tabs.edit") }}
        </template>

      </el-tab-pane>

    </el-tabs>

  </main>

  <!---->
  <footer id="website_footer">
    <website-footer></website-footer>
  </footer>


</template>


<style lang="scss" scoped>
main {
  flex: 1;
  min-width: 240px;
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;

}

#website_footer {

  z-index: 20;

  width: 100%;
}


</style>