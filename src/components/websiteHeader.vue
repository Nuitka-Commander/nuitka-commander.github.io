<script setup>

</script>

<template>
  <header>

    <a href="#" target="_self">
      <img src="@/assets/images/Nuitka.svg" alt="Nuitka logo">
      Nuitka Commander
    </a>

  </header>
</template>

<style scoped lang="scss">
header {
  background-color: grey;
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  position: relative;
  border: none;
  height: auto;

  a {
    color: white;
    text-decoration: none;

    img {
      width: 25px;
      height: 25px;
      padding-right: 15px;
    }

    display: flex;
    flex-wrap: nowrap;
    padding-top: 17.5px;
    padding-left: 15vw;
    font-size: 1.26rem;
    padding-bottom: 17.5px;

    &:hover {
      color: var(--el-border-color-hover);
    }
  }


}
</style>