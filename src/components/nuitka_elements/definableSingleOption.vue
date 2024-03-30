<script setup lang="js">
/**
 * @Description 可以让用户定义的单选
 * @Author: erduotong
 * @Date: 2024-02-25 19:34:22
 */
import * as constants from "@/vals/constants.json";
import ElementCard from "@/components/untils/elementCard.vue";
import {user_options} from "@/vals/stores/user_options.js";
import {Delete} from "@element-plus/icons-vue";
import {ElInput, ElMessage, ElMessageBox} from "element-plus";
import {useI18n} from "vue-i18n";
import {ref} from "vue";
import {new_option} from "@/vals/templates.js";
import {use_command} from "@/modules/use_command.js";

/**
 * @type {ModelRef<{
 *  i18n: string,
 *  val:string,
 *  default:string,
 *  id:number,
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

/**
 * 获取选项的label 如果用户定义则直接返回命令，否则考虑是否显示原始命令并返回
 * @param key
 * @param value
 * @return {string}
 */
function get_option_label(key, value) {
  if (value.user_provide === true) {
    return value.command.original;
  }
  let return_val = t(`nuitka_info.${model.value.i18n}.elements.${model.value.elements[key].i18n}.name`);
  if (user_options.value.show_original_command) {
    return_val += ` （${model.value.elements[key].command.original})`;
  }
  return return_val;
}

//////////////////////////////////////////////// 添加选项逻辑 ////////////////////////////////////////////////
const is_adding = ref(false);
const option_name = ref("");

function on_adding() {
  is_adding.value = true;
}

function on_confirm() {
  if (option_name.value.trim() === "") {
    return;
  }
  //todo 其他的判断检测 是否和命令重复
  if (option_name.value in model.value.elements) {
    ElMessage({
      type: "warning",
      message: t("message.have_been_created"),
      showClose: true,
      duration: constants.message_duration,
    });
    return;
  }
  console.log(`add option: ${option_name.value}`);
  model.value.elements[option_name.value] = {
    ...new_option.multi_elements(
        "",
        {
          original: option_name.value,
        },
        true,
        true,
    ),
  };
  on_cancel();
}

function on_cancel() {
  option_name.value = "";
  is_adding.value = false;
}

///////////////////////////
const is_equal = computed(() => model.value.val === model.value.default);
const result = computed(() => {
  return {
    cli: model.value.command.original,
    json: null,
    pyproject: null,
  };
});
watch(() => [result, is_equal], ([new_result, new_is_equal]) => {
  if (new_is_equal.value) {
    delete use_command.output.value[model.value.id];
  } else {
    use_command.output.value[model.value.id] = new_result.value;
  }
}, {
  immediate: true,
  deep: true,
});
// 组件销毁则必须移除
onBeforeUnmount(() => {
  delete use_command.output.value[model.value.id];
});
///////////////////////////
//在禁用时，将值设置为默认值
watch(() => model.value.enabled, (new_enabled) => {
  if (!new_enabled) {
    model.value.val = model.value.default;
  }
});
</script>

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
      <el-select
          v-model="model.val"
          :disabled="!model.enabled"
          filterable
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
            <!--todo 这边可以考虑一下OptionGroupP 还有隔壁多选-->
            <el-option
                :key="key"
                :disabled="!value.enabled"
                :label="get_option_label(key, value)"
                :value="key"
            >
              {{ get_option_label(key, value) }}
              <!--如果他是用户定义的，那么就有个删除符号-->
              <span v-if="value.user_provide===true" @click.stop="delete_element(key)">
                <el-icon><Delete /></el-icon>
              </span>
            </el-option>
          </el-tooltip>
        </template>
        <template #footer>
          <el-button v-if="!is_adding" text bg size="small" @click="on_adding">
            {{ $t("nuitka_elements.add_option") }}
          </el-button>
          <template v-else>
            <el-input
                v-model="option_name"
                :placeholder="t('nuitka_elements.input_an_option')"
                size="small"
                style="width: 100%;margin-bottom: 8px;"
            />
            <el-button type="primary" size="small" @click="on_confirm">
              {{ $t("message.OK") }}
            </el-button>
            <el-button size="small" @click="on_cancel">{{ $t("message.cancel") }}</el-button>
          </template>
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