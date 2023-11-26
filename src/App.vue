<script setup>
import LoadingPage from "@/components/loadingPage.vue";
import constants from "@/stores/constants.json";
</script>

<template>

  <loading-page></loading-page>
  <header>

    <a href="#" target="_self">
      <img src="@/assets/images/Nuitka.svg" alt="Nuitka logo">
      Nuitka Commander
    </a>

  </header>

  <footer>
    <div id="footer_left">
      <div>
        <ul>
          <li><a href="https://nuitka.net/">{{ $t("website_info.nuitka_website") }}</a></li>
          <li>项目主页Td</li>
          <li>github网站td</li>
          <li>gitee镜像站td</li>

        </ul>
      </div>
      <div>
        <ul>
          <li><a :href="constants.urls.report_issue">{{ $t("website_info.report_issue") }}</a></li>
          <li><a :href="constants.urls.get_involved">{{ $t("website_info.get_involved") }}</a></li>
          <li>更新日志td</li>
          <li>本地使用td</li>
        </ul>
      </div>
    </div>
    <div id="footer_right">
      <ul>
        <li>
          Nuitka Commander <strong> {{ constants.website_version }}</strong>
        </li>
        <li>
          {{ $t("website_info.supported_to_nuitka_version") }}
          <strong>{{ constants.support_nuitka_version }}</strong>
        </li>
        <li>该版本制作人员td</li>
        <li>开源协议td</li>
      </ul>
    </div>
  </footer>

</template>

<script>


</script>
<style lang="scss" scoped>
header {
  background-color: grey;
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  position: relative;
  border: none;
  height: 60px;

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

    &:hover {
      color: white;
    }
  }


}

footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0;
  width: 80%;
  position: relative;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-bottom: 10px;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: gray;
    }
  }

  ul {
    list-style: none;

    li {
      padding-top: 15px;
    }
  }

  #footer_right ul {
    text-align: right;
  }

  #footer_left, #footer_right {
    display: flex;
  }
}
</style>