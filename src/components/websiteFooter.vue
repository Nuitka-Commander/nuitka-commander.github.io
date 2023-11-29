<script setup>
import constants from "@/stores/constants.json";
import {ref} from "vue";
// 作者信息是否可见
const author_info_visible = ref(false);
// 开源协议信息是否可见
const license_info_visible = ref(false);
</script>

<template>
  <footer>
    <!--贡献者dialog-->
    <el-dialog
        v-model="author_info_visible"
        :title="$t('website_info.current_version_author')"
    >
      <el-text size="large"> {{ $t("website_info.long_info.author") }}</el-text>

      <div id="authors_div">
        <span v-for="item in constants.authors" :key="item['name']" class="author_item">
          <el-link :href="'https://github.com/'+item['name']">
            <img :src="item['avatar']" alt="avatar_img">
              &nbsp;&nbsp;{{ item.name }}
          </el-link>
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
        <el-link type="primary" href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">
          https://www.gnu.org/licenses/gpl-3.0.en.html
        </el-link>

      </el-text>
    </el-dialog>

    <div>
      <!--链接信息-->
      <div>
        <ul>
          <li>
            <el-link href="https://nuitka.net/">{{ $t("website_info.nuitka_website") }}</el-link>
          </li>
          <li>
            <el-link href="https://github.com/nuitka-commander/nuitka-commander.github.io/">
              {{ $t("website_info.project_homepage") }}
            </el-link>
          </li>
          <li>
            <el-link href="https://nuitka-commander.github.io/">{{ $t("website_info.github_website") }}</el-link>
          </li>
          <!--todo gitee-->
          <li>
            <el-link href="">{{ $t("website_info.gitee_website") }}</el-link>
          </li>
        </ul>
      </div>
      <!--项目开发/使用相关-->
      <div>
        <ul>
          <li>
            <el-link :href="constants.base_url + 'issues'">{{ $t("website_info.report_issue") }}</el-link>
          </li>
          <li>
            <el-link :href="constants.base_url + 'docs/get_involved.md'">{{ $t("website_info.get_involved") }}</el-link>
          </li>
          <li>
            <el-link :href="constants.base_url + 'releases/latest'">{{ $t("website_info.changelog") }}</el-link>
          </li>
          <!--todo-->
          <li>
            <el-link href="">{{ $t("website_info.local_use") }}</el-link>
          </li>
        </ul>
      </div>
    </div>
    <!--版本号等-->
    <div id="footer_right">
      <ul>
        <li>
          <el-text> Nuitka Commander <strong> {{ constants.website_version }}</strong></el-text>
        </li>
        <li>
          <el-text> {{ $t("website_info.supported_to_nuitka_version") }}
            <strong>{{ constants.support_nuitka_version }}</strong></el-text>
        </li>
        <!--button_el_text = 作为button的el-text -->
        <li>
          <el-text @click="author_info_visible=true" class="button_el_text"> {{
              $t("website_info.current_version_author")
            }}
          </el-text>
        </li>
        <li>
          <el-text type="" @click="license_info_visible=true" class="button_el_text">
            {{ $t("website_info.open_source_license") }}
          </el-text>
        </li>


      </ul>
    </div>
  </footer>
</template>

<style scoped lang="scss">
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

  li {

    background: none;
    border: none;
    text-decoration: none;
    padding-top: 11px;

  }


  ul {
    list-style: none;
  }


  #footer_right ul {
    text-align: right;

    .button_el_text {
      &:hover {
        cursor: pointer;
        text-decoration: underline;
        color: var(--el-color-primary);
      }
    }
  }

  div {
    display: flex;
  }


  #authors_div {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    padding-top: 10px;
    max-height: 50vh;
    overflow-y: auto;

    a {
      display: flex;
      align-items: center;
      height: 30px;
      padding-right: 20px;
    }

    img {
      border-radius: 9999px;
      height: 30px;
    }

  }
}
</style>