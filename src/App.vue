<template>
  <div id="app">
    <button @click="count++">{{ count }}</button>
    <button @click="b = !b;">change b</button>
    <p>b : {{ b }}</p>
  </div>
</template>

<script>


export default {
  name: "App",
  data() {
    return {
      count: 0,
      b: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
