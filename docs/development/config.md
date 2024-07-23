# 帮助我们适配Nuitka版本

# 概述

每个Nuitka版本都有着独立的配置文件，并有独立的翻译文件。翻译文件请查看[翻译相关](./translation.md)。  
无论如何，请先fork项目，然后再在你的fork中进行编辑，完成后再通过pull request提交。

# 操作流程

## 新建

首先，请打开`src/nuitka_config_files/configs`文件夹，如果要适配的版本已经存在，请直接对其进行修改。  
否则，你可以创建一个新的js文件，命名格式为`版本号.js`，例如`2.1._.js`。  
随后，请在[supported_nuitka_version.js](../../src/nuitka_config_files/supported_nuitka_version.js)内的`version`
内添加该版本的支持。  
格式为`version: path` 例如: `1.9.*: 1.9._`。 **无需补充.js后缀**，
若该版本为最新版本，请修改latest_key为version中的值。  
接着，回到刚刚config内创建的文件中，填入下列内容:

```js
import {add_option, add_watcher, watcher_key} from "@/values/templates.js";
import {nuitka_element_status} from "@/values/enums.js";

const config = {
    support_language: {},
};

// noinspection JSUnusedGlobalSymbols
export default config;
```

这样，所需的文件就已经创建完成了。

## 编辑

### support_language

`support_language`是一个对象，用于存放支持的语言。
他的格式是: `语言标识符: 路径名`  
例如:

```js
export default {
    support_language: {
        "en": "en",
        "zh-CN": "zh_cn",
    }
};
```

详细的翻译内容请查看[翻译相关](./translation.md)，在此不再赘述。

### 选项

Nuitka的文档格式分为两层，第一层为内部选项的内容概括，第二层为具体的选项。  
因此，你需要分为两种选项。  
一个合理的示例是:

```js
export const config = {
    support_language: {
        "en": "en",
        "zh-CN": "zh_cn",
    },
    basic: {
        option_test: add_option.bool(
            "option_test",//i18n
            { //command
                original: "option_test",
            },
            true, //enable
            false, //default
        ),
        main: add_option.definable_multi(
            "main", //i18n
            { //command
                original: "--main",
            },
            true, //enable
            { //elements
                main: add_option.multi_elements(
                    "",
                    {
                        original: "main.py",
                    },
                    true,
                    true,
                ),
            },
            ["main"], //default
        ),

    },
};
```

下面是逐行的解释:

#### basic

选项的第一层，表示Nuitka的第一层概括选项，其中名字则表示在对应翻译文件夹中`title`
中的key值，直接对应翻译，请查看[翻译相关](./translation.md)。

#### option_test 选项第二层，表示一个具体的选项，键名无特殊要求，但是推荐为选项名，例如nuitka中的`--output-dir`，去掉前置的`--`

并将`-`替换为`_`，  
即为`output_dir`。  
接下来,add_option是一个对象，其中有多个成员函数，每个函数添加一种类型的选项。其中都位于[templates](../../src/values/templates.js)
中，  
下列也有每种选项所需的类型，选项的具体写法请参照文档注释。

| 选项类型             | 对应的选项特征                                                        |
|------------------|----------------------------------------------------------------|
| bool             | 仅有开/关两种状态的选项                                                   |
| single_option    | 有多种可选项，且可选项已被Nuitka定义，无法由用户定义，且只能选择其中一个                        |
| defined_multi    | 有多种可选项，且可选项已被Nuitka定义，无法由用户定义，能选择其中任意多个                        |
| definable_single | 有多种可选项或无可选项，且可选项可能已经被Nuitka定义，可以由用户定义，且只能选择其中一个                |
| definable_multi  | 有多种可选项或无可选项，且可选项可能已经被Nuitka定义，可以由用户定义，可以选择其中的任意多个              |
| multi_elements   | 一个元素，只能用于除bool类型外所有类型的elements对象中作为key:value中的value，作为一个可供选择的值 |

#### add_option.type内部

i18n: 在翻译文档中的key值，用于获取对应的翻译内容。  
command: 一个对象，里面可以给出多个key:  
value，每个key代表一种类型的参数，value则为生成的字符串。这样的对象必须有一个original的key，  
作为原始的CLI的值，你可以直接从Nuitka的文档中获得。  
enable: 一个布尔值，表示这个选项是否可用。  
default: 一个值，表示这个选项的默认值。特别的，对于单选类型来说，如果为空请填写一个空字符串`""`
，对于多选类型来说，如果为空请填写一个空数组`[]`。  
elements: 一个对象，其中内部的格式是: `key: value`
，其中key为一个索引，而value需要为一个multi_elements类型的函数生成的对象，  
也就是上述表格中的最后一种类型，而key则被用来索引这个选项的默认值和当前的值。具体的示例可以参考上列示例中的main选项。

### 监听选项

todo
