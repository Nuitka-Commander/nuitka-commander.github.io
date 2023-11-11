<script setup>
import {ref} from "vue";

const count = ref(0);
const b = ref(true);

function toggleB() {
  b.value = !b.value;
}
</script>
<template>
  <div id="app">
    <button @click="count++">{{ count }}</button>
    <button @click="toggleB">change b</button>
    <p>b : {{ b }}</p>
    <p v-if="b">Can you see me? b is {{ b }}</p>

  </div>
</template>

<script>


export default {
  name: "App",


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
