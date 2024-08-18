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

每个配置文件的对象中，我们都用一个特殊的key:value来存放监听函数，也就是`template.js`中的`watcher_key`。  
因此，添加监听函数的第一步，就是设定监听函数列表
> 我们推荐在文件末尾，export之前添加监听函数

```js
config[watcher_key] = [];
```

然后，你可以添加监听函数。但是每个监听函数可能都会维护一些自己的变量，所以我们推荐闭包的写法。  
这样，你可以在闭包内部维护一些变量，而不会影响到其他监听函数。

```js
config[watcher_key] = [
  (function () {

  })(),
]
```

为了方便管理，我们统一使用add_watcher函数来添加监听函数。  
这个函数会返回格式化的值，所以需要在你的闭包内部返回这个函数。

```js
(function () {
  return add_watcher({}, (config) => {
  })
})()
```

监听函数一共有两个参数。

- 参数一是一个对象，内部的key:value分别表示`你自己取得一个别名`:`监听的选项`。监听的选项要用config(
  也就是即将导出的选项对象名).选项名来表示，并且最终应该指向一个具体的选项。`其中应该包含你需要监听和修改的全部选项`      
  例如`  follow_imports: config.control_the_following_into_imported_modules.follow_imports,`
- 参数二是一个回调函数，收到一个参数，内部是一个对象，key是你刚刚定义的别名，value则是你刚刚别名指向选项的整个对象，你可以自由调用其中的值。

```js
(function () {
  return add_watcher({
    standalone: config.basic.standalone,
    follow_imports: config.control_the_following_into_imported_modules.follow_imports,
    python_flag: config.basic.python_flag,
    nofollow_imports: config.control_the_following_into_imported_modules.nofollow_imports,
  }, (config) => {
    if (config.standalone.val === true) {
      config.follow_imports.val = true;
      config.follow_imports.enabled = false;
      config.python_flag.val = ["s"];
      config.python_flag.enabled = false;
      config.nofollow_imports.val = false;
      config.nofollow_imports.enabled = false;
    } else if (config.standalone.val === false) {
      config.follow_imports.val = false;
      config.follow_imports.enabled = true;
      config.python_flag.val = [];
      config.python_flag.enabled = true;
      config.nofollow_imports.enabled = true;
    }
  })
})()
```

但是由于底层实现是vue的watch，所以如果你在回调函数内部修改了监听的选项，会导致无限循环(包括设置相同的值)  
因此，你应该在闭包函数内新建一个变量，在开始修改之前设置这个变量为指定值，若后续修改时发现未变动则直接返回。  
如果你需要在一开始加载选项的时候更新一次，你可以先设置会null强制更新一次。   
例如，下面的实例中，我们关注的是standalone这个选项的值，所以我们就将他的值保存为一个独立的变量，并且在之后的每次调用中进行比较，如果没有变化则直接返回。

```js

(function () {
  let standalone_status = null;
  return add_watcher({
    standalone: config.basic.standalone,
    follow_imports: config.control_the_following_into_imported_modules.follow_imports,
    python_flag: config.basic.python_flag,
    nofollow_imports: config.control_the_following_into_imported_modules.nofollow_imports,
  }, (config) => {
    if (standalone_status === config.standalone.val) { //没变化可能是递归调用 退出
      return;
    }
    standalone_status = config.standalone.val;
    if (config.standalone.val === true) {
      config.follow_imports.val = true;
      config.follow_imports.enabled = false;
      config.python_flag.val = ["s"];
      config.python_flag.enabled = false;
      config.nofollow_imports.val = false;
      config.nofollow_imports.enabled = false;
    } else if (config.standalone.val === false) {
      config.follow_imports.val = false;
      config.follow_imports.enabled = true;
      config.python_flag.val = [];
      config.python_flag.enabled = true;
      config.nofollow_imports.enabled = true;
    }
  })
})()
```

这样，你就完成了一个监听函数的编写，将其添加到监听函数列表中，即可完成监听函数的添加。

```js
config[watcher_key] = [
  (function () {
    let standalone_status = null;
    return add_watcher({
      standalone: config.basic.standalone,
      follow_imports: config.control_the_following_into_imported_modules.follow_imports,
      python_flag: config.basic.python_flag,
      nofollow_imports: config.control_the_following_into_imported_modules.nofollow_imports,
    }, (config) => {
      if (standalone_status === config.standalone.val) { //没变化可能是递归调用 退出
        return;
      }
      standalone_status = config.standalone.val;
      if (config.standalone.val === true) {
        config.follow_imports.val = true;
        config.follow_imports.enabled = false;
        config.python_flag.val = ["s"];
        config.python_flag.enabled = false;
        config.nofollow_imports.val = false;
        config.nofollow_imports.enabled = false;
      } else if (config.standalone.val === false) {
        config.follow_imports.val = false;
        config.follow_imports.enabled = true;
        config.python_flag.val = [];
        config.python_flag.enabled = true;
        config.nofollow_imports.enabled = true;
      }
    })
  })()
]
```