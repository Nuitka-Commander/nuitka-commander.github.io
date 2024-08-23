# 帮助我们翻译

## 概述

该项目由于Nuitka每个版本都有着独特的配置文件，并且要保证多版本支持，所以分为了两个部分，一个是界面翻译，一个是配置文件翻译。  
无论如何，请先fork项目，然后再在你的fork中进行编辑，完成后再通过pull request提交。

## 界面翻译

这里是Nuitka Commander基本的网页内容翻译，是随着网页更新而更新的，不会回退。

### 操作流程

首先，请查看界面翻译的操作流程下的列表，查看该翻译是否已经被支持。如果已经支持，请直接对其进行修改，否则，你可以创建一个新的文件，并将其加入[supported_i18n.js](../../src/assets/languages/supported_i18n.js)
中。
格式如下:

```json
{
  "国际化标识符": {
    "name": "语言自我标识符",
    "path_name": "实际的翻译文件名(无需.js)"
  }
}
```

例如:

```json
{
  "en": {
    "name": "English",
    "path_name": "en"
  }
}
```

> 文件名为国家化名称，将`-`更改为`_` 例如：`zh-CN` -> `zh_cn.js`

请先前往`src/assets/languages/translations`中，所有的翻译文件都在其中。    
你可以任选一个已经支持的语言，复制文件后修改文件名并添加到supported_language中。
在完成翻译后，请尝试在本地切换到该语言，浏览一次整个网页。如果没有问题，你可以提交pull request。
> 如果翻译过程中出现了错误，你可以打开控制台。在[constants](../../src/values/constants.json)
> 中debug模式为true的时候，你可以看到堆栈调用的信息、翻译键值错误等。

---
<details>
<summary>点击展开已翻译列表</summary>
<div id="nuitka_commander_translation_page"> 

* [en: English](../../src/assets/languages/translations/en.js)
* [zh-CN: 简体中文](../../src/assets/languages/translations/zh_cn.js)

</div>
</details>

## 配置文件翻译

首先，请查看下列列表，查看该翻译是否已经被支持。如果已经支持，请直接对其进行修改，否则才请查看[操作流程](#操作流程)
<details>
<summary>点击展开已翻译列表</summary>
<div id="nuitka_commander_translation_config"> 

* [2.1.*](../../src/nuitka_config_files/configs/2.1._.js)
    * [简体中文(zh-CN)](../../src/nuitka_config_files/translations/2.1._/zh_cn.js)
* [2.2.*](../../src/nuitka_config_files/configs/2.2._.js)
    * [简体中文(zh-CN)](../../src/nuitka_config_files/translations/2.2._/zh_cn.js)
* [2.3.*](../../src/nuitka_config_files/configs/2.3._.js)
    * [简体中文(zh-CN)](../../src/nuitka_config_files/translations/2.3._/zh_cn.js)
* [2.4.*](../../src/nuitka_config_files/configs/2.4._.js)
    * [简体中文(zh-CN)](../../src/nuitka_config_files/translations/2.4._/zh_cn.js)

</div>
</details>

### 操作流程

> 下列操作的文件夹都位于src/nuitka_config_files中

首先，请确定你要修改版本的文件名。例如，你要修改2.1版本的配置文件，那么请修改config文件夹中的`2.1._.js`。

1. 确定了文件名，那么先请先在translations文件夹中，根据你的文件名(去掉后缀`.js`)创立一个文件夹。  
   例如，你要修改2.1版本的配置文件，那么请在translations文件夹中创建一个`2.1._`文件夹。
2. 在文件夹中，根据你要翻译的语言的语言标识符(例如`zh-CN`)创建一个js文件。    
   文件名为国家化名称，将`-`更改为`_` 例如：`zh-CN` -> `zh_cn.js`
3. 打开你当前版本的配置文件，例如`2.1._.js`，在`support_language`对象中添加你的语言标识符。  
   例如:
    ```js
    export default {
        support_language: {
            "en": {
                path: "en",
                name: "English",
            },
        },
    };
    
      ```
   `en`为你语言的语言标识符，其中的`path`为你刚刚创建的翻译文件夹中的文件名(不包含后缀)，`name`为你的语言名称。
4. 打开你刚刚创建的翻译文件，填入下列内容:
    ```js
   // noinspection JSUnusedGlobalSymbols
    export default{
    title : {},
   }
    ```
   其中，`title`为配置文件第一层的标题所用的翻译，例如`basic`等
5. 如果你希望你的配置文件有一个单独的名称(不是版本号)，你还需要前往
   网页的i18n(具体内容见上方)中，修改`nuitka_config_title`这个key中的内容，修改为你的语言的key。
   ```js
   // supported_nuitka_version
   export default {
    latest_key: "2.4.*",//最新版本的key
    versions: { //version:path
        "2.1.*": "2.1._",
        "2.2.*": "2.2._",
        "2.3.*": "2.3._",
        "2.4.*": "2.4._",
        "simple": "simple", //前面的版本名称是simple的key
    },
   };
   ```
   ```js
   // src/assets/languages/translations/zh_cn.js
   export default{
         nuitka_config_title:{
            simple:"简单配置", 
         },    
   };
   ```
   > 由于每个版本的配置信息无法在被加载前得知，所以必须直接写在网页的配置文件中。
6. 接下来，开始你的翻译。除了第一层中的title的翻译要写在`title`中(以key:value)的形式，  
   其他的翻译则根据选项中的i18n的值来决定，并且我们推荐每一块(例如basic)中的翻译，都要放在有着标题名的注释下方。  
   而其中的值，要写name和desc两个属性，分别是标题和描述的翻译。  
   例如:
    ```js
    // 配置文件 2.1._.js
   const config = {
    support_language: {
        "zh-CN": {
            name: "简体中文",
            path: "zh_cn",
        },
    },
    basic: {
        module_: add_option.bool(
            "module", //这是i18n的key
            {
                original: "--module",
            },
            true,
            false),  
    },
   };
    ```
    ```js
    // 翻译文件 2.1._/zh_cn.js
   export default {
        title:{
            basic:"基础配置", 
        },
        // basic 基本配置
        module: {
            name:"模块",
            desc:"是否生成模块文件",
        },        
    }
    ```
7. 如果选项中还有部分的元素，那么请在选项中添加一个`elements`属性，然后在`elements`中添加你的元素。  
   例如:
    ```js
    // 配置文件 2.1._.js
    const config = {
    support_language: {
        "zh-CN": {
            name: "简体中文",
            path: "zh_cn",
        },
    },
    basic: {
        python_flag: add_option.defined_multi(
            "python_flag",
            {
                original: "--python-flag",
            },
            true,
            {  // elements的内容
                s: add_option.multi_elements(
                    "s", //这是i18n的key
                    {
                        original: "-S",
                    },
                    true),
                static_hashes: add_option.multi_elements(
                    "static_hashes",
                    {
                        original: "static_hashes",
                    },
                    true),
                no_warnings: add_option.multi_elements(
                    "no_warnings",
                    {
                        original: "no_warnings",
                    },
                    true),
                o: add_option.multi_elements(
                    "o",
                    {
                        original: "-O",
                    },
                    true),
                no_docstrings: add_option.multi_elements(
                    "no_docstrings",
                    {
                        original: "no_docstrings",
                    },
                    true),
                u: add_option.multi_elements(
                    "u",
                    {
                        original: "-u",
                    },
                    true),
                isolated: add_option.multi_elements(
                    "isolated",
                    {
                        original: "isolated",
                    },
                    true),
                m: add_option.multi_elements(
                    "m",
                    {
                        original: "-m",
                    },
                    true),

            },
            [],
        ),  
    },
    };
    ```
    ```js
    // 翻译文件 2.1._/zh_cn.js
    export default {
        title:{
            basic:"基础配置", 
        },
        // basic 基本配置
        python_flag: {
            name: "Python标志",
            desc: "要使用的Python标志.默认是你用来运行Nuitka的内容, 这强制使用特定模式.这些也是标准Python可执行文件中存在的选项.",
            elements: {
                s: {
                    name: "不包含site-packages目录",
                    desc: "别称no_site,不应该包含python的site-packages目录,也就是不包含任何python环境的第三方库",
                },
                static_hashes: {
                    name: "静态哈希",
                    desc: "不使用哈希随机化",
                },
                no_warnings: {
                    name: "关闭警告",
                    desc: "不给出Python运行时的警告",
                },
                o: {
                    name: "无错误检查",
                    desc: "不包含任何调试/错误检查(assert)语句",
                },
                no_docstrings: {
                    name: "无文档字符串",
                    desc: "不包含文档字符串",
                },
                u: {
                    name: "不使用缓冲",
                    desc: "别名unbuffered，不使用缓冲",
                },
                isolated: {
                    name: "不加载外部代码",
                    desc: "不加载外部代码",
                },
                m: {
                    name: " 包模式",
                    desc: "包模式, 编译为 \"package.__main__\"",
                },
            },
        },  
    }
    ```
8. 请在完成翻译后，尝试在本地切换到该语言，然后运行一次Nuitka Commander，查看是否有问题。  
   如果没有问题，你可以提交pull request。