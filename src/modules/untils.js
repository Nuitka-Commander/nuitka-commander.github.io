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
    //todo 完成这个比较函数
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

