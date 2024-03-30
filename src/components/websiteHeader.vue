<script lang="js" setup>

</script>

<template>
  <header>

    <a href="#" target="_self">
      <img alt="Nuitka logo" src="@/assets/images/Nuitka.svg">
      Nuitka Commander
    </a>
    <a href="">

    </a>

  </header>
</template>

<style lang="scss" scoped>
header {

  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  padding: 0;
  border: none;
  background-color: grey;

  a {
    font-size: 1.26rem;
    display: flex;

    flex-wrap: nowrap;

    padding-top: 17.5px;
    padding-bottom: 17.5px;
    padding-left: 15vw;
    text-decoration: none;
    color: white;

    img {
      width: 25px;
      height: 25px;
      padding-right: 15px;
    }

    &:hover {
      color: var(--el-border-color-hover);
    }
  }


}
</style>