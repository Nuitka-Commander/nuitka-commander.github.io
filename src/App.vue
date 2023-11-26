<script setup>
import LoadingPage from "@/components/loadingPage.vue";
import constants from "@/stores/constants.json";
import {ref} from "vue";
// 作者信息是否可见
const author_info_visible = ref(false);
// 开源协议信息是否可见
const license_info_visible = ref(false);
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
    <!--贡献者dialog-->
    <el-dialog
        v-model="author_info_visible"
        :title="$t('website_info.current_version_author')"
    >
      <el-text size="large"> {{ $t("website_info.long_info.author") }}</el-text>
      <div id="authors_div">
        <span v-for="item in constants.authors" :key="item.id" class="author_item">
          <a :href="'https://github.com/'+item.id">@{{ item.id }}&nbsp;&nbsp;</a>
        </span>

      </div>
    </el-dialog>

    <!--开源协议dialog-->
    <el-dialog
        v-model="license_info_visible"
        :title="$t('website_info.open_source_license')"
    >
      <el-text size="large">
        {{ $t("website_info.long_info.license") }}
        <br>
        <a href="https://www.gnu.org/licenses/gpl-3.0.en.html"
           target="_blank" id="license_link"
        >https://www.gnu.org/licenses/gpl-3.0.en.html</a>


      </el-text>
    </el-dialog>

    <div id="footer_left">
      <!--链接信息-->
      <div>
        <ul>
          <li><a href="https://nuitka.net/">{{ $t("website_info.nuitka_website") }}</a></li>
          <li><a href="https://github.com/nuitka-commander/nuitka-commander.github.io/">
            {{ $t("website_info.project_homepage") }}
          </a></li>
          <li><a href="https://nuitka-commander.github.io/">{{ $t("website_info.github_website") }}</a></li>
          <!--todo gitee-->
          <li><a href="">{{ $t("website_info.gitee_website") }}</a></li>
        </ul>
      </div>
      <!--项目开发/使用相关-->
      <div>
        <ul>
          <li><a :href="constants.base_url + 'issues'">{{ $t("website_info.report_issue") }}</a></li>
          <li><a :href="constants.base_url + 'docs/get_involved.md'">{{ $t("website_info.get_involved") }}</a></li>
          <li><a :href="constants.base_url + 'releases/latest'">{{ $t("website_info.changelog") }}</a></li>
          <!--todo-->
          <li><a href="">{{ $t("website_info.local_use") }}</a></li>
        </ul>
      </div>
    </div>
    <!--版本号等-->
    <div id="footer_right">
      <ul>
        <li>
          Nuitka Commander <strong> {{ constants.website_version }}</strong>
        </li>
        <li>
          {{ $t("website_info.supported_to_nuitka_version") }}
          <strong>{{ constants.support_nuitka_version }}</strong>
        </li>
        <li>
          <button @click="author_info_visible = true"
          >{{ $t("website_info.current_version_author") }}
          </button>
        </li>
        <li>
          <button @click="license_info_visible=true">{{ $t("website_info.open_source_license") }}</button>
        </li>
      </ul>
    </div>
  </footer>

</template>


<style lang="scss" scoped>
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

  a, button, li {
    color: white;
    background: none;
    border: none;
    text-decoration: none;
    font-size: 1rem;
  }

  a, button {
    &:hover {
      color: gray;
      cursor: pointer;
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

  #license_link {
    color: lightblue;
  }
}

#authors_div {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  padding-top: 10px;
  max-height: 50vh;
  overflow-y: auto;
}
</style>