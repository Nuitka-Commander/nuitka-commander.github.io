<script setup>
</script>

<template>
  <div id="app">
      <p>{{ $t("hello")}}</p>
    <p>{{$t("testFather.test")}}</p>

  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
el-button {
  background-color: red;
}
</style>