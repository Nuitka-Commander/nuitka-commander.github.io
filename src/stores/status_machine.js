/**
 * @Description 生成命令所需所有状态
 * @Author: erduotong
 * @Date: 2023-12-08 23:47:42
 */

/**
 * @Description 状态机相关
 */
class StatusMachine {
    constructor() {
        //未改变的配置 用于重置
        this.original_status = {};
        //已预处理完成的配置
        this.status = {};
    }

    /**
     * @Description 更新原始配置
     * @param config {Object}
     */
    update_config(config) {
        //对config进行预处理 并尝试加载当前版本记录的配置


    }
}

export const statusMachine = new StatusMachine();

