<script lang="js" setup>
import constants from "@/vals/constants.json";
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
          <el-link :href="item['html_url']">
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
        <el-link href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" type="primary">
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
          <li>
            <el-link href="https://nuitka-commander.gitee.io">{{ $t("website_info.gitee_website") }}</el-link>
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
            <el-link
                href="https://github.com/Nuitka-Commander/nuitka-commander.github.io/blob/main/docs/get_involved.md">
              {{ $t("website_info.get_involved") }}
            </el-link>
          </li>
          <li>
            <el-link :href="constants.base_url + 'releases/latest'">{{ $t("website_info.changelog") }}</el-link>
          </li>
          <li>
            <el-link href="https://github.com/nuitka-commander/nuitka-commander.github.io/releases/latest">
              {{ $t("website_info.local_use") }}
            </el-link>
          </li>
        </ul>
      </div>
    </div>
    <!--版本号等-->
    <div id="footer_right">
      <ul>
        <li>
          <el-text type="info"> Nuitka Commander <strong> {{ constants.version }}</strong></el-text>
        </li>
        <li>
          <el-text type="info"> {{ $t("website_info.supported_to_nuitka_version") }}
            <strong>{{ constants.support_nuitka_version }}</strong></el-text>
        </li>
        <!--button_el_text = 作为button的el-text -->
        <li>
          <el-text class="button_el_text" @click="author_info_visible=true"> {{
              $t("website_info.current_version_author")
            }}
          </el-text>
        </li>
        <li>
          <el-text class="button_el_text" @click="license_info_visible=true">
            {{ $t("website_info.open_source_license") }}
          </el-text>
        </li>


      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 0;
  padding-right: 10vw;
  padding-bottom: 10px;
  padding-left: 10vw;

  li {

    padding-top: 11px;
    text-decoration: none;
    border: none;
    background: none;

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
    overflow-y: auto;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    max-height: 50vh;
    padding-top: 10px;

    a {
      display: flex;
      align-items: center;
      height: 30px;
      padding-right: 20px;
    }

    img {
      height: 30px;
      border-radius: 9999px;
    }

  }
}
</style>