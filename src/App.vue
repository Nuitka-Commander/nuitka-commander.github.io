<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import {Edit} from "@element-plus/icons-vue";

</script>

<template>
  <div id="app">
    <img src="@/assets/vue.svg" alt="">
    <el-icon>
      <edit></edit>

    </el-icon>
    <hello-world></hello-world>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
