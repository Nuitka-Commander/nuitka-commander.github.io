/**
 * @overview 导入命令的解析器
 */
import {input_type} from "@/values/enums.js";

export const parsers = {
    [input_type.cli]: async (data) => {
        return data;
    },
    [input_type.json]: async (data) => {
        return data;
    },
}