# 帮助我们适配Nuitka版本

## 概述

每个Nuitka版本都有着独立的配置文件，并有独立的翻译文件。翻译文件请查看[翻译相关](./translation.md)。  
无论如何，请先fork项目，然后再在你的fork中进行编辑，完成后再通过pull request提交。

## 操作流程

### 新建

首先，请打开`src/nuitka_config_files/configs`文件夹，如果要适配的版本已经存在，请直接对其进行修改。  
否则，你可以创建一个新的js文件，命名格式为`版本号.js`，例如`1.9._.js`。  
随后，请在[supported_nuitka_version.js](../../src/nuitka_config_files/supported_nuitka_version.js)内的`version`
内添加该版本的支持。  
格式为`version: path` 例如: `1.9.*: 1.9._`。 **无需补充.js后缀**，
若该版本为最新版本，请修改latest_key为version中的值。  
接着，回到刚刚config内创建的文件中，填入下列内容:

```js
import {add_option, add_watcher, watcher_key} from "@/vals/templates.js";
import {nuitka_element_status} from "@/vals/enums.js";

const config = {
    support_language: {},
};

// noinspection JSUnusedGlobalSymbols
export default config;
```

这样，所需的文件就已经创建完成了。

### 编辑

#### support_language

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