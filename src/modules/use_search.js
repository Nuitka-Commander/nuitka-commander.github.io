/**
 * @fileOverview 处理一些搜索相关的逻辑
 */
import {computed, ref} from "vue";
import {i18n} from "@/assets/languages/i18n.js";


const basic_search_index = ref([]);
/**
 * 手动更新一次基础配置(方便后续computed计算，防止过多更新)
 * @param config {Object} use_command中的original_status
 * @return {Promise<void>}
 */
export const get_search_index = async (config) => {
    const result = [];
    //遍历所有选项 并且生成搜索必须的参数
    Object.keys(config).forEach(topKey => {
        const topValue = config[topKey];
        Object.keys(topValue).forEach(subKey => {
            const subValue = topValue[subKey];
            Object.keys(subValue).forEach(final_key => {
                const final_value = subValue[final_key];
                result.push({
                    target_page: topKey,
                    type: final_value.type,
                    i18n: final_value.i18n,
                    command: final_value.command.original,
                    is_focusing: final_value.is_focusing,
                });
            });
        });
    });
    basic_search_index.value = result;

};
/**
 * 计算搜索的索引(包括i18n)
 * @return {ref<[]>} 搜索的index
 */
export const search_index = computed(() => {
    //这里因为ide的问题所以禁用检查
    const result = basic_search_index.value.map(item => {
        // noinspection JSUnresolvedReference
        return {
            target_page: item.target_page,
            type: item.type,
            index: {
                name: `${i18n.global.t(`nuitka_info.${item.i18n}.name`)}`,
                command: item.command,
            },
            is_focusing: item.is_focusing,
        };
    });
    console.log("search index:", result);
    return result;

});