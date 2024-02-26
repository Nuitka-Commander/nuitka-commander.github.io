<script setup>
/**
 * @Description 可以让用户定义的单选
 * @Author: erduotong
 * @Date: 2024-02-25 19:34:22
 */
import * as constants from "@/vals/constants.json";
import ElementCard from "@/components/untils/elementCard.vue";
import {user_options} from "@/vals/stores/user_options.js";
import {Delete} from "@element-plus/icons-vue";
import {ElMessage, ElMessageBox} from "element-plus";
import {useI18n} from "vue-i18n";

/**
 * @type {ModelRef<{
 *  i18n: string,
 *  val:string,
 *  command: {
 *    original:string,
 *  }
 *  enabled: boolean,
 *  elements: {
 *    [key: string]: {
 *      i18n: string, // 如果是用户定义的，那么该属性不存在
 *      command:{
 *        original:string,
 *      }
 *      enabled:boolean,
 *      user_provide: boolean,
 *    }
 *  }
 * }>}
 */
const model = defineModel();
const t = useI18n().t;

/**
 * 删除单个元素
 * @param key {string} 元素的key
 */
function delete_element(key) {
  //这边因为是用户定义的 就不给i18n了
  ElMessageBox.confirm(
      `${t(`message.will_del_option`)}: ${model.value.elements[key].command.original}, ${t(`message.continue_del`)}`,
      t("message.warning"),
      {
        confirmButtonText: t("message.OK"),
        cancelButtonText: t("message.cancel"),
        type: "warning",
      },
  ).then(() => {
    if (Object.keys(model.value.elements).length > 1) {
      //如果删除最后一个，那么就选倒数第二个，否则就选下一个
      const keys = Object.keys(model.value.elements);
      const index = keys.indexOf(key);
      if (index === keys.length - 1) {
        model.value.val = keys[index - 1];
      } else {
        model.value.val = keys[index + 1];
      }
    } else {
      model.value.val = "";
    }
    delete model.value.elements[key];
    // 出来力
    ElMessage({
      type: "success",
      message: t("message.del_success"),
      showClose: true,
      duration: constants.message_duration,
    });
  }).catch(() => {
    ElMessage({
      type: "info",
      message: t("message.cancel_del"),
      showClose: true,
      duration: constants.message_duration,
    });
  });
}
</script>
<!--todo 完成多个可用控件-->
<template>
  <el-tooltip :show-after="constants.element_show_after_time" placement="top">
    <template #content>
      <div class="use_original_text">
        {{ $t(`nuitka_info.${model.i18n}.desc`) }}
      </div>
    </template>
    <element-card>
      <div>
        <el-text size="large">{{ $t(`nuitka_info.${model.i18n}.name`) }}</el-text>
        <el-text v-if="user_options.show_original_command" size="large"> ({{ model.command.original }})</el-text>
      </div>
      <el-select v-model="model.val" :disabled="!model.enabled" filterable
                 :placeholder="$t('nuitka_elements.select_placeholder')">
        <template v-for="(value,key) in model.elements" :key="key">
          <el-tooltip :show-after="constants.element_show_after_time" placement="left-start">
            <template #content>
              <div class="use_original_text">
                <!--是否是用户给的-->
                <span v-if="value.user_provide===false">
                  {{ $t(`nuitka_info.${model.i18n}.elements.${model.elements[key].i18n}.desc`) }}
                </span>
                <span v-else>
                  {{ $t(`nuitka_elements.user_provide`) }}
                </span>
              </div>
            </template>
            <!--todo 这边可以考虑一下OptionGroupP-->
            <el-option
                :key="key"
                :disabled="!value.enabled"
                :label="$t(`nuitka_info.${model.i18n}.elements.${model.elements[key].i18n}.name`) +
                  (user_options.show_original_command ? ` (${model.elements[key].command.original})` : '')"
                :value="key"
            >
              <!--todo 根据用户情况提供一个计算属性-->
              {{
                $t(`nuitka_info.${model.i18n}.elements.${model.elements[key].i18n}.name`) +
                (user_options.show_original_command ? ` (${model.elements[key].command.original})` : "")
              }}
              <!--如果他是用户定义的，那么就有个删除符号-->
              <span v-if="value.user_provide===true" @click.stop="delete_element(key,$event)">
                <el-icon><Delete /></el-icon>
              </span>
            </el-option>
          </el-tooltip>
        </template>
      </el-select>
    </element-card>

  </el-tooltip>

</template>

<style lang="scss" scoped>
.use_original_text {
  white-space: pre-wrap;
}
</style>