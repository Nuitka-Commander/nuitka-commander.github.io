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
  transition: all 0.5s;
  border: none;
  background-color: var(--title-background);
  box-shadow: inset 0px -15px 12px -10px var(--shadow-color);

  a {
    font-size: 1.26rem;
    display: flex;

    flex-wrap: nowrap;

    padding-top: 17.5px;
    padding-bottom: 17.5px;
    padding-left: 15vw;
    text-decoration: none;
    color: var(--el-text-color-primary);

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