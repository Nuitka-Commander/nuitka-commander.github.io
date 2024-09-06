/**
 * @Description 工具函数
 * @Author: erduotong
 * @Date: 2024-03-26 22:30:24
 */

/**
 * 比较两个数组内的内容是否相等(不考虑顺序)
 * @param arr1 {Array}
 * @param arr2 {Array}
 * @return {Boolean}
 */
export const is_array_equivalent = (arr1, arr2) => {
    const temp = {};
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i of arr1) {
        if (temp[i] !== undefined) {
            temp[i] += 1;
        } else {
            temp[i] = 1;
        }
    }
    for (let i of arr2) {
        if (temp[i] === undefined) {
            return false;
        }
        temp[i] -= 1;
        if (temp[i] === 0) {
            delete temp[i];
        }

    }
    return Object.keys(temp).length === 0;

};
/**
 * 防抖函数
 * @param fn {Function} 需要防抖的函数
 * @param delay {Number} 防抖时间(ms)
 */
export const debounce_func = (fn, delay = 500) => {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };

};
/**
 * 节流函数
 * @param fn {Function} 需要节流的函数
 * @param delay   {Number} 节流时间(ms)
 * @return {(function(): void)|*}
 */
export const throttle_func = (fn, delay = 500) => {
    let timer = null;
    let lastArgs = null;

    return function () {
        const context = this;
        const args = arguments;

        if (!timer) {
            fn.apply(context, args);
            timer = setTimeout(() => {
                if (lastArgs) {
                    fn.apply(context, lastArgs);
                    lastArgs = null;
                }
                timer = null;
            }, delay);
        } else {
            lastArgs = args;
        }
    };
};